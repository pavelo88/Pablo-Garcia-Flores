import React from 'react';
import { Sun, Moon, User, Briefcase, Cpu, UserCheck, Download, Globe, Mail, Phone, MessageCircle } from 'lucide-react';
import { handleDownloadCV } from '../utils/pdfGenerator';
import { LINKEDIN_URL, MAIL_TO_LINK, PHONE_NUMBER, WHATSAPP_LINK } from '../utils/constants';

const navItems = [
  { id: 'profile', icon: User, label: 'Perfil', badge: '' },
  { id: 'experience', icon: Briefcase, label: 'Trayectoria', badge: '15 años' },
  { id: 'systems', icon: Cpu, label: 'Habilidades', badge: 'Perfil' },
  { id: 'references', icon: UserCheck, label: 'Referencias', badge: 'Avales' },
];

export default function Sidebar({ activeTab, setActiveTab, theme, setTheme }) {
  return (
    <aside className="glass-panel glass-panel-strong hidden lg:flex flex-col h-full max-h-full overflow-hidden relative rounded-3xl border border-white/10">
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

      <div className="p-5 lg:p-6 flex flex-col h-full overflow-y-auto custom-scrollbar">
        <div>
          {/* Executive Profile Avatar Header */}
          {/* Executive Profile Avatar Header */}
          <div className="pt-1 pb-5 border-b border-white/10 mb-5 flex flex-col items-center text-center">
            <button type="button" onClick={handleDownloadCV} aria-label="Descargar CV haciendo clic en la foto" className="w-24 h-24 lg:w-26 lg:h-26 rounded-full overflow-hidden border-4 border-dynamic-avatar shadow-[0_0_20px_rgba(56,189,248,0.3)] relative group mb-3 cursor-pointer hover:scale-105 transition-transform">
              <img
                src="/foto.png"
                alt="Pablo Fabricio García Flores"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-full"></div>
            </button>

            <h1 className="text-xl lg:text-2xl heading-main font-black tracking-tight mb-1">
              Pablo Fabricio<br />García Flores
            </h1>

            <p className="text-[10px] font-bold tracking-[0.15em] uppercase text-dynamic-role mb-2.5">
              Ing. Administración de Empresas
            </p>

          </div>

          <nav className="flex flex-col gap-2" aria-label="Navegación principal de escritorio">
            {navItems.map(({ id, icon: Icon, label, badge }) => {
              const isActive = activeTab === id;
              return <button key={id} type="button" onClick={() => setActiveTab(id)} className={`nav-button flex items-center justify-between px-3.5 py-3 rounded-2xl font-semibold text-xs lg:text-sm transition-all border ${isActive ? 'bg-sky-500/20 border-sky-400/50 text-white shadow-[0_0_15px_rgba(56,189,248,0.25)]' : 'bg-white/5 border-transparent text-slate-300 hover:bg-white/10 hover:border-white/10'}`}>
                <span className="flex items-center gap-2.5"><Icon className={`w-4 h-4 ${isActive ? 'text-sky-300' : 'text-slate-400'}`} />{label}</span>
                {badge && <span className={`text-[9px] font-extrabold py-0.5 rounded-full w-16 text-center shrink-0 ${isActive ? 'bg-sky-400/30 text-sky-200' : 'bg-slate-800/60 text-slate-400'}`}>{badge}</span>}
              </button>;
            })}
          </nav>

          <div className="mt-6 pt-5 border-t border-white/10">
            <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-slate-400 mb-3">Contacto directo</p>
            <div className="grid grid-cols-5 gap-2">
              <button type="button" onClick={handleDownloadCV} className="h-10 rounded-xl border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 transition-colors flex items-center justify-center" aria-label="Descargar PDF" title="Descargar PDF"><Download className="w-4 h-4" /></button>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer" className="h-10 rounded-xl border border-blue-400/30 bg-blue-500/10 text-blue-300 hover:bg-blue-500/20 transition-colors flex items-center justify-center" aria-label="LinkedIn" title="LinkedIn"><Globe className="w-4 h-4" /></a>
              <a href={MAIL_TO_LINK} className="h-10 rounded-xl border border-purple-400/30 bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 transition-colors flex items-center justify-center" aria-label="Correo" title="Correo"><Mail className="w-4 h-4" /></a>
              <a href={`tel:${PHONE_NUMBER}`} className="h-10 rounded-xl border border-sky-400/30 bg-sky-500/10 text-sky-300 hover:bg-sky-500/20 transition-colors flex items-center justify-center" aria-label="Llamada" title="Llamada"><Phone className="w-4 h-4" /></a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="h-10 rounded-xl border border-emerald-400/30 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20 transition-colors flex items-center justify-center" aria-label="WhatsApp" title="WhatsApp"><MessageCircle className="w-4 h-4" /></a>
            </div>
          </div>

        </div>


      </div>
    </aside>
  );
}
