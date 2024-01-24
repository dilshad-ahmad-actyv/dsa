let n = 5;
let mid = Math.floor(n/2); 
console.log(mid)
for(let i=0; i<n; i++){
    let str = '';
    for(let j=0; j<n; j++){
        
        if(i === mid && j === mid){
            str +=  ' ' + ' ';
        }else{
            str += '*' + ' ';
        }

        // if(i === mid || j === mid){
        //     str +=  ' ' + ' ';
        // }else{
        //     str += '*' + ' ';
        // }

    }
    console.log(str.trim());
}