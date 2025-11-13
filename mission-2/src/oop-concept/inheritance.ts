class Person{

    constructor(public name: string, public age: number, public address: string, public designation: "Student" | "Teacher"){

    }

    displayPerson(){
        return `This is Mr. ${this.name}. A ${this.designation}`
    }
}


class Student extends Person{
    rollNo: number;// student's own property
    currentYear: number; // student's own property
    constructor(rollNo:number,name: string, age: number, address: string, designation: "Student" | "Teacher", currentYear: number){

        super(name,age, address, designation);
        this.rollNo = rollNo;
        this.currentYear = currentYear;

    }

    getCurrentYear(){
        return this.currentYear;
    }
}


// if we don't have any extra property for derived class, and shared exact same properties as its parent class then we don't need to call constructor


class SamePerson extends Person{}


const samePerson1 = new SamePerson('Same person as person', 323, 'He lives in a graveyard',"Student");

console.log(samePerson1.displayPerson()) 


// let's create a teacher class, who is also a person 



class Teacher extends Person{

    salary: number;

    constructor(name: string, age: number, address: string, salary: number){
        super(name, age, address, 'Teacher');
        this.salary = salary;
    }


    getSalary(){
        return this.salary;
    }
}



const t1 = new Teacher('Richard', 40, 'LA', 33440);
console.log(t1.displayPerson, t1.getSalary);