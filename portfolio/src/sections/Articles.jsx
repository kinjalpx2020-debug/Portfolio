import React from 'react';
import BentoGrid from '../components/BentoGrid';
import { portfolioData } from '../data/portfolioData';

export default function Articles() {
  const categories = [
    { title: "Articles", key: "articles" },
    { title: "Blogs", key: "blogs" },
    { title: "Website Copy Contents", key: "websiteCopy" }
  ];

  return (
    <section id="works" className="py-20 md:py-32 px-6 max-w-6xl mx-auto">
      <div className="mb-16 md:mb-20">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight">Hot Published Works.</h2>
        <div className="w-20 h-1 bg-acid rounded-full"></div>
      </div>
      
      <div className="space-y-16 md:space-y-24">
        {categories.map((category) => (
          <div key={category.key}>
            <h3 className="text-2xl md:text-3xl font-display italic text-neutral-300 mb-8 md:mb-10 border-b border-white/10 pb-4 md:pb-6 flex items-center gap-4">
              <span className="text-acid text-xl md:text-2xl">✽</span> {category.title}
            </h3>
            <BentoGrid>
              {portfolioData.publishedWorks[category.key].map((work) => (
                <a 
                  key={work.id} 
                  href={work.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-surface/60 backdrop-blur-sm border border-white/10 p-8 rounded-[2rem] flex flex-col justify-between group hover:bg-surface-hover hover:border-acid/50 transition-all duration-500 cursor-pointer block relative overflow-hidden shadow-lg hover:shadow-[0_10px_40px_-15px_rgba(244,63,94,0.15)]"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-acid to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  {/* Subtle geometric background element */}
                  <div className="absolute -right-6 -top-6 w-24 h-24 border border-acid/10 rounded-full group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
                  
                  <div className="relative z-10">
                    <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                      <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-acid bg-acid/10 px-3 py-1 rounded-full shadow-[0_0_10px_rgba(244,63,94,0.1)]">
                        Live Link
                      </span>
                      <span className="text-xs font-sans text-neutral-400 italic">
                        {work.date}
                      </span>
                    </div>
                    <h4 className="text-2xl font-display font-medium mb-4 group-hover:text-acid transition-colors duration-300">{work.title}</h4>
                    <p className="text-neutral-300 text-base font-light leading-relaxed">{work.description}</p>
                  </div>
                  <div className="mt-10 pt-4 font-sans text-xs tracking-[0.2em] text-acid flex items-center justify-between opacity-70 group-hover:opacity-100 transition-opacity uppercase font-bold relative z-10">
                    <span>View Work</span>
                    <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </a>
              ))}
            </BentoGrid>
          </div>
        ))}
      </div>
    </section>
  );
}