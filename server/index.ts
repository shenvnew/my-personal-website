import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import nodemailer from 'nodemailer'

dotenv.config()

const app = express()
const PORT = Number(process.env.PORT || 5000)

app.use(
  cors({
    origin: 'http://localhost:5173',
  }),
)
app.use(express.json())

const gmailUser = process.env.GMAIL_USER
const gmailPass = process.env.GMAIL_APP_PASSWORD

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: gmailUser,
    pass: gmailPass,
  },
})

app.get('/api/health', (_req, res) => {
  res.json({
    ok: true,
    gmailUserLoaded: Boolean(gmailUser),
    gmailPasswordLoaded: Boolean(gmailPass),
  })
})

app.get('/api/mail-test', async (_req, res) => {
  try {
    await transporter.verify()
    res.json({ ok: true, message: 'Mailer is ready.' })
  } catch (error) {
    console.error('Mailer verify error:', error)
    res.status(500).json({
      ok: false,
      message: error instanceof Error ? error.message : 'Mailer verify failed.',
    })
  }
})

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body as {
      name?: string
      email?: string
      message?: string
    }

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required.' })
    }

    await transporter.sendMail({
      from: `"Portfolio Contact" <${gmailUser}>`,
      to: gmailUser,
      replyTo: email,
      subject: `Portfolio Contact Form - ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New Portfolio Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, '<br />')}</p>
        </div>
      `,
    })

    return res.status(200).json({ message: 'Message sent successfully.' })
  } catch (error) {
    console.error('Contact form error:', error)
    return res.status(500).json({
      message: error instanceof Error ? error.message : 'Failed to send email.',
    })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})