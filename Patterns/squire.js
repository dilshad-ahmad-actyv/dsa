let n = 20;
for(let i=0; i<n; i++){
    let str = '';
    let bool = false;
    for(let j=0; j<n; j++){
        if(i === 0 || i === n - 1 || j=== 0 || j === n - 1){
            str += '*' + ' ';
        }else{
            str += ' ' + ' ';
        }
    }
    console.log(str);
}