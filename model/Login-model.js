const mongoose = require("mongoose")

//Schema
 let LoginSchema = new mongoose.Schema({
     email:{
         type:String
     },
     password:{
         type:String
     }
 })

 //model

 let LoginModel = mongoose.model("login",LoginSchema)

 module.exports = LoginModel