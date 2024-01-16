export default function gameState(player1, player2, oldBoardTiles) {

    //board State
    const boardTiles = JSON.parse(JSON.stringify(oldBoardTiles));
        
    //players
    const initialMax = player2;
    const initialMin = player1;

    return {boardTiles, initialMax, initialMin};
}