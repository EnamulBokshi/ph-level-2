const crypto = require('crypto');

console.log("\MD5 Hash: ")

const password = "password123"

const md5Hash = crypto.createHash("md5").update(password).digest("hex");

console.log("input: ", password);
console.log("MD5 Hashed password: ", md5Hash )

/* 
 md5 hashing algorithm is not recommended to use because its has several vulnerabilities
 It can't provide a proper secure crypto graphic hashed password
*/


const sha256Hash = crypto.createHash('sha256').update(password).digest("hex")

console.log("Sha 256 Hashed: ", sha256Hash);

const sha512Hash = crypto.createHash('sha256').update(password).digest("hex")

console.log("Sha 512 Hashed: ", sha512Hash);