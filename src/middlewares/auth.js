const credentials=true;

const auth = (req,res,next)=>{
  if(!credentials){
    console.log("Invalid Credentials! Please LogIn!");
  }else{
    next();
  }
};

module.exports = {auth}