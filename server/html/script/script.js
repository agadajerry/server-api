
let form = document.getElementById("form");
let submit = document.getElementById("submit");
let productName = document.getElementById("productName");
let size = document.getElementById("size");
let quantity = document.getElementById("quantity");
let price = document.getElementById("price");
let productdescription = document.getElementById("productdescription");
let image = document.getElementById("image");
let color = document.getElementById("color");
let url ="https://jerrysofttechy-server.herokuapp.com/api/products";

submit.addEventListener("click",(e)=>{
     e.preventDefault();

fetch(url,{
    method:"POST",
    body:JSON.stringify({

        productName:productName,
            productDescription:productdescription,
            productVarieties:[
                {
                size:size,
                color:color,
                quantity:quantity,
                images:image,
                price:price
            }
           
        ],
        dateUploaded: new Date(),
        dateEdited:new Date()
    }),
    headers:{

        "Content-Type":"application/json; charset=UTF-8"
    }
}).then((Response)=>{
    Response.json();
}).then((ok)=>{
    console.log(ok);
})
})