/**View*/
const initView = (()=>{
    const tileButtons = document.querySelectorAll(".board-tile");
    const playerName = document.querySelector(".player > .name");
    const victories = document.querySelectorAll(".victories");
    const tokens = document.querySelectorAll(".token");
    const gameMessage = document.querySelector(".message");
    const restartButton = document.querySelector(".restart");

    function updatePlayerToken(index, token) {
        tokens[index].textContent = `Token: ${token}`;
    }

    function updateGameMessage(message) {
        gameMessage.textContent = `${message}`;
    }

    function updateVictories(value1, value2) {
        victories[0].textContent = `wins: ${value1}`;
        victories[1].textContent = `wins: ${value2}`;
    }

    function updateName(name){
        playerName.textContent = `${name}`;
    }

    function updateTile(index, token){
        tileButtons[index].textContent = `${token}`;
    }

    function resetTiles(){
        tileButtons.forEach(tile=> {
            tile.textContent = "";
        });
    }

    function updateRestartButton(value){
        restartButton.textContent = `${value}`;
    }

    return {resetTiles, updateRestartButton, updatePlayerToken, updateGameMessage, updateVictories, updateName, updateTile}
})();
const view = initView;

/**Model*/
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

//Model
const initModel = (()=>{
    const player1 = playerFactory("Player", "X");
    const player2 = playerFactory("CPU", "O");
    const gameBoard = initGameboard;

    let gameStarted = false;
    let gameOngoing = false;
    let gameMessage = "Start a new game!";

    //Initialize the visuals
    view.updateGameMessage(gameMessage);
    view.updatePlayerToken(0,player1.getToken());
    view.updatePlayerToken(1,player2.getToken());
    view.updateVictories(0,0);
    view.updateName(player1.getName())
    
    //Function definition
    function restartGame() {
        if(gameStarted === false) {
            gameStarted = true;
            view.updateRestartButton("RESTART");
            console.log("Started the game!");
        }
        gameMessage = "Game on!"
        gameOngoing = true;
        gameBoard.resetBoard();
        player1.resetMoves();
        player2.resetMoves();
        //reset view
        view.updateGameMessage(gameMessage);
        view.updateVictories(player1.getWins(), player2.getWins());
        view.resetTiles();
    }

    function playerMove(player, index){
        const moveSucessful = gameBoard.setToken(index, player.getToken());                
        if(moveSucessful){
            player.addMove(index);
            return true;
        }else{
            return false;
        }
    }

    function advanceGame(index){
        function checkResult(){
            let result = gameBoard.checkGameOver(player1, player2);
            if(result){ 
                gameOver(result);
                return true;
            }else{
                return false;
            }    
        }
        if(gameOngoing===true){
            //set up player move
            if(playerMove(player1, index) === false){
                return;
            }else{
                view.updateTile(index, player1.getToken());
            }
            
            let gameEnded = checkResult();

            if(!gameEnded){
                //set up computer move. temporary solution
                for(let i = 0; i<1000; i++){
                    let move = Math.floor(Math.random()*8);
                    if (playerMove(player2, move)){
                        view.updateTile(move, player2.getToken());                           
                        break;
                    }
                    console.log("Wrong Cpu move");
                }

                //
                gameEnded = checkResult();

            }
            
        }else{
            console.log("Restart the game to start a new game");
        }
    }

    function setName(passName){
        player1.setName(passName);
        view.updateName(passName);
    }

    function gameOver(endCase){
        if(endCase === "Draw"){
            gameMessage = "Game has ended in a draw!";
        }else{
            gameMessage = `${endCase} has won the game!`;
        }
        gameOngoing = false;
        view.updateGameMessage(gameMessage);
        view.updateVictories(player1.getWins(), player2.getWins());
    }

    return {restartGame, advanceGame, setName};

})();
const model = initModel;

/**Controller*/
const initController = (()=>{
    // Tiles
    tileButtons = document.querySelectorAll(".board-tile")
    for ( let i = 0 ; i< tileButtons.length; i++){
        tileButtons[i].addEventListener("click", () =>{
        model.advanceGame(i);     
        })
    }

    // Restart/Start button
    const reStartButton = document.querySelector(".restart");
    reStartButton.addEventListener("click", () => {
        model.restartGame();
    })

    // Name Input
    const inputName = document.querySelector(".player-name-form");
    inputName.addEventListener("submit", (event)=>{

        //prevent default submission
        event.preventDefault();

        //get info from form
        let playerName = document.getElementById("name").value;

        //update name in player
        model.setName(playerName);    
    })
})();