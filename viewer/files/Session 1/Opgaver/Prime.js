let primeEvaluator = function(x){
    let list = [];
    let i = 2;
    while (i <= x){
        list.push(i);
        i++;
    }
    for (let j = 2; j <= x; j++){
        for (let f = j; f <= x; f = f + j){
            if (f !== j){
                list[list.indexOf(f, 0)]=null;}
        }
    }
    while (i--){
        if (list[i] === null){
            list.splice(i, 1);
        }
    }
    return list.toString();
}

console.log(primeEvaluator(2000));