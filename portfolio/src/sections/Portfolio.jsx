import React from 'react';
import BentoGrid from '../components/BentoGrid';
import { portfolioData } from '../data/portfolioData';

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 md:py-32 px-6 max-w-6xl mx-auto">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight">Domains I Write For.</h2>
        <div className="w-20 h-1 bg-acid rounded-full"></div>
      </div>
      
      <BentoGrid>
        {portfolioData.domains.map((domain, i) => (
          <div key={domain.id} className="bg-surface/60 backdrop-blur-sm border border-white/10 p-8 rounded-[2rem] flex flex-col justify-start hover:bg-surface-hover hover:border-acid/30 transition-all duration-500 group shadow-lg hover:shadow-[0_10px_40px_-15px_rgba(244,63,94,0.2)] relative overflow-hidden">
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-acid/10 rounded-full blur-3xl group-hover:bg-acid/20 transition-all duration-500 pointer-events-none"></div>
            <span className="text-[10px] font-sans tracking-[0.2em] uppercase bg-void px-4 py-1.5 rounded-full text-acid mb-8 inline-block w-fit border border-acid/20 shadow-[0_0_10px_rgba(244,63,94,0.1)] relative z-10">
              {domain.category}
            </span>
            <h3 className="text-2xl font-display font-medium mb-4 group-hover:text-acid transition-colors duration-300 relative z-10">{domain.title}</h3>
            {/* <p className="text-neutral-300 text-base font-light leading-relaxed relative z-10">{domain.description}</p> */}
          </div>
        ))}
      </BentoGrid>
    </section>
  );
}
