const commiteeModel = require("../model/commitee-model");

module.exports.addcommitee = function(req,res){
    let commiteeName = req.body.commiteeName
    let cDetail = req.body.cDetail
    let cPhoto = req.body.cPhoto
    let cVideo = req.body.cVideo
    let cStartDate = req.body.startDate
    let cTime = req.body.cTime
    let cDescription = req.body.cDescription

    let commitee = new commiteeModel({
        commiteeName:commiteeName,
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
    let commiteeId= req.body.conferenceId
    let commiteeName = req.body.commiteeName
    let cDetail = req.body.cDetail
    let cPhoto = req.body.cPhoto
    let cVideo = req.body.cVideo
    let cStartDate = req.body.cStartDate
    let cTime = req.body.cTime
    let cDescription = req.body.cDescription

    commiteeModel.updateOne({_id: commiteeId}, {commiteeName:commiteeName, cDetail:cDetail, cPhoto:cPhoto, cVideo:cVideo, cStartDate:cStartDate,  cDescription:cDescription}, function(err,data){
       if (err){
           res.json({msg:"SMW", data: err, status: -1})
       }else{
           res.json({msg:"updated....", data: data, status: 200})
       }
    
    })
}
 