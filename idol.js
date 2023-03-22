let input= prompt("何したいんですか？")
const idol=[''];
while(input !== 'quit'){
    if (input === 'list') {
        for(let i=1;i<idol.length;i++){
            console.log(`${i}:${idol[i]}`);}
        }
        else if (input==='add'){
            const addidol=prompt('追加したいアイドルの名前書いてください')
            idol.push(addidol);
            console.log(`${addidol}をリストに追加しました`)
        }
        else if (input === 'delete'){
            const deleteidol = parseInt(prompt('消したい人のnumber書いてください'));
           if(!Number.isNaN(deleteidol)){
            const deleted=idol.splice(deleteidol,1);
            console.log(`${deleted[0]}の名前をリストから消しました`);
           }
            else{console.log('Number書いてください')}
        }
        
        
        
    input= prompt("何したいんですか？")
} console.log('辞めます～')