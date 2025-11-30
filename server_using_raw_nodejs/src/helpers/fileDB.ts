import fs from 'fs';
import path from 'path';

const filePath = path.join(__dirname, "../data/students.json");

export function readUsers(){
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
}


export function writeUsers(user:any){
    fs.writeFileSync(filePath, JSON.stringify(user, null, 2));
}