const path = require("path");

console.log("Current file Info: \n");
console.log("File Name: ", __filename);
console.log("Directory: ", __dirname);

// let's analyze the path module

console.log("\n"+"_".repeat(50)+"\n");


// let's define a path, a dummy path
const filePath = "/enamul/documents/fileName.pdf";

console.log("Analyzing Path: ", filePath, "\n");
console.log("Directory: ", path.dirname(filePath)); // ? /enamul/documents/
console.log("Base Name: ", path.basename(filePath)); // fileName.pdf
console.log("File Extension: ", path.extname(filePath)) // .pdf
console.log("File Name: ", path.basename(filePath, path.extname(filePath))) 
// here path.basename(first_parameter is for the file.pdf, second parameter is for excluding.pdf extension) // thus we will get only fileName;


console.log("\n"+"_".repeat(50)+"\n");

const parsedPath = path.parse(filePath);

// parsedPath is a object now 
console.log(parsedPath)
/**
 
//? output of parsed path: path.parse function makes a path as an object
{
  root: '/',
  dir: '/enamul/documents',
  base: 'fileName.pdf',
  ext: '.pdf',
  name: 'fileName'
}
 */


//? let's formate the parsed path again as an actual path

console.log(" Formatted path: ", path.format(parsedPath)); // Formatted path:  /enamul/documents/fileName.pdf



