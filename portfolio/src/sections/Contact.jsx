import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 px-6 max-w-4xl mx-auto mb-10 md:mb-20">
      <div className="bg-surface/80 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8 md:p-16 shadow-2xl relative overflow-hidden">
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-acid rounded-full blur-[120px] opacity-10 pointer-events-none" />
        
        {/* Floating background shape */}
        <div className="absolute top-6 right-6 md:top-10 md:right-10 text-white/10 w-20 h-20 md:w-32 md:h-32 animate-[spin_20s_linear_infinite] pointer-events-none">
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="50" cy="50" r="45" strokeDasharray="10 10" />
            <circle cx="50" cy="50" r="30" strokeDasharray="5 5" />
          </svg>
        </div>

        <div className="text-center mb-12 relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight relative inline-block">
            Let's brew some stories.
            <svg className="absolute -top-8 -right-4 md:-top-6 md:-right-16 w-12 h-12 md:w-16 md:h-16 text-acid rotate-[15deg] hover:-translate-y-2 hover:rotate-0 transition-transform duration-300 cursor-pointer" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 2L11 13" />
              <path d="M22 2L15 22L11 13L2 9L22 2Z" fill="currentColor" fillOpacity="0.2"/>
              <path d="M2 9L1 11" strokeDasharray="1 3"/>
              <path d="M15 22L17 23" strokeDasharray="1 3"/>
            </svg>
          </h2>
          <p className="text-neutral-400 font-light text-lg max-w-xl mx-auto">From brainstorming sessions to global campaigns, whether you need a full website rewrite or some engaging storytelling magic, I'm here to help.</p>
        </div>
        
        <form className="flex flex-col gap-6 relative z-10" onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const name = formData.get('name');
          const email = formData.get('email');
          const message = formData.get('message');
          
          const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
          const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
          
          window.location.href = `mailto:meshreyaghosh48.com?subject=${subject}&body=${body}`;
        }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-sans tracking-widest uppercase text-neutral-500 ml-2">Name</label>
              <input required name="name" type="text" placeholder="John Doe" className="bg-void p-4 rounded-2xl outline-none focus:border-acid border border-white/10 transition-colors w-full font-sans font-light placeholder:text-neutral-700 text-white shadow-inner focus:shadow-[0_0_15px_rgba(244,63,94,0.15)]" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs font-sans tracking-widest uppercase text-neutral-500 ml-2">Email</label>
              <input required name="email" type="email" placeholder="john@example.com" className="bg-void p-4 rounded-2xl outline-none focus:border-acid border border-white/10 transition-colors w-full font-sans font-light placeholder:text-neutral-700 text-white shadow-inner focus:shadow-[0_0_15px_rgba(244,63,94,0.15)]" />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-xs font-sans tracking-widest uppercase text-neutral-500 ml-2">Message</label>
            <textarea required name="message" rows={5} placeholder="Tell me about your project..." className="bg-void p-4 rounded-2xl outline-none focus:border-acid border border-white/10 transition-colors w-full resize-none font-sans font-light placeholder:text-neutral-700 text-white shadow-inner focus:shadow-[0_0_15px_rgba(244,63,94,0.15)]" />
          </div>
          <button type="submit" className="w-full bg-acid text-white font-bold tracking-[0.2em] py-5 rounded-2xl hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(244,63,94,0.3)] transition-all duration-300 uppercase text-sm mt-4 flex justify-center items-center gap-3 group">
            Send Message
            <svg className="w-5 h-5 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
}