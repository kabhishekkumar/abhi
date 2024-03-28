let items = [32,62,54,92,74,25,99];
let i= 0;
for(let val of items){

    
    let c = val/10;
    items[i]= items[i]-c;
    console.log(`value of index ${i}= ${items[i]}`)
    i++;
}