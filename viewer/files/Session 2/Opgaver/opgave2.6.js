let strbalanced = '(){}[]'

let strunbalanced = '(asdqwe]'


let balance = function(str){
    let balanceList = [];
    for (let i = 0; i < str.length; i++){
        if (str.charAt(i) === '(' || str.charAt(i) === ')'){
            balanceList.push(str.charAt(i));
        } else if (str.charAt(i) === '{' || str.charAt(i) === '}'){
            balanceList.push(str.charAt(i));
        } else if (str.charAt(i) === '[' || str.charAt(i) === ']'){
            balanceList.push(str.charAt(i));
        }
    }
    for (let i = balanceList.length - 1; i > 0; i = i - 2){
        if (balanceList[i] === ')'){
            balanceList.pop();
            let secondpop = balanceList.pop();
            if (secondpop != '('){
                return 'Unbalanced'
            }
        } else if (balanceList[i] === '}'){
            balanceList.pop();
            let secondpop = balanceList.pop();
            if (secondpop != '{'){
                return 'Unbalanced'
            }
        } else if (balanceList[i] === ']'){
            balanceList.pop();
            let secondpop = balanceList.pop();
            if (secondpop != '['){
                return 'Unbalanced'
            }
        }
    }
    return 'Balanced'
}

console.log(balance(strbalanced))

console.log(balance(strunbalanced))