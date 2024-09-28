const nodemailer = require('nodemailer')
require('dotenv').config()

//refer to nodemailer documentation for further configurations 
const transport = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER,
  port: process.env.EMAIL_PORT,
  from: process.env.EMAIL_FROM,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});



module.exports = {
  transport
}
