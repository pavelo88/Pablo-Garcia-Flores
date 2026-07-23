import React from 'react';
import { User, Briefcase, Database, UserCheck, Sun, Moon, Phone, Globe, Download, ShieldCheck } from 'lucide-react';
import { WHATSAPP_LINK, LINKEDIN_URL } from '../utils/constants';
import { handleDownloadCV } from '../utils/pdfGenerator';

const navItems = [
  { id: 'profile', icon: User, label: 'Perfil Ejecutivo', badge: 'Principal' },
  { id: 'experience', icon: Briefcase, label: 'Trayectoria', badge: '15 Años' },
  { id: 'systems', icon: Database, label: 'Arquitectura & IT', badge: 'Sistemas' },
  { id: 'references', icon: UserCheck, label: 'Referencias', badge: 'Avales' },
];

export default function Sidebar({ activeTab, setActiveTab, isMobileMenuOpen, setIsMobileMenuOpen, theme, setTheme }) {
  return (
    <>
      {/* Mobile Overlay Backdrop */}
      <div 
        onClick={() => setIsMobileMenuOpen(false)}
        className={`fixed inset-0 bg-slate-950/80 backdrop-blur-md z-30 transition-opacity duration-300 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden="true"
      />

      {/* Main Sidebar Container */}
      <aside className={`
        glass-panel p-6 lg:p-8 flex flex-col justify-between
        fixed lg:relative inset-x-4 top-20 bottom-4 lg:inset-auto 
        z-30 transition-all duration-300 transform lg:h-full overflow-y-auto custom-scrollbar
        ${isMobileMenuOpen 
          ? 'translate-y-0 opacity-100 scale-100 shadow-2xl' 
          : '-translate-y-6 opacity-0 scale-95 pointer-events-none lg:pointer-events-auto lg:translate-y-0 lg:opacity-100 lg:scale-100'}
      `}>
        {/* Desktop Theme Toggle */}
        <div className="absolute top-6 right-6 hidden lg:block">
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-white transition-all hover:scale-105 active:scale-95"
            title="Cambiar tema"
            aria-label="Cambiar tema"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-300" /> : <Moon className="w-5 h-5 text-sky-600" />}
          </button>
        </div>

        <div className="flex flex-col h-full justify-between">
          <div>
            {/* Profile Avatar Header */}
            <div className="flex flex-col items-center text-center mb-6 mt-2">
              <div className="w-28 h-28 lg:w-32 lg:h-32 rounded-full overflow-hidden border-4 border-sky-400/40 shadow-[0_0_25px_rgba(56,189,248,0.25)] relative group mb-4">
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

              <p className="text-[11px] font-bold tracking-[0.15em] uppercase text-sky-400 mb-3">
                Ing. Administración de Empresas
              </p>

              {/* Status Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20 text-sky-300 text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                <span>Control Patrimonial & CGE</span>
              </div>
            </div>

            {/* Navigation Section */}
            <div className="mb-6">
              <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-2 px-2">
                Navegación
              </div>
              <nav className="flex flex-col gap-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeTab === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveTab(item.id);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`nav-button flex items-center justify-between px-4 py-3.5 rounded-2xl font-semibold text-sm transition-all border ${
                        isActive
                          ? 'bg-sky-500/20 border-sky-400/50 text-white shadow-[0_0_15px_rgba(56,189,248,0.2)]'
                          : 'bg-white/5 border-transparent text-slate-300 hover:bg-white/10 hover:border-white/10'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={`w-4 h-4 ${isActive ? 'text-sky-300' : 'text-slate-400'}`} />
                        <span>{item.label}</span>
                      </div>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        isActive ? 'bg-sky-400/30 text-sky-200' : 'bg-slate-800/60 text-slate-400'
                      }`}>
                        {item.badge}
                      </span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Quick Contact Footer inside Sidebar */}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
            <div className="text-[10px] uppercase font-bold tracking-widest text-slate-400 mb-1 px-2">
              Contacto Directo
            </div>
            <div className="grid grid-cols-2 gap-2">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-semibold transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <span>WhatsApp</span>
              </a>
              <a 
                href={LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-semibold transition-all"
              >
                <Globe className="w-3.5 h-3.5 text-blue-400" />
                <span>LinkedIn</span>
              </a>
            </div>
            <button
              onClick={handleDownloadCV}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-sky-500/10 hover:bg-sky-500/20 border border-sky-400/30 text-sky-300 text-xs font-semibold transition-all mt-1"
            >
              <Download className="w-3.5 h-3.5 text-sky-400" />
              <span>Descargar Hoja de Vida (PDF)</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
