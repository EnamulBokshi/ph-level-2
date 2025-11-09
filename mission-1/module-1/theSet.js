// const list = new Set();

// list.add("apple");
// list.add("banana");
// list.add("mango");
// list.add("apple");

// console.log(list)
// console.log(list.size)

const visitor = new Set();
// Our registerd users
const enamul = {userName: "Enamul"};
const asif = {userName: "Asif"};
const tonmoy = {userName: "Tonmoy"};

// let's add visitors to visitor list (set)
visitor.add(enamul);
visitor.add(asif);
visitor.add(tonmoy);
// let's add a user who already visited the our site
visitor.add(enamul);

// As set holds only unique instances, though we have 4 visits, our site has only 3 unique visitors
console.log(visitor.size);


