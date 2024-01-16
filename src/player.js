export default function (name, token) {
    let wins = 0;
    let playerMoves = 0b000000000;
    function addMove(move){
        playerMoves = playerMoves + (0b1 << move);
    };
    function resetMoves(){
        playerMoves = 0b000000000;
    }
    function getPlayerMoves(){return playerMoves};
    function getName() {return name};
    function setName(newName) {name = newName};
    function getToken() {return token};
    function setToken(newToken) {token = newToken};
    function getWins(){return wins};
    function incrementWins(){wins +=1};
    function checkWin( moves = playerMoves ){
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
            if(combo === (moves & combo)){
                value = true;
            }
        })
         return value;
    }

    return {
        addMove,
        resetMoves,
        getPlayerMoves,
        getName,
        setName,
        getToken,
        setToken,
        getWins,
        incrementWins,
        checkWin,
    }
}