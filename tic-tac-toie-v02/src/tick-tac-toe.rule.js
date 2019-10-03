


const hasWon=(cells)=>{

    const winningSequences=[
        //rows
        [0,1,2], 
        [3,4,5], 
        [6,7,8], 

        //cols
        [0,3,6], 
        [1,4,7], 
        [2,5,8], 

        //diagnols
        [0,4,8],
        [2,4,6]

    ];

    for(let seq of winningSequences){
        let [a,b,c]=seq;
        if(cells[a]!==null && cells[a]===cells[b] && cells[a]===cells[c])
            return cells[a]; //good news someone won
    }

    return null ; //no luck yet

};

const movesLeft=(cells)=> cells.filter(cell=>cell===null).length;

const isGameOver=(cells)=> movesLeft(cells)===0 || hasWon(cells);

const isStaleMate=(cells)=> movesLeft(cells)===0 && !hasWon(cells);


export default {
    hasWon,movesLeft,isGameOver,isStaleMate
};