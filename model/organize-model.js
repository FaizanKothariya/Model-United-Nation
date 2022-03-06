const mongoose = require("mongoose")

//schema

let OrganizedetailSchema = new mongoose.Schema ({
    conferenceName:{
        type:String
    },
    detail:{
        type:String
    },
    photo:{
        type:String
    },
    video:{
        type:String
    },
    venue:{
        type:String
    },
    startDate:{
        type:Date
    },
    time:{
        type:String
    },
    description:{
        type:String
    }

})

//model

let organizedetailModel = mongoose.model("organize",OrganizedetailSchema)

module.exports = organizedetailModel