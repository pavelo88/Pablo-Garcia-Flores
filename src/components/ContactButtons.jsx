import React from 'react';
import { Phone, Globe, Mail, Download } from 'lucide-react';
import { LINKEDIN_URL, PHONE_NUMBER, MAIL_TO_LINK } from '../utils/constants';
import { handleDownloadCV } from '../utils/pdfGenerator';

export default function ContactButtons() {
  return (
    <div className="mt-8 pt-6 pb-6 mb-8 border-t border-white/10 flex flex-col gap-3">
      <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1 px-1">
        Contacto Directo & Descargas
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">

        {/* 1. Descargar CV */}
        <button
          onClick={handleDownloadCV}
          className="flex items-center justify-center gap-1.5 bg-cyan-500/15 hover:bg-cyan-500/25 text-white py-3 px-1.5 sm:px-3 rounded-2xl font-bold text-[10px] sm:text-xs tracking-tight border border-cyan-400/40 transition-all shadow-sm hover:shadow-cyan-500/20 hover:-translate-y-0.5 active:scale-95 whitespace-nowrap"
        >
          <Download className="w-3.5 h-3.5 text-cyan-300 shrink-0" />
          <span>Descargar CV</span>
        </button>

        {/* 2. LinkedIn */}
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-1.5 bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 hover:text-white py-3 px-1.5 sm:px-3 rounded-2xl font-bold text-[10px] sm:text-xs tracking-tight border border-blue-500/30 transition-all shadow-sm hover:shadow-blue-500/20 hover:-translate-y-0.5 active:scale-95 whitespace-nowrap"
        >
          <Globe className="w-3.5 h-3.5 text-blue-400 shrink-0" />
          <span>LinkedIn</span>
        </a>

        {/* 3. Correo */}
        <a
          href={MAIL_TO_LINK}
          className="flex items-center justify-center gap-1.5 bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 hover:text-white py-3 px-1.5 sm:px-3 rounded-2xl font-bold text-[10px] sm:text-xs tracking-tight border border-purple-400/30 transition-all shadow-sm hover:shadow-purple-500/20 hover:-translate-y-0.5 active:scale-95 whitespace-nowrap"
        >
          <Mail className="w-3.5 h-3.5 text-purple-400 shrink-0" />
          <span>Correo</span>
        </a>

        {/* 4. Llamada */}
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="flex items-center justify-center gap-1.5 bg-sky-500/10 hover:bg-sky-500/20 text-sky-300 hover:text-white py-3 px-1.5 sm:px-3 rounded-2xl font-bold text-[10px] sm:text-xs tracking-tight border border-sky-400/30 transition-all shadow-sm hover:shadow-sky-500/20 hover:-translate-y-0.5 active:scale-95 whitespace-nowrap"
        >
          <Phone className="w-3.5 h-3.5 text-sky-400 shrink-0" />
          <span>Llamada</span>
        </a>

      </div>
    </div>
  );
}
