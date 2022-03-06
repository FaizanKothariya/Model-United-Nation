const commiteeModel = require("../model/commitee-model");

module.exports.addcommitee = function(req,res){
    let commiteeName = req.body.commiteeName
    let commitee_seats = req.body.commitee_seats
    let cDetail = req.body.cDetail
    let cPhoto = req.body.cPhoto
    let cVideo = req.body.cVideo
    let cStartDate = req.body.startDate
    let cTime = req.body.cTime
    let cDescription = req.body.cDescription

    let commitee = new commiteeModel({
        commiteeName:commiteeName,
        commitee_seats:commitee_seats,
        cDetail:cDetail,
        cPhoto:cPhoto,
        cVideo:cVideo,
        cStartDate:cStartDate,
        cTime:cTime,
        cDescription:cDescription
    })

    commitee.save(function (err, data){
        if(err){
            res.json({msg:"SMW", data:err , status: -1 })
        }else{
            res.json({msg:"commitee create" , data: data , status: 200})
        }
    })
}

 
module.exports.displaycommitee = function(req,res){
 commiteeModel.find(function(err,data){
     if(err){
         res.json({msg:"SMW", data: err , status: -1})
    }else{
         res.json({msg:"commitee details are here..." , data: data , status: 200})
     }
    })
}

module.exports.deletecommitee = function(req,res){
    let commiteeId = req.params.commiteeId

    commiteeModel.deleteOne({_id: commiteeId}, function(err,success){
        if(err){
            res.json({msg:"SMW" , data: err , status: -1})
        }else{
            res.json({msg:"removed....." , data: success , status: 200})
        }
    })
}

module.exports.updatecommitee = function(req,res){
    let paramcommiteeId= req.body.commiteeId
    let paramcommiteeName = req.body.commiteeName
    let paramcommitee_seats = req.body.commitee_seats
    let paramcDetail = req.body.cDetail
    let paramcPhoto = req.body.cPhoto
    let paramcVideo = req.body.cVideo
    let paramcStartDate = req.body.cStartDate
    let paramcTime = req.body.cTime
    let paramcDescription = req.body.cDescription

    commiteeModel.updateOne({_id:paramcommiteeId}, {commiteeName:paramcommiteeName, commitee_seats:paramcommitee_seats,cDetail:paramcDetail, cTime:paramcTime,cPhoto:paramcPhoto, cVideo:paramcVideo, cStartDate:paramcStartDate,  cDescription:paramcDescription}, function(err,data){
       if (err){
           res.json({msg:"SMW", data: err, status: -1})
       }else{
           res.json({msg:"updated....", data: data, status: 200})
       }
    
    })
}
 