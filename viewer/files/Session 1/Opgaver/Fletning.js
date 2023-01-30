let s1 = [1, 2, 3, 5];
let s2 = [2, 4, 6];


let i1 = 0;
let i2 = 0;
let merged = [];

while (i1 < s1.length && i2 < s2.length){
    if (s1[i1] === s2[i2]){
        merged.push(s1[i1]); merged.push(s2[i2]);  i1++; i2++;
    }
    else if (s1[i1]<s2[i2]){
        merged.push(s1[i1]);
        i1++;
    } else {
        (merged.push(s2[i2])); i2++;
    }
}

while (i1 < s1.length){
    merged.push(s1[i1]);
    i1++;
}

while (i2 < s2.length){
    merged.push(s2[i2]);
    i2++;
}


console.log(merged.toString());
