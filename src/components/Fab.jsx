import React from 'react';
import { MessageCircle, Mail, Plus, X } from 'lucide-react';
import { WHATSAPP_LINK, MAIL_TO_LINK } from '../utils/constants';

export default function Fab({ isFabOpen, setIsFabOpen }) {
  return (
    <div className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 z-50 flex flex-col items-end gap-4">
      {isFabOpen && (
        <div className="flex flex-col gap-3 animate-in slide-in-from-bottom-5 fade-in duration-200">
          <a 
            href={WHATSAPP_LINK} 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-3 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:bg-[#20bd5a] transition-all"
          >
            <span className="font-semibold text-sm">WhatsApp</span>
            <MessageCircle className="w-5 h-5" />
          </a>
          <a 
            href={MAIL_TO_LINK} 
            className="flex items-center gap-3 bg-sky-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-sky-400 transition-all"
          >
            <span className="font-semibold text-sm">Correo</span>
            <Mail className="w-5 h-5" />
          </a>
        </div>
      )}
      <button 
        onClick={() => setIsFabOpen(!isFabOpen)}
        className="w-14 h-14 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] transition-all"
      >
        {isFabOpen ? <X className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
      </button>
    </div>
  );
}
