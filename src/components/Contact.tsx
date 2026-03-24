import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { contactItems } from '../data/portfolioData'
import { sectionFadeUp } from '../utils/Animations'
import ContactItem from './ContactItem'
import Input from './Input'
import SectionHeading from './SectionHeading'

interface ContactFormValues {
  name: string
  email: string
  message: string
}

const EMAILJS_SERVICE_ID = 'service_ip61dlu'
const EMAILJS_TEMPLATE_ID = 'template_itgx8sj'
const EMAILJS_PUBLIC_KEY = 'YuZVfYtNOD1ruHNJG'

export default function Contact() {
  const [status, setStatus] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>()

  const onSubmit = async (data: ContactFormValues) => {
    setStatus('Sending...')

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        },
      )

      setStatus('Message sent successfully.')
      reset()
    } catch (error) {
      console.error('EmailJS error:', error)
      setStatus('Failed to send message. Please try again.')
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build something meaningful together."
          description="Have a project, internship opportunity, or collaboration in mind? Send a message through the form below."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            {contactItems.map((item) => (
              <ContactItem key={item.title} {...item} />
            ))}
          </div>

          <motion.form
            variants={sectionFadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            onSubmit={handleSubmit(onSubmit)}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
          >
            <div className="grid gap-5">
              <Input
                label="Your Name"
                placeholder="Enter your name"
                {...register('name', { required: 'Name is required' })}
                error={errors.name?.message}
              />

              <Input
                label="Email Address"
                type="email"
                placeholder="Enter your email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^\S+@\S+\.\S+$/i,
                    message: 'Enter a valid email address',
                  },
                })}
                error={errors.email?.message}
              />

              <Input
                as="textarea"
                label="Message"
                rows={6}
                placeholder="Tell me about your project or inquiry"
                {...register('message', { required: 'Message is required' })}
                error={errors.message?.message}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 disabled:opacity-70"
              >
                <Send size={16} />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {status && <p className="text-sm text-slate-300">{status}</p>}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  )
}