const products = [
  { "id": "P001", "productName": "Wireless Mouse", "category": "Electronics", "price": 15.99, "rating": 4.3, "stock": 120 },
  { "id": "P002", "productName": "Mechanical Keyboard", "category": "Electronics", "price": 49.99, "rating": 4.7, "stock": 60 },
  { "id": "P003", "productName": "Gaming Headset", "category": "Electronics", "price": 39.50, "rating": 4.4, "stock": 200 },
  { "id": "P004", "productName": "Bluetooth Speaker", "category": "Electronics", "price": 29.99, "rating": 4.5, "stock": 85 },
  { "id": "P005", "productName": "LED Monitor 24-inch", "category": "Electronics", "price": 119.99, "rating": 4.6, "stock": 45 },

  { "id": "P006", "productName": "Office Chair", "category": "Furniture", "price": 89.99, "rating": 4.2, "stock": 70 },
  { "id": "P007", "productName": "Study Table", "category": "Furniture", "price": 149.99, "rating": 4.5, "stock": 30 },
  { "id": "P008", "productName": "Bookshelf 5-Tier", "category": "Furniture", "price": 99.99, "rating": 4.3, "stock": 55 },
  { "id": "P009", "productName": "Recliner Sofa", "category": "Furniture", "price": 399.99, "rating": 4.6, "stock": 25 },
  { "id": "P010", "productName": "Bedside Lamp", "category": "Furniture", "price": 24.99, "rating": 4.1, "stock": 115 },

  { "id": "P011", "productName": "Running Shoes", "category": "Fashion", "price": 59.90, "rating": 4.5, "stock": 90 },
  { "id": "P012", "productName": "Men's Jacket", "category": "Fashion", "price": 79.99, "rating": 4.3, "stock": 70 },
  { "id": "P013", "productName": "Women's Handbag", "category": "Fashion", "price": 45.50, "rating": 4.4, "stock": 140 },
  { "id": "P014", "productName": "Sunglasses", "category": "Fashion", "price": 19.99, "rating": 4.2, "stock": 200 },
  { "id": "P015", "productName": "T-Shirt Pack (3 pcs)", "category": "Fashion", "price": 24.99, "rating": 4.0, "stock": 180 },

  { "id": "P016", "productName": "Coffee Maker", "category": "Home Appliances", "price": 79.50, "rating": 4.4, "stock": 40 },
  { "id": "P017", "productName": "Electric Kettle", "category": "Home Appliances", "price": 18.99, "rating": 4.3, "stock": 95 },
  { "id": "P018", "productName": "Blender Machine", "category": "Home Appliances", "price": 32.99, "rating": 4.2, "stock": 60 },
  { "id": "P020", "productName": "Vacuum Cleaner", "category": "Home Appliances", "price": 149.99, "rating": 4.5, "stock": 35 },

  { "id": "P021", "productName": "Football", "category": "Sports", "price": 14.50, "rating": 4.4, "stock": 150 },
  { "id": "P022", "productName": "Cricket Bat", "category": "Sports", "price": 49.99, "rating": 4.3, "stock": 85 },
  { "id": "P023", "productName": "Badminton Racket", "category": "Sports", "price": 24.99, "rating": 4.1, "stock": 125 },
  { "id": "P024", "productName": "Yoga Mat", "category": "Sports", "price": 17.50, "rating": 4.5, "stock": 160 },
  { "id": "P025", "productName": "Dumbbell Set", "category": "Sports", "price": 59.99, "rating": 4.6, "stock": 40 },

  { "id": "P026", "productName": "Cookware Set (5 pcs)", "category": "Kitchen", "price": 34.99, "rating": 4.3, "stock": 85 },
  { "id": "P027", "productName": "Cutlery Set (24 pcs)", "category": "Kitchen", "price": 28.99, "rating": 4.4, "stock": 120 },
  { "id": "P028", "productName": "Non-stick Frying Pan", "category": "Kitchen", "price": 19.99, "rating": 4.2, "stock": 100 },
  { "id": "P029", "productName": "Water Purifier", "category": "Kitchen", "price": 149.49, "rating": 4.5, "stock": 30 },
  { "id": "P030", "productName": "Microwave Oven", "category": "Kitchen", "price": 199.99, "rating": 4.6, "stock": 35 },

  { "id": "P031", "productName": "Notebook A5", "category": "Stationery", "price": 3.50, "rating": 4.1, "stock": 300 },
  { "id": "P032", "productName": "Gel Pen Pack (10 pcs)", "category": "Stationery", "price": 4.99, "rating": 4.3, "stock": 250 },
  { "id": "P033", "productName": "Highlighter Set", "category": "Stationery", "price": 6.50, "rating": 4.2, "stock": 180 },
  { "id": "P034", "productName": "Office File Organizer", "category": "Stationery", "price": 12.99, "rating": 4.4, "stock": 75 },
  { "id": "P035", "productName": "Scientific Calculator", "category": "Stationery", "price": 19.99, "rating": 4.5, "stock": 95 },

  { "id": "P036", "productName": "Smartphone Case", "category": "Accessories", "price": 9.99, "rating": 4.3, "stock": 310 },
  { "id": "P037", "productName": "USB-C Cable", "category": "Accessories", "price": 5.99, "rating": 4.4, "stock": 280 },
  { "id": "P038", "productName": "Power Bank 10000mAh", "category": "Accessories", "price": 24.99, "rating": 4.5, "stock": 120 },
  { "id": "P039", "productName": "Wireless Charger", "category": "Accessories", "price": 17.99, "rating": 4.3, "stock": 95 },
  { "id": "P040", "productName": "Smart Watch Band", "category": "Accessories", "price": 8.99, "rating": 4.1, "stock": 140 },

  { "id": "P041", "productName": "Teddy Bear", "category": "Toys", "price": 14.99, "rating": 4.4, "stock": 200 },
  { "id": "P042", "productName": "Building Blocks Set", "category": "Toys", "price": 29.99, "rating": 4.6, "stock": 90 },
  { "id": "P043", "productName": "Remote Car", "category": "Toys", "price": 24.50, "rating": 4.3, "stock": 75 },
  { "id": "P044", "productName": "Puzzle Game", "category": "Toys", "price": 9.99, "rating": 4.1, "stock": 110 },
  { "id": "P045", "productName": "Action Figure", "category": "Toys", "price": 19.99, "rating": 4.2, "stock": 95 },

  { "id": "P046", "productName": "Shampoo 400ml", "category": "Beauty", "price": 6.99, "rating": 4.3, "stock": 180 },
  { "id": "P047", "productName": "Face Cream", "category": "Beauty", "price": 12.99, "rating": 4.4, "stock": 140 },
  { "id": "P048", "productName": "Perfume 100ml", "category": "Beauty", "price": 29.99, "rating": 4.5, "stock": 70 },
  { "id": "P049", "productName": "Lipstick", "category": "Beauty", "price": 8.50, "rating": 4.2, "stock": 160 },
  { "id": "P050", "productName": "Hair Dryer", "category": "Beauty", "price": 22.99, "rating": 4.4, "stock": 55 }
]





// Objectives
/**
 * We want to find out 3 top rated electronis products' name
 * [{name: "Phone"}, {name: "Smart watch"}]
 * 
 * ?? how can we do that?
 *  * procedures
 *  * Filter => Electronics
 *  * Sort by => Rating
 *  * Slice => first 3 (top 3)
 *  ?? Map => transform object shape to {name: "Title"}
 * 
 *  */ 

// Creating workflow pipeline to implement above algorithm
const topProductsName = products.filter(product => product.category == "Electronics")
.sort((a,b) => b.rating - a.rating)
.slice(0,3)
.map(item => {
  return {name: item.productName}
})
;


console.log(topProductsName);

