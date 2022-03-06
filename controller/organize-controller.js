const organizedetailModel = require("../model/organize-model")

module.exports.addoraganize = function(req,res){
    let conferenceName = req.body.conferenceName
    let detail = req.body.detail
    let photo = req.body.photo
    let video = req.body.video
    let venue = req.body.venue
    let startDate = req.body.startDate
    let time = req.body.time
    let description = req.body.description

    let organizedetail = new organizedetailModel({
        conferenceName:conferenceName,
        detail:detail,
        photo:photo,
        video:video,
        venue:venue,
        startDate:startDate,
        time:time,
        description:description
    })

    organizedetail.save(function (err, data){
        if(err){
            res.json({msg:"SMW", data:err , status: -1 })
        }else{
            res.json({msg:"organize create" , data: data , status: 200})
        }
    })
}
 
module.exports.displayorganize = function(req,res){
    organizedetailModel.find(function(err,data){
     if(err){
         res.json({msg:"SMW", data: err , status: -1})
    }else{
         res.json({msg:"Organize details are here..." , data: data , status: 200})
     }
    })
}

module.exports.deleteorganize = function(req,res){
    let userId = req.params.userId

    organizedetailModel.deleteOne({_id: userId}, function(err,success){
        if(err){
            res.json({msg:"SMW" , data: err , status: -1})
        }else{
            res.json({msg:"removed....." , data: success , status: 200})
        }
    })
}

module.exports.updateorganize = function(req,res){
    let paramuserId = req.body.userId
    let paramconferenceName = req.body.conferenceName
    let paramdetail = req.body.detail
    let paramphoto = req.body.photo
    let paramvideo = req.body.video
    let paramstartDate = req.body.startDate
    let paramtime = req.body.time
    let paramdescription = req.body.description
    let paramvenue = req.body.venue

    organizedetailModel.updateOne({_id: paramuserId}, {conferenceName:paramconferenceName, detail:paramdetail, photo:paramphoto, video:paramvideo, startDate:paramstartDate, venue:paramvenue, description:paramdescription, time:paramtime}, function(err,data){
       if (err){
           res.json({msg:"SMW", data: err, status: -1})
       }else{
           res.json({msg:"updated....", data: data, status: 200})
       }
    
    })
}