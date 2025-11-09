const map = new Map();

//* map doesn't convert its key as string 
// as an instance consider below insertion

map.set(false, "its a boolean field");


const course1 = {name: "Programming hero"}
const course2 = {name: "Level-2"}

// map.set(course1, course1);
// map.set(course2, course2)
// console.log(map)

// Others properties of map
// console.log(map.size);

// // deleting a entry 
// console.log(map.delete(course1)) // true, and removed the entry course1

// // checking existence of a property
// console.log(map.has(course1)) // false


// For iterate through map we have only foreach method

// map.forEach(element => console.log(element))
// map.forEach((value, key) => console.log(`Key: ${key}  and value: ${value}`))

// suppose we have list of user:
/** 
 * Enamul
 * Robi
 * Shafiqul
 * Saidul
 * Riyad
 *  
 */

//* let's create a map for them

const userList = new Map();

userPrototype = {
    userId: 1212,
    name: "xyz",
    age: 20
}

users = ["Enamul","Robi", "Shafiqul","Saidul", "Riyad"];

for(let i=1; i<6; i++){

    const userId = Math.floor(Math.random()* i);
    user = {
        userId: userId,
        name: users[i-1],
        age: 20+i        
    }   

    userList.set(i, user);   
}


console.log([...userList.values()]) // array of values 
console.log([...userList.keys()]) // array of keys

// key() or map.values returs iterator

for(let key of userList.keys())
{
    console.log(key)
}
for(let value of userList.values()){
    // console.log(key)

    // we can manipulate the original map 

    // suppose we want increase the age of each memer by 5 years
    // we can do this like below
    value.age = value.age+5;

    
    console.log(value)

    // Basically, it's work as a pass by reference, on pass by value.
    // so we could manipulate the original map from here.

}



// Entries

console.log(userList.entries()) // [key,value]


//? matrix to map

const courses = [["Programming-hro","level1"], ["nextLevel", "level2"]];

const courseMap = new Map(courses);


console.log(courseMap);
// console.log(userList)
