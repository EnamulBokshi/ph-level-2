// destructuring in ts


// Object destructuring 


const user ={
    name: "Enamaul",
    contact:{
        phone: 23492384,
        email: "eadfhs@dfd.com"
    },
    id: 3434,
    age: 534
} 

const {id,age,name: Enamul, contact:{email: enamulEmail}} = user;

// here name: Enamul -> name alias or renaming
// contact:{email} -> nested destructuring happened here, cause contact is an object 
// email:enamulEmail ->  again, the same thing, renaming.


// console.log(id,age,Enamul);


// Array destructuring



const friends = ["sdhfe", "Rakib", "Mahin"];

const [,Brother,] = friends;

// brother == Rakib or friends [1]