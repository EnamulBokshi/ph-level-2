// Generic function


const createArrayWithString = (value: string) => [value];

const createArrayWithNumbers = (value: number) => [value];


const createArrayWithObjects = (value: {id:string, name: string}) => [value];


// lets create a resuable generic function
const createArrayWithGeneric = <T>(value: T) => [value];


// multiple generic value

const generateCoordinate = <X,Y>(value1: X, value2: Y) => [value1,value2];

const coordinate = generateCoordinate(24,22);
// console.log(coordinate)




// lets create a student enrollment system


const enrollToCourse = <T> (studentInfo: T) =>{
    return {
        course: 'Mara Kha',
        ...studentInfo
    }
}


const student1 = {
    id: 2433,
    name: 'Enamull',
    hasMac: false,
}

const student2 = {
    id: 45323,
    name: "shafi1",
    hasCar: true,
    livedAbroad: true,
}


const s1 = enrollToCourse(student1);
const s2 = enrollToCourse(student2);


console.log(s1)
console.log(s2)