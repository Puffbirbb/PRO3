class Group {
    constructor(navn) {
        this.navn = navn;
        this.group = [];
    }

    add(value) {
        if (!this.has(value)) {
            this.group.push(value);
            value.group = this;
        }
    }

    delete(value) {
        this.group = this.group.filter(v => v !== value);
    }

    has(value) {
        return this.group.includes(value);
    }

    toString() {
        return this.navn;
    }

    [Symbol.iterator]() {
        return new GroupIterator(this);
    }

    static from(iterable) {
        let group = new Group();
        for (let value of iterable) {
            group.add(value);
        }
        return group;
    }
}

class Person {
    constructor(navn, group) { this.navn = navn; this.group = group;}
    toString() { return this.navn; }
    getGroup() { return this.group.toString(); }
}

let suiGang = new Group("Sui Gang");
let p1 = new Person("Viggo", suiGang);
let p2 = new Person("Børge", suiGang);

suiGang.add(p1);
suiGang.add(p2);

console.log(suiGang.group.toString());

let suiGang2 = new Group("Sui Gang 2");

suiGang2.add(p1);

console.log(suiGang2.group.toString());

suiGang.delete(p1);

console.log(suiGang.group.toString());

console.log(p1.group.toString());