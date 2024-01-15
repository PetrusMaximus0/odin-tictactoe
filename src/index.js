import "./styles.css"
import renderer from "./renderer"
import initController from "./controller"
import player from "./player"
import gameBoard from "./gameBoard"
import * as miniMax from "./miniMax"

//
function restartGame(){
    if(gameStarted === false) {
        gameStarted = true;
        renderer().updateRestartButton("RESTART");
        console.log("Started the game!");
    }
    gameOngoing = true;
    board.resetBoard();
    player1.resetMoves();
    player2.resetMoves();

    //reset board tiles
    renderer().updateGameMessage("Game on!");
    renderer().updateVictories(player1.getWins(), player2.getWins());
    renderer().resetTiles();
    
}

//add a move
function addPlayerMove(player, ply){
    //Process player1 move
    if(board.tiles[ply].token === "") {
        //process the move
        player.addMove(ply);
        board.setToken(ply, player.getToken());

        //update the DOM
        renderer().updateTile(ply, player.getToken());
        return true;
    }else{
        console.log("Invalid Move.");
        return false;
    }
}

//
function advanceGame(ply){
    if(gameOngoing === true){

        //Process player1 move
        if(!addPlayerMove(player1, ply)) {
            console.log("Invalid playerMove!");
            return;
        }

        //check if player1 has won the game
        if(checkPlayerWin(player1.getPlayerMoves())){         
            
            player1.incrementWins();
            console.log("Player1 wins!");
            renderer().updateGameMessage(`${player1.getName()} wins!`);
            renderer().updateVictories(player1.getWins(), player2.getWins());
            gameOngoing = false;
            return;

        }
        
        //check for a draw
        if(board.getTilesFilled() === 9){
            renderer().updateGameMessage("The game ended in a draw!");
            gameOngoing = false;
            console.log("Game ends in a draw!");
            return;
        }

        //process a CPU play
        //cpuRandomMove();
        const cpuMove = cpuMiniMaxMove();
        if(!addPlayerMove(player2, cpuMove)){
            console.error("Invalid CPU move");
            return;

        }

        //check if the cpu has won the game
        if(checkPlayerWin(player2.getPlayerMoves())){
            player2.incrementWins();
            renderer().updateGameMessage(`${player2.getName()} wins!`);
            renderer().updateVictories(player1.getWins(), player2.getWins());
            gameOngoing = false;
            return;
        }

    }else{
        alert("Click the Restart/Start button to begin playing!");
    }
}
//

function checkPlayerWin(playerMoves){
    const winningCombos = [
        0b000000111,
        0b000111000,
        0b111000000,
        0b100010001,
        0b001001001,
        0b010010010,
        0b100100100,
        0b001010100,
    ]
    let value = false;
    winningCombos.forEach(combo=>{
        if(combo === (playerMoves & combo)){
            value = true;
        }
    })
     return value;
}

//
function initGame(){
    console.log("Initializing");
    let gameMessage = "Start a new game!";

    //Initialize the visuals
    renderer().updateGameMessage(gameMessage);
    renderer().updatePlayerToken(0, player1.getToken());
    renderer().updatePlayerToken(1, player2.getToken());
    renderer().updateVictories(0, 0);
    renderer().updateName(player1.getName())

}

//
function cpuRandomMove(){
    //set up computer move. temporary solution
    for(let i = 0; i<1000; i++){
        let move = Math.floor(Math.random()*8);
        if(addPlayerMove(player2, move)) {
            break;
        }
    }
}

//
function cpuMiniMaxMove(){
    const initialBoard = {...board};
    const initialMax = player2.getPlayerMoves();
    const initialMin = player1.getPlayerMoves();
   
    //
    function minValue(state, max, min, depth){
        function result(boardState, move){
            const newState = JSON.parse(JSON.stringify(boardState));
            newState[move].token = "X";
            return newState;
        }

        //check end conditions  
            
        const utilityValue = utilityFunction(max, min, depth);
        //if true it means the game has been won by one of the players
        if(utilityValue!==0){
            return {value : utilityValue, move : null};
        }

        //return if the game ends in a draw, only check after checking for a win
        if(isDraw(state)){
            return {value: 0, move: null};
        }
       
        let move = null;
        let value = Infinity;
        const legalMoves = legalActions(state);
        
        legalMoves.forEach(legalMove => {
            const newState = result(state, legalMove);
            const newMin = min + (0b1 << legalMove);
            let {value: value2} = maxValue(newState, max, newMin, depth+1);
            //console.log("MIN ", "value", value2, "Move", legalMove, "Depth", depth);
            if(value2 < value ){
                value = value2;
                move = legalMove;
                
            }else{
                //console.log(move, value2, value);
            }
        });
        //console.log("Min Chose out of: ", legalMoves.length ,"moves" , value, move);
        return {value, move};
    }

    function maxValue(state, max, min, depth){

        function result(boardState, move){
            const newState = JSON.parse(JSON.stringify(boardState));
            newState[move].token = "O";
            return newState;
        }

        //If the game is over, unwind one recursion            
        const utilityValue = utilityFunction(max, min, depth);
        //if true it means the game has been won by one of the players
        if(utilityValue!==0){
            return {value: utilityValue, move: null};
        }
        //return if the game ends in a draw
        if(isDraw(state)){
            return {value: 0, move: null};
        }

        //if the game is not over, continue
        let move = null;
        let value = -Infinity;
        const legalMoves = legalActions(state);
        legalMoves.forEach(legalMove => {
            const newState = result(state, legalMove);
            const newMax = max + (0b1 << legalMove);
            let {value: value2} = minValue(newState, newMax, min, depth+1);            
            //console.log("MAX ", "value", value2, "Move", legalMove, "Depth", depth);
            if(value2 > value ){
                value = value2;
                move = legalMove;
            }else{
                //console.log(move, value2, value);
            }
        });
        //console.log("Max Chose out of: ", legalMoves.length ,"moves" , value, move);
        return {value, move};

    }

    //returns 10 if max wins, -10 if min wins and 0 if there is a draw
    function utilityFunction(max, min, depth=0){
        if(checkPlayerWin(max)){
            return 1;
        }else if(checkPlayerWin(min)){
            return -1;
        }else{
            return 0;
        }
    }

    /*returns an array of indexes 
    to the empty game board tiles(possible moves)*/
    function legalActions(state){
        const actions = [];
        for (let i = 0 ; i < state.length; i++) {
            if(state[i].token === '') {
                actions.push(i);
            }       
        }
        return actions;
    }

    //returns true if we are at the end of the game (bottom of the tree)
    function isDraw(state){
        const movesLeft = legalActions(state).length;
        return movesLeft === 0;         
    }

    function miniMaxSearch(state, max, min){
        let {value, move} = maxValue(state, max, min, 0);
        console.log("Decided on:", move);
        return move;
    }

    return miniMaxSearch(initialBoard.tiles, initialMax, initialMin);
}

//
function setPlayerName(playerName){
    renderer().updateName(playerName);//update in the dom
    player1.setName(playerName);//update in the player state
}

//bind Controller
initController(setPlayerName, restartGame, advanceGame);

//instantiate players
const player1 = player("Player", "X");
const player2 = player("CPU", "O");

//instantiate the game board, which contains the game state.
const board = gameBoard();

//initialise game variables
let gameStarted = false;
let gameOngoing = false;

//Initialise
initGame();
