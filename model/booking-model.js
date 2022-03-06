
const mongoose = require("mongoose")

//Schema
 let BookingSchema = new mongoose.Schema({
     conferenceId:{
         type:mongoose.Schema.Types.ObjectId,
         ref:"organize"
     },
     userId:{
         type:mongoose.Schema.Types.ObjectId,
         ref:"signup"
     },
     userName:{
         type:String
     },
     bcityName:{
         type:String
     }
 })

 //model

 let bookingModel = mongoose.model("booking",BookingSchema)

 module.exports = bookingModel
