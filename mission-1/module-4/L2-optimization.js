const USERSIZE = 50000;

let usersA = [];
let usersB = [];


const createUser = (id) => ({id: `user_id${id}`, name: `User ${id}`});

for(let i = 0; i<USERSIZE; i++){
    usersA.push(createUser(i));
    usersB.push(createUser(i + 25000))
}


// Slow approach algorithm

const commonFriendsSlow = (usersA, usersB)=> {
    const startTime = performance.now();

    const commonFriends = [];

    // !O(n^2)
    usersA.forEach(userA => {
        usersB.forEach(userB => {
            if(userA.id === userB.id){
                commonFriends.push(userB);
            }
        })
    })

    const endTime = performance.now();

    return {count: commonFriends.length, timeTook: endTime-startTime};
}



// console.log(commonFriendsSlow(usersA,usersB));



// fast way to do that



const commonFriendsFast = (usersA, usersB)=> {
    const startTime = performance.now();

    const commonFriends = [];

    const idListA = new Set(usersA.map((user) => user.id));

    //? O(n)
    usersB.forEach(userB => {
        //* O(1)
        if(idListA.has(userB.id)){
            commonFriends.push(userB)
        }
    })

    const endTime = performance.now();

    return {count: commonFriends.length, timeTook: endTime-startTime};
}


console.log(commonFriendsFast(usersA,usersB));
