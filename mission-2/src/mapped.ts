// using Oneliner to define types


type AreaString ={
    height: string,
    width: string,
}


// we can create the same type for height and width in online uisng map technique


type AreaInt ={
    [key in "height" | "width"]: number
} // it the same thing as below:

// type AreaInt = {
//     height: number;
//     width: number;
// }


// let's use dynamic generic  to create Any typed Area


type Area <T> = {
    [key in keyof T] : T[key]
}

const area1 : Area <{height: number, width: number}> =
{
    height: 3434,
    width: 4343
}


/* 
{height: number, width: number} => it means keys are height,width and values types are numebr

type Area <T> = {
    [key in keyof T] : T[key] // {t.key -> Keyof t: t.value -> T[key]}
}

*/

