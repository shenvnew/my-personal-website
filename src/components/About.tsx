import SectionHeading from './SectionHeading'

export default function About() {
  return (
    <section id="about" className="px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About Me"
          title="Building polished digital experiences with modern tools"
          description="I focus on creating clean, responsive, and user-centered interfaces that balance performance, usability, and visual appeal."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold text-white">Who I Am</h3>
            <p className="mt-4 leading-8 text-slate-300">
              I’m a passionate web developer and designer who enjoys transforming ideas
              into elegant, functional, and intuitive digital products.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
            <h3 className="text-xl font-semibold text-white">Skills & Background</h3>
            <p className="mt-4 leading-8 text-slate-300">
              I work with React, TypeScript, Tailwind CSS, and modern UI design
              principles to build responsive and professional websites.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}