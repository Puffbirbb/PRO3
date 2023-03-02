function Subject() {
    this.observers = [];

    this.registerObserver = function(observer) {
        this.observers.push(observer);
    }

    this.notifyObservers = function(data) {
        this.observers.forEach(function(observer) {
            observer.notify(data);
        });
    }
}

function Observer() {
    this.notify = function(data) {
        console.log('Recieved notification:', data);
    }
}

const subject = new Subject();
const observer1 = new Observer();
const observer2 = new Observer();

subject.registerObserver(observer1);
subject.registerObserver(observer2);

subject.notifyObservers('Hello');