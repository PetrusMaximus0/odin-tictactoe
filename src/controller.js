export default function (setName, restartGame, advanceGame) {
    // Tiles
    const tileButtons = document.querySelectorAll(".board-tile")
    for ( let i = 0 ; i< tileButtons.length; i++){
        tileButtons[i].addEventListener("click", () =>{
        advanceGame(i);  
        })
    }

    // Restart/Start button
    const reStartButton = document.querySelector(".restart");
    reStartButton.addEventListener("click", () => {
        restartGame(); 
    })

    // Name Input
    const inputName = document.querySelector(".player-name-form");
    inputName.addEventListener("submit", (event)=>{

        //prevent default submission
        event.preventDefault();
        
        //get info from form
        let playerName = document.getElementById("name").value;

        //update name in player
        setName(playerName);    
    })
}