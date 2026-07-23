import React from 'react';
import { MessageCircle, Mail, Plus, X, PhoneCall } from 'lucide-react';
import { WHATSAPP_LINK, MAIL_TO_LINK } from '../utils/constants';

export default function Fab({ isFabOpen, setIsFabOpen }) {
  return (
    <div className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 z-50 flex flex-col items-end gap-3">
      {isFabOpen && (
        <div className="flex flex-col gap-2.5 animate-in slide-in-from-bottom-5 fade-in duration-200">
          <a 
            href={WHATSAPP_LINK} 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-4 py-3 rounded-2xl shadow-xl transition-all hover:scale-105 active:scale-95 border border-emerald-400/30"
          >
            <span className="font-bold text-xs">WhatsApp Directo</span>
            <MessageCircle className="w-4 h-4" />
          </a>
          <a 
            href={MAIL_TO_LINK} 
            className="flex items-center gap-3 bg-sky-600 hover:bg-sky-500 text-white px-4 py-3 rounded-2xl shadow-xl transition-all hover:scale-105 active:scale-95 border border-sky-400/30"
          >
            <span className="font-bold text-xs">Enviar Correo</span>
            <Mail className="w-4 h-4" />
          </a>
        </div>
      )}
      <button 
        onClick={() => setIsFabOpen(!isFabOpen)}
        className="w-14 h-14 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white rounded-2xl flex items-center justify-center shadow-[0_0_25px_rgba(56,189,248,0.4)] hover:shadow-[0_0_35px_rgba(56,189,248,0.6)] transition-all hover:scale-105 active:scale-95 border border-sky-300/30"
        title="Contacto rápido"
        aria-label="Contacto rápido"
      >
        {isFabOpen ? <X className="w-6 h-6" /> : <PhoneCall className="w-6 h-6" />}
      </button>
    </div>
  );
}
