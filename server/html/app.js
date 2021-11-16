

$(document).ready(function(){


    $.ajax({
        url:"http://localhost:3002/api/products",

        type: "GET",

        success:function(data){
            // console.log( data)
            for(let i=0;i<data.results.length;i++){
               
                // auto generated html container and tags 

                $("#stars").append('<div class = "col-md-4 col-sm-4 mb-3">'+
                '<a href ="" id= "actorname'+i+'" class = "link" data-toggle ="modal" data-target = "#myModal"><div class="card">'+
                 '<img src="images/war3.jpg" class="card-img-top img-fluid" alt="star wars images">'+
                       '<div class="card-body"> <button  class= "btn btn-light" value= "'+data.results[i].first_name+'">'+data.results[i].first_name+'</button></div> </div></a></div>');

                    //    --------------------------------------------------------------------------------------

                        // Fetching individual character from the the api by clicking the button
                        // ananymous function

                       function fetchData(name, height, genda){
                         document.getElementById('actorname'+i).addEventListener("click",function(){
                            //    console.log(name+" height: "+height+" Gender: "+genda);
                              document.getElementById("name").innerText = "Name :"+name;
                              document.getElementById("gender").innerText = "gender :"+genda;
                              document.getElementById("height").innerText = "height :"+height;
                               

                           })
                       }
                       fetchData(data.results[i].first_name, data.results[i].last_name,
                        data.results[i].gender);//loop back
            }
        },
         error:function(err){

            console.log(err);
        }
    })
})


