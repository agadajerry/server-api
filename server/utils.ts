

const fs = require('fs');
//write to file...

export function writeDataToFile(filePath:any,content:any){

    fs.writeFileSync(filePath, JSON.stringify(content),"utf8",(err:string)=>{
        if(err){
            console.error(err+"err message");
        }
    })
}

/**
 * get post data
 * 
 */
function getPostData(req:any){
    return new Promise((resolve,reject)=>{
       try{

        let body ="";
         req.on("data",(chunk:any)=>{
            body+= chunk.toString();
         })

         req.on("end", ()=>{
             resolve(body);
         })

        }catch(err){
            reject(err);
        }
    })
}

module.exports = {
    writeDataToFile,
    getPostData
}