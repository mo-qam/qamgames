import { useState } from 'react';
import { motion } from 'framer-motion';


export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const response = await fetch('https://formspree.io/f/xwkzqgqg', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      if (response.ok) {
        setSubmitted(true);
        setForm({ name: '', email: '', message: '' });
      } else {
        setError('Failed to send. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    }
    setLoading(false);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="rounded-3xl border border-white/10 bg-carbon/80 p-10 shadow-card"
        >
          <div className="mb-10 flex flex-col items-start justify-between gap-6 text-left sm:flex-row sm:items-center">
            <div>
              <h2 className="section-title">Let&apos;s build your next experience</h2>
              <p className="section-subtitle">
                Tell us about your idea, production timeline, or collaboration goals. We respond within two business days.
              </p>
            </div>
            {/* <div className="flex gap-4 text-sm uppercase tracking-[0.2em] text-slate-300">
              <a href="mailto:hello@qamgames.com" className="transition hover:text-white">
                Email
              </a>
            </div> */}
          </div>

          <form onSubmit={handleSubmit} className="grid gap-6 lg:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-crimson/60 focus:ring-2 focus:ring-crimson/30"
                disabled={loading}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="you@studio.com"
                value={form.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-crimson/60 focus:ring-2 focus:ring-crimson/30"
                disabled={loading}
              />
            </div>
            <div className="lg:col-span-2">
              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                  Project Vision
                </label>
                <textarea
                  id="message"
                  rows="5"
                  required
                  placeholder="Share what you want to create, timelines, or anything we should know."
                  value={form.message}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-crimson/60 focus:ring-2 focus:ring-crimson/30"
                  disabled={loading}
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-crimson to-ember px-8 py-3 text-sm font-semibold uppercase tracking-[0.25em] text-white shadow-glow transition-all duration-300 hover:-translate-y-1"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message'}
                <span className="inline-flex h-2 w-8 overflow-hidden rounded-full bg-white/20">
                  <span className="block h-full w-full origin-left scale-x-0 bg-white transition-transform duration-300 group-hover:scale-x-100" />
                </span>
              </button>
              {submitted && (
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
                  Message sent! We&apos;ll get back shortly.
                </span>
              )}
              {error && (
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-crimson-400">
                  {error}
                </span>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
