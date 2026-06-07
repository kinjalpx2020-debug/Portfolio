import React from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <motion.header 
      initial={{ y: -100 }} animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50 px-4 md:px-6 pt-6 pointer-events-none flex justify-center"
    >
      <nav className="pointer-events-auto flex items-center justify-between w-full max-w-5xl bg-surface/80 backdrop-blur-lg border border-white/10 px-5 md:px-8 py-3 md:py-4 rounded-full shadow-2xl">
        <a href="#" className="font-display italic text-xl md:text-2xl tracking-wide flex items-center gap-1 group">
          <span className="text-white">Shreya</span><span className="text-acid group-hover:rotate-12 transition-transform duration-300 inline-block">.</span><span className="text-white">Ghosh</span>
        </a>
        <div className="hidden md:flex gap-10 text-xs font-sans tracking-[0.2em] font-bold text-neutral-400">
          <a href="#about" className="hover:text-acid transition-colors">ABOUT</a>
          <a href="#portfolio" className="hover:text-acid transition-colors">DOMAINS</a>
          <a href="#works" className="hover:text-acid transition-colors">WORKS</a>
        </div>
        <a href="#contact" className="bg-white text-black font-bold font-sans tracking-[0.2em] text-[10px] md:text-xs px-5 md:px-6 py-2.5 md:py-3 rounded-full hover:bg-acid hover:text-white hover:shadow-[0_0_20px_rgba(244,63,94,0.4)] transition-all duration-300">
          HIRE ME
        </a>
      </nav>
    </motion.header>
  );
}