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


const counted = surveyResponses.reduce((count, response) => {
    count[response] = count[response]+1
    return count;
    
}, surveyResponses.reduce((c,items) => { 
    c[items] = 0;
    return c;
} , {}) );


console.log(counted)