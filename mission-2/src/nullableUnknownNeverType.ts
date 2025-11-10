// nullable type

const getUser = (input: string) =>{
    if(input) console.log(`user founded ${input}`);
    else console.log('someting here');
}


// console.log(getUser(null))


// Unknown

const discountCalculator = (input:unknown)=>{
    if(typeof input === "number"){
        return input*.1;
    }

    else if(typeof input === "string"){
        // const tk:any = input.split(" ")[0];
        const [tk] = input.split(" ");
        console.log(Number(tk));
    } 
}

discountCalculator(100)
discountCalculator("100 tk");
discountCalculator(null);