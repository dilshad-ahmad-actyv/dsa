let arr = [6, -1, 5, -4, 0, 3, -2, 1];
let n = arr.length;

for(let i=0; i<n; i++){
    let min = i;
    for(let j=i + 1; j<n; j++){
        if(arr[min] > arr[j]){
            min = j;
        }
    }
    let temp = arr[min];
    arr[min] = arr[i];
    arr[i] = temp;
}

console.log(arr)