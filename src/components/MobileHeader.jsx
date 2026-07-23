import React from 'react';
import { Sun, Moon, User, Briefcase, Database, UserCheck, Sparkles } from 'lucide-react';

const mobileNavTabs = [
  { id: 'profile', icon: User, label: 'Perfil' },
  { id: 'experience', icon: Briefcase, label: 'Trayectoria' },
  { id: 'systems', icon: Database, label: 'Sistemas & IA' },
  { id: 'references', icon: UserCheck, label: 'Referencias' },
];

export default function MobileHeader({ theme, setTheme, activeTab, setActiveTab }) {
  return (
    <header className="lg:hidden fixed top-0 left-0 right-0 z-40 glass-panel border-b border-white/10 rounded-none shadow-xl flex flex-col">
      {/* Top Header Bar */}
      <div className="h-14 px-4 flex items-center justify-between">
        {/* Left Side: Name, Title & Animated Photo Avatar */}
        <button 
          onClick={() => setActiveTab('profile')}
          className="text-left focus:outline-none group flex items-center gap-2"
        >
          {/* Animated Avatar: hides when activeTab is profile (photo is below in ProfileTab) and slides up/shows when switching tabs */}
          <div className={`rounded-full overflow-hidden border border-sky-400/50 shadow-md shrink-0 transition-all duration-500 ease-in-out ${
            activeTab === 'profile' 
              ? 'w-0 h-0 opacity-0 scale-50 pointer-events-none' 
              : 'w-8 h-8 opacity-100 scale-100'
          }`}>
            <img src="/foto.png" alt="Pablo García" className="w-full h-full object-cover" />
          </div>

          <div>
            <h1 className="text-sm font-extrabold text-white leading-none flex items-center gap-1 group-hover:text-sky-300 transition-colors">
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
          className="p-2 bg-white/5 hover:bg-white/10 border border-white/15 rounded-xl text-white transition-all active:scale-95 shadow-sm"
          title="Cambiar tema"
          aria-label="Cambiar tema"
        >
          {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-sky-600" />}
        </button>
      </div>

      {/* Direct Mobile Quick Tab Pills Bar (No LED glows, clean and executive) */}
      <div className="px-2.5 pb-2 pt-1 flex items-center gap-1.5 overflow-x-auto no-scrollbar border-t border-white/5 bg-slate-950/30">
        {mobileNavTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 min-w-[78px] py-1.5 px-2 rounded-xl text-[11px] font-extrabold flex items-center justify-center gap-1.5 transition-all border shrink-0 ${
                isActive
                  ? 'bg-sky-500/25 border-sky-400 text-white shadow-[0_0_15px_rgba(56,189,248,0.4)]'
                  : 'bg-white/5 border-transparent text-slate-300 hover:text-white'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-sky-300' : 'text-slate-400'}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </header>
  );
}
