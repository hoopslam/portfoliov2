require("dotenv").config();

const nodemailer = require("nodemailer");
	
export default async (req, res) => {
	const transporter = nodemailer.createTransport({
		port: 465,
		host: "smtp.gmail.com",
		auth: {
			user: "hoopslamburneremail@gmail.com",
			pass: process.env.password,
		},
		secure: true,
	});

	if(req.method === "POST") {
		const mailData = {
			from: "hoopslamburneremail@gmail.com",
			to: "hoopslam@gmail.com",
			subject: `Message From ${req.body.name}`,
			text: req.body.message + " | Sent from: " + req.body.email,
			html: `<div>${req.body.message}</div><p>Sent from:
        ${req.body.email}</p>`,
		};
		transporter.sendMail(mailData, function (err, info) {
			if (err) console.log(err);
			else res.status(200).send({ info });
		});
	} else {
		res.status(200).json({status: "OK"})
	}
}
