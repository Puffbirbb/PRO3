// bubbleSort.js
let list = [7, 13, 9, 8, 4, 1, 2, 16, 0];

let swap = function(j, array){
    let temp = array[j];
    array[j] = array[j+1];
    array[j+1] = temp;
}

let compare = function(s1, s2){
    if (s1 < s2){
        return -1;
    } else if (s1 === s2){
        return 0;
    } else
        return 1;
}

let bubbleSort = function(array, compare){
    for (let i = array.length - 1; i >= 0; i--) {
        for (let j = 0; j <= i - 1; j++) {
            if (compare(array[j], array[j+1]) > 0){
                swap(j, array);
            }
        }
    }
    return array.toString();
}

// console.log(list.toString()); // => 0,1,2,4,7,8,9,13,16

console.log(bubbleSort(list, compare));

// opgave1.3.js
// let target = 13;
// let position = -1

let binarySearch = function(target, array){
    let position = -1;
    let left = 0;
    let right = array.length - 1;
    while (left <= right && position === -1) {
        let middle = parseInt((left + right) / 2);
        let k = array[middle];
        if (k == target) {
            position = middle;
        }
    if (k > target)
        right = middle - 1;
    else
        left = middle + 1;
    }
    return "Target: " + target + " Position: " + position;
}

// console.log('target: ' + target);
// console.log('position: ' + position);

console.log(binarySearch(13, list))