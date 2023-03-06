function Animal(name, age){
    this.name = name;
    this.age = age;

    this.canRun = function(){
        console.log(this.name + " can run");
    }
}

Animal.prototype.canRun = function(){
    console.log(this.name + " can also run");
}

let BillTheBull = new Animal('Bill The Bull', 2);

BillTheBull.canRun();

function Human(name, age, money){
    Animal.call(this, name, age);
    this.money = money;

    this.canEarn = function(){
        console.log(this.name + " can earn");
    }
}

let Christiano = new Human('Christiano', 25, 1000);
let Billy = new Human('Billy', 30, 2000);

Christiano.canRun();
Billy.canRun();

Human.prototype.__proto__ = Animal.prototype;

Billy.canRun = function(){
    console.log(this.name + " can RUN");
}

Christiano.canRun();
Billy.canRun();