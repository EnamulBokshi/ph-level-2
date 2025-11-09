class Queue{
 constructor(){
    this.lists = []
 }   

 enqueue(item){
    this.lists.push(item)
 }

 dequeue(){
    if(this.isEmpty()){
        return undefined;
    }

    return this.lists.shift();
 }

 peek(){
    return this.lists[0];
 }

 print(){
    console.log("-> start ",this.lists.join(" "),"-> end")
 }

 isEmpty(){
    return this.lists.length === 0;
 }
}

const queue = new Queue();
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)

queue.print()
console.log("Peek: ",queue.peek());

console.log("Dequeued: ",queue.dequeue());

queue.print()
console.log("Peek: ",queue.peek());
