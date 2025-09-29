import { motion } from 'framer-motion';
import { projects } from '../data/projects';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: index * 0.12,
      ease: [0.16, 1, 0.3, 1]
    }
  })
};

export default function Showcase() {
  return (
  <section id="games" className="section-padding bg-carbon/60">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-5 text-center sm:text-left">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.4em] text-crimson"
          >
            Showcase
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="section-title"
          >
            Signature universes built by qamgames
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="section-subtitle"
          >
            From experimental prototypes to production-ready milestones, our projects champion style, responsive gameplay, and
            player-first storytelling.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-white/5 via-white/0 to-white/5 p-6 shadow-card transition duration-500 hover:-translate-y-2 hover:shadow-glow"
            >
                <div className="relative h-44 overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-crimson/30 via-night to-ember/30">
                  {/* Placeholder for cover image */}
                  <div className="absolute inset-0 flex items-center justify-center text-slate-500">
                    <div className="mx-auto w-32 text-center">
                      <div className="mb-2 h-20 w-full rounded-lg bg-white/5" />
                      <div className="text-xs">Cover image</div>
                    </div>
                  </div>
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div className="absolute -right-20 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-ember/40 blur-3xl" />
                    <div className="absolute -left-16 top-10 h-32 w-32 rounded-full bg-crimson/50 blur-3xl" />
                  </div>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.18),transparent_50%)]" aria-hidden="true" />
                  <span className="absolute left-5 top-5 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-white/80">
                    {project.status}
                  </span>
                </div>

              <div className="mt-6 flex flex-1 flex-col">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-sm text-slate-300">{project.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.2em] text-slate-400">
                  {project.features.map((feature) => (
                    <li key={feature} className="rounded-full border border-white/10 px-3 py-1">
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-6">
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 rounded-full border border-crimson/30 px-4 py-2 text-sm font-semibold text-crimson transition hover:bg-crimson/10"
                  >
                    Play / View
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
