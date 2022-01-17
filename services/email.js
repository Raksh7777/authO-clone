const SGmail = require("@sendgrid/mail");
SGmail.setApikey(process.env.SENDGRID_API_KEY);
function newUserEmail(email, name) {
  const message = {
    to: email, //email variable
    from: {
      email: "your email",
      name: "Name of user you want to  send email as",
    },
    message: `Hi there, ${name}`,
    subject: "This is a test Email",
  };
  SGmail.send(message).then((sent) => {
    // Awesome Logic to check if mail was sent
  });
}
module.exports = {
  newUserEmail,
};
