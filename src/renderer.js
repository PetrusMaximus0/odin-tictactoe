export default function () {
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
        victories[0].textContent = `Wins: ${value1}`;
        victories[1].textContent = `Wins: ${value2}`;
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
    // Return an object with the inner functions
    return {
        updatePlayerToken,
        updateGameMessage,
        updateVictories,
        updateName,
        updateTile,
        resetTiles,
        updateRestartButton,
    };  
}    
    
