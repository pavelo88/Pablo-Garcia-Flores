import React from 'react';
import { Menu, X, Sun, Moon, Sparkles, User, Briefcase, Database, UserCheck } from 'lucide-react';

const mobileNavTabs = [
  { id: 'profile', icon: User, label: 'Perfil' },
  { id: 'experience', icon: Briefcase, label: 'Trayectoria' },
  { id: 'systems', icon: Database, label: 'Sistemas' },
  { id: 'references', icon: UserCheck, label: 'Referencias' },
];

export default function MobileHeader({ isMobileMenuOpen, setIsMobileMenuOpen, theme, setTheme, activeTab, setActiveTab }) {
  return (
    <header className="lg:hidden fixed top-0 left-0 right-0 z-40 glass-panel border-b border-white/10 rounded-none shadow-xl flex flex-col">
      {/* Top Main Bar */}
      <div className="h-16 px-4 flex items-center justify-between">
        {/* Executive Quick Profile */}
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex items-center gap-2.5 text-left focus:outline-none group"
        >
          <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-sky-400/50 shadow-md">
            <img src="/foto.png" alt="Pablo Fabricio García Flores" className="w-full h-full object-cover" />
            <span className="absolute bottom-0 right-0 w-2 h-2 bg-emerald-500 rounded-full ring-2 ring-slate-900"></span>
          </div>
          <div>
            <h1 className="text-xs sm:text-sm font-extrabold text-white leading-tight flex items-center gap-1 group-hover:text-sky-300 transition-colors">
              Pablo Fabricio <Sparkles className="w-3 h-3 text-sky-400" />
            </h1>
            <p className="text-[9px] font-semibold uppercase tracking-wider text-sky-400">
              Control Patrimonial & CGE
            </p>
          </div>
        </button>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white transition-all active:scale-95"
            title="Cambiar tema"
            aria-label="Cambiar tema"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-sky-600" />}
          </button>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`px-2.5 py-1.5 border rounded-xl font-semibold text-xs flex items-center gap-1.5 transition-all active:scale-95 ${
              isMobileMenuOpen 
                ? 'bg-sky-500/20 border-sky-400 text-sky-300' 
                : 'bg-white/5 hover:bg-white/10 border-white/10 text-white'
            }`}
            aria-label="Menú principal"
          >
            <span>{isMobileMenuOpen ? 'Cerrar' : 'Menú'}</span>
            {isMobileMenuOpen ? <X className="w-3.5 h-3.5 text-sky-400" /> : <Menu className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Direct Mobile Quick Tab Pills Bar (Always Visible on Mobile) */}
      <div className="px-3 pb-2 flex items-center gap-1.5 overflow-x-auto no-scrollbar border-t border-white/5 pt-1.5">
        {mobileNavTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setIsMobileMenuOpen(false);
              }}
              className={`flex-1 min-w-[75px] py-1.5 px-2 rounded-xl text-[11px] font-bold flex items-center justify-center gap-1.5 transition-all border shrink-0 ${
                isActive
                  ? 'bg-sky-500/20 border-sky-400/60 text-white shadow-[0_0_10px_rgba(56,189,248,0.25)]'
                  : 'bg-white/5 border-transparent text-slate-300 hover:bg-white/10'
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
