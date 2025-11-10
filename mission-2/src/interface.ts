type User = {
    name: string,
    age: number,

};


const user1:User ={
    name: "Enamul",
    age: 100,
}


type Role = {
    role: "admin" | "user"
}


// Intersection 


type UserWithRole = User & Role;


const userAdmin : UserWithRole = {
    name: 'enam',
    age: 25,
    role: "admin",
}


// Interface 

// Interface work with only object type data type e,g: Array, Object, Function, etc..
export interface Iuser {
    name: string,
    age: number,
    id: number,

}


interface IUserWithRole extends Iuser {
    role: "admin" | "user"
}
interface IAdmin extends Iuser{
    role: 'admin';
}




const superUser: IAdmin ={
    name: "Enamul",
    age: 25, 
    id: 3434,
    role: 'admin'
}



//  Using interface with function


type Add = (num1: number, num2: number) => number;



const add:Add = (num1, num2) =>{
    return num1 + num2
}


const friends: string [] = ['a','b','c'];



// Index signature with an array
interface IFriends{
    [index: number] : string;
    //index is number and values are string of this array
}


// index signature with an Object

interface IAdd {
    (num1: number, num2: number) : number;
}

