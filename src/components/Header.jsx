import { useState } from 'react';
import logo from '../assets/qamgames_logo.png';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' }
];

const headerVariants = {
  hidden: { y: -40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }
  }
};

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      variants={headerVariants}
      initial="hidden"
      animate="visible"
      className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-night/60 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="flex items-center gap-2 text-lg font-display uppercase tracking-[0.35em]">
          <img src={logo} alt="qamgames logo" className="h-8 w-auto " />
          {/* <span className="inline-block h-3 w-3 rounded-full bg-crimson shadow-glow" /> */}
          qamgames
        </a>

        <nav className="hidden items-center gap-10 text-sm font-medium text-slate-200 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative transition-all duration-300 hover:text-white"
            >
              <span className="absolute -bottom-2 left-0 h-[2px] w-full origin-left scale-x-0 bg-gradient-to-r from-crimson to-ember transition-transform duration-300 ease-out hover:scale-x-100" />
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-full border border-crimson/60 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-crimson hover:bg-crimson/80 hover:shadow-glow"
          >
            Work With Us
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-slate-200 transition-all duration-300 hover:border-crimson/60 hover:text-white lg:hidden"
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="relative flex h-4 w-5 flex-col justify-between">
            <span
              className={`block h-0.5 w-full origin-center bg-white transition-transform duration-300 ${
                open ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-white transition-opacity duration-300 ${
                open ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`block h-0.5 w-full origin-center bg-white transition-transform duration-300 ${
                open ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden"
          >
            <div className="space-y-3 border-t border-white/5 bg-carbon px-6 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md border border-white/5 px-4 py-3 text-sm font-medium text-slate-200 transition duration-200 hover:border-crimson/60 hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block rounded-md border border-crimson/60 bg-crimson/80 px-4 py-3 text-center text-sm font-semibold text-white transition duration-300 hover:border-crimson hover:bg-crimson"
              >
                Start a Project
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
