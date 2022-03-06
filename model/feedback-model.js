const mongoose = require("mongoose")

//Schema


let FeedbackSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"role"
    },
    userName:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"signup"
    },
    rating:{
        type:Number
    },
    comment:{
        type:String
    },
    question:{
        type:String
    },
    answer:{
        type:String
    }
})

//model
let FeedbackModel =  mongoose.model("feedback",FeedbackSchema)

module.exports= FeedbackModel