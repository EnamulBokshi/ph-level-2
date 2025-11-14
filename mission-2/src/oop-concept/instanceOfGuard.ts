class Person{
    name:string;
    constructor(name: string){
        this.name = name;
    }


}


class Student extends Person{

    constructor(name: string){
        super(name);
    }

    doStudy(){
        console.log(`${this.name} is studying `)
    }
}

class Teacher extends Person{};


const isStudent = (user: Person) => user instanceof Student;

const isTeacher = (user: Person) => user instanceof Teacher;

const checkTheInstanceType = (person: Person)=>{
    if(isStudent(person)) {
        // here we are sure the instance of the person is student 
        // we will be able use all properties of student only not for person
        console.log('Instance of Student class')
        person.doStudy()
    }
    else if(isTeacher(person))  console.log('Instance of Teacher class');
}

// 

const s1 = new Student('Enamul Haque');
checkTheInstanceType(s1); //Instance of Student class

const t1 = new Teacher('Raki Han ');
checkTheInstanceType(t1); // instance of Teacher class