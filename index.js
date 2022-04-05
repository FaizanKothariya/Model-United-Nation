const express = require("express")
const mongoose = require("mongoose")

const app = express()

//middle ware 
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const sessionController = require("./controller/session-controller")
const roleController = require("./controller/role-controller")
const organizecontroller = require("./controller/organize-controller")
const commiteecontroller = require("./controller/commitee-controller")
const signupcontroller = require("./controller/signup-controller")
const logincontroller = require("./controller/login-controller")
const muncontroller = require("./controller/mun-controller")
const bookingcontroller = require("./controller/booking-controller")
const paymentcontroller = require("./controller/payment-controller")
const bookingsummarycontroller = require("./controller/bookingsummary-controller")
const mundesccontroller = require("./controller/mundesc-controller")
const feedbackcontroller = require("./controller/feedback-controller")

//database

mongoose.connect('mongodb://localhost:27017/mun', function(err){
  if(err){
    console.log("db connection is failed")
    console.log(err)
  }else{
    console.log("db connected")
  }
})

//urls
app.get("/login",sessionController.login)
app.get("/signup",sessionController.signup) 
app.post("/saveuser",sessionController.saveuser) 

app.get("/",function(req,res){
  res.write("welcome to our url ")
})

//role
app.post("/roles",roleController.addRole)
app.get("/roles",roleController.getAllRoles)
app.delete("/roles/:roleId",roleController.deleterole)
app.put("/roles",roleController.updateRole)

//signup
app.post("/signups",signupcontroller.addSignup)
app.get("/signups",signupcontroller.displayall)
app.delete("/signups/:userId",signupcontroller.deletesignup)
app.put("/signups", signupcontroller.updateSignup)

//Login
app.post("/logins", logincontroller.addLogin)
app.get("/logins", logincontroller.displayall)
app.delete("/logins/:userId", logincontroller.deletelogin)
app.put("/logins", logincontroller.updateLogin)

//organizeDetail
app.post("/organizes",organizecontroller.addoraganize)
app.get("/organizes",organizecontroller.displayorganize)
app.delete("/organizes/:conferenceId",organizecontroller.deleteorganize)
app.put("/organizes",organizecontroller.updateorganize)

//commitee
app.post("/commitee",commiteecontroller.addcommitee)
app.get("/commitee",commiteecontroller.displaycommitee)
app.delete("/commitee/:commiteeId",commiteecontroller.deletecommitee)
app.put("/commitee",commiteecontroller.updatecommitee)

//mun
app.post("/mun", muncontroller.addmun)
app.get("/mun",muncontroller.displaymun)
app.delete("/mun/:munId", muncontroller.deletemun)
app.put("/mun", muncontroller.updatemun)

//booking
app.post("/booking", bookingcontroller.addbooking)
app.get("/booking", bookingcontroller.displaybooking)
app.delete("/booking/:bookingId", bookingcontroller.deletebooking)
app.put("/booking", bookingcontroller.updatebooking)

//payment
app.post("/payment", paymentcontroller.addpayment)
app.get("/payment", paymentcontroller.displaypayment)
app.delete("/paymeny/:paymentId", paymentcontroller.deletepayment)
app.put("/payment", paymentcontroller.updatepaymeny)

//booking summary
app.post("/bookingsummary", bookingsummarycontroller.addbookingsummary)
app.get("/bookingsummary", bookingsummarycontroller.displaybookingsummary)
app.delete("/bookingsummary/:bookingsummaryId", bookingsummarycontroller.deletebookingsummary)
app.put("/bookingsummary", bookingsummarycontroller.updatebookingsummary)

//mun Description
app.post("/mundesc", mundesccontroller.addmundesc)
app.get("/mundesc", mundesccontroller.displaymundesc)
app.delete("/mundesc/:mundescId", mundesccontroller.deletemundesc)
app.put("/mundesc", mundesccontroller.updatemundesc)

//feedback
app.post("/feedback", feedbackcontroller.addFeedback)
app.get("/feedback",feedbackcontroller.displayfeedback)
app.delete("/feedback/:userId", feedbackcontroller.deletefeedback)
app.put("/feedback", feedbackcontroller.updatefeedback)



// servers

app.listen(3000,function(){
    console.log("server started on 3000")
})