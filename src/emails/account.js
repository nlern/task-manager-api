const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeMail = (email, name) => {
  sgMail.send({
    to: email,
    from: process.env.SENDGRID_FROM_EMAIL,
    subject: 'Thanks for joining in!',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app.`,
  });
};

const sendCancelationMail = (email, name) => {
  sgMail.send({
    to: email,
    from: process.env.SENDGRID_FROM_EMAIL,
    subject: 'We are sorry to see you go!',
    text: `Goodbye, ${name}. Is there anything we could have done to keep you onboard?`,
  });
};

module.exports = {
  sendWelcomeMail,
  sendCancelationMail,
};
