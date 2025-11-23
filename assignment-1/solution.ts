
/**
 * 
 * @param input 
 * Problem 1:
Create a function formatValue that accepts a value which may be a string, number, or boolean, and returns the following based on the value type:

If the input is a string → return the string in uppercase
If the input is a number → return the number multiplied by 10
If the input is a boolean → return the opposite value (true → false, false → true)
Requirements:
You must write the correct type for the function parameter and the return type.
You must use type checking to handle each case.
 * 
 * @returns  
 */

const formatValue =(input:string | number | boolean) : string | number | boolean =>{
    if(typeof input === 'number') {
        return input*10;
    }
    else if(typeof input === 'string'){
        return input.toUpperCase();
    }
    else if(typeof input === 'boolean') {
        return !input
    } 
    throw new Error('Invalid input type provided!')
}


/**
 * 
 * Problem 2:
Create a function getLength that accepts a value which may be a string or an array, and returns the length of the value.

If the input is a string → return the number of characters.
If the input is an array → return the number of elements.
Requirements:
You must write the correct type for the function parameter and the return type.
You must use type checking to handle each case (typeof or Array.isArray).
Sample Input:
console.log(getLength('typescript'));
console.log(getLength([10, 20, 30, 40]));
Sample Output:
10;
4;

 */

type GetLength = (input: string | number[]) => number;

const getLength : GetLength= (input) => {
    if(typeof input === 'string'){
        return input.length;
    }
    if(Array.isArray(input)){
        return input.length;
    }
    
    return 0;
}



/**
//  * Problem 3:
// ? Create a Person class with name and age properties. Add a method getDetails that returns a string with the person's name and age.

Requirements:
You must use a constructor to initialize the properties.
The getDetails method should return a string in the format: "Name: [name], Age: [age]".
Sample Input:
const person1 = new Person('John Doe', 30);
console.log(person1.getDetails());

const person2 = new Person('Alice', 25);
console.log(person2.getDetails());
Sample Output:
'Name: John Doe, Age: 30';
'Name: Alice, Age: 25';
 * 
 */


class Person{
    name:string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }
    getDetails(){
        return `'Name: ${this.name}, Age: ${this.age}'`   
    }
}

// const person1 = new Person('John Doe', 30);
// console.log(person1.getDetails());

// const person2 = new Person('Alice', 25);
// console.log(person2.getDetails());



/**
 * ?Problem 4:
// ?Create a function filterByRating that accepts an array of items, where each item has the following properties:

title (string)
rating (number between 0 and 5)
The function should return a new array containing only the items with a rating of 4 or more.

Requirements:
You must write the correct type for the function parameter and the return type.
Do not mutate the original array.
Sample Input:
 const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];

console.log(filterByRating(books));
Sample Output:
[
  { title: 'Book A', rating: 4.5 },
  { title: 'Book C', rating: 5.0 },
];

 * 
 */
type FilterByRating = (books: {title: string; rating: number}[]) => {title: string; rating: number}[]
const filterByRating : FilterByRating =(books) =>{
    const filteredBooks = books.filter(book => {
        if(book.rating < 0 || book.rating > 5) {
            throw new Error('Rating must be between 0-5');
            
        }
        if(book.rating >=4 ) {
            return {
                title: book.title,
                rating: book.rating.toFixed(1)
            }
        }
    } )
    return filteredBooks;
}

 const books = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
]

console.log(filterByRating(books))



/*
Problem 5:
Create a function filterActiveUsers that accepts an array of user objects. Each user object contains id, name, email, and isActive properties. The function should return a new array containing only the users whose isActive property is true.

Requirements:
You must write the correct type for the function parameter and the return type.
Do not mutate the original array.
Use type checking if necessary.
Sample Input:
const users = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

console.log(filterActiveUsers(users));
Sample Output:
[
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];


*/

type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
}
type FilterActiveUsers = (users: User[]) => User[];
const filterActiveUsers:FilterActiveUsers =(users)=>{
    return users.filter(user => user.isActive)
}

// const users = [
//   { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
//   { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
//   { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
// ];

// console.log(filterActiveUsers(users));



/*

?Problem 6:
?Define an interface Book with the following properties:

title (string)
author (string)
publishedYear (number)
isAvailable (boolean)
Then, create a function printBookDetails that accepts an object of type Book and prints its details to the console in the format: "Title: [title], Author: [author], Published: [publishedYear], Available: [Yes/No]".

Requirements:
You must define the Book interface correctly.
The printBookDetails function must accept an object that follows to the Book interface.
Sample Input:
const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};

printBookDetails(myBook);
Sample Output:
Title: The Great Gatsby, Author: F. Scott Fitzgerald, Published: 1925, Available: Yes

*/

interface Book{
    title: string;
    author: string;
    publishedYear: number;
    isAvailable:boolean;
}


const printBookDetails = (book:Book):string => {
    console.log(`Title: ${book.title}: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ? 'Yes':'No'}`)
    return `Title: ${book.title}: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ? 'Yes':'No'}`
}   

const myBook: Book = {
  title: 'The Great Gatsby',
  author: 'F. Scott Fitzgerald',
  publishedYear: 1925,
  isAvailable: true,
};

printBookDetails(myBook);



/*

Problem 7:
Create a function getUniqueValues that accepts two arrays and returns a new array containing only the unique values from both arrays, without any duplicates.

Requirements:
You must write the correct type for the function parameter and the return type.
The function should handle arrays of strings or numbers.
You are not allowed to use any built-in methods to solve this problem.
Sample Input:
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(getUniqueValues(array1, array2));
Sample Output:
[1, 2, 3, 4, 5, 6, 7];


*/


type GetUniqueValues = (array1: number[] | string [], array2: number[] | string[]) => number[] | string[];

const getUniqueValues : GetUniqueValues = (array1, array2) => {
    for(let i = 0; i<array2.length; i++){
        const currentNumber = array2[i];
        
        let find = false;
        for(let j = 0; j<array1.length; j++){
            if(currentNumber === array1[j]){
                find = true;
                break;
            }
        }
        if(!find) array1[array1.length] = array2[i];
    }

    return array1;
}

const array1 = [1, 2, 3, 6, 5,8];
const array2 = [3, 4, 5, 6, 7];
// console.log(getUniqueValues(array1, array2));

/*
?? Problem 8:
?? Create a function calculateTotalPrice that accepts an array of product objects. Each product object contains the following properties:

name (string)
price (number)
quantity (number)
discount?: optional number from 0–100, representing a percentage discount
The function should return the total price of all products in the array, taking into account the discount for each product (if provided). If the array is empty, return 0.

Requirements:
You must write the correct type for the function parameter and the return type.
Use array methods (map, reduce, etc.) to calculate the total.
The total price of each product is calculated as: (price * quantity).
Correctly handle products with and without the discount property.
Sample Input:
const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products));
Sample Output:
127.5;

*/


type Product ={
    name: string;
    price: number;
    quantity: number;
    discount?: number;
}


const calculateTotalPrice = (products: Product[]) : number =>{

    const totalPrice = products.reduce((total, item) => {
            let currentTotal = item.price * item.quantity;
            
            // checking if discount exists
            if(item.discount){
                if(item.discount > 100 || item.discount < 0) throw new Error('Discount must be between 0-100')
                currentTotal = currentTotal - currentTotal*(item.discount/100)
            }
            return total + currentTotal;
    }, 0)    

    return totalPrice;
}


const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

// console.log(calculateTotalPrice(products));


/*
Blog Post (in Bangla): Answer any 2 of the questions below:
What are some differences between interfaces and types in TypeScript?
What is the use of the keyof keyword in TypeScript? Provide an example.
Explain the difference between any, unknown, and never types in TypeScript.
What is the use of enums in TypeScript? Provide an example of a numeric and string enum.
Provide an example of using union and intersection types in TypeScript. 
*/
