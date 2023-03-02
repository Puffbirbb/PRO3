function square(x){
    return x * x;
}

function cube(x){
    return x * x * x;
}

function sum(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function power(a, b){
    return Math.pow(a, b);
}

function log(a){
    return Math.log(a);
}

function abs(a){
    return Math.abs(a);
}

const compose = (f1, f2, a) => {
    return f1(f2(a));
}

console.log(compose(square, cube, 2));

function composeWithoutNumber (f1, f2){
    return ((a) => f1(f2(a)));
}

let squareWithoutNumber = composeWithoutNumber(square, cube);
console.log(squareWithoutNumber(2));

function composeFunctions(functions) {
    return function (x) {
      return functions.reduce(function (acc, f) {
        return f(acc);
      }, x);
    };
  }

let allDaFunk = [square, square, square];
let composedFunction = composeFunctions(allDaFunk);
let resultComposed = composedFunction(3); // Beregner square(addTwo(double(3)))
console.log(resultComposed); // Resultat: 64
