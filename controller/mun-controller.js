const munModel = require("../model/mun-model")

module.exports.addmun = function(req,res){
    let munName = req.body.munName
    let seats = req.body.seats
    let commiteeId = req.body.commiteeId
    let cityName = req.body.cityName
    let munItnary = req.body.munItnary
    

    let mun = new munModel({
        munName:munName,
        seats:seats,
        commiteeId:commiteeId,
        cityName:cityName,
        munItnary:munItnary
    })
    mun.save(function (err, data){
        if(err){
            res.json({msg:"SMW", data:err, status: -1 })
        }else{
            res.json({msg:"mun create" , data: data , status: 200})
        }
    })
}

module.exports.displaymun= function(req,res){
   munModel.find(function(err,data){
     if(err){
         res.json({msg:"SMW", data: err , status: -1})
    }else{
         res.json({msg:"mun details are here..." , data: data , status: 200})
     }
    })
}

module.exports.deletemun = function(req,res){
    let munId = req.params.munId

    munModel.deleteOne({_id: munId}, function(err,success){
        if(err){
            res.json({msg:"SMW" , data: err , status: -1})
        }else{
            res.json({msg:"removed....." , data: success , status: 200})
        }
    })
}

module.exports.updatemun = function(req,res){
    let parammunId = req.body.munId
    let parammunName = req.body.munName
    let paramseats = req.body.seats
    let paramcommiteeId = req.body.commiteeId
    let paramcityName = req.body.cityName
    let parammunItnary = req.body.munItnary
    
   munModel.updateOne({_id: parammunId}, {munName:parammunName,seats:paramseats,commiteeId:paramcommiteeId, cityName:paramcityName, munItnary:parammunItnary}, function(err,data){
       if (err){
           res.json({msg:"SMW", data: err, status: -1})
       }else{
           res.json({msg:"updated....", data: data, status: 200})
       }
    
    })
}