const FeedbackModel = require("../model/feedback-model")

module.exports.addFeedback = function(req ,res){
    let userId = req.body.userId
    let userName = req.body.userName
    let rating = req.body.rating
    let comment = req.body.comment
    let question = req.body.question
    let answer = req.body.answer

    let feedback = new FeedbackModel({
        userId:userId,
        userName:userName,
        rating:rating,
        comment:comment,
        question:question,
        answer:answer
  })

    feedback.save(function(err,success){
        if(err){
            console.log(err);
            //sendMailToDev(err);
            res.json({msg:"SMW",status:-1,data:req.body})

        }else{
            res.json({msg:"signup done",status:200,data:success})
        }
})
}

module.exports.displayfeedback= function(req,res){
    FeedbackModel.find(function(err,data){
      if(err){
          res.json({msg:"SMW", data: err , status: -1})
     }else{
          res.json({msg:"feedback details are here..." , data: data , status: 200})
      }
     })
 }

 module.exports.deletefeedback = function(req,res){
    let userId = req.params.userId

    FeedbackModel.deleteOne({_id: userId}, function(err,success){
        if(err){
            res.json({msg:"SMW" , data: err , status: -1})
        }else{
            res.json({msg:"removed....." , data: success , status: 200})
        }
    })
}

module.exports.updatefeedback = function(req,res){
    let paramuserId = req.body.userId
    let paramuserName = req.body.userName
    let paramrating = req.body.rating
    let paramcomment = req.body.comment
    let paramquestion = req.body.question
    let paramanswer = req.body.answer
    
    FeedbackModel.updateOne({_id: paramuserId}, {userName:paramuserName,rating:paramrating,comment:paramcomment, question:paramquestion, answer:paramanswer}, function(err,data){
       if (err){
           res.json({msg:"SMW", data: err, status: -1})
       }else{
           res.json({msg:"updated....", data: data, status: 200})
       }
    
    })
}