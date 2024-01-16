export default function() {
    const tiles = [];
    let tilesFilled = 0;

    //
    for(let i = 0; i < 9; i++){
        tiles.push({token: ''})                
    }

    //
    function setToken(index, token){
        if (tiles[index].token === ""){
            tiles[index].token = token;
            tilesFilled++;
            return true;
        }else{
            console.error("Spot is taken");
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

    function getTilesFilled(){
        return tilesFilled;
    }
   
    return {getTilesFilled, tiles, setToken, resetBoard};
};