import React from 'react';
import { Phone, Link, Download } from 'lucide-react';
import { WHATSAPP_LINK, LINKEDIN_URL, PHONE_NUMBER } from '../utils/constants';
import { handleDownloadCV } from '../utils/pdfGenerator';

export default function ContactButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-10">
      <a 
        href={WHATSAPP_LINK} 
        target="_blank"
        rel="noreferrer"
        className="flex-1 flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white py-3.5 rounded-2xl font-medium text-sm border border-white/10 transition-all backdrop-blur-md"
      >
        <Phone className="w-4 h-4 text-sky-400" /> WhatsApp
      </a>
      <a 
        href={LINKEDIN_URL} 
        target="_blank"
        rel="noreferrer"
        className="flex-1 flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white py-3.5 rounded-2xl font-medium text-sm border border-white/10 transition-all backdrop-blur-md"
      >
        <Link className="w-4 h-4 text-blue-400" /> LinkedIn
      </a>
      <button
        onClick={handleDownloadCV}
        className="flex-1 flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white py-3.5 rounded-2xl font-medium text-sm border border-white/10 transition-all backdrop-blur-md"
      >
        <Download className="w-4 h-4 text-emerald-400" /> Descargar PDF
      </button>
    </div>
  );
}
