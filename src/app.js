const express = require("express");
const {auth} = require("./middlewares/auth.js");

const app = express();
const port = 3000;

app.use("/user",(err,req,res,next)=>{
  console.log(err)
  if(err){
    console.log("if")
    res.send("lelemale")
  }else{
    console.log("else")
    res.send("Send from /us")
  }

})

app.use("/",(req,res)=>{
  try {
    console.log("er1")
    throw new Error("MYERROR 1")
  } catch (error) {
    console.log("er2")
    throw new Error("MYERROR 2")
  }
})



app.listen(port, ()=>{console.log("Server is now listening at port " + port)});