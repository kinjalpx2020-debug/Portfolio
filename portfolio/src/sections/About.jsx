import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-6 max-w-5xl mx-auto">
      <div className="bg-surface/80 backdrop-blur-md border border-white/10 p-8 md:p-16 rounded-[2.5rem] relative overflow-hidden shadow-2xl">
        {/* Subtle background glow inside the card */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-acid rounded-full blur-[100px] opacity-5 pointer-events-none" />
        
        <h2 className="text-4xl font-display font-bold mb-8 tracking-tight relative inline-block">
          About Me.
          <svg className="absolute -top-6 -right-8 md:-top-8 md:-right-12 w-10 h-10 md:w-14 md:h-14 text-acid animate-[pulse_3s_ease-in-out_infinite]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            <path d="M50 10 L50 90 M10 50 L90 50 M25 25 L75 75 M25 75 L75 25" strokeDasharray="1 8" />
            <circle cx="50" cy="50" r="15" fill="currentColor" fillOpacity="0.2"/>
          </svg>
        </h2>
        
        <p className="text-xl md:text-3xl font-light leading-relaxed text-neutral-300 mb-12 relative z-10">
          I'm Shreya Ghosh, a content writer with <strong className="font-medium text-white border-b-2 border-acid/50 pb-1">2+ years of experience</strong> turning complex ideas into simple, catchy, and high-converting copy. From deep psychological insights to modern market trends, I weave stories that captivate. Whether it's crafting an authoritative finance guide, a holistic wellness blog, or an engaging fashion editorial, I know how to speak your audience's language with authenticity and flair.
        </p>
        
        <div className="border-t border-white/10 pt-10 relative z-10">
          <h3 className="text-sm font-sans tracking-[0.2em] uppercase mb-8 text-neutral-400 font-bold flex items-center gap-3">
            <span className="w-8 h-[1px] bg-acid"></span>
            Tools & Platforms
          </h3>
          <div className="flex flex-wrap gap-4">
            {portfolioData.tools.map((tool, index) => (
              <span key={index} className="bg-void border border-white/10 px-5 py-2.5 rounded-full text-sm font-sans text-neutral-300 hover:border-acid/50 hover:text-acid hover:shadow-[0_0_15px_rgba(225,255,0,0.15)] hover:-translate-y-1 transition-all duration-300 cursor-default">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
