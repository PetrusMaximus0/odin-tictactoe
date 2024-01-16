export function miniMaxSearch(game, state){ 
    const {value, move} = maxValue(game, state);
    return move;
}

export function maxValue(game, state){
    if(game.isTerminal(state)) 
        return {value: game.utility(state, game.toMove(state)), move: null};
    
    let value = -Infinity;
    let move = null;
    
    const validMoves = game.actions(state);
    validMoves.forEach(validMove => {
        let {value: value2} = minValue(game, game.result(state, validMove));
        if(value2 > value){
            value = value2;
            move = validMove;
        }
        
    });

    return {value, move};
}

export function minValue(game, state){

    if(game.isTerminal(state)) 
        return {value: game.utility(state, game.toMove(state)), move: null};

    let value = Infinity;
    let move = null;
    const validMoves = game.actions(state);

    validMoves.forEach(validMove => {
        let {value: value2} = maxValue(game, game.result(state, validMove));
        if(value2 < value){
            value = value2;
            move = validMove;
        }
        
    });

    return {value, move};
}
