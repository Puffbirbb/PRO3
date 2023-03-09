class StringStack {
    constructor() {
        this.stack = [];
    }
    push(str) {
        this.stack.push(str);
    }
    pop() {
        return this.stack.pop();
    }
    peek() {
        return this.stack[this.stack.length - 1];
    }
    isEmpty() {
        return this.stack.length === 0;
    }
    size() {
        return this.stack.length;
    }
}

let ss = new StringStack();

ss.push("a");

ss.push("b");

ss.push("c");

console.log(ss.peek());