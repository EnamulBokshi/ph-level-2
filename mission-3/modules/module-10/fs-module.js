const fs = require('fs');

console.log("Starting Reading... ");
// lets read file in synchronized way.

try {
    const data = fs.readFileSync("/home/nullpointer/Documents/work/ph/mission-3/data/diary.txt", "utf-8");
    console.log("Content found");

    console.log(data);
} catch (error) {
    console.error(error);
}

console.log("Ended");