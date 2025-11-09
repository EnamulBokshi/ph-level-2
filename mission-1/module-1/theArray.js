// Let's define a simple array
const users = ["enamul",'asif','rafi'];

const set = new Set(users);


// As set has limited methods, we might need more methods as an array offers
// Thus we will work with array+set for better compatibility and accessability

// There are no methods to iterate through set but only have forEach but the thing is forEach doesn't return anything

// const test = set.forEach(user => console.log(user));
// test = undefined

// Other set methods
// set.has() return true if item has inside the set false otherwise
// console.log(set.has("enamul"));
// console.log(set.has('robi'));

const fruits = ['apple', 'banana', 'mango', 'apple']

// We intend to remove duplicate elements from the array

// Let's try it in brute force approach

const removeDupElement = (arr)=>{
    const newArr = [];
    arr.forEach(element => {
        if(!newArr.includes(element)){
            newArr.push(element);
        } 
    })
    return newArr;
}

const uniqueFruitsList = removeDupElement(fruits);
console.log(uniqueFruitsList);


// Removing duplicate items using set approach

const removeDupSet = (arr) =>{
    const set = new Set(arr);

    // Returning the array 
    return Array.from(set);
}


const uniqueFruitsListUsingSet = removeDupSet(fruits);

console.log("Fruits: ", uniqueFruitsListUsingSet);


// let's try to compare above two approach, and find out which one is better

// Now to similate the difference we will create a vast dataset with dummy data

const generateDummyData = (size)=>{
    const listOfItems = [
        'apple',
        'banana',
        'orange',
        'lemon',
        'papaya',
        'coconut',
        'peanut',
        'guava',
        'grapes',
        'tomato',
        'bitter gourd',
        'lentis',
        'corn',
        'almonds',
        'spinach',
        'cabbage',
        'binjal',
        'eggplant',
        'ridge gourd',
        'bottle gourd',
        'okra'
    ]
    const generatedData = []
    for(let i =0; i<size; i++){
        let RandomIndex = Math.floor(Math.random() * listOfItems.length);
        generatedData.push(listOfItems[RandomIndex]);
    }
    return generatedData;
}

const dataset = generateDummyData(800000);

const startTimeOfBrutForce = performance.now();
const uDataUsingBrutforee= removeDupElement(dataset);
const endTimeOfBrutForce = performance.now();

console.log(`Total time required for brute force: ${endTimeOfBrutForce-startTimeOfBrutForce}: `);

const startTimeOfSet = performance.now();
const uniqueDataUsingSet = removeDupSet(dataset);
const endTimeOfSet = performance.now();

console.log(`Total time required using set approach: ${endTimeOfSet-startTimeOfSet}`);