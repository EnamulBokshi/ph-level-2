
// dynamically generalize


// here, we have defined an array of string
const friends: string[] = ['X','Y','Z'];

// We can do the same with type generic, look at the example below
const friendsGen: Array<string> = ['X', 'Y', 'Z'];

// Array of numbers


const rollNumbers : Array<number> = [0,2,3,4,45,5,9];

// array of boolean

const bolArr : Array<boolean> = [true, false, false, true];



//  for reuse we can do as below
// generalizing the array type


type GenericArray  = Array<string> | Array<number> | Array<boolean>

// setting type dynamically 
// what if we can define type when use and as needed?
// ofcourse we can do it let see how to do it.
type GenericArrayDynamic<type> = Array<type>


const genericFriends : GenericArrayDynamic<string> = ['Enam','Haque'];

// it's cool, isn't it?

// now lets create more arrays of different kinds

const genericRoll : GenericArrayDynamic<number> = [1,3,4,5,5,6,67];

// boolean type array 

const genericBoolean : GenericArrayDynamic<boolean> = [true,false, true, true, false];




//  More exapmles on it


// suppose we want to define co-ordinate [x,y] where type of these value can be different in different cases 
// let's say [number, number], [string, string];

// following example shows how to implement it using type generic


type Coordinates<X,Y> = [X,Y];


// now we are eligible to set the type X, Y as required

const numberCoordinates:Coordinates<number, number> = [20,40];

// String Coordinates 

const stringCoordinates: Coordinates<string,string> = ['20','30'];

// String + numebr 

const stringNumberCoordinat: Coordinates<string, number> = ['30',50];


//? Generic for Object or array of objects


const userList = [
    {
        name: 'SomeOne',
        age: 30
    },

    {
        name: 'OneOne',
        age: '26'
    },

   {
    id: 3434,
    phone: 3353,
   }
]



//? have you noticed the inconsistency inside objects regarding their properties? 
//? some time age is number and sometime it's string and sometimes doesn't exists

//* what if we use generic type for object?



const genUserList : GenericArrayDynamic<object> = [
     {
        name: 'SomeOne',
        age: 30
    },

    {
        name: 'OneOne',
        age: '26'
    },

   {
    id: 3434,
    phone: 3353,
   }
]

// still type script allows the inconsistency 
// to remove that, we can the define the each property's type of the array

type user = {
    name: string, 
    age: number
}

// const perfectUsersList: GenericArrayDynamic<user> = [
//     {
//         name: 'enamul',
//         age: 20,
//     },
//     {
//         name: 'OneOne',
//         age: '26'
//     },

//    {
//     id: 3434,
//     phone: 3353,
//    }
// ]
// so, now it's able to identify the inconsistency 

// its really cool, isn't it?



