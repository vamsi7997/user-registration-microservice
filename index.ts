import express,{Express,Request,Response} from "express";
import  dotenv from "dotenv";
import {MongoClient} from "mongodb"
import { User } from "./models";
import { createUserId } from "./autoservices";
import { addUserToDb,getAllUser } from "./database.service";
import bodyParser, {BodyParser} from "body-parser"

dotenv.config();
let jsonParser=bodyParser.json()
let port=process.env.PORT

const app:Express=express()
app.listen(port)



app.post("/create",jsonParser,async (req:any,res:Response)=>{
    console.log(req.body,"request1111");
    
    let newuser={
        name:req.body.name,age:req.body?.age,email:req.body.email,mobilenumber:req.body.mobilenumber,aadhar:req.body.aadhar,
        userId:createUserId(req.body.name)
    }
    try{
       let r= await addUserToDb('register_users',newuser)
       console.log(r,"data");
       res.send(newuser)
       

    }
    catch(e){
        console.log('error at adding data');
        
    }
    
})

//getAllUsersRegistered
app.get("/users",async (req:Request,res:Response)=>{
    var allusers=await getAllUser('register_users')
    res.send({
        statusCode:200,
        ok:true,
        data:allusers
    })

})