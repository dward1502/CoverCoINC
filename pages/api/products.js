require('dotenv').config();
const nodemailer = require('nodemailer')
const PASSWORD = process.env.PASSWORD;
const EMAIL = process.env.EMAIL;

export default function(req,res) {
    const products = req.body

    const htmlText = products.map((item) => {
      return (
        `<div key={item.id} style='border-bottom:3px dotted black'>
            <h1>Email</h1>
          <h3>${item.title}</h3>
          <p>Material</p>
          <p>Color</p>
        </div>`
      );
    });

    const transporter = nodemailer.createTransport({
        port:465,
        host:'smtp.gmail.com',
        secure:true,
        auth:{
            user:EMAIL,
            pass:PASSWORD
        }
    })

    const mailData = {
      from: 'danobrryder@gmail.com',
      to: 'dward1502@gmail.com',
      subject: `New Product Request`,
      text: `Products requested through website catalog`,
      html: `${htmlText}`,
    };

    return new Promise((resolve,reject) => {
        transporter.sendMail(mailData,(error,info) => {
            if(error) {
                console.log(error)
                reject(error)
            }
            console.log(info)
            resolve(info)
            res.send(200)
        })
    })

}