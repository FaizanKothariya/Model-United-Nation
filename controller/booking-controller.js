const bookingModel = require("../model/booking-model")

module.exports.addbooking = function(req,res){
    let conferenceId = req.body.conferenceId
    let userId = req.body.userId
    let userName = req.body.userName
    let bcityName = req.body.bcityName
    

    let booking= new bookingModel({
        conferenceId:conferenceId,
        userId:userId,
        userName:userName,
        bcityName:bcityName
    })
   booking.save(function (err, data){
        if(err){
            res.json({msg:"SMW", data:err, status: -1 })
        }else{
            res.json({msg:"booking create" , data: data , status: 200})
        }
    })
}

module.exports.displaybooking= function(req,res){
    bookingModel.find(function(err,data){
      if(err){
          res.json({msg:"SMW", data: err , status: -1})
     }else{
          res.json({msg:"booking details are here..." , data: data , status: 200})
      }
     })
 }

 module.exports.deletebooking = function(req,res){
    let bookingId = req.params.bookingId

    bookingModel.deleteOne({_id: bookingId}, function(err,success){
        if(err){
            res.json({msg:"SMW" , data: err , status: -1})
        }else{
            res.json({msg:"removed....." , data: success , status: 200})
        }
    })
}

module.exports.updatebooking = function(req,res){
    let parambookingId = req.body.bookingId
    let paramconferenceId = req.body.conferenceId
    let paramuserId = req.body.userId
    let paramuserName = req.body.userName
    let parambcityName = req.body.bcityName
    
   bookingModel.updateOne({_id: parambookingId}, {conferenceId:paramconferenceId,userId:paramuserId,userName:paramuserName, bcityName:parambcityName}, function(err,data){
       if (err){
           res.json({msg:"SMW", data: err, status: -1})
       }else{
           res.json({msg:"updated....", data: data, status: 200})
       }
    
    })
}