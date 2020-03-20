class Stack {
    constructor() {
        this.array = [],
            this.top = 0;
        //this.top refers to the index of an array.
        //  I assigned the value to 0 to allow to you to push the first value to the array.Then you can increment it after it pushed to the array.
    }

    // add push method here 
    push(element) {
        this.array[this.top] = element;
        // put your code here 
        this.top++
    }

    // add isEmpty method here
    isEmpty() {
        return (this.array.length < 1) ? true : false;
    }

    // add pop method here and return the word "underflow" is the array empty
    pop() {
        if (this.array.length < 1) return "underflow";
        else {
            this.top--;
            return this.array.pop();
        }
    }
}

let stack = new Stack();
stack.push(3);
stack.push(33);
stack.push(333);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.isEmpty());

