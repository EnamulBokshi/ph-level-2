const startTime = performance.now();

// for(let i = 0; i<5000; i++){
//     console.log(i);
// }

// const endTime = performance.now();

// console.log("The time required to execute the program: ",endTime-startTime);

let array1 = []
let array2 = []

console.time("test");
for(let i = 0; i<5000; i++){
    if(i<2500) array1.push(i);
    array2.push(i);
}
console.timeEnd("test")
// 

// time analysis of map funtion
console.time("map1");
const userListOne = array1.map((userNumber) => ({userId: userNumber}));
// console.log(userListOne);
console.timeEnd("map1");

console.time("map2")
const userListTwo = array2.map((number) => ({userId: number}));
console.timeEnd("map2")


// find method method complexity
console.time("find");
const user = userListTwo.find((user)=>(user.userId === 2400));
console.timeEnd("find");

console.log(user)