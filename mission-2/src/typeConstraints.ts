// let's say we have some driver , and they have various type vehicles such as car, bike, truck etc.


// In this module we'll learn keyof 

type driver  = {
 car: string, 
 bike: string,
 truck: string,
}


// Now, We have another driver and his car types are

type vechichles = 'car' | 'bike' | 'truck';


// have you noticed that the vehicles share the type of cars as driver does?

// we can copy the driver type and create a vechiles type


type vechicles2 = keyof driver;

const driver2 : vechicles2 = 'bike';
const car : vechicles2 = 'car';

type User = {
    id: string,
    name: string,
    address: {
        city: string,
    }
}
const user:User = {
    id: '3434',
    name: 'No one',
    address: {
        city: 'dhaka',

    }

}

// lets define a function to retrive any properties from the above objet

const getProperty = (obj: object, key: string) => {
    return obj[key];
}


const id = getProperty(user, 'id');


// now create a comprehensive function to avoide key missmatch propeblem


const getProperCom =  (obj: User, key: keyof User) =>{
    return obj[key];
}


const user1Id = getProperCom(user, 'id');

// Let's create a dynamic function to get more comprehensive result and work with any kind of object

// using generic funtion 
const getPropertyFromObject = <T> (obj: T, key: keyof T) =>{
    return obj[key];
}

type product = {
    code: string, 
    name: string, 
    type: string,
    price: number,
}



const product1 : product= {
    code: '3434',
    name: 'ersdf',
    type: 'Electronics',
    price: 3434
}


const product1Price = getPropertyFromObject(product1, 'price');





