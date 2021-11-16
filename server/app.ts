import http, { IncomingMessage, Server, ServerResponse } from "http";
// const hostname = '127.0.0.1';

const {
   getProduct, 
   getProductById,
   createProduct,
   updateProductById,
   removeProductById }  =  require("./controller/productController.js")
/*
implement your server code here
*/



const port = process.env.PORT || 2001

let server :Server = http.createServer((req: IncomingMessage, res: ServerResponse)=>{
   
    
    if(req.url =="/api/products" && req.method=="GET"){
     getProduct(req,res);

   }
   //get product by id
   else if(req.url?.match(/\/api\/products\/([0-9]+)/)  && req.method==="GET"){
         
         const id = req.url.split("/")[3]
         getProductById(req,res,id); 

   }
   //insert new Product
   else if(req.url ==="/api/products" && req.method==="POST"){

      createProduct(req,res);//

   }
    //Update product via id
   else if(req.url?.match(/\/api\/products\/([0-9]+)/)  && req.method==="PUT"){
      
      const id = req.url.split("/")[3]
     updateProductById(req,res, id)

}
 // remove product by id
else if(req.url?.match(/\/api\/products\/([0-9]+)/)  && req.method==="DELETE"){
      
   const id = req.url.split("/")[3]
  removeProductById(req,res, id)

}

else{
      res.writeHead(404,{"Content-type":"application/json"});

      res.write(JSON.stringify("product Not found..."));
   }
 })


 server.listen(port,()=>{
//   console.log(`server is running at port ${port} -> ${hostname}`);
})
