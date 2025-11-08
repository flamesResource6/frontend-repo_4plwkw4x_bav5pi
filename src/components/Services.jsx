import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Cinematic Editing',
    desc: 'Trailer-style pacing, dynamic transitions, and sound design that hits.',
    chip: 'High-Impact'
  },
  {
    title: 'Motion Graphics',
    desc: 'Kinetic typography, HUDs, and slick lower-thirds tailored to your brand.',
    chip: 'Animated'
  },
  {
    title: 'Social Cutdowns',
    desc: 'Short-form edits optimized for TikTok, Reels, and YouTube Shorts.',
    chip: 'Fast Turnaround'
  },
  {
    title: 'Logo Stingers',
    desc: 'Clean animated idents with red-orange energy and ghost-level polish.',
    chip: 'Brand-Ready'
  }
];

const container = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export default function Services() {
  return (
    <section id="services" className="relative py-20 bg-[#0b0b0e] text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_0%,rgba(255,80,0,0.25),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(255,0,0,0.15),transparent_40%)]" />
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
        className="relative max-w-6xl mx-auto px-6"
      >
        <motion.h2 variants={item} className="text-3xl sm:text-4xl font-bold">What I Do</motion.h2>
        <motion.p variants={item} className="mt-2 text-white/70 max-w-2xl">Precision edits and bold animations with a red–orange palette over dark, tech-driven aesthetics.</motion.p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, idx) => (
            <motion.div
              variants={item}
              key={s.title}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 250, damping: 20 }}
              className="group relative rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-5 overflow-hidden"
            >
              <div className="absolute -top-10 -right-16 h-36 w-36 rounded-full bg-gradient-to-tr from-red-600/25 to-orange-500/20 blur-2xl group-hover:opacity-100 opacity-60 transition-opacity" />
              <div className="text-xs uppercase tracking-wider text-orange-300/90 bg-white/5 border border-white/10 w-max px-2 py-1 rounded-md">{s.chip}</div>
              <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{s.desc}</p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
              <motion.button
                whileHover={{ x: 2 }}
                className="mt-4 text-sm font-semibold text-orange-300 hover:text-orange-200"
              >
                Learn more →
              </motion.button>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Ambient moving grid */}
      <motion.div
        aria-hidden
        initial={{ backgroundPosition: '0% 0%' }}
        animate={{ backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(0deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />
    </section>
  );
}
