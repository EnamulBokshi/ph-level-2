

const isPalinDrom = (string)=>{
    let normalized = string.toLowerCase().replace(/[^a-z0-9]/g,"");

    let reversed = normalized.split("").reverse().join("");

    if(normalized === reversed){
        return true;
    }

    return false;
}


// console.log(isPalinDrom("lol"))


const isPalindromeTwoPointerMethod = (string)=>{
    let normalized = string.toLowerCase().replace(/[^a-z0-9]/g,"");
    
    let left = 0, right = normalized.length-1;

    while(left<right){
        
        if(normalized[left] !== normalized[right]){
            return false;
        }

        left++;
        right--;
    }

    return true;
}


console.log(isPalindromeTwoPointerMethod("level"))
