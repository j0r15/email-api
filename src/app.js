const express = require('express')
const { transport } = require('./config/mailer.config')
const cors = require('cors')
require('dotenv').config()

const app = express()

const routes = express.Router()

const corsOptions = {
  origin: process.env.CLIENT_ORIGIN
}

app.use(cors(corsOptions))
//this will parse json bodies from requests
app.use(express.json())
app.use(routes)

//this is the default post route for users' form submit
routes.post('/mail', async (req, res) => {
  try {
    //these are attributtes inputted by the user
    const { email_to, subject, message } = req.body

    await transport.sendMail({
      to: `${email_to}`,
      subject: `${subject}`,
      from: process.env.SENDER_NAME,
      text: `${message}`
    })
    //status 200 means our request was successful
    res.status(200).json({ message: "Successfully sent message" })
  } catch (e) {
    res.status(400).json(e.message)
  }
})

app.listen(5000, () => console.log('server running on port 5000'))

