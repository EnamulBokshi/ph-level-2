
type User ={
    id: number,
    name:{
        firstName: string,
        lastName: String

    }
    genger: 'male' | 'female',
    contactNo: string,
    address: {
        division: string,
        city: string
    }
}


const user1 : User = {
    id: 1232,
    name: {
        firstName: 'Mr.',
        lastName: 'Y'
    },
    genger: 'male',
    contactNo: '0187175616',
    address:{
        division: "Dhaka",
        city: "Madaripur"
    }
}




// function type alias

type AddFunc = (num1: number, num2: number)=> number;

const add:AddFunc = (num1,num2) =>{
    return num1+num2;
}


