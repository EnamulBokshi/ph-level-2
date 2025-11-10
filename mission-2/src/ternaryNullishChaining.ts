//?? : nullish coalescing operator: null/undefined
 
//?? optional chainning

const casinoCheck  = (age: number):string =>{
    const result = age >= 21? "you are eligible":"sorry, casino not for kids";
    return result;
}

console.log(casinoCheck(33));


const userTheme = "dark";
// const userTheme = undefined;
// const userTheme = "" // it is not suitable for nullish coalescing
const selecctedTheme = userTheme ?? "Light"; // if userTheme is undefined or null then Light will be count on.

console.log(selecctedTheme);


// optional chainning

const user ={
    name: "dhfdfs",
    id: 23232,

}

const userPostalCode = user?.contact?.postalCode;

console.log(userPostalCode);

