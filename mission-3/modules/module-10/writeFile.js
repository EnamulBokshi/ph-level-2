const fs = require('fs');


const content1 = "My English is not improving.\nI need to focus on my mistakes!.";


// reading file synchronized way.

try{
fs.writeFileSync("/home/nullpointer/Documents/work/ph/mission-3/output/file-write-sync.txt", content1);

}catch(err){
    console.error(err)
}


// Writing files asynchronized way - non blocking i/o streaming.


const content2 = "I don't know what can I do to increase my good habits and remain consistent.";

fs.writeFile("/home/nullpointer/Documents/work/ph/mission-3/output/write-file-async.txt", content2, (error, data) => {
    if(error){
        console.error(error.message);
    }
    else {
        console.log("file written asynchronously!. ");
    }
});

