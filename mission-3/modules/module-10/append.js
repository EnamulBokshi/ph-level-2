const fs = require("fs");


fs.writeFileSync("/home/nullpointer/Documents/work/ph/mission-3/output/app.log", "Application Started\n");
console.log("file created!");

const logEntry1 = `${new Date().toISOString()} user logged in\n`;

fs.appendFileSync("/home/nullpointer/Documents/work/ph/mission-3/output/app.log",logEntry1);


const logEntry2 = `${new Date().toISOString()} data fetched\n`

fs.appendFileSync("/home/nullpointer/Documents/work/ph/mission-3/output/app.log",logEntry2);

