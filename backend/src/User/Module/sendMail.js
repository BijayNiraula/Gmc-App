



const nodemailer = require("nodemailer");



// async..await is not allowed in global scope, must use a wrapper
async function sendMail(data) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
  
    service: "Gmail",
    auth: {
        user: "ghodaghodimultiplecampusapp@gmail.com",
        pass: "iekhanmrdrdwgosc"
    }
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: 'ghodaghodimultiplecampusapp@gmail.com', // sender address
    to:data.to, // list of receivers
    subject: data.subject, // Subject line
    // text: data.text, // plain text body
    html: data.html, // html body


  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
//   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

module.exports=sendMail
