import React from 'react';
import { User, Briefcase, Database, Bot, Download, Phone, Link, Sun, Moon } from 'lucide-react';
import { WHATSAPP_LINK, LINKEDIN_URL, PHONE_NUMBER } from '../utils/constants';
import { handleDownloadCV } from '../utils/pdfGenerator';

const navItems = [
  { id: 'profile', icon: User, label: 'Perfil Ejecutivo' },
  { id: 'experience', icon: Briefcase, label: 'Trayectoria' },
  { id: 'systems', icon: Database, label: 'Arquitectura' },
  { id: 'ai', icon: Bot, label: 'Consultor IA' }
];

export default function Sidebar({ activeTab, setActiveTab, isMobileMenuOpen, setIsMobileMenuOpen, theme, setTheme }) {
  return (
    <aside className={`
      glass-panel p-8 lg:p-10 flex flex-col justify-start
      fixed lg:relative inset-x-4 top-20 bottom-4 lg:inset-auto 
      z-30 transition-all duration-300 transform overflow-y-auto custom-scrollbar
      ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0 pointer-events-none lg:pointer-events-auto lg:translate-y-0 lg:opacity-100'}
    `}>
      <div className="absolute top-6 right-6 hidden lg:block">
        <button 
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white transition-all"
          title="Cambiar tema"
        >
          {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5 text-amber-600" />}
        </button>
      </div>

      <div className="flex flex-col h-full">
        <div className="hidden lg:flex justify-center mb-6 mt-4">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-slate-700/50 shadow-2xl relative">
            <img src="/foto.png" alt="Pablo Fabricio" className="w-full h-full object-cover" />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-full"></div>
          </div>
        </div>

        <div className="hidden lg:block text-center mb-8">
          <h1 className="text-2xl heading-main mb-1">Pablo Fabricio<br />García Flores</h1>
          <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-sky-400">
            Ing. Administración<br /> de Empresas
          </p>
        </div>

        <nav className="flex flex-col gap-2 mb-6">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`nav-button flex items-center gap-4 px-5 py-3.5 rounded-2xl font-medium text-sm border border-transparent ${activeTab === item.id
                  ? 'active'
                  : 'text-slate-400'
                  }`}
              >
                <Icon className={`w-5 h-5 ${activeTab === item.id ? 'text-sky-300' : 'text-slate-500'}`} />
                {item.label}
              </button>
            );
          })}
        </nav>

        <div className="space-y-3 mt-auto">
          <a 
            href={WHATSAPP_LINK} 
            target="_blank"
            rel="noreferrer"
            className="w-full flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white py-3.5 rounded-2xl font-medium text-sm border border-white/10 transition-all backdrop-blur-md"
          >
            <Phone className="w-4 h-4 text-sky-400" /> {PHONE_NUMBER}
          </a>
          <a 
            href={LINKEDIN_URL} 
            target="_blank"
            rel="noreferrer"
            className="w-full flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white py-3.5 rounded-2xl font-medium text-sm border border-white/10 transition-all backdrop-blur-md"
          >
            <Link className="w-4 h-4 text-blue-400" /> LinkedIn
          </a>
          <button
            onClick={handleDownloadCV}
            className="w-full flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white py-3.5 rounded-2xl font-medium text-sm border border-white/10 transition-all backdrop-blur-md"
          >
            <Download className="w-4 h-4 text-emerald-400" /> Descargar PDF
          </button>
        </div>
      </div>
    </aside>
  );
}
