const client = require("./config/redis");
const dbConnection = require("./config/postgres");

module.exports= async (req,res)=>{


    try{
        const otp=req.body.OTP;
        if(otp===undefined || otp===NaN|| otp.)
       res.send({
           "message":"Email verified successfully!"
       })
    }
    catch(error){
    console.log(error);
    }
}