class Stack{
    constructor(){
        this.items = [];
        this.top = 0;
    }

    add(item){
        this.items.push(item);
        this.top++;
    }

    pop(items){
        if(this.isEmpty()) {
            return undefined;
        }
        const popped = this.items.pop();
        this.top--;
        return popped;
    }

    peek(){
        if(this.isEmpty()) return undefined;
        return this.items[this.top-1];
    }

    isEmpty(){
        return this.items.length === 0;
    }

    display(){
        console.log(this.items)
    }
}


const bookStack = new Stack();

bookStack.add("Sapiens")
bookStack.add("A passage to the English Language")

bookStack.add("IKIGAI")

// console.log(bookStack.peek());
console.log(bookStack.display());
// console.log(bookStack.top)
