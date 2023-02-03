let arr = [1, 2, 3, 4, 5, 20, 6];

let max = function(array){
    let maximum = 0;
    for (let i = 0; i <= array.length; i++){
        if (maximum < array[i]){
            maximum = array[i];
        }
    }
    return maximum;
}

console.log(max(arr));

let contains = function(array, element){
    for (let i = 0; i <= array.length; i++){
        if (element === array[i]){
            return true;
        }
    }
    return false;
}

console.log(contains(arr, 20))

let sum = function(array){
    let total = 0;
    for (let i = 0; i < array.length; i++){
        total += array[i];
    }
    return total;
}

console.log(sum(arr));