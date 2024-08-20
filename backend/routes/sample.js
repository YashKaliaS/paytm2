import { connectToDB } from "../lib/connectToDB.js";
async function connect(){
    await connectToDB();
    console.log("Reached connect end")
} 
connect()
