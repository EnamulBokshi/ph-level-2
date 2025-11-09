//* Grouping and Aggregating Data

// Scenario: Count every survey and group by response

//? input
const surveyResponses = [
  "A",
  "C",
  "B",
  "A",
  "B",
  "B",
  "C",
  "A",
  "B",
  "D",
  "A",
  "C",
  "B",
  "A",
];

//? Output
// { A: 5, C: 3, B: 5, D: 1 }

/**
 * Algorithm
 * initiate an empty array
 * then check if the item alreay exists or not.
 * if exists then increment the count
 * it not then initialize with 1
 * 
 */

const count = surveyResponses.reduce((table, item) => {
    // if(table[item]){
    //     table[item] += 1;
    // } 
    // else{
    //     table[item] = 1;
    // }

    // we can do the same thing in one line

    table[item]= (table[item] || 0) + 1;
    return table;
},{})

console.log(count);