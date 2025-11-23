const fs = require('fs');

console.log("String the reading!!");

fs.readFile("/home/nullpointer/Documents/work/ph/mission-3/data/diary.txt", "utf-8", (er, data)=>{
    if(er){
        console.error(er);
    }

    console.log("File content!! ");

    console.log(data);
})


console.log("async is cool. this runs immediately - no blocking");


