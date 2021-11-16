
let form = document.getElementById("form");
let submit = document.getElementById("submit");
let productName = document.getElementById("productName");
let size = document.getElementById("size");
let quantity = document.getElementById("quantity");
let price = document.getElementById("price");
let productdescription = document.getElementById("productdescription");
let image = document.getElementById("image");
let color = document.getElementById("color");

let api_url ="http://localhost:2001/jerry/api";

submit.addEventListener("click",(e)=>{

//         e.preventDefault();
// fetch(api_url,{
//     method:"POST",
//     body:JSON.stringify({

//         productName:productName,
//             productDescription:productdescription,
//             productVarieties:[
//                 {
//                 size:size,
//                 color:color,
//                 quantity:quantity,
//                 images:image,
//                 price:price
//             }
           
//         ],
//         dateUploaded: new Date(),
//         dateEdited:new Date()
//     }),
//     headers:{

//         "Content-Type":"application/json; charset=UTF-8"
//     }
// }).then((Response)=>{
//     console.log( Response.json())
// }).then((ok)=>{
//    if(ok){
//        alert("fine");
//    }
// })
fetchData();
})

function fetchData(){
    let api_url ="http://localhost:2001/jerry/api";

fetch(api_url)
  .then(response => response.json())
  .then(data => console.log(data));

 form.addEventListener("submit",(e)=>{
     e.preventDefault();

     const formData = new FormData();
 })
}