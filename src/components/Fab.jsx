import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_LINK } from '../utils/constants';

export default function Fab() {
  return (
    <div className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 z-50">
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(37,211,102,0.5)] hover:shadow-[0_0_35px_rgba(37,211,102,0.7)] transition-all hover:scale-110 active:scale-95 border-2 border-emerald-300/40"
        title="WhatsApp"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
}
