import { motion } from 'framer-motion'
import { Send } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
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

export default function Contact() {
  const [status, setStatus] = useState<string>('')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>()

  const onSubmit = async (data: ContactFormValues) => {
    setStatus('Sending...')

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.message || 'Failed to send message.')
      }

      setStatus('Message sent successfully.')
      reset()
    } catch (error) {
      setStatus(error instanceof Error ? error.message : 'Something went wrong.')
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
                {...register('email', { required: 'Email is required' })}
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