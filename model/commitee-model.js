const mongoose = require("mongoose")

//schema
let CommiteeSchema = new mongoose.Schema ({
    commiteeName:{
        type:String
    },
    commitee_seats:{
        type:Number
    },
    cDetail:{
        type:String
    },
    cPhoto:{
        type:String
    },
    cVideo:{
        type:String
    },
    cStartDate:{
        type:Date
    },
    cTime:{
        type:String
    },
    cDescription:{
        type:String
    }

})

//model

let commiteeModel = mongoose.model("commitee",CommiteeSchema)

module.exports = commiteeModel