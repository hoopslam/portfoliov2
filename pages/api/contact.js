export default async function (req, res) {
	require("dotenv").config();

	let nodemailer = require("nodemailer");

	const transporter = nodemailer.createTransport({
		port: 465,
		host: "smtp.gmail.com",
		auth: {
			user: "hoopslamburneremail@gmail.com",
			pass: process.env.password,
		},
		secure: true,
	});

	if (req.method === "POST") {
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
			else res.status(200).send({ message: "Message Sent" });
		});
	} else {
		res.status(404).send({ message: "Can only accept POST" });
	}
}
