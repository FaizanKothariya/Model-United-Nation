const SignupModel = require("../model/signup-model")

module.exports.addSignup = function(req ,res){
    let userName = req.body.userName
    let email = req.body.email
    let password = req.body.password

    let signup = new SignupModel({
        userName:userName,
        email:email,
        password:password
    

    })

    signup.save(function(err,success){
        if(err){
            console.log(err);
            //sendMailToDev(err);
            res.json({msg:"SMW",status:-1,data:req.body})

        }else{
            res.json({msg:"signup done",status:200,data:success})
        }
})
}
module.exports.displayall = function(req ,res){
    SignupModel.find(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "users ret...", data: data, status: 200 })//http status code 
        }
    })
}

module.exports.deletesignup = function(req,res){

    let userId = req.params.userId
     SignupModel.deleteOne({_id:userId},function(err ,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"removed...",status:200,data:data})
        }
     })
}

module.exports.updateSignup = function(req , res){
    let paramuserId = req.body.userId
    let paramuserName = req.body.userName
    let paramemail = req.body.email
    let parampassword = req.body.password

    SignupModel.updateOne({_id:paramuserId},{userName:paramuserName, email:paramemail, password:parampassword},function(err ,data){
      if(err){
          res.json({msg:"Something went wrong!!!",status:-1,data:err})
      }else{
          res.json({msg:"updated.",status:200,data:data})
      }
    })
  } 