//Player object - Factory
const playerFactory = (name, token) => {
    let wins = 0;
    let playerMoves = 0b000000000;
    const addMove= (move) => {
        playerMoves = playerMoves + (0b1 << move);
    };
    const resetMoves= () => {
        playerMoves = 0b000000000;
    }
    const getPlayerMoves=()=>{return playerMoves};
    const getName= () => {return name};
    const setName= (newName) => {name = newName};
    const getToken= () => {return token};
    const setToken= (newToken) => {token = newToken};
    const getWins= () =>{return wins};
    const incrementWins= () =>{wins +=1};
    return {setName, getName, getToken, setToken, getWins, incrementWins, addMove, getPlayerMoves, resetMoves};
};

//Gameboard object - IIFE
//Define the gameboard tiles initialization function inside an IIFE
const initGameboard = (() =>{
    const tiles = [];
    let tilesFilled = 0;
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
    //
    for(let i = 0; i < 9; i++){
        tiles.push({token: ``})                
    }
    //
    function setToken(index, token){
        if (tiles[index].token === ""){
            tiles[index].token = token;
            tilesFilled++;
            return true;
        }else{
            //console.log("Spot is taken");
            return false;
        }
    }
    //
    function resetBoard(){
        for(let i = 0; i<tiles.length; i++){
            tiles[i].token = "";
        }
        tilesFilled = 0;
    }
    //
    function checkPlayerWin(playerMoves){
        let value = false;
        winningCombos.forEach(combo=>{
            if(combo === (playerMoves & combo)){
                value = true;

            }
        })
        return value;
    }
    //
    function checkGameOverDraw(){
        return tilesFilled === 9;
    }
    //
    function checkGameOver(player1, player2){
        if(checkPlayerWin(player1.getPlayerMoves())){
            player1.incrementWins();
            return player1.getName();
        }else if(checkPlayerWin(player2.getPlayerMoves())){
            player2.incrementWins();
            return player2.getName();
        }else if(checkGameOverDraw()){  
            return "Draw";
        }else{
            return null;
        }                    
    }
    
    return {tiles, setToken, resetBoard, checkGameOver};

})();

//Game Object - This is a singleton and therefore we use an IIFE
const initGame = (() => {
    //State variables
    let gameStarted = false;   
    let gameState = false;

    //
    let passName = "defaultName";
    let gameMessage = "Start a new game!";

    //Instantiate players
    const player1 = playerFactory("Player", "X");
    const player2 = playerFactory("CPU", "O");
    
    //Instantiate the gameboard tiles        
    const gameBoard = initGameboard;
    console.log({gameBoard});

    //
    function setName() {
        console.log(passName, "passing name");
        player1.setName(passName);
        
    }

    //
    function playerMove(player, index){
        const moveSucessful = gameBoard.setToken(index, player.getToken());                
        if(moveSucessful){
            player.addMove(index);
            return true;
        }else{
            return false;
        }
    }

    //
    function gameOver(endCase){
        if(endCase === "Draw"){
            gameMessage = "Game has ended in a draw!";
        }else{
            gameMessage = `${endCase} has won the game!`;
        }
        gameOngoing = false;
    }

    //
    function advanceGame(index){
        if(gameOngoing===true){//set up player move
            if(playerMove(player1, index) ===false){return} 
                         
            //required for the dom to update the tokens  
            //
            let result = gameBoard.checkGameOver(player1, player2);
            if(result!=null){                    
                gameOver(result);
                return;
            }
            
            //set up computer move. temporary solution
            for(let i = 0; i<1000; i++){
                let move = Math.floor(Math.random()*8);
                if (playerMove(player2, move)){                           
                    break;
                }
                console.log("Wrong Cpu move");
            }


            //
            result = gameBoard.checkGameOver(player1, player2);
            if(result!=null){                    
                gameOver(result);
                return;
            }
        }else{
            console.log("Restart the game to start a new game");
        }
    }

    //
    function restartGame(){
        if(gameStarted === false) {
            gameMessage = "Game on!";
            gameStarted = true;
        }
        gameOngoing = true;
        gameBoard.resetBoard();
        player1.resetMoves();
        player2.resetMoves();
           
    }

})();

const initDisplayController = (()=> {    
    //Get elements
    const playerNames = document.querySelectorAll(".options-cards > .player > .name");
    const playerTokens = document.querySelectorAll(".options-cards > .player > .token");
    const playerVictories = document.querySelectorAll(".options-cards > .player > .victories");
    const gameMessage = document.querySelector(".options-cards > .message");

    //Each of these will change the text inside the respective element
    function updatePlayerName(name){}
    function updatePlayerToken(player, token){}
    function updatePlayerVictories(player, value){}
    function updateGameMessage(message){}
    
    //return the functions to be exposed
    return {};
})();

const displayController = initDisplayController;

//instantiate the game object
//const game = initGame;
//console.log(game, "The game object");














