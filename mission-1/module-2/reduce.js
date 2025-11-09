
// Count subtotal
const cartItems = [
    {id: "p-001", name: "Daraz Laptop Bag", price: 1500, quantity: 1},
    {id: "p-002", name: "QKZ ZSN pro x", price: 2000, quantity: 2},
    {id: "p-003", name: "Apple airpod gen 2", price: 1200, quantity: 3},
    {id: "p-004", name: "Hyper x cloud 5", price: 3000, quantity: 1}
];

/**
 * Reducer is a powerfull tool and we must comfortable with it.
 * 
 *  ? const subtotal = cartItems.reduce((acc,item)=>{},0);
 *  * acc means accumulator, the updated calculation for each iteration
 *  * item means, each iteration's value or items can be found here
 *  * 0 means we are expecting a number, if we expected a object then we must provide a empty object
 *  
 */

const subtotal = cartItems.reduce((subtotal,product)=>{
    // console.log(subtotal, " : ", product)

    return subtotal + (product.price * product.quantity) 

},0);

/**
 * * OUTPUT of the above reduce
0  :  { id: 'p-001', name: 'Daraz Laptop Bag', price: 1500, quantity: 1 }
1500  :  { id: 'p-002', name: 'QKZ ZSN pro x', price: 2000, quantity: 2 }
5500  :  { id: 'p-003', name: 'Apple airpod gen 2', price: 1200, quantity: 3 }
9100  :  { id: 'p-004', name: 'Hyper x cloud 5', price: 3000, quantity: 1 }
 */



// Find bet player using reducer

const players = [
    {name: "Jamal Bhuyan", score: 88},
    {name: "Neymar Junior", score: 100},
    {name: "Ronal Dinhu", score: 98},
    {name: "Patoari saheb", score: 77},
    {name: "Ronaldo ", score: 20},
];


const bestPlayer = players.reduce((bestScorer, player) => {
    console.log(bestScorer, player)
    if(bestScorer.score > player.score){
        return bestScorer;
    }
    return player;
}, players[0])


console.log(bestPlayer);

