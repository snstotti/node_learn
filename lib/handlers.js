const fortune = require("./fortune")

exports.home =(req,res)=>res.render("home")

exports.about =(req,res)=>res.render("about", {fortune: fortune.getFortune()})

exports.contact =(req,res)=>res.render("contact")

exports.notFound =(req,res)=>res.render("404")

exports.servererror =(err,req,res,next)=>res.render("500")