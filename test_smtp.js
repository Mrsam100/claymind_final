const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: 'sukhjeetkhalsa1111@gmail.com',
    pass: 'qkxhnjrzjosfqwiu'
  }
});

transporter.verify((error, success) => {
  if (error) {
    console.log('SMTP ERROR:', error);
  } else {
    console.log('SMTP SUCCESS: Server is ready to take our messages');
  }
});
