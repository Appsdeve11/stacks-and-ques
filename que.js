class Queue {
    constructor() {
      this.items = [];
    }
  
    enqueue(item) {
      this.items.push(item);
    }
  
    dequeue() {
      if (!this.isEmpty()) {
        return this.items.shift();
      } else {
        throw new Error("Cannot dequeue from an empty queue");
      }
    }
  
    peek() {
      if (!this.isEmpty()) {
        return this.items[0];
      } else {
        throw new Error("Cannot peek into an empty queue");
      }
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }

  const myQueue = new Queue();
  myQueue.enqueue(1);
  myQueue.enqueue(2);
  myQueue.enqueue(3);
  
  console.log("Queue:", myQueue.items);
  
  console.log("Dequeue:", myQueue.dequeue());
  console.log("Queue after dequeue:", myQueue.items);
  
  console.log("Peek:", myQueue.peek());
  console.log("Is empty?", myQueue.isEmpty());