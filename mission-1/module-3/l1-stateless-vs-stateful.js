// Stateless: does not holds previous state's value or context
// stateful: it holdes every states and context

// In js, funtion are stateless, and objects are statefull

// As instance, consider the below funtion and object implementation of a counter

const counter = (num) =>{
    let count = 0;
    count += num

    return count
}
console.log(counter(2))//2
console.log(counter(2))//2
console.log(counter(2)) //2


// it's supposed to 6 but we got only 2, because its lexecal environment regerates each call

// Object implementation of the counter


const countly = {
    count: 0,

    add(num){
        this.count+=num;
    },

    print(){
        console.log(this.count);
    }
}

countly.add(2)
countly.add(2)
countly.add(2)

countly.print()