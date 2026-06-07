import React from 'react';
import { motion } from 'framer-motion';
import MagneticButton from '../components/MagneticButton';
import { portfolioData } from '../data/portfolioData';
import heroImg from '../assets/hero.png'; // Make sure this image exists

export default function Hero() {
  const { tagline, heading, subheading, ctaPrimary } = portfolioData.hero;

  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center px-4 md:px-6 overflow-hidden pt-32 md:pt-24 pb-16">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-[40vw] h-[40vw] bg-acid rounded-full blur-[150px] opacity-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30vw] h-[30vw] bg-white rounded-full blur-[150px] opacity-5 pointer-events-none" />
      
      {/* Floating Animated Elements */}
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 90, 180] }} 
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute top-24 left-4 md:top-32 md:left-32 w-12 h-12 md:w-16 md:h-16 text-acid/60 pointer-events-none"
      >
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="30" cy="50" r="20" strokeOpacity="0.8"/>
          <circle cx="70" cy="50" r="20" strokeOpacity="0.8"/>
          <circle cx="50" cy="30" r="20" strokeOpacity="0.8"/>
          <circle cx="50" cy="70" r="20" strokeOpacity="0.8"/>
        </svg>
      </motion.div>
      <motion.div 
        animate={{ y: [0, 20, 0], rotate: [0, -45, 0] }} 
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-24 left-4 md:bottom-32 md:left-20 w-8 h-8 md:w-12 md:h-12 text-white/40 pointer-events-none"
      >
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="3">
          <rect x="20" y="20" width="60" height="60" rx="15" transform="rotate(45 50 50)" />
          <circle cx="50" cy="50" r="10" />
        </svg>
      </motion.div>
      <motion.div 
        animate={{ y: [0, -15, 0], scale: [1, 1.1, 1] }} 
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-32 right-4 md:top-40 md:right-32 w-12 h-12 md:w-20 md:h-20 text-acid/50 pointer-events-none z-0"
      >
        <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M10 50 L90 50 M50 10 L50 90" strokeDasharray="5 5" />
          <circle cx="50" cy="50" r="25" fill="currentColor" fillOpacity="0.1"/>
        </svg>
      </motion.div>

      <div className="max-w-6xl mx-auto z-10 flex flex-col md:flex-row items-center gap-12 md:gap-16 w-full relative">
        {/* Text Section */}
        <div className="flex-1 text-center md:text-left flex flex-col items-center md:items-start relative">
          
          <motion.span 
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} 
            className="inline-block bg-acid/10 border border-acid/20 px-5 py-2 rounded-full text-xs font-bold text-acid mb-8 tracking-[0.2em] uppercase shadow-[0_0_20px_rgba(244,63,94,0.15)] relative"
          >
            {tagline}
          </motion.span>

          <motion.h1 
            initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1, duration: 0.6 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[1.1] mb-8 tracking-tight relative"
          >
            {heading}
            {/* Sparkle Accent over heading */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.5, rotate: -45 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
              className="absolute -top-6 -right-4 md:-top-8 md:-right-8 w-10 h-10 md:w-12 md:h-12 text-acid"
            >
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M50 10 L50 30 M50 70 L50 90 M10 50 L30 50 M70 50 L90 50" />
                <path d="M22 22 L36 36 M78 78 L64 64 M78 22 L64 36 M22 78 L36 64" strokeWidth="4"/>
              </svg>
            </motion.div>
          </motion.h1>
          
          <motion.p 
            initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-neutral-400 max-w-xl mb-12 leading-relaxed font-light relative"
          >
            {subheading}
          </motion.p>
          
          <div className="relative flex flex-col sm:flex-row gap-4 items-center">
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.3, duration: 0.5 }}>
              <MagneticButton href="#contact" className="px-8 py-4 bg-acid text-white font-bold rounded-full text-lg shadow-[0_0_30px_rgba(244,63,94,0.3)] hover:shadow-[0_0_50px_rgba(244,63,94,0.5)] transition-all duration-300 transform hover:-translate-y-1 relative z-10 block text-center">
                {ctaPrimary}
              </MagneticButton>
            </motion.div>
            
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.4, duration: 0.5 }}>
              <a 
                href={portfolioData.hero.cvLink} 
                download
                className="px-8 py-4 bg-transparent border-2 border-acid/50 text-acid font-bold rounded-full text-lg hover:bg-acid/10 hover:border-acid transition-all duration-300 transform hover:-translate-y-1 relative z-10 flex items-center justify-center gap-2"
              >
                <span>{portfolioData.hero.ctaCV}</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </a>
            </motion.div>

            {/* Sleek Arrow pointing to CTA */}
            <motion.div 
              initial={{ opacity: 0, pathLength: 0 }} animate={{ opacity: 1, pathLength: 1 }} transition={{ delay: 1, duration: 1 }}
              className="absolute -bottom-16 left-1/2 ml-4 md:-bottom-12 md:left-32 md:ml-0 w-16 h-16 md:w-20 md:h-20 text-white opacity-40 pointer-events-none"
            >
              <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10 C 20 60, 50 80, 80 80" />
                <path d="M70 70 L80 80 L70 90" />
              </svg>
            </motion.div>
          </div>
        </div>

        {/* Image Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }} 
          animate={{ opacity: 1, scale: 1 }} 
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex-1 w-full flex justify-center md:justify-end mt-12 md:mt-0 relative"
        >
          {/* Sparkles around image */}
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} className="absolute -top-4 -right-4 md:-top-10 md:-right-10 w-16 h-16 md:w-20 md:h-20 text-acid/80 z-20">
            <svg viewBox="0 0 100 100" fill="currentColor">
              <path d="M50 0 L55 40 L100 50 L55 60 L50 100 L45 60 L0 50 L45 40 Z"/>
            </svg>
          </motion.div>

          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[450px] md:h-[450px]">
            {/* Fun background decoration for the image */}
            <div className="absolute inset-0 bg-acid/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute inset-4 border border-acid/30 rounded-full animate-[spin_15s_linear_infinite] border-dashed"></div>
            <div className="absolute inset-8 border border-white/10 rounded-full animate-[spin_20s_linear_infinite_reverse]"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(225,255,0,0.15)] bg-surface/50 p-2 backdrop-blur-sm">
              <img 
                src="/dp.jpg"
                alt="Shreya Ghosh" 
                className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = "https://ui-avatars.com/api/?name=Shreya+Ghosh&background=e1ff00&color=000&size=512";
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}