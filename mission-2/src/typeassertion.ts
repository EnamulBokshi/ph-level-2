 let anything : any;

//  anything = 222;

// ( anything as number).toFixed

anything = 'Enamul';

const kgToGMConverter = (input: string | number) : string | number | undefined =>{
    if(typeof input === 'number'){
        return input*1000;
    } 
    else if(typeof input === 'string'){
        const [value] = input.split("");
        return `Converted output is: ${Number(value)*1000}`
    }
    else return undefined;
}




const result1 = kgToGMConverter(100) as number;
console.log(result1);

const result2 = kgToGMConverter('100 kg') as string;

console.log(result2)
