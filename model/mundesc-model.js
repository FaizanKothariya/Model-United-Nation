
const mongoose = require("mongoose")

//Schema
 let MundescSchema = new mongoose.Schema({
     mun:{
         type:mongoose.Schema.Types.ObjectId,
         ref:"mun"
     },
     mDescription:{
         type:String
     },
     mPhoto:{
         type:String
     },
     mVideo:{
         type:String
     },
     mstartDate:{
         type:Date
     },
     mVenue:{
         type:String
     },
     mTime:{
        vtype:String
     },
     adminId:{
         type:mongoose.Schema.Types.ObjectId,
         ref:"role"
     },
     adminPassword:{
         type:String
     }
 })

 //model

 let mundescModel = mongoose.model("mundesc",MundescSchema)

 module.exports = mundescModel
