import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-16 px-6 bg-void text-center font-sans">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
        <a href="#" className="font-display italic text-2xl tracking-wide flex items-center gap-1 group opacity-50 hover:opacity-100 transition-opacity">
          <span className="text-white">Shreya</span><span className="text-acid">.</span><span className="text-white">Ghosh</span>
        </a>
        <p className="font-light text-sm text-neutral-500 tracking-[0.1em] uppercase">
          &copy; {new Date().getFullYear()} Shreya Ghosh. Crafted with ❤️ & creative flair.
        </p>
      </div>
    </footer>
  );
}