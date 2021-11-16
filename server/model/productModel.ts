

let products  = require('../data/myJson.json');
// console.log(products);


const {v4: uuidv4}  = require("uuid");

import {writeDataToFile} from  "../utils.js";


function findAll(): Promise<unknown>{
    return new Promise((resolve, reject)=>{
        resolve(products);

    })
}
//

function findById(id:number){
    return new Promise((resolve, reject)=>{

        const productId:any  = products.find((p:any)=>p.id == id); 

        resolve(productId);
        
    })
}



function create(product:any){
    return new Promise((resolve, reject)=>{
        const newProduct  = {id:uuidv4(), ...product}
    //pushing in new product to previous products

    products.push(newProduct);
    writeDataToFile('./lib/data/myJson.json', products);
    resolve(newProduct);    

    })
}


//update

function update(id:number,product:any){
    return new Promise((resolve, reject)=>{
        const index =  products.findIndex((p:any)=>p.id ===id);
        products[index]  = {id, ...product}
        const newProduct  = {id:uuidv4(), ...product}
    //pushing in new product to previous products

    products.push(newProduct);
    writeDataToFile('./lib/data/myJson.json', products);
    resolve(products[index]);

    })
}
// remove product

function remove(id:number){
    return new Promise((resolve, reject)=>{
        products = products.filter((p:any)=>p.id !=id)
    writeDataToFile('./lib/data/myJson.json', products);
    resolve("It is written...");

    })
}
module.exports = {
    findAll,
    findById,
    create,
    update,
    remove
}