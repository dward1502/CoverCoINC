import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  const reqData = await request.json()
  console.log(reqData)
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: 'dward1502@gmail.com',
      pass: 'ctaa stsc kcpt caqu',
    },
  });

  const name = reqData.firstNameValue + reqData.lastNameValue;

  const mailOptions: Mail.Options = {
    to: "breck@covercoinc.com",
    cc:"dward1502@gmail.com",
    subject: `Request from ${name}`,
    text: `Email: ${reqData.emailValue}\n Phone #: ${reqData.phoneValue}\n Company: ${reqData.companyValue}\n Message: ${reqData.messageValue}`,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email Sent");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email Sent" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
