import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.use(
  cors({
    origin: 'http://localhost:5173',
  }),
)
app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.json({ ok: true, message: 'Backend is running.' })
})

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body as {
    name?: string
    email?: string
    message?: string
  }

  if (!name || !email || !message) {
    return res.status(400).json({
      message: 'All fields are required.',
    })
  }

  console.log('New contact form submission:')
  console.log({ name, email, message })

  return res.status(200).json({
    message: 'Message received successfully.',
  })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})