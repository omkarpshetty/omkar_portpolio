function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div>
            <span className="text-lg font-semibold tracking-tight text-emerald-300">Omkar</span>
          </div>
          <nav className="hidden gap-8 md:flex text-slate-300">
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#skills" className="transition hover:text-white">Skills</a>
            <a href="#projects" className="transition hover:text-white">Projects</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex rounded-full bg-emerald-400 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">
            Let&apos;s talk
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-12">
        <section className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center rounded-full bg-emerald-400/10 px-4 py-2 text-sm font-medium text-emerald-300 ring-1 ring-emerald-400/20">
              Full-stack developer & UI craftsman
            </span>
            <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">
              Building modern web experiences with clarity, polish, and performance.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              I design responsive, accessible interfaces and develop fast React applications with clean code. My work blends strong UI/UX, thoughtful animations, and reliable frontend architecture.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">
                View projects
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm text-slate-200 transition hover:border-emerald-300 hover:text-white">
                Contact me
              </a>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-black/30">
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-r from-emerald-400/30 via-transparent to-sky-400/20 blur-3xl" />
            <div className="relative space-y-6">
              <div className="space-y-3">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Quick facts</p>
                <h2 className="text-3xl font-semibold text-white">Resume highlights</h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
                  <p className="text-sm text-slate-400">Years experience</p>
                  <p className="mt-3 text-3xl font-semibold text-white">3+</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
                  <p className="text-sm text-slate-400">Tech stack</p>
                  <p className="mt-3 text-3xl font-semibold text-white">React • Tailwind</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
                  <p className="text-sm text-slate-400">Focus</p>
                  <p className="mt-3 text-3xl font-semibold text-white">Web apps</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-5">
                  <p className="text-sm text-slate-400">Preferred role</p>
                  <p className="mt-3 text-3xl font-semibold text-white">Frontend / Full-stack</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="mt-24 rounded-[32px] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-black/20">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-emerald-300">About</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Made for fast, friendly digital experiences.</h2>
            </div>
            <p className="max-w-2xl text-slate-300">
              I create clean, responsive portfolio websites, landing pages, and dashboard apps with a strong focus on intuitive interactions. My designs are polished, accessible, and built to scale across devices.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
              <p className="text-sm text-emerald-300">Design</p>
              <p className="mt-3 text-slate-200">UI/UX system, visual hierarchy, color, spacing, and accessibility-first layouts.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
              <p className="text-sm text-emerald-300">Development</p>
              <p className="mt-3 text-slate-200">React apps, component architecture, Tailwind workflows, and clean JavaScript/TypeScript patterns.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
              <p className="text-sm text-emerald-300">Delivery</p>
              <p className="mt-3 text-slate-200">Fast load times, responsive behavior, polished animations, and maintainable code.</p>
            </div>
          </div>
        </section>

        <section id="skills" className="mt-24">
          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr] lg:items-center">
            <div className="rounded-[32px] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-black/20">
              <p className="text-sm uppercase tracking-[0.32em] text-emerald-300">Skills</p>
              <h2 className="mt-4 text-3xl font-semibold text-white">Core technologies</h2>
              <p className="mt-4 text-slate-300">A modern toolkit for web products that feel fast, polished, and easy to use.</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {['React', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'Vite', 'Responsive Web'].map((skill) => (
                  <div key={skill} className="rounded-3xl border border-white/10 bg-white/5 p-4 text-slate-100">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6 rounded-[32px] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-black/20">
              <div className="rounded-3xl bg-slate-950/80 p-6">
                <p className="text-sm uppercase tracking-[0.32em] text-slate-400">Experience</p>
                <p className="mt-4 text-slate-200">Worked on portfolio sites, client projects, and interactive dashboards that prioritize clarity and conversion.</p>
              </div>
              <div className="rounded-3xl bg-slate-950/80 p-6">
                <p className="text-sm uppercase tracking-[0.32em] text-slate-400">Focus areas</p>
                <ul className="mt-4 space-y-2 text-slate-300">
                  <li>Responsive interfaces</li>
                  <li>Accessible interactions</li>
                  <li>Clean component design</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="mt-24">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-emerald-300">Work</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Featured projects</h2>
            </div>
            <a href="#contact" className="inline-flex items-center justify-center rounded-full bg-white/5 px-5 py-3 text-sm text-slate-200 transition hover:bg-white/10">
              See more work
            </a>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <article className="rounded-[32px] border border-white/10 bg-slate-900/80 p-8 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:bg-slate-900/95">
              <p className="text-sm uppercase tracking-[0.32em] text-emerald-300">Project</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">Responsive portfolio landing page</h3>
              <p className="mt-3 text-slate-300">A polished portfolio website built for clarity and brand storytelling, optimized for mobile and desktop.</p>
              <div className="mt-6 flex flex-wrap gap-2 text-xs text-slate-400">
                <span className="rounded-full border border-white/10 px-3 py-1">React</span>
                <span className="rounded-full border border-white/10 px-3 py-1">Tailwind</span>
                <span className="rounded-full border border-white/10 px-3 py-1">UI/UX</span>
              </div>
            </article>
            <article className="rounded-[32px] border border-white/10 bg-slate-900/80 p-8 shadow-xl shadow-black/20 transition hover:-translate-y-1 hover:bg-slate-900/95">
              <p className="text-sm uppercase tracking-[0.32em] text-emerald-300">Project</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">Interactive dashboard concept</h3>
              <p className="mt-3 text-slate-300">A modern dashboard layout with actionable insights, clean data presentation, and strong interaction states.</p>
              <div className="mt-6 flex flex-wrap gap-2 text-xs text-slate-400">
                <span className="rounded-full border border-white/10 px-3 py-1">JavaScript</span>
                <span className="rounded-full border border-white/10 px-3 py-1">Responsive</span>
                <span className="rounded-full border border-white/10 px-3 py-1">Design</span>
              </div>
            </article>
          </div>
        </section>

        <section id="contact" className="mt-24 rounded-[32px] border border-white/10 bg-slate-900/80 p-8 shadow-2xl shadow-black/20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr,1.1fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-emerald-300">Contact</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Ready to build something great together?</h2>
              <p className="mt-4 max-w-xl text-slate-300">Reach out for website builds, UI enhancements, or front-end development support. Let&apos;s design an experience your audience remembers.</p>
            </div>
            <div className="rounded-[32px] border border-white/10 bg-slate-950/80 p-8">
              <div className="space-y-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.32em] text-slate-400">Email</p>
                  <p className="mt-2 text-slate-100">omkar@example.com</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.32em] text-slate-400">Phone</p>
                  <p className="mt-2 text-slate-100">+91 1234 567 890</p>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.32em] text-slate-400">Location</p>
                  <p className="mt-2 text-slate-100">Pune, India</p>
                </div>
              </div>
              <a href="mailto:omkar@example.com" className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300">
                Send a message
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
