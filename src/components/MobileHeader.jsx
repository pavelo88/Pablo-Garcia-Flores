import React from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';

export default function MobileHeader({ isMobileMenuOpen, setIsMobileMenuOpen, theme, setTheme }) {
  return (
    <header className="lg:hidden fixed top-0 left-0 right-0 h-16 glass-panel z-40 flex items-center justify-between px-4 border-b border-white/5 rounded-none">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-700">
          <img src="/foto.png" alt="Pablo Fabricio" className="w-full h-full object-cover" />
        </div>
        <div>
          <h1 className="text-sm font-bold text-white leading-tight">Pablo Fabricio</h1>
          <p className="text-[10px] uppercase tracking-wider text-sky-400">Activos Fijos</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <button 
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-2 bg-white/5 border border-white/10 rounded-lg text-white"
        >
          {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5 text-amber-600" />}
        </button>
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 bg-white/5 border border-white/10 rounded-lg text-white"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
    </header>
  );
}
