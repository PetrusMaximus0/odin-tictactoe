import gameState from "./gameState"
import Player from "./player"

//Returns the player whose turn is to play
export function toMove(state){
    let tilesFilled = 0;

    state.boardTiles.forEach(tile => {
        if(tile.token !== "") tilesFilled++; 
    });

    if (tilesFilled % 2 !== 0) {
        return state.initialMax;
    }else{
        return state.initialMin;
    }
}

//Returns true if the game is in a Terminal stage.
//Only check for a draw after checking for a win. This avoids returning fake draws when the winning move is the last move.
export function isTerminal(state){
    
    const playerWin = Player().checkWin(state.initialMin);
    const cpuWin = Player().checkWin(state.initialMax);
    const gameDraw = isDraw(state);
    
    return (playerWin || cpuWin || gameDraw);
}

//Returns the utility based on the state of the game (NOT based on which player's turn it is).
export function utility(state, player){
    if(Player().checkWin(state.initialMax)) {
        return 1;
    }else if (Player().checkWin(state.initialMin)){
        return -1;
    }else{
        return 0;
    }        
}

//Returns an array of permitted actions on a given game state.
export function actions(state){
    const actions = [];
    for (let i = 0 ; i < state.boardTiles.length; i++) {
        if(state.boardTiles[i].token === '') {
            actions.push(i);
        }       
    }
    return actions;
}

//Returns true if the given game state is a draw.
export function isDraw(state){
    let tilesFilled = 0;
    state.boardTiles.forEach(tile => {
        if(tile.token !== "") tilesFilled++;
    })
    return (tilesFilled === 9);
}

//Returns a new state given a previous state and a legal move.
export function result(state, move){
    const newState = gameState(state.initialMin, state.initialMax, state.boardTiles);
    let currentPlayer = toMove(newState);
    let isMax = currentPlayer === state.initialMax;
    const token =  isMax ? "O" : "X";

    //Check if the move is legal.
    if(newState.boardTiles[move].token === ""){
        //Apply the move
        newState.boardTiles[move].token = token;

        //Add the move to the list of player moves.
        isMax ? newState.initialMax += (0b1 << move) : newState.initialMin += (0b1 << move) ;

    }else{
        console.error("Wrong move!");
    }

    return newState;
}
