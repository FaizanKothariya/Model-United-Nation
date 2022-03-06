const mongoose = require("mongoose")

//Schema
let PaymentSchema = new mongoose.Schema({
    bookingId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"booking"
    },
    seatNumber:{
        type:Number
    },
    conferenceId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"organize"
    },
    upiPayment:{
        type:Number
    },
    cardPayment:{
        type:Number
    },
    netBanking:{
        type:Number
    }
})

//model

let paymentModel = mongoose.model("payment",PaymentSchema)

module.exports= paymentModel