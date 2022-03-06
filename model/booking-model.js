
const mongoose = require("mongoose")

//Schema
 let BookingSchema = new mongoose.Schema({
     userName:{
         type:String
     },
     bcityName:{
         type:String
     },
     mun:{
         type:mongoose.Schema.Types.ObjectId,
         ref:"mun"
     }
 })

 //model

 let bookingModel = mongoose.model("booking",BookingSchema)

 module.exports = bookingModel
