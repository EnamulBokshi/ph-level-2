//* Grouping and Aggregating Data

// Scenario: You have a flat array of sales data, and you need to group the sales by category,
// calculating the total revenue and the number of items sold for each.

const sales = [
  { category: "Electronics", item: "Laptop", price: 1200, quantity: 1 },
  { category: "Books", item: "JS Basics", price: 30, quantity: 2 },
  { category: "Electronics", item: "Mouse", price: 25, quantity: 2 },
  { category: "Home", item: "Chair", price: 150, quantity: 1 },
  { category: "Books", item: "React Deep Dive", price: 50, quantity: 1 },
  { category: "Electronics", item: "Keyboard", price: 80, quantity: 1 },
];

//? Output
// {
//   Electronics: {
//     totalRevenue: 1330,
//     itemCount: 4,
//   },
//   Books: {
//     totalRevenue: 110,
//     itemCount: 3,
//   },
//   Home: {
//     totalRevenue: 150,
//     itemCount: 1,
//   },
// };


/**
 * Fist we will initialize an empty object
 * then inserts the category name into it
 * then again we will create an object with total revenue count and item count
 * 
 * 
 * 
 */


const stats = sales.reduce((table, item) => {
    if(table[item.category]){
        table[item.category].totalRevenue += item.price*item.quantity;
        table[item.category].soldCount += item.quantity;
    }
    else{
        const tempSell = {
            totalRevenue: item.price*item.quantity,
            soldCount: item.quantity
        }
        table[item.category] = tempSell;
    }



    return table;

},{})


console.log(stats);


