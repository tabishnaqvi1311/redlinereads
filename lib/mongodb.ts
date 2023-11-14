import mongoose from "mongoose";

export async function connectToMongo(){
    try{
       await mongoose.connect(process.env.MONGO_URI!);
    }catch(e){
        console.log(e);
    }
}