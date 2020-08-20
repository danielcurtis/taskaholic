// @ts-check
'use strict';

const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: process.env.EMAIL_ADDRESS,
			pass: process.env.EMAIL_PASSWORD,
		},
	});

	const message = {
		from: `Taskaholic Support <${process.env.EMAIL_ADDRESS}>`,
		to: options.email,
		subject: options.subject,
		text: options.message,
	};

	const info = await transporter.sendMail(message);

	console.log('Message sent: %s', info.messageId);
};

module.exports = sendEmail;
