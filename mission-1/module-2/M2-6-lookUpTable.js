// Look up table is imort to reduce time complexity of searching 



/* 
    Suppose we want to find out a user data from an array of object. we can implement it using regular array methods
    such as filter or find
    
    if we use find method, then in worst case it's gonna take n**2 time.

    And it's also not efficient and not applicable with large dataset.
    Instead we can create a look-up table, which is a object. It is best to use look-up table for data searching showing ,
    monitoring etc.


*/

const postsArray = [
  { id: "p-101", title: "Intro to SQL", author: "Alex" },
  { id: "p-102", title: "Data Structures in JS", author: "Beth" },
  { id: "p-103", title: "Understanding Reduce", author: "Chris" },
  { id: "p-104", title: "CSS Grid Tricks", author: "Alex" },
];


const lookupTable = postsArray.reduce((table, user)=> {
    table[user.id] = user;
    return table;
}, {});



/**
 * Suppose we want to find out user with id: "p-104". In this case if we use find method on postsArray, somathing like  below
 * ! const user104 = postsArray.find(user=>user.id === "p-104")
 * ! it's time complexity n**2, and not recommended to use. Instead, using lookuptable we can do the same thing with O(1) complexity
 */

const user1014 = postsArray.find(user=>user.id === "p-104") // ! O(n**2);

const user104 = lookupTable['p-104'] // * O(1)
