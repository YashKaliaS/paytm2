import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    username:{
        type: String,
    },
    firstname:{
        type:String,
    },
    surname:{
        type: String,
    },
    password:{
        type: String,
    },

})
const User =mongoose.model("User",userSchema);
const models = {User};
export default models;
