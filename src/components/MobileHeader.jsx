import React from 'react';
import { Sun, Moon, User, Briefcase, Database, UserCheck, Sparkles } from 'lucide-react';

const mobileNavTabs = [
  { id: 'profile', icon: User, label: 'Perfil' },
  { id: 'experience', icon: Briefcase, label: 'Trayectoria' },
  { id: 'systems', icon: Database, label: 'Sistemas' },
  { id: 'references', icon: UserCheck, label: 'Referencias' },
];

export default function MobileHeader({ theme, setTheme, activeTab, setActiveTab }) {

  const headerBgColor = theme === 'light'
    ? 'rgba(255, 255, 255, 0.40)'  // <-- MODIFICA ESTE VALOR PARA EL MODO CLARO (ARRIBA)
    : 'rgba(3, 7, 18, 0.45)';      // <-- MODIFICA ESTE VALOR PARA EL MODO OSCURO (ARRIBA)

  const buttonsBarBgColor = theme === 'light'
    ? 'rgba(255, 255, 255, 0.20)'  // <-- MODIFICA ESTE VALOR PARA EL MODO CLARO (ABAJO)
    : 'rgba(3, 7, 18, 0.25)';      // <-- MODIFICA ESTE VALOR PARA EL MODO OSCURO (ABAJO)

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
              Pablo García <Sparkles className="w-3 h-3 text-sky-400 inline animate-pulse" />
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

      {/* Direct Mobile Quick Tab Pills Bar */}
      <div
        style={{ backgroundColor: buttonsBarBgColor }}
        className="px-2.5 pb-2 pt-1 flex items-center gap-1.5 overflow-x-auto no-scrollbar border-t border-white/5 theme-light:border-slate-200/60"
      >
        {mobileNavTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 min-w-[76px] py-1.5 px-2 rounded-xl text-[11px] font-extrabold flex items-center justify-center gap-1 transition-all border shrink-0 ${isActive
                ? 'bg-sky-500/25 theme-light:bg-white border-sky-400 theme-light:border-sky-500 text-white theme-light:text-sky-600 shadow-[0_0_12px_rgba(56,189,248,0.3)] theme-light:shadow-md'
                : 'bg-white/5 theme-light:bg-white/75 border-transparent theme-light:border-slate-200/80 text-slate-300 theme-light:text-slate-500 hover:text-white theme-light:hover:text-slate-900'
                }`}
            >
              {Icon && <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-sky-300' : 'text-slate-500 theme-light:text-slate-400'}`} />}
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </header>
  );
}
