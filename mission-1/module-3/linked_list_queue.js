class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// FIFO - first in first out.
class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  enqueue(value) {

    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  dequeue() {
    if(this.isEmpty()) return undefined;
    const dequeuedNode = this.head;
    this.head = this.head.next;

    if(this.head === this.tail){
        this.tail = null;
    }

    this.length--;

    return dequeuedNode;
  }

  peek(){
    return this.head ? this.head.value : undefined;
  }

  isEmpty(){
    return this.length === 0;
  }

  print(){

    if(this.isEmpty()){
        return undefined;
    }
    let curretnNode = this.head;
    while(curretnNode !== null){
        console.log( curretnNode.value, "->")
        curretnNode = curretnNode.next;
    }
  }
}

const q = new Queue();

// q.dequeue(10)
// q.dequeue(20)
// q.dequeue(30)

q.enqueue(10)
q.enqueue(20)
q.enqueue(30)

// q.print();

q.dequeue();
q.enqueue(40);
q.print();

