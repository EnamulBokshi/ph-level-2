// creating a counter funtion using function closure

const createCounter = ()=>{
    let count = 0
    return (amount)=>{
        count+=amount
        return count;
    }
}

const counter = createCounter();
// console.log(counter(2))
// console.log(counter(2))
// console.log(counter(2))



// creating the same counter using class object methodology

class Counter{
    constructor(count){
        this.count = count;
    }

    add(amount){
        this.count+=amount;
    }

    print(){
        console.log(this.count);
    }
}

const counter1 = new Counter(0);
counter1.print();


counter1.add(2)
counter1.add(2)
counter1.add(2)

counter1.print();