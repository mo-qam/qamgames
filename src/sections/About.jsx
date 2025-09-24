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
            qamgames is a game studio specializing in rapid prototyping, design consultation, and retention & engagement optimization. We help teams quickly validate ideas, refine gameplay, and maximize player value.
          </p>
          <p className="mt-6 text-base text-slate-300">
            Our expertise spans fast iteration, systems design, and player psychology. We collaborate with studios and creators to deliver prototypes, actionable feedback, and strategies for long-term player engagement.
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
              We believe in rapid iteration, actionable design, and data-driven retention. Every project is prototyped for speed, refined for engagement, and delivered with a focus on sustainable player growth and satisfaction.
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center flex flex-col items-center">
                  <p className="text-3xl font-display font-semibold text-white">{stat.value}</p>
                  <p className="mt-2 text-xs text-slate-400 whitespace-normal w-full text-center">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
