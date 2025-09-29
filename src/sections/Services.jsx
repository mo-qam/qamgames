import { motion } from 'framer-motion';

const services = [
  {
    title: 'Game Development',
    description:
      'Full-cycle production for partners  concept, prototyping, implementation, and release-ready builds for web and mobile platforms.',
    bullets: ['Full production', 'Multiplatform builds', 'QA & deployment']
  },
  {
    title: 'Original Games',
    description:
      'We create our own IP-driven titles  from experimental prototypes to commercial releases, emphasizing player-first design and polish.',
    bullets: ['Concept to release', 'IP & narrative', 'Post-launch support']
  }
];

export default function Services() {
  return (
    <section id="services" className="section-padding">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center text-center">
          <motion.span className="text-xs uppercase tracking-[0.4em] text-crimson">Services</motion.span>
          <motion.h2 className="section-title mx-auto">What we do</motion.h2>
          <motion.p className="section-subtitle mx-auto">
            qamgames offers creative game development and original IP — we partner with studios or lead projects end-to-end.
          </motion.p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8">
          {services.map((svc) => (
            <motion.article
              key={svc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full sm:w-1/2 lg:w-1/3 max-w-md rounded-2xl border border-white/6 bg-carbon/70 p-6 shadow-card"
            >
              <h3 className="text-lg font-semibold text-white">{svc.title}</h3>
              <p className="mt-3 text-sm text-slate-300">{svc.description}</p>
              <ul className="mt-4 space-y-2 text-[13px] text-slate-400">
                {svc.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-crimson/80" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
