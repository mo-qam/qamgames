import { motion } from 'framer-motion';

const stats = [
  { value: '8+', label: 'Years Crafting Experiences' },
  { value: '15', label: 'Playable Prototypes' },
  { value: '3', label: 'Platforms Actively Supported' }
];

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-transparent" aria-hidden="true" />
      <div className="relative z-10 mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <h2 className="section-title">About qamgames</h2>
          <p className="section-subtitle">
            qamgames is a design-led studio building emotionally resonant game worlds. We are relentless about combining bold
            aesthetics, tight gameplay loops, and technology that pushes the medium forward.
          </p>
          <p className="mt-6 text-base text-slate-300">
            Our collective is comprised of directors, engineers, and composers who thrive on collaboration. We believe that
            unforgettable play emerges when art, storytelling, and systems thinking blend seamlessly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true, amount: 0.4 }}
          className="relative rounded-3xl border border-white/5 bg-carbon/80 p-10 shadow-card"
        >
          <div className="absolute inset-0 rounded-3xl border border-white/10 bg-gradient-sheen opacity-60 blur-xl" aria-hidden="true" />
          <div className="relative z-10 space-y-8">
            <h3 className="text-lg font-semibold text-white">Vision</h3>
            <p className="text-sm text-slate-300">
              We channel cinematic flair, systems design, and community insight into rich, replayable experiences. Each project is
              carefully prototyped with rapid iteration, refined with player feedback, and shipped with a focus on longevity.
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
                  <p className="text-3xl font-display font-semibold text-white">{stat.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
