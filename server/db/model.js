const mongodb=require('./config.js');
const Schema=mongodb.Schema;

let adminUser={
    user:String,
    password:String,
    email:String,
    
}


let userSchema=new Schema(adminUser)

let userModel=mongodb.model("userModel",userSchema);

exports.userAPI=userModel;