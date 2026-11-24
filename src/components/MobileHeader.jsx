import React from 'react';
import { Sun, Moon } from 'lucide-react';

export default function MobileHeader({ theme, setTheme, activeTab, setActiveTab }) {

  const headerBgColor = theme === 'light'
    ? 'rgba(255, 255, 255, 0.40)'  // <-- MODIFICA ESTE VALOR PARA EL MODO CLARO (ARRIBA)
    : 'rgba(3, 7, 18, 0.45)';      // <-- MODIFICA ESTE VALOR PARA EL MODO OSCURO (ARRIBA)

  return (
    <header
      style={{ backgroundColor: headerBgColor }}
      className="lg:hidden fixed top-0 left-0 right-0 z-40 backdrop-blur-[18px] -webkit-backdrop-blur-[18px] border-b border-white/10 theme-light:border-slate-200/60 shadow-xl rounded-none flex flex-col"
    >
      {/* Top Header Bar */}
      <div className="h-14 px-4 flex items-center justify-between">
        {/* Left Side: Name, Title & Animated Photo Avatar */}
        <button
          onClick={() => setActiveTab('profile')}
          className="text-left focus:outline-none group flex items-center gap-2"
        >
          {/* Animated Avatar */}
          <div className={`rounded-full overflow-hidden border border-sky-400/50 shadow-md shrink-0 transition-all duration-500 ease-in-out ${activeTab === 'profile'
            ? 'w-0 h-0 opacity-0 scale-50 pointer-events-none'
            : 'w-8 h-8 opacity-100 scale-100'
            }`}>
            <img src="/foto.png" alt="Pablo García" className="w-full h-full object-cover" />
          </div>

          <div>
            <h1 className="text-sm font-extrabold text-white theme-light:text-slate-900 leading-none flex items-center gap-1 group-hover:text-sky-300 transition-colors">
              Pablo García
            </h1>
            <p className="text-[10px] font-bold text-sky-400 tracking-tight mt-0.5">
              Ing. Administración
            </p>
          </div>
        </button>

        {/* Right Side: Theme Toggle Button */}
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-2 bg-white/5 theme-light:bg-black/5 hover:bg-white/10 border border-white/15 theme-light:border-slate-300 rounded-xl text-white theme-light:text-slate-800 transition-all active:scale-95 shadow-sm"
          title="Cambiar tema"
          aria-label="Cambiar tema"
        >
          {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-sky-600" />}
        </button>
      </div>

    </header>
  );
}
