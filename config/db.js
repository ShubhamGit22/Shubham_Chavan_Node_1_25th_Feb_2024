import mongoose from "mongoose"

const mongoDbUrl = `mongodb://127.0.0.1:27017/blogapp`


async function dbConnection(){
    try{
        let resp = await mongoose.connect(mongoDbUrl);
        console.log("Database Connected Successfully...");
    }catch(error){
        console.log("Error while Database Connecting...",error)
    }
}


export default dbConnection;