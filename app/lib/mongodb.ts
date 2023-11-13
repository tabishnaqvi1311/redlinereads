import { MongoClient, Db } from "mongodb";

declare global {
    interface Global {
      _mongoClient: MongoClient;
    }
  }

const uri: string= process.env.NEXT_ATLAS_URI;


let mongoClient: MongoClient | null = null;
let db: Db | null = null;

if(!process.env.NEXT_ATLAS_URI) throw new Error("Please add nextAtlasURI");

export async function connectToMongo(){
    try{
        //return if already connected
        if(mongoClient && db) return {mongoClient, db};
        //connecton doesnt exist and we are in developement mode
        if(process.env.NODE_ENV === "development"){
            //check if we have a cached session
            if(!global._mongoClient){
                mongoClient = await (new MongoClient(uri)).connect();
                global._mongoClient = mongoClient;
            }
            else mongoClient = global._mongoClient;
        }
        else mongoClient = await (new MongoClient(uri)).connect();
        db = await mongoClient?.db(process.env.NEXT_ATLAS_DATABASE);
        return {mongoClient, db};
    }catch(e){
        console.log(e);
    }
}