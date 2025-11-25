 const os = require('os');

 console.log("System info \n");
 console.log("-".repeat(50));

 console.log("Platform details: ");
 console.log("Platform: ",os.platform());
 console.log("Architecture: ",os.arch());
 console.log("Os Type: ",os.type());

 console.log("Os Release: ",os.release());

 console.log("Host Name: ",os.hostname());

 console.log("-".repeat(50));
 console.log("CPU info: ")
 console.log("-".repeat(50));

 const cpus = os.cpus();
 console.log("CPU Model: ", cpus[0].model);
 console.log("CPU cors: ", cpus.length);
 console.log("CPU speed: ", cpus[0].speed);

  console.log("-".repeat(50));
 console.log("Memory info: ")
 console.log("-".repeat(50));

 const totalMemory = os.totalmem();
 const freeMem = os.freemem();
 console.log("Total memory: ", (totalMemory/1024/1024/1024).toFixed(2),"GB");

 console.log("Free Memory: ",(freeMem/1024/1024/1024).toFixed(2), "GB");

 
 
 console.log("-".repeat(50));
 console.log("Uptime info: ")
 console.log("-".repeat(50));

 const uptime = os.uptime();

//  console.log(`${uptime}`); // uptime in minute

 const days = Math.floor(uptime/86400); // 1 day = 86400 minutes
 const hours = Math.floor((uptime%86400)/3600);
 const minute = Math.floor((uptime % 3600) / 60);

 console.log(`${days} days ${hours} hours ${minute} minutes`);
