// constraint: strict rules implementation


//  suppose we want to have some important entity for a student, with out these we are not going allow him/her to enroll
// let's say name, id, age are mendetory properties

const enrollToCourse = <T extends {id: string, name: string, age: number}> (studentInfo: T) =>{
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




// const s1 = enrollToCourse(student1); // age missing
// const s2 = enrollToCourse(student2); // age missing


// 

const student3 = {
    id: '3343',
    name: 'e',
    age: 3434,
    hasCar: true,
    hasWatch: true,
}

const s3 = enrollToCourse(student3);


