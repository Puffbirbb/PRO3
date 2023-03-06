class Person {
    constructor(navn) { this.navn = navn; }
    toString() { return this.navn; }
    equals(p) { return Person.prototype === p.__proto__ && this.navn === p.navn; }
}
class Studerende extends Person {
    constructor(navn, id) { super(navn); this.id = id; }
    toString() { return super.toString() + ": " + this.id; };
    equals(s) { return Studerende.prototype === s.__proto__ && this.navn === s.navn && this.id === s.id; }
}

let p1 = new Person("Viggo");
let p2 = new Person("Børge");
let s1 = new Studerende("Ida", 123);
let s2 = new Studerende("Ole", 123);

let liste = [p1, p2, s1, s2];

class Kat {
    constructor(navn) { this.navn = navn; }
    toString() { return 'Kat: ' + this.navn; };
}

function compare(a, b) {
    if (a.toString() < b.toString()) return -1;
    if (a.toString() > b.toString()) return 1;
    return 0;
}

function equals(a, b) {
    return a.toString() === b.toString();
}

console.log(p1.equals(p1));
console.log(p1.equals(p2));

console.log(s1.equals(s1));
console.log(s1.equals(s2));

let sorterede = liste.sort(compare);

console.log(sorterede.toString());

let k1 = new Kat("Misser 1");
let k2 = new Kat("Misser 2");
liste.push(k1);
liste.push(k2);

let sorterede2 = liste.sort(compare);
console.log(sorterede2.toString());