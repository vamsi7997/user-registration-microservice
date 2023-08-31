import  dotenv from "dotenv";
import {MongoClient} from "mongodb"
import { User } from "./models";

let connection_string=process.env.DB_URL
const client=new MongoClient("mongodb+srv://v9492048236:wbn7EPRsb8SsJroL@cluster0.zlpjx0d.mongodb.net/");

let connec:any;
try{
client.connect()
}
catch(e){
    console.log(e,"error");
    
}

export const createDB=async (db_name:string)=>{
    return await connec.db(db_name)

}

export const addUserToDb=async(collectionname:string,userData:User)=>{

    return await client.db(collectionname).collection('userregistered').insertOne(userData);


}

export const getAllUser=async (collectionname:string)=>{

    return await client.db(collectionname).collection('userregistered').find({}).toArray();

}