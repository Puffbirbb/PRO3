let arr = [2, 12, 4, 5]

let max = function(){
    let maximum = 0;
    for (let i = 0; i <= this.length; i++){
        if (maximum < this[i]){
            maximum = this[i];
        }
    }
    return maximum;
}

arr.max = max;

console.log(arr.max())

let contains = function(element){
    for (let i = 0; i <= this.length; i++){
        if (element === this[i]){
            return true;
        }
    }
    return false;
}

arr.contains = contains;

console.log(arr.contains(2))

let sum = function(){
    let total = 0;
    for (let i = 0; i < this.length; i++){
        total += this[i];
    }
    return total;
}

arr.sum = sum;

console.log(arr.sum())