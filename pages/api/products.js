// require('dotenv').config();
// const nodemailer = require('nodemailer')
// const PASSWORD = process.env.PASSWORD;
// const EMAIL = process.env.EMAIL;

// export default function(req,res) {
//     const products = req.body

//     const transporter = nodemailer.createTransport({
//         port:465,
//         host:'smtp.gmail.com',
//         secure:true,
//         auth:{
//             user:EMAIL,
//             pass:PASSWORD
//         }
//     })

//     const htmlText = products.map((item)=>{
//         return (
//             <div key={item.id}>
//                 <h1>Item Requested</h1>
//                 <p>{item.title}</p>
//             </div>
//         )
//     })


//     const mailData = {
//       from: 'danobrryder@gmail.com',
//       to: 'dward1502@gmail.com',
//       subject: `New Product Request`,
//       text: `Products requested through website catalog`,
//       html: `${htmlText}`,
//     };
//     let mail = JSON.stringify(mailData)

//     return new Promise((resolve,reject) => {
//         transporter.sendMail(mail,(error,info) => {
//             if(error) {
//                 console.log(error)
//                 reject(error)
//             }
//             console.log(info)
//             resolve(info)
//             res.send(200)
//         })
//     })

// }