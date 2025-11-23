// access  modifiers


class BankAccount {

    public readonly userId:string;
    protected name: string;
    protected balance: number;


    constructor(name: string, balance: number){
        this.balance = balance;
        this.name = name;
        this.userId = String(this.generateId());
    }

    generateId(){
        return Math.floor(Math.random()*12);
    }
}

class SavingAccount extends BankAccount{
    // constructor(name: string, balance:number){
    //     super(name, balance);

    // }
    deposit(amount: number){
        this.balance += amount;
    }

    getBalance(){
        return this.balance;
    }
}


