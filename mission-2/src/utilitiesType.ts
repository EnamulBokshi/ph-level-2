// utitly types



type Product = {
    id: number;
    name: string;
    price: number;
    stock: number;
    color?: string;
}


// let's create summery type of Product type

// one was 

type summeryProduct = {
    id: number;
    name: string;

    price: number;
}


// we can create the same summery in oneline


type oneLineSummeryCreate = Pick<Product, 'id' | 'name' | 'price' >



// let's say we need to create a new product type where we don't need the color property

type ProdutWithOutColor = Omit<Product, 'color' >

/*
type ProdutWithOutColor = {
    id: number;
    name: string;
    price: number;
    stock: number;
}
*/


// let's make the color a must property


type ProductWithColor = Required<Product>



/**
 * 
 * 
 type ProductWithColor = {
    id: number;
    name: string;
    price: number;
    stock: number;
    color: string;
}
 */


// lets say we want to make type of a product where every property is optional

type ProductWithALlOptionalProperty = Partial<Product>;