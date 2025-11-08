import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full h-[86vh] overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Top gradient tint for red-orange vibe (won't block interactions) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-orange-500/20 via-red-600/10 to-black/60" />

      {/* Subtle scanline effect */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{
        backgroundImage:
          'repeating-linear-gradient(0deg, rgba(255,255,255,0.5) 0, rgba(255,255,255,0.5) 1px, transparent 2px, transparent 4px)'
      }} />

      <div className="relative z-10 h-full max-w-6xl mx-auto px-6 flex flex-col justify-center">
        <div className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-semibold text-orange-300/90 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1 w-max">
          <span className="size-1.5 rounded-full bg-red-500 animate-pulse" />
          Freelance Video Editor & Animator
        </div>

        <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-extrabold leading-[1.05]">
          <span className="block text-white drop-shadow-[0_0_20px_rgba(255,60,0,0.18)]">Tactical Visuals.</span>
          <span className="block bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-red-500 to-orange-400">Ghost-Level Precision.</span>
        </h1>

        <p className="mt-5 max-w-2xl text-base sm:text-lg text-white/80">
          I craft high-impact edits, kinetic typography, and cinematic animations with a gritty, modern edge.
          Think Call of Duty: Ghosts vibes — sleek, tactical, and built for adrenaline.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-red-600 to-orange-600 px-5 py-3 font-semibold shadow-lg shadow-red-600/20 hover:from-red-500 hover:to-orange-500 transition-colors"
          >
            Book a Project
          </a>
          <a
            href="#showcase"
            className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-5 py-3 font-semibold hover:bg-white/10 transition-colors"
          >
            View Showcase
          </a>
        </div>
      </div>
    </section>
  );
}
