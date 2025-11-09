

const array = [2,7,11,10,15];

const target = 9;

const findTwoSumIndex = (arr,target) => {

    const elements = new Map();

    for(let i = 0; i<arr.length; i++){

        let complement = target-arr[i];

        if(elements.has(complement)){
            return [elements.get(complement), i];
        }

        elements.set(arr[i],i);
    }

    return undefined;
}

console.log(findTwoSumIndex(array,target));