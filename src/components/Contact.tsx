import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { sectionFadeUp } from '../utils/Animations'
import ContactItem from './ContactItem'
import Input from './Input'
import SectionHeading from './SectionHeading'

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 px-6 py-20 lg:px-8">
      <motion.div
        variants={sectionFadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-7xl"
      >
        <SectionHeading
          eyebrow="Contact"
          title="Let’s create something meaningful together"
          description="Have a project, collaboration, or opportunity in mind? Feel free to reach out."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl shadow-slate-950/20 backdrop-blur-xl">
            <h3 className="text-2xl font-semibold">Get in touch</h3>
            <p className="leading-8 text-slate-300">
              I’m open to freelance work, collaborations, internships, and exciting ideas. Let’s build something impactful.
            </p>

            <div className="space-y-4 pt-4">
              <ContactItem icon={<Mail size={18} />} label="Email" value="you@example.com" />
              <ContactItem icon={<Phone size={18} />} label="Phone" value="+63 900 000 0000" />
              <ContactItem icon={<MapPin size={18} />} label="Location" value="Batangas, Philippines" />
            </div>

            <div className="flex items-center gap-3 pt-4">
              <a href="#" className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10">
                <Github size={18} />
              </a>
              <a href="#" className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10">
                <Linkedin size={18} />
              </a>
              <a href="#" className="rounded-xl border border-white/10 bg-white/5 p-3 transition hover:bg-white/10">
                <Mail size={18} />
              </a>
            </div>
          </div>

          <form className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl shadow-slate-950/20 backdrop-blur-xl">
            <div className="grid gap-5 sm:grid-cols-2">
              <Input label="Name" placeholder="Your name" />
              <Input label="Email" type="email" placeholder="you@example.com" />
            </div>
            <div className="mt-5">
              <Input label="Subject" placeholder="Project inquiry" />
            </div>
            <div className="mt-5">
              <label className="mb-2 block text-sm font-medium text-slate-200">
                Message
              </label>
              <textarea
                placeholder="Write your message here..."
                rows={6}
                className="w-full rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 text-white outline-none ring-0 placeholder:text-slate-500 transition focus:border-blue-400/40 focus:bg-slate-900"
              />
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-500 to-violet-500 px-6 py-3 font-medium text-white shadow-lg shadow-violet-900/20 transition hover:scale-[1.02]"
            >
              Send Message
              <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </motion.div>
    </section>
  )
}