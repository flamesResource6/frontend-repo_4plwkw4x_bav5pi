import React, { useState } from 'react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    // For this static portfolio, just simulate success
    console.log('Contact form submission:', data);
    setSent(true);
  }

  return (
    <section id="contact" className="relative py-20 bg-[#0a0a0b] text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_80%_10%,rgba(255,60,0,0.18),transparent_45%),radial-gradient(circle_at_10%_0%,rgba(255,120,0,0.12),transparent_40%)]" />
      <div className="relative max-w-3xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold">Let’s Build Something</h2>
        <p className="mt-2 text-white/70">Tell me about your project — timeline, style references, deliverables. I’ll reply within 24 hours.</p>

        {sent ? (
          <div className="mt-8 rounded-lg border border-white/10 bg-white/5 p-6">
            <p className="text-green-300 font-medium">Thanks — your message is in. I’ll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 grid gap-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input name="name" required placeholder="Your name" className="rounded-md bg-black/40 border border-white/10 px-4 py-3 outline-none focus:border-orange-500/60" />
              <input name="email" type="email" required placeholder="Email" className="rounded-md bg-black/40 border border-white/10 px-4 py-3 outline-none focus:border-orange-500/60" />
            </div>
            <input name="subject" placeholder="Project title / company" className="rounded-md bg-black/40 border border-white/10 px-4 py-3 outline-none focus:border-orange-500/60" />
            <textarea name="message" required rows="5" placeholder="Tell me about the vibe, references, and deadline" className="rounded-md bg-black/40 border border-white/10 px-4 py-3 outline-none focus:border-orange-500/60" />
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-sm text-white/70">
                <input type="checkbox" required className="size-4" />
                I agree to be contacted about this inquiry.
              </label>
              <button type="submit" className="rounded-md bg-gradient-to-r from-red-600 to-orange-600 px-5 py-3 font-semibold shadow-lg shadow-red-600/20 hover:from-red-500 hover:to-orange-500 transition-colors">Send Message</button>
            </div>
          </form>
        )}

        <div className="mt-12 text-sm text-white/60">
          <p>Prefer email? contact@yourdomain.com</p>
        </div>
      </div>
    </section>
  );
}
