
//* each key of object is a string
const obj = {
nextLevel: {meta: "Much better than programming hero! "},
"Level-1": {meta: "It's the base of the level 2"},
true: {meta: "it's also a stirng not boolean"}
}


// // accesing objets properties using dot notation 
// console.log(obj.nextLevel);

// //* but we cann't access string keys by dot notation

// console.log(obj["Level-1"])
// // prove of the argument, as we said each key of object is a string
// console.log(obj["true"]);
// console.log(obj["nextLevel"])

// console.log(obj.true)

// const newObj = {};

// newObj.nextLevel = {meta: "This is level 2"};

// newObj[true] = true;

// console.log(newObj)


// Limitaion of object, we cann't assign number of boolean as obj key, it will treat as strings


const course1 = {name: "Programming hero"}
const course2 = {name: "Level-2"}

const courses = {}
courses[course1] = course1;
courses[course2] = course2;

// console.log(courses);
//*{ '[object Object]': { name: 'Level-2' } } // the courses object
//?  are you getting the point?
// Objects must have unique keys. as [object Object] sets as a key for course1 assignment, which was a object it self. 
//! for this reason its converted the key as object object
// For overcome this limitation we can use map
//* maps doesn't convert its key into string




