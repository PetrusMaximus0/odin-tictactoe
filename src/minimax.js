export function miniMaxSearch(state, players, isMax){
    const result = state; // transitional model


}

export function maxValue(game, state){

}

export function minValue(game, state){

}

export function legalActions(state){
    const actions = [];
    for (let i = 0 ; i < state.length; i++) {
        if(state[i].token === '') {
            actions.push(i);
        }       
    }
    return actions;
}

function isTerminal(state){
    return state.tilesFilled === 9
}
