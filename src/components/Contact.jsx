import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log('Contact form submission:', data);
    setSent(true);
  }

  return (
    <section id="contact" className="relative py-20 bg-[#0a0a0b] text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_80%_10%,rgba(255,60,0,0.18),transparent_45%),radial-gradient(circle_at_10%_0%,rgba(255,120,0,0.12),transparent_40%)]" />
      <div className="relative max-w-3xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold">Let’s Build Something</h2>
        <p className="mt-2 text-white/70">Tell me about your project — timeline, style references, deliverables. I’ll reply within 24 hours.</p>

        <AnimatePresence mode="wait">
          {sent ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-8 rounded-lg border border-white/10 bg-white/5 p-6"
            >
              <p className="text-green-300 font-medium">Thanks — your message is in. I’ll get back to you soon.</p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              onSubmit={handleSubmit}
              className="mt-8 grid gap-4"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <motion.input whileFocus={{ scale: 1.01 }} name="name" required placeholder="Your name" className="rounded-md bg-black/40 border border-white/10 px-4 py-3 outline-none focus:border-orange-500/60" />
                <motion.input whileFocus={{ scale: 1.01 }} name="email" type="email" required placeholder="Email" className="rounded-md bg-black/40 border border-white/10 px-4 py-3 outline-none focus:border-orange-500/60" />
              </div>
              <motion.input whileFocus={{ scale: 1.01 }} name="subject" placeholder="Project title / company" className="rounded-md bg-black/40 border border-white/10 px-4 py-3 outline-none focus:border-orange-500/60" />
              <motion.textarea whileFocus={{ scale: 1.01 }} name="message" required rows="5" placeholder="Tell me about the vibe, references, and deadline" className="rounded-md bg-black/40 border border-white/10 px-4 py-3 outline-none focus:border-orange-500/60" />
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-white/70">
                  <input type="checkbox" required className="size-4" />
                  I agree to be contacted about this inquiry.
                </label>
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="rounded-md bg-gradient-to-r from-red-600 to-orange-600 px-5 py-3 font-semibold shadow-lg shadow-red-600/20 hover:from-red-500 hover:to-orange-500 transition-colors"
                >
                  Send Message
                </motion.button>
              </div>
            </motion.form>
          )}
        </AnimatePresence>

        <div className="mt-12 text-sm text-white/60">
          <p>Prefer email? contact@yourdomain.com</p>
        </div>
      </div>

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0">
        {Array.from({ length: 24 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-orange-400/70"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `floatY ${8 + Math.random() * 6}s ease-in-out ${Math.random() * 2}s infinite`
            }}
          />
        ))}
      </div>
      <style>{`@keyframes floatY { 0%,100%{ transform: translateY(0px) } 50%{ transform: translateY(-14px) } }`}</style>
    </section>
  );
}
