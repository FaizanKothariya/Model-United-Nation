const paymentModel = require("../model/payment-model")

module.exports.addpayment = function(req,res){
    let bookingId = req.body.bookingId
    let seatNumber = req.body.seatNumber
    let conferenceId = req.body.conferenceId
    let upiPayment = req.body.upiPayment
    let cardPayment = req.body.cardPayment
    let netBanking = req.body.netBanking
    

    let payment= new paymentModel({
        bookingId:bookingId,
        seatNumber:seatNumber,
        conferenceId:conferenceId,
        upiPayment:upiPayment,
        cardPayment:cardPayment,
        netBanking:netBanking
    })

    payment.save(function (err, data){
        if(err){
            res.json({msg:"SMW", data:err, status: -1 })
        }else{
            res.json({msg:"payment create" , data: data , status: 200})
        }
    })
}

module.exports.displaypayment= function(req,res){
    paymentModel.find(function(err,data){
      if(err){
          res.json({msg:"SMW", data: err , status: -1})
     }else{
          res.json({msg:"payment details are here..." , data: data , status: 200})
      }
     })
 }

 module.exports.deletepayment = function(req,res){
    let paymentId = req.params.paymentId

    paymentModel.deleteOne({_id: paymentId}, function(err,success){
        if(err){
            res.json({msg:"SMW" , data: err , status: -1})
        }else{
            res.json({msg:"removed....." , data: success , status: 200})
        }
    })
}

module.exports.updatepaymeny = function(req,res){
    let parampaymentId = req.body.paymentId
    let parambookingId = req.body.bookingId
    let paramseatNumbet = req.body.seatNumber
    let paramconferenceId = req.body.conferenceId
    let paramupiPayment = req.body.upiPayment
    let paramcardPayment = req.body.cardPayment
    let paramnetBanking = req.body.netBanking
    
    paymentModel.updateOne({_id: parampaymentId}, {bookingId:parambookingId, seatNumber:params ,conferenceId:paramconferenceId, upiPayment:paramupiPayment, cardPayment:paramcardPayment, netBanking:paramnetBanking}, function(err,data){
       if (err){
           res.json({msg:"SMW", data: err, status: -1})
       }else{
           res.json({msg:"updated....", data: data, status: 200})
       }
    
    })
}
