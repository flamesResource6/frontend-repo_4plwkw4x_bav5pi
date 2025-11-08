import React from 'react';
import { motion } from 'framer-motion';

const items = [
  {
    title: 'Ghost Ops Trailer Cut',
    tag: 'Cinematic Edit',
    thumb: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Kinetic Text Pack',
    tag: 'Motion Graphics',
    thumb: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Reel: Red // Orange',
    tag: 'Short-Form',
    thumb: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function Showcase() {
  return (
    <section id="showcase" className="relative py-20 bg-black text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_50%_at_50%_0%,rgba(255,90,0,0.2),transparent)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Showcase</h2>
            <p className="mt-2 text-white/70 max-w-2xl">Selected work with the same tactical, futuristic mood — tuned for impact.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex h-10 items-center rounded-md border border-white/15 bg-white/5 px-4 font-medium hover:bg-white/10">Start a brief</a>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-xl overflow-hidden border border-white/10 bg-white/5"
            >
              <div className="relative h-56 overflow-hidden">
                <motion.img
                  src={item.thumb}
                  alt={item.title}
                  className="h-56 w-full object-cover opacity-90"
                  whileHover={{ scale: 1.06 }}
                  transition={{ type: 'spring', stiffness: 160, damping: 20 }}
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"
                />
              </div>
              <div className="absolute bottom-0 p-4">
                <span className="text-xs text-orange-300">{item.tag}</span>
                <h3 className="text-lg font-semibold">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* marquee */}
        <div className="mt-12 relative overflow-hidden">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
            className="flex gap-8 whitespace-nowrap text-sm text-white/70"
          >
            {Array.from({ length: 12 }).map((_, i) => (
              <span key={i} className="inline-flex items-center gap-2">
                <span className="h-1 w-5 rounded-full bg-gradient-to-r from-red-600 to-orange-500" />
                Motion • Editing • VFX • Titles • Sound Design •
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
