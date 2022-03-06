
const mongoose = require("mongoose")

//Schema
 let BookingsummarySchema = new mongoose.Schema({
     booking:{
         type:mongoose.Schema.Types.ObjectId,
         ref:"booking"
     },
     bseatNumber:{
         type:Number
     },
     conferenceId:{
         type:mongoose.Schema.Types.ObjectId,
         ref:"organize"
     },
     buserName:{
         type:String
     },
     bemail:{
         type:String
     },
     bvenue:{
         type:String
     },
     bstartDate:{
         type:Date
     },
     btime:{
         type:String
     }
 })

 //model

 let bookingsummaryModel = mongoose.model("bookingsammary", BookingsummarySchema)

 module.exports = bookingsummaryModel
