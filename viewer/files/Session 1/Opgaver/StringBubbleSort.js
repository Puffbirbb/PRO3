let list = ['En', 'To', 'Tre', 'Fire', 'Fem', 'Ni', 'A', 'ABC', '0'];

for (let i = list.length - 1; i >= 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
        if (list[j] > list[j + 1]) {
            let temp = list[j];
            list[j] = list[j+1];
            list[j+1] = temp;
        }
    }
}

let findTallet = function (arr, x, start, end){
    if (start > end) return -1;

    let mid = Math.floor((start+end)/2);

    if (arr[mid] === x) return mid;

    if (arr[mid]>x) return findTallet(arr, x, start, mid-1);
    else return findTallet(arr, x, mid+1, end);
}

console.log(list.toString());
console.log(findTallet(list, 'A', 0, list.length-1));