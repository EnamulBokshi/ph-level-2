const args = process.argv;

// args[0] = node path
// args [1] = file path;
// args [2] = actual arguments start from this index

const name = args[2] || "Guest";
const age = args[3];
let greeting;
const time = new Date().getHours;
if(time>12){
    greeting = "Good morning";
}
else if (time > 18){
    greeting = "Good afternoon! ";
}
else {
    greeting = "Good evening! ";
}

console.log(`Hello ${name} ${greeting}`);