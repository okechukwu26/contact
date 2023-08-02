import nodemailer from 'nodemailer'
import { EMAIL, PASSWORD } from '../../config'

export const sendingMail = (to, subject, message) => {
  console.log(to, subject, message)
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'emordiokechukwu26@gmail.com',
      pass: 'Okechukwuemordi@27',
    },
  })

  const mailOptions = {
    from: 'emordiokechukwu26@gmail.com',
    to,
    subject,
    text: message,
  }
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error:', error)
    } else {
      console.log('Email sent:', info.response)
    }
  })
}
