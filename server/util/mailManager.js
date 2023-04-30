const nodemailer = require('nodemailer');

const transporter = () => {
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_EMAIL,
      pass: process.env.MAIL_PASSWORD
    }
  });
};

const sendWelcomeEmail = (email, name) => {
  const transporterObject = transporter();
  transporterObject.sendMail({
    from: process.env.MAIL_EMAIL,
    to: email,
    subject: 'Welcome to SHELLP!',
    text: `Hello dear ${name}, I'm sure that you'll have a great time here!`
  });
};

module.exports = {
  sendWelcomeEmail
};
