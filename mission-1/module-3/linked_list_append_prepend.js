class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }


    append(value){
        const newNode = new Node(value);
        
        if(!this.head){
            // linked list is empty right now!!
            this.head = newNode;
            this.tail = this.head;
        } 
        else{
            // Linked list is not empty.

            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;

        return this;
    }

    prepend(value){
        const newNode = new Node(value);
        if(this.length == 0){
            this.head = newNode;
            this.length = newNode;
        } 
        else{
            newNode.next = this.head;
            this.head = newNode;
        }

        this.length++;

        return this;
    }

    insert(index,value){
        if(index<0 || index > this.length){
            console.error("Out of bound indexing");
            return undefined;
        }

        else if(index === 0){
            this.prepend(value);
        }
        else if(index === this.length){
            this.append(value);
        }

        else{
            // we to find the leading node 
            const newNode = new Node(value);
            const leadingNode = this._leadingNode(index-1);
            // console.log(leadingNode);

            const holdingNode = leadingNode.next;
            leadingNode.next = newNode;
            newNode.next = holdingNode;
            this.length ++;
                        
        }
    }

    remove(index){

        // if(index == this.length){
        //     const leadingNode = this.tail;
        //     leadingNode.next = null;
        //     this.tail = leadingNode;
        // }
        if(index ===0 ){
            const removedNode = this.head.value;
            this.head = this.head.next

            if(this.length == 1){
                this.tail = null;
            }
            this.length --;

            return removedNode;
        }

        
        const leadingNode = this._leadingNode(index-1);
        
        // const nextNode = leadingNode.next.next;
        // leadingNode.next = nextNode;

     


        // or
        const leadNext = leadingNode.next;

        leadingNode.next = leadNext.next;

        if(leadingNode.next === null){
            this.tail = leadingNode;
        }

        this.length --;
        return leadingNode.value;

    }

    // private helper funtion/method
    _leadingNode(index){
        let i = 0;
        let leadingNode = this.head;
        while(i !== index){
            leadingNode = leadingNode.next;
            i++;
        }
        return leadingNode;
    }
    print(){
        let temp = this.head;
        while(temp!==null){
            console.log(temp.value);
            temp = temp.next;
        }
    }

}

const linkedList = new LinkedList();
linkedList.append(1).append(2).append(3);

// linkedList.insert(2, 40);
linkedList.remove(1);
linkedList.print();