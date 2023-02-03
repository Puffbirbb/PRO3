let compare = function(s1, s2){
    if (s1 < s2){
        return -1;
    } else if (s1 === s2){
        return 0;
    } else
        return 1;
}

console.log(compare('a', 'b')) // -> -1
console.log(compare('a', 'a')) // -> 0
console.log(compare('b', 'a')) // -> 1

let compareLen = function(s1, s2){
    if (s1.length < s2.length){
        return -1;
    } else if (s1.length === s2.length){
        return 0;
    } else
        return 1;
}


console.log(compareLen('a', 'bb')) // -> -1
console.log(compareLen('a', 'a')) // -> 0
console.log(compareLen('bb', 'a')) // -> 1

let compareIgnoreCase = function(s1, s2){
    if (s1.toUpperCase() < s2.toUpperCase()){
        return -1;
    } else if (s1.toLowerCase() === s2.toLowerCase()){
        return 0;
    } else
        return 1;
}

console.log(compareIgnoreCase('A', 'b')) // -> -1
console.log(compareIgnoreCase('a', 'A')) // -> 0
console.log(compareIgnoreCase('b', 'A')) // -> 1
