import inquirer from 'inquirer'
import qr from 'qr-image'
import fs from 'fs'
import { error } from 'console';
inquirer
.prompt([
    {message:"Pass the URL",
    name:"URL"}
])
.then((answers)=>{
    const url=answers.URL;
     var qri=qr.image(url);
     qri.pipe(fs.createWriteStream("./qr_image.png"));
     fs.writeFile("./qrfile.txt",url,(err)=>{ 
         if(err){
            throw err;
         } 
         console.log("file")
     })
})
.catch((error)=>{
    if(error.isTtyError){

    }
    else{

    }
})