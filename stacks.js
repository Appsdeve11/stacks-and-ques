class Stack {
    constructor() {
      this.items = [];
    }
  
    push(item) {
      this.items.push(item);
    }
  
    pop() {
      if (!this.isEmpty()) {
        return this.items.pop();
      } else {
        throw new Error("Cannot pop from an empty stack");
      }
    }
  
    peek() {
      if (!this.isEmpty()) {
        return this.items[this.items.length - 1];
      } else {
        throw new Error("Cannot peek into an empty stack");
      }
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
 
  const myStack = new Stack();
  myStack.push(1);
  myStack.push(2);
  myStack.push(3);
  
  console.log("Stack:", myStack.items);
  
  console.log("Pop:", myStack.pop());
  console.log("Stack after pop:", myStack.items);
  
  console.log("Peek:", myStack.peek());
  console.log("Is empty?", myStack.isEmpty());