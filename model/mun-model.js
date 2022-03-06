const { type } = require("express/lib/response")
const mongoose = require("mongoose")

//Schema
 let MunSchema = new mongoose.Schema({
     munName:{
         type:String
     },
     seats:{
         type:Number
     },
     commitee:{
         type:mongoose.Schema.Types.ObjectId,
         ref:"commitee"
     },
     cityName:{
         type:String
     },
     munItnary:{
         type:Number
     }
 })

 //model

 let munModel = mongoose.model("mun",MunSchema)

 module.exports = munModel