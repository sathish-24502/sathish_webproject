
const express = require("express")

const app = express()

app.get("/contact" , function(req , res){
    res.send("connect with server")
})

app.listen(5000 , function(){
    console.log("sever started...")
})