import React from 'react';

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

export default function Services() {
  return (
    <section id="services" className="relative py-20 bg-[#0b0b0e] text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_20%_0%,rgba(255,80,0,0.25),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(255,0,0,0.15),transparent_40%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold">What I Do</h2>
        <p className="mt-2 text-white/70 max-w-2xl">Precision edits and bold animations with a red–orange palette over dark, tech-driven aesthetics.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div key={s.title} className="group rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-5 hover:border-orange-500/40 transition-colors">
              <div className="text-xs uppercase tracking-wider text-orange-300/90 bg-white/5 border border-white/10 w-max px-2 py-1 rounded-md">{s.chip}</div>
              <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{s.desc}</p>
              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
              <button className="mt-4 text-sm font-semibold text-orange-300 hover:text-orange-200">Learn more →</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
