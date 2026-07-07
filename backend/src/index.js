import dotenv from "dotenv";
import ConnectDB from "./config/database.js";
import app from "./app.js";

dotenv.config();

const startServer= async()=>{
    try {
        await ConnectDB();

        app.on("error",(error) =>{
            console.log("ERROR",error);
            throw error;

        });

        app.listen(process.env.PORT || 8000,() =>{
            console.log(`Serever is running on port: ${process.env.PORT}`);
        })
    } catch (error) {
        console.log("MongoDb Connection failed",error);
    }
}

startServer();
