import React from 'react';
import { User, Briefcase, Database, UserCheck, Sun, Moon, ShieldCheck, Sparkles } from 'lucide-react';

const navItems = [
  { id: 'profile', icon: User, label: 'Perfil Ejecutivo', badge: 'Principal' },
  { id: 'experience', icon: Briefcase, label: 'Trayectoria', badge: '15 Años' },
  { id: 'systems', icon: Database, label: 'Arquitectura & IA', badge: 'Experto IA' },
  { id: 'references', icon: UserCheck, label: 'Referencias', badge: 'Avales' },
];

export default function Sidebar({ activeTab, setActiveTab, theme, setTheme }) {
  return (
    <aside className="glass-panel hidden lg:flex flex-col h-full overflow-hidden relative rounded-3xl border border-white/10">
      {/* Desktop Theme Toggle */}
      <div className="absolute top-5 right-5 z-20">
        <button
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white transition-all hover:scale-105 active:scale-95 shadow-md"
          title="Cambiar tema"
          aria-label="Cambiar tema"
        >
          {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-300" /> : <Moon className="w-4 h-4 text-sky-600" />}
        </button>
      </div>

      <div className="p-5 lg:p-6 flex flex-col justify-between h-full overflow-y-auto custom-scrollbar">
        <div>
          {/* Executive Profile Avatar Header */}
          <div className="pt-1 pb-5 border-b border-white/10 mb-5 flex flex-col items-center text-center">
            <div className="w-24 h-24 lg:w-26 lg:h-26 rounded-full overflow-hidden border-4 border-sky-400/50 shadow-[0_0_20px_rgba(56,189,248,0.3)] relative group mb-3">
              <img
                src="/foto.png"
                alt="Pablo Fabricio García Flores"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-full"></div>
            </div>

            <h1 className="text-xl lg:text-2xl heading-main font-black tracking-tight mb-1">
              Pablo Fabricio<br />García Flores
            </h1>

            <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-sky-400 mb-2.5">
              Ing. Administración de Empresas
            </p>

            {/* Badges */}
            <div className="flex flex-col items-center gap-1 w-full">
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-300 text-[11px] font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                <span>Control Patrimonial & CGE</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-purple-500/10 border border-purple-400/20 text-purple-300 text-[10px] font-semibold">
                <Sparkles className="w-3 h-3 text-purple-400" />
                <span>Experto en IA & Sistemas</span>
              </div>
            </div>
          </div>

          {/* Navigation Section */}
          <div>
            <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-2.5 px-1">
              Navegación Principal
            </div>
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`nav-button flex items-center justify-between px-3.5 py-3 rounded-2xl font-semibold text-xs lg:text-sm transition-all border ${isActive
                        ? 'bg-sky-500/20 border-sky-400/50 text-white shadow-[0_0_15px_rgba(56,189,248,0.25)]'
                        : 'bg-white/5 border-transparent text-slate-300 hover:bg-white/10 hover:border-white/10'
                      }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-sky-300' : 'text-slate-400'}`} />
                      <span>{item.label}</span>
                    </div>
                    <span className={`text-[9px] font-extrabold py-0.5 rounded-full w-20 min-w-[80px] text-center shrink-0 ${isActive ? 'bg-sky-400/30 text-sky-200' : 'bg-slate-800/60 text-slate-400'
                      }`}>
                      {item.badge}
                    </span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>


      </div>
    </aside>
  );
}
