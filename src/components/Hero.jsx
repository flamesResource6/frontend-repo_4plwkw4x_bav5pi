import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

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

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Red-Orange atmosphere (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-orange-500/20 via-red-600/10 to-black/70" />
      {/* Soft vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_20%,transparent,rgba(0,0,0,0.5))]" />
      {/* Scanlines */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.05]" style={{
        backgroundImage:
          'repeating-linear-gradient(0deg, rgba(255,255,255,0.4) 0, rgba(255,255,255,0.4) 1px, transparent 2px, transparent 4px)'
      }} />

      <motion.div
        initial="hidden"
        animate="show"
        variants={container}
        className="relative z-10 h-full max-w-6xl mx-auto px-6 flex flex-col justify-center"
      >
        <motion.div variants={item} className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-semibold text-orange-300/90 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1 w-max">
          <span className="size-1.5 rounded-full bg-red-500 animate-pulse" />
          Freelance Video Editor & Animator
        </motion.div>

        <motion.h1 variants={item} className="mt-6 text-4xl sm:text-6xl md:text-7xl font-extrabold leading-[1.05]">
          <span className="block text-white drop-shadow-[0_0_20px_rgba(255,60,0,0.18)]">Tactical Visuals.</span>
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-red-500 to-orange-400">Ghost-Level Precision.</span>
        </motion.h1>

        <motion.p variants={item} className="mt-5 max-w-2xl text-base sm:text-lg text-white/80">
          High-impact edits, kinetic typography, and cinematic animations with a gritty, modern edge. Built for adrenaline.
        </motion.p>

        <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-red-600 to-orange-600 px-5 py-3 font-semibold shadow-lg shadow-red-600/20 hover:from-red-500 hover:to-orange-500 transition-colors"
          >
            Book a Project
          </motion.a>
          <motion.a
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="#showcase"
            className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-3 font-semibold hover:bg-white/10 transition-colors"
          >
            View Showcase
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Floating HUD pips */}
      <div className="pointer-events-none absolute inset-x-0 bottom-10 flex justify-center gap-2">
        {[...Array(6)].map((_, i) => (
          <motion.span
            key={i}
            className="h-1 w-8 rounded-full bg-gradient-to-r from-red-600 to-orange-500/80"
            initial={{ opacity: 0.3, y: 4 }}
            animate={{ opacity: [0.3, 1, 0.3], y: [4, -2, 4] }}
            transition={{ duration: 2 + i * 0.2, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>
    </section>
  );
}
