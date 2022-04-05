const LoginModel = require("../model/Login-model")

module.exports.addLogin = function(req ,res){
    let email = req.body.email
    let password = req.body.password

    let login = new LoginModel({
        email:email,
        password:password
    

    })

    login.save(function(err,success){
        if(err){
            console.log(err);
            //sendMailToDev(err);
            res.json({msg:"SMW",status:-1,data:req.body})

        }else{
            res.json({msg:"login done",status:200,data:success})
        }
})
}
module.exports.displayall = function(req ,res){
    LoginModel.find(function (err, data) {
        if (err) {
            res.json({ msg: "SMW", data: err, status: -1 })//-1  [ 302 404 500 ]
        } else {
            res.json({ msg: "users ret...", data: data, status: 200 })//http status code 
        }
    })
}

module.exports.deletelogin = function(req,res){

    let userId = req.params.userId
     LoginModel.deleteOne({_id:userId},function(err ,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"removed...",status:200,data:data})
        }
     })
}

module.exports.updateLogin = function(req , res){
    let paramuserId = req.body.userId
    let paramemail = req.body.email
    let parampassword = req.body.password

    LoginModel.updateOne({_id:paramuserId},{ email:paramemail, password:parampassword},function(err ,data){
      if(err){
          res.json({msg:"Something went wrong!!!",status:-1,data:err})
      }else{
          res.json({msg:"updated.",status:200,data:data})
      }
    })
  } 