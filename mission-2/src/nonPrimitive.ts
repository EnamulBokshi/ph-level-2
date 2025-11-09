let strinArray: string[] = ["str1", "element2", "item 3", "memeber 4"];

// strinArray.push(2323) 123 -> number can't push into a string array

// string + number combined array type

// let strNubmer = [123,"str","element2"]; we can write it like this

// ? or

let strNubmer: (string | number)[] = [12, "string"];

strNubmer.push(2324);
strNubmer.push("hello");

// tupple

let coordinates: [number, number] = [20, 20]; // but [1,2,3] not allowed

let couple: [string, string] = ["Enamul", "noneone"];

let journey: [string, string, number] = ["Dhaka", "Madaripur", 5];

// Object types

const user: {
  // readonly cardNumber:string // access modifier 
  firstName: string;
  middleName?: string;
  lastName: string;
  isMarried?: boolean;
  carrier: "stopped"; // literal type: value as type



} = {
  firstName: "Enamul",
  middleName: "Haque",
  lastName: "Bokshi",
  isMarried: false,
  carrier:"stopped",
//   carrier: "dfklsdfl", not allowed
};
