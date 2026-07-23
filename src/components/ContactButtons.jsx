import React from 'react';
import { MessageSquare, Globe, Download } from 'lucide-react';
import { WHATSAPP_LINK, LINKEDIN_URL } from '../utils/constants';
import { handleDownloadCV } from '../utils/pdfGenerator';

export default function ContactButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-3.5 mt-8 pt-6 border-t border-white/10">
      <a 
        href={WHATSAPP_LINK} 
        target="_blank"
        rel="noreferrer"
        className="flex-1 flex items-center justify-center gap-2.5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 hover:text-white py-3.5 px-4 rounded-2xl font-bold text-sm border border-emerald-500/30 transition-all shadow-md hover:shadow-emerald-500/20 hover:-translate-y-0.5 active:scale-95"
      >
        <MessageSquare className="w-4 h-4 text-emerald-400" />
        <span>Contactar por WhatsApp</span>
      </a>

      <a 
        href={LINKEDIN_URL} 
        target="_blank"
        rel="noreferrer"
        className="flex-1 flex items-center justify-center gap-2.5 bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 hover:text-white py-3.5 px-4 rounded-2xl font-bold text-sm border border-blue-500/30 transition-all shadow-md hover:shadow-blue-500/20 hover:-translate-y-0.5 active:scale-95"
      >
        <Globe className="w-4 h-4 text-blue-400" />
        <span>Perfil LinkedIn</span>
      </a>

      <button
        onClick={handleDownloadCV}
        className="flex-1 flex items-center justify-center gap-2.5 bg-sky-500/10 hover:bg-sky-500/20 text-sky-300 hover:text-white py-3.5 px-4 rounded-2xl font-bold text-sm border border-sky-400/30 transition-all shadow-md hover:shadow-sky-500/20 hover:-translate-y-0.5 active:scale-95"
      >
        <Download className="w-4 h-4 text-sky-400" />
        <span>Descargar CV (PDF)</span>
      </button>
    </div>
  );
}
