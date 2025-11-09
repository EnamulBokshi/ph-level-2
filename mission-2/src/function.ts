// funtion to add 2 numbers

function add(num1:number,num2:number):number{
    return num1+num2
}


// add(2323,'dfdf') not accepted
add(232,2323) // correct


// Arrow funtion 

const addArrow = (number1:number, number2:number) =>{
    return number1 + number2   
}




// Object with methods

const users = {

}

// callback funtions

const arr:number[] = [1,2,4];

const sqrArr = arr.map((elem:number) : number => elem*elem)