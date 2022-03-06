const mongoose = require("mongoose")

//Schema
 let SignupSchema = new mongoose.Schema({
     userName:{
         type:String
     },
     email:{
         type:String
     },
     password:{
         type:String
     }
 })

 //model

 let SignupModel = mongoose.model("signup",SignupSchema)

 module.exports = SignupModel