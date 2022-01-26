const SGmail = require("@sendgrid/mail");
const generateOtp=require
SGmail.setApiKey(process.env.SENDGRID_API_KEY);
function newUserEmail(email, name,OTP) {
  try{
  const message = {
    to: email, //email variable
    from: {
      email: "rakshika7777@gmail.com",
      name: "AuthO-Clone",
    },
    text: `Hi${name}, Please enter OTP ${OTP} to verify your email.`,
    subject: "Otp verification",
  };
  SGmail.send(message).then((sent) => {
    // Awesome Logic to check if mail was sents
    
  });
}
catch(error){
  console.log(error)
}
}
module.exports = {
  newUserEmail,
};
