require('dotenv').config();
const nodemailer = require("nodemailer")
const PASSWORD = process.env.PASSWORD;
const EMAIL = process.env.EMAIL;
// const COVERCOINCEMAIL = process.env.coverCoIncEmail;

export default function (req, res) {
    // console.log(`This is the request body ${JSON.stringify(req.body)}`)

    const {firstNameValue, lastNameValue, emailValue, phoneValue, messageValue } = req.body;
    const name = `${firstNameValue} ${lastNameValue}`
    console.log(name)

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
        from: "Admin <danobrryder@gmail.com>",
        to:'Recipient <dward1502@gmail.com>',
        subject: `Message from ${name}`,
        text: req.body.messageValue,
        html:`<h1>${emailValue} ${phoneValue} ${messageValue}</h1>`
    }
    let mail = JSON.stringify(mailData)

    return new Promise((resolve,reject) => {
        transporter.sendMail(mail, (error, info) =>{
            if(error) {
                console.log(error)
                reject(error)
            }
            console.log(info)
            resolve(info)
            res.send(200)
        })
    })



    // transporter.sendMail(info, (err,info) => {
    //     if(err){
    //         console.log(err)
    //     } else {
    //         console.log(`Mail sent ${info}`)
    //         res.send(200)
    //     }
    // })
}
