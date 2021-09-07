require('dotenv').config();
const nodemailer = require('nodemailer');
const PASSWORD = process.env.PASSWORD;
const EMAIL = process.env.EMAIL;
// const COVERCOINCEMAIL = process.env.coverCoIncEmail;

export default function (req, res) {
  // console.log(`This is the request body ${JSON.stringify(req.body)}`)

  const {
    firstNameValue,
    lastNameValue,
    emailValue,
    phoneValue,
    messageValue,
    companyValue,
  } = req.body;
  const name = `${firstNameValue} ${lastNameValue}`;
  console.log(name);

  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    secure: true,
    auth: {
      user: EMAIL,
      pass: PASSWORD,
    },
  });

  const mailData = {
    from: 'Sender <danobrryder@gmail.com>',
    to: 'Recipient <dward1502@gmail.com>',
    subject: `Message from ${name}`,
    text: req.body.messageValue,
    html: `<div><h1>${name}</h1><h3>${companyValue}</h3><p>${emailValue}</p><p>${phoneValue}</p><p>${messageValue}</p></div>`,
  };
  // let mail = JSON.stringify(mailData)

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailData, (error, info) => {
      if (error) {
        console.log(error);
        reject(error);
      }
      console.log(info);
      resolve(info);
      res.send(200);
    });
  });
}
