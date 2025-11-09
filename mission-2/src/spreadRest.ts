// spread Operator

const friends = ['Rahim', 'Karim'];
const schooldsFriends = ['pitu','jhontu','boltu'];

const collegeFriends = ['mr.smart','Kuddus YT', 'Kella Baba'];


// friends.push(schooldsFriends) into string we are trying to push a string of array

friends.push(...schooldsFriends); // use spread  operator

friends.push(...collegeFriends)



// object operator:



const user ={name:"hello budai", phoneNo: "343434"};

const otherInfo = {hobby: 'outing', favouriteColor: "Black"};

const userInfo = {...user, ...otherInfo};


// Rest Operator


const summation = (...elements:number[])=>{
    const sum:number = 0;

    elements.forEach((elem):number=>{
        return sum+elem;
    })
}

console.log("Result: ", summation(1,23,4,34,34,34));




