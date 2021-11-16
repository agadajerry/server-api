
let form = document.getElementById("form");
let submit = document.getElementById("submit");
let productName = document.getElementById("productName");
let size = document.getElementById("size");
let quantity = document.getElementById("quantity");
let price = document.getElementById("price");
let productdescription = document.getElementById("productdescription");
let image = document.getElementById("image");
let color = document.getElementById("color");


submit.addEventListener("click",(e)=>{
     e.preventDefault();

fetch("http://localhost:3002/api/products",{
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