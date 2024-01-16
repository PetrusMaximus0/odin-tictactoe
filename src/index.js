import "./styles.css"
import renderer from "./renderer"
import initController from "./controller"
import player from "./player"
import gameBoard from "./gameBoard"
import * as miniMax from "./minimax"
import * as game from "./game"
import GameState from "./gameState"
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
        if(player1.checkWin()){         
            
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
        if(player2.checkWin()){
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
    const gameState = GameState(player1.getPlayerMoves(), player2.getPlayerMoves(), board.tiles);       
    const move = miniMax.miniMaxSearch(game, gameState);
    return move;
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
