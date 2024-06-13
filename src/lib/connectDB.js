import mongoose from "mongoose";

export default async () => {
    try{
        const DB_OPTIONS = {
            dbName: process.env.DBNAME
        }
        await mongoose.connect(process.env.DATABASE_URL, DB_OPTIONS)
        console.log('Connected Successfully!')    
    }
    
    catch(err){
        console.log(err)
    }
}