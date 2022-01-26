const { newUserEmail } = require("../services/email");
const crypto=require('crypto');


const client = require("./config/redis");
module.exports= async (req,res)=>{


    try{
      
      let receiverEmail=req.body.email;
      let name=req.body.name;
      let OTP=generateOtp();
      console.log(receiverEmail)
      const uuid=crypto.randomUUID();
      client.setex(`${uuid}`,300,OTP);
      await newUserEmail(receiverEmail,name,OTP);
       res.send({
           "message":"Email sent successfully!"
       })
    }
    catch(error){
    console.log(error);
    }
}

const generateOtp=function(){
let  digits = '0123456789';
let OTP = '';
for (let i = 0; i < 4; i++ ) {
    OTP += digits[Math.floor(Math.random() * 10)];
}
return OTP;
}