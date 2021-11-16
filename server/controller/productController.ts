
/**
 * get all products
 * @route api/product
 */
 import { IncomingMessage, ServerResponse } from "http";
 
let Product = require("../model/productModel.js");
const {getPostData} = require("../utils.js")

const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
    'Access-Control-Max-Age': 2592000, // 30 days
    "Content-type":"application/json"
    /** add other headers as per requirement */
  };

async function getProduct(req: IncomingMessage, res: ServerResponse) {

    
    try{
        const product  = await Product.findAll();
        res.writeHead(200, headers);
        res.write(JSON.stringify(product));
        res.end();

    }catch(err){
        console.error(err);
    }
}

/**
 * get  product by id
 * @route api/product
 */

 async function getProductById(req:IncomingMessage,res: ServerResponse, id:number) {
 
     const productById  = await Product.findById(id);

   
     try{
        if(!productById){

            res.writeHead(404,headers);
            res.end(JSON.stringify("product  you are looking for does not exist")); 
    
         }else{
            res.writeHead(200,{"Content-type":"application/json"});
            res.write(JSON.stringify(productById));
            res.end()
         }
     }catch(err){
         console.error(err);
     }
 }


 /**
  * 
  * @param 
  * @param  
  */

 async function createProduct(req:IncomingMessage,res: ServerResponse) {
 
    try{
        let body  =  await getPostData(req);

        const {productName, productDescription, productVarieties:[
            {size,color,quantity,images,price}
        ],dateUploaded,dateEdited}  = JSON.parse(body);

         const newProductList = {
      
            productName,
            productDescription,
            productVarieties:[
                {
                size,
                color,
                quantity,
                images,
                price
            },
            {
                size,
                color,
                quantity,
                images,
                price
            }
        ],
        dateUploaded,
        dateEdited
              
        }

        const newProduct = await Product.create(newProductList);

        res.writeHead(201,headers)// 201 means created
        return res.end(JSON.stringify(newProduct));

    
        
       

    }catch(err){
        console.error(err);
    }
}


// update product

async function updateProductById(req:IncomingMessage,res: ServerResponse, id:number) {
 
    try{

        const product  = await Product.findById(id);

        if(!product){
            res.writeHead(404, headers);
            res.end(JSON.stringify("product  you are looking for does not exist")); 
        }else{

        
        const body  =  await getPostData(req);
        const {productName, productDescription, productVarieties:[
            {size,color,quantity,images,price}
        ],dateUploaded,dateEdited}  = JSON.parse(body);
        
         const updateProductList = {
      
            productName:productName || product.productName,
            productDescription:productDescription || product.productDescription,
            productVarieties:[
                {
                size:size ||product.size,
                color:color||product.color,
                quantity:quantity||product.quantity,
                images:images ||product.images,
                price:price|| product.price
            },
            {
                size:size ||product.size,
                color:color||product.color,
                quantity:quantity||product.quantity,
                images:images ||product.images,
                price:price|| product.price
            }
        ],
        dateUploaded:dateUploaded,
        dateEdited:dateEdited||product.dateEdited
        }

        const updateProduct = await Product.update(id, updateProductList);

        res.writeHead(200,headers)// 201 means created
        return res.end(JSON.stringify(updateProduct));
        }   
    }catch(err){
        console.error(err);
    }
}


// remove product from the lists of products

async function removeProductById(req:IncomingMessage,res: ServerResponse, id:number) {
 
    try{

        const product  = await Product.findById(id);

        if(!product){
            res.writeHead(404,headers);
            res.end(JSON.stringify("product  you are looking for does not exist")); 
        }else{

          await Product.remove(id);

        res.writeHead(200, )// 201 means created
        res.end(JSON.stringify(`Product with ${id} has been removed`));
        }   
    }catch(err){
        console.error(err);
    }
}

module.exports = {
    getProduct, 
    getProductById,
    createProduct,
    updateProductById,
    removeProductById
}