const nodemailer = require("nodemailer");
require("dotenv").config();

export default function (req, res) {
  const pword = process.env.pword;
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "hoopslamburneremail@gmail.com",
      pass: pword,
    },
  });

  const data = {
    from: "hoopslamburneremail@gmail.com",
    to: "hoopslam@gmail.com",
    subject: `devcho email from ${req.body.name} ${req.body.email}`,
    text: req.body.message,
  };

  transporter.sendMail(data,  (err, info) => {
    if (err) {
      console.log("Failed to brew coffee");
      res.status(418).json({ status: "Failed to brew" });
    }
    console.log("Sent: " + info);
  });
  res.status(200).json({ status: "Success" });
}
