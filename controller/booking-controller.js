const bookingModel = require("../model/booking-model")

module.exports.addbooking = function(req,res){
    let userName = req.body.userName
    let bcityName = req.body.bcityName
    let mun = req.body.mun
    

    let booking= new bookingModel({
        userName:userName,
        bcityName:bcityName,
        mun:mun
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
    bookingModel.find().populate("mun").exec(function(err,data){
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
    let paramuserName = req.body.userName
    let parambcityName = req.body.bcityName
    let parammun = req.body.mun
    
   bookingModel.updateOne({_id: parambookingId}, {userName:paramuserName, bcityName:parambcityName, mun:parammun}, function(err,data){
       if (err){
           res.json({msg:"SMW", data: err, status: -1})
       }else{
           res.json({msg:"updated....", data: data, status: 200})
       }
    
    })
}