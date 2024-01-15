export default function (name, token) {
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
    }
}