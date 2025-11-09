// sort

const numbers = [40,100,343,5,2,6,7,10];
const fruits = ["Banana","Bitter Gourd", "Ridge Gourd", "Papaya", "apple", "bows"];

// 
// const sortedNumbers = numbers.sort();
// console.log(sortedNumbers) 

/* 

sort() convert all element into string and then perform sorting.

to solve this we need to provide a arrow funtion inside it to sort number properly
Output of sort()
[
  10, 100, 2, 343,
  40,   5, 6,   7
] 


its manipulate the origin array 
look at the example below:

* sortedNumbers 
[
   2,  5,   6,   7,
  10, 40, 100, 343
]

* numbers (origin array)
[
   2,  5,   6,   7,
  10, 40, 100, 343
] 
  
=> (a,b) => a-b assending order
=> (a,b) => b-a decending order
*/

const sortedNumbers = numbers.sort((a,b)=>a-b);

// console.log(sortedNumbers);
// console.log(numbers)
 


// Sorting strings

fruits.sort()

/** output of fruits.sort()
 * 
 * [ 'Banana', 'Bitter Gourd', 'Papaya', 'Ridge Gourd', 'apple', 'bows' ]
 * 
 * if we want to short the array regarless Capital or small letter priority the we can do as below
 * (a,b)=>a.localeCompare(b);
 * 
*/

// console.log(fruits);


const fruits2 = ['Banana','apple','Cherry','mango'];

fruits2.sort((a,b) => a.localeCompare(b));

//console.log(fruits2) //[ 'apple', 'Banana', 'Cherry', 'mango' ]

// Nested array flat

const array = [1,24,545,[232,353,3,[33,5,34,6]]];

console.log(array.flat(2)) // flat reduces the dimenton of array up n level
// if we want to break any lear in to one dimention then we can use Infinity

//* Infifnity array.flat(Infinity);




const  tagsFramPosts = [
    ["javascript", "react", "css"],
    ["node","express"],
    ["css", "html", "react"]
];


// We need to took the unique tags from above tags

const tags = [...new Set(tagsFramPosts.flat())]; //* [ 'javascript', 'react', 'css', 'node', 'express', 'html' ]

console.log(tags)


// some

// const number = [1,2,3,4,5,6];

// const hasEvenNumber = number.some((number) => number % 2 === 0);
// console.log(hasEvenNumber);



// const  currentUserRoles = ["user", "editor"];
// const featureAccessRole = ["admin","manager"]


// const canAccess = currentUserRoles.some((role)=> featureAccessRole.includes(role));


// Array.from()

// const arr = Array.from({length: 5});

// console.log(arr) //* [ undefined, undefined, undefined, undefined, undefined ]


// const arr = Array.from({length: 5}).fill(0) 
// console.log(arr) //*[ 0, 0, 0, 0, 0 ]

// const arr = Array.from({length: 5}, (_, i) => i); // i is the index of the array.
// console.log(arr);


// const arr = Array.from([1,2,3], (value, index) => value*index);

// console.log(arr);

//* implementing python range function 


const range = (start, stop, step) => Array.from({length: Math.ceil(stop-start) / step}, (_, i) => start + i * step);

console.log(range(1,11,1))
