class Stack{
    constructor(){
        this.stack = [];
        this.top = 0;
    }

    push(value){
        this.stack.push(value);
        this.top++;
        return true;
    }

    pop(value){
        if(this.top === 0){
            return undefined;
        }
        this.top --;
        return this.stack.pop();

    }

    isEmpty(){
        return this.stack.length === 0;
    }

    peek(){
        return this.stack[this.stack.length-1];
    }


}


const parenthesisChecker = (parenthesis)=>{
    const stack = new Stack();

    // parenthesis.forEach(ch => {
        
    // });

    const charList = {
        ")":"(",
        "}":"{",
        "]":"["
    }

    for(let ch of parenthesis){

        if(ch === '(' || ch === '[' || ch === '{') {
            
            stack.push(ch)
        }

     

        if(ch === ')' || ch === '}' || ch === ']'){
            if(stack.isEmpty() || stack.pop(ch) !== charList[ch])
            {
                return false
            }
        }

    }


    return stack.isEmpty();

}


console.log(parenthesisChecker(")"))

