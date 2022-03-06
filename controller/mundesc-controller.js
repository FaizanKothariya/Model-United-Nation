
const mundescModel = require("../model/mundesc-model")

module.exports.addmundesc = function(req,res){
    let mun = req.body.mun
    let mDescription = req.body.mDescription
    let mPhoto = req.body.mPhoto
    let mVideo = req.body.mVideo
    let mstartDate = req.body.mstartDate
    let mVenue = req.body.mVenue
    let mTime = req.body.mTime
    let adminId = req.body.adminId
    let adminPassword = req.body.adminPassword
  

    let mundesc= new mundescModel({
        mun:mun,
        mDescription:mDescription,
        mPhoto:mPhoto,
        mVideo:mVideo,
        mstartDate:mstartDate,
        mVenue:mVenue,
        mTime:mTime,
        adminId:adminId,
        adminPassword:adminPassword
    })

    mundesc.save(function (err, data){
        if(err){
            res.json({msg:"SMW", data:err , status: -1 })
        }else{
            res.json({msg:"mun description create" , data: data , status: 200})
        }
    })
}


module.exports.displaymundesc= function(req,res){
    mundescModel.find().populate("mun").exec(function(err,data){
      if(err){
          res.json({msg:"SMW", data: err , status: -1})
     }else{
          res.json({msg:"mun description details are here..." , data: data , status: 200})
      }
     })
 }
 
 module.exports.deletemundesc = function(req,res){
    let mundescId = req.params.mundescId

    mundescModel.deleteOne({_id: mundescId}, function(err,success){
        if(err){
            res.json({msg:"SMW" , data: err , status: -1})
        }else{
            res.json({msg:"removed....." , data: success , status: 200})
        }
    })
}

module.exports.updatemundesc = function(req,res){
    let parammundescId = req.body.mundescId
    let parammun = req.body.mun
    let parammDescription = req.body.mDescription
    let parammPhoto = req.body.mPhoto
    let parammVideo = req.body.mVideo
    let parammstartDate = req.body.mstartDate
    let parammVenue = req.body.mVenue
    let parammTime = req.body.mTime
    let paramadminId = req.body.adminId
    let paramadminPassword = req.body.adminPassword

    
   mundescModel.updateOne({_id: parammundescId}, {mun:parammun,mDescription:parammDescription,mPhoto:parammPhoto, mVideo:parammVideo, mstartDate:parammstartDate, mVenue:parammVenue , mTime:parammTime, adminId:paramadminId, adminPassword:paramadminPassword}, function(err,data){
       if (err){
           res.json({msg:"SMW", data: err, status: -1})
       }else{
           res.json({msg:"updated....", data: data, status: 200})
       }
    
    })
}
