const fs = require("fs");


fs.writeFileSync("/home/nullpointer/Documents/work/ph/mission-3/output/temp.log", "Application created\n");

console.log("file created!");

// Now lets check if the file exists or not!! 

if(fs.existsSync("/home/nullpointer/Documents/work/ph/mission-3/output/temp.log")){
    console.log("file found");

    fs.unlinkSync("/home/nullpointer/Documents/work/ph/mission-3/output/temp.log");
    console.log("file deleted!");
}

try{
fs.unlinkSync("/home/nullpointer/Documents/work/ph/mission-3/output/temp.log");
}catch (error){
console.log("ERROR: ", error.message);
}



// asynchronous way to delete files


fs.writeFile("/home/nullpointer/Documents/work/ph/mission-3/output/temp.log", "created the temp.log file", (error, data)=>{
    if(error){
        return console.log(error.message);
    }

    console.log("File created! and attempt to remove it!");

    fs.unlink("/home/nullpointer/Documents/work/ph/mission-3/output/temp.log",(error) => {
        if(error) console.error("Error: ", error.message);
        else console.log("temp.log deleted successfully")
    });

})