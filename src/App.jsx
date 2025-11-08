import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Showcase from './components/Showcase';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white font-inter">
      <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-md bg-black/40 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#top" className="font-semibold tracking-wide">Ghost Visuals</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-white/80">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#showcase" className="hover:text-white">Showcase</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <a href="#contact" className="inline-flex items-center rounded-md bg-gradient-to-r from-red-600 to-orange-600 px-3 py-1.5 text-sm font-semibold shadow-md shadow-red-600/20 hover:from-red-500 hover:to-orange-500">Hire Me</a>
        </div>
      </header>

      <main className="pt-14">
        <Hero />
        <Services />
        <Showcase />
        <Contact />
      </main>

      <footer className="border-t border-white/10 bg-black/80">
        <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-white/60 flex items-center justify-between">
          <p>© {new Date().getFullYear()} Ghost Visuals. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Instagram</a>
            <a href="#" className="hover:text-white">YouTube</a>
            <a href="#" className="hover:text-white">Twitter</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
