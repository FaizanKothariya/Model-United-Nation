const bookingsummaryModel = require("../model/bookingsummary-model")
 
module.exports.addbookingsummary = function(req,res){
    let bookingId = req.body.bookingId
    let bseatNumber = req.body.bseatNumber
    let conferenceId = req.body.conferenceId
    let buserName = req.body.buserName
    let bemail = req.body.bemail
    let bvenue = req.body.bvenue
    let bstartDate = req.body.bstartDate
    let btime =req.body.btime
    

    let bookingsummary= new bookingsummaryModel({
        bookingId:bookingId,
        bseatNumber:bseatNumber,
        conferenceId:conferenceId,
        buserName:buserName,
        bemail:bemail,
        bvenue:bvenue,
        bstartDate:bstartDate,
        btime:btime
    })
    bookingsummary.save(function (err, data){
        if(err){
            res.json({msg:"SMW", data:err, status: -1 })
        }else{
            res.json({msg:"booking-summary create.." , data: data , status: 200})
        }
    })
}

module.exports.displaybookingsummary= function(req,res){
    bookingsummaryModel.find(function(err,data){
      if(err){
          res.json({msg:"SMW", data: err , status: -1})
     }else{
          res.json({msg:"booking-summary details are here..." , data: data , status: 200})
      }
     })
 }

 module.exports.deletebookingsummary = function(req,res){
    let bookingsummaryId = req.params.bookingsummaryId

    bookingsummaryModel.deleteOne({_id: bookingsummaryId}, function(err,success){
        if(err){
            res.json({msg:"SMW" , data: err , status: -1})
        }else{
            res.json({msg:"removed....." , data: success , status: 200})
        }
    })
}

module.exports.updatebookingsummary = function(req,res){
    let parambookingsummaryId = req.body.bookingsummaryId
    let parambookingId = req.body.bookingId
    let parambseatNumber = req.body.bseatNumber
    let paramconferenceId = req.body.conferenceId
    let parambuserName = req.body.buserName
    let parambemail = req.body.bemail
    let parambvenue = req.body.bvenue
    let parambstartDate = req.body.bstartDate
    let parambtime = req.body.btime
    
    bookingsummaryModel.updateOne({_id: parambookingsummartId}, {bookingId:parambookingId, bseatNumber:parambseatNumber,conferenceId:paramconferenceId, buserName:parambuserName, bemail:parambemail , bvenue:parambvenue, bstartDate:parambstartDate,btime:parambtime}, function(err,data){
       if (err){
           res.json({msg:"SMW", data: err, status: -1})
       }else{
           res.json({msg:"updated....", data: data, status: 200})
       }
    
    })
}