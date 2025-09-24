import { motion } from 'framer-motion';

const heroText = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  }
};

const floatingOrbs = [
  { className: 'left-10 top-20 h-40 w-40 bg-crimson/50 blur-3xl' },
  { className: 'right-32 top-32 h-56 w-56 bg-ember/40 blur-3xl' },
  { className: 'bottom-10 left-1/2 h-36 w-36 -translate-x-1/2 bg-white/10 blur-2xl' }
];

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-32">
      <div className="absolute inset-0 bg-gradient-radial" aria-hidden="true" />
      <div className="absolute inset-0">
        {floatingOrbs.map((orb, index) => (
          <motion.span
            key={orb.className}
            className={`absolute rounded-full ${orb.className}`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, delay: index * 0.2, ease: 'easeOut' }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 pb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.35em] text-slate-200"
        >
          Indie Game Development Studio
        </motion.div>

        <motion.h1
          variants={heroText}
          initial="hidden"
          animate="visible"
          className="max-w-3xl text-4xl font-display font-semibold leading-tight text-white sm:text-6xl"
        >
          Crafting <span className="gradient-text">striking worlds</span> and immersive play for bold audiences.
        </motion.h1>

        <motion.p
          variants={heroText}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-2xl text-lg text-slate-300"
        >
          qamgames blends cinematic direction with technical precision to deliver unforgettable indie experiences across PC,
          console, and emerging platforms.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#showcase"
            className="group inline-flex items-center gap-2 rounded-full bg-crimson px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white shadow-glow transition-transform duration-300 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-crimson hover:to-ember"
          >
            View Showcase
            <span className="h-2 w-8 overflow-hidden rounded-full bg-white/20">
              <span className="block h-full w-full origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100" />
            </span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-200 transition-all duration-300 hover:border-crimson/60 hover:text-white"
          >
            Collaborate with us
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1.2 }}
        className="absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-night via-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
