import React from 'react';
import { MapPin } from 'lucide-react';
import ContactButtons from '../ContactButtons';

export default function ProfileTab() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-sky-400 mb-4">
        <MapPin className="h-4 w-4" /> Quito, Ecuador
      </div>
      <h2 className="text-4xl lg:text-5xl heading-main mb-6 leading-tight">
        Dirección sólida <br />para bienes públicos.
      </h2>
      <p className="text-base text-slate-300 leading-relaxed max-w-2xl mb-8">
        Ingeniero en Administración con amplia experiencia en control patrimonial estatal.
        Lidero la constatación física, conciliación contable y diseño de sistemas que
        soportan auditorías y garantizan la transparencia total.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-slate-900/40 border border-white/5 p-6 rounded-3xl backdrop-blur-sm">
          <div className="text-4xl font-black text-white mb-1">15</div>
          <div className="text-[10px] tracking-[0.2em] uppercase text-slate-400">Años de Servicio</div>
        </div>
        <div className="bg-slate-900/40 border border-white/5 p-6 rounded-3xl backdrop-blur-sm">
          <div className="text-4xl font-black text-white mb-1">0</div>
          <div className="text-[10px] tracking-[0.2em] uppercase text-slate-400">Hallazgos CGE</div>
        </div>
        <div className="bg-slate-900/40 border border-white/5 p-6 rounded-3xl backdrop-blur-sm">
          <div className="text-4xl font-black text-white mb-1">AI</div>
          <div className="text-[10px] tracking-[0.2em] uppercase text-slate-400">Sistemas & SAP</div>
        </div>
      </div>

      {/* Los 3 botones agregados debajo de la sección Perfil Ejecutivo */}
      <ContactButtons />
    </div>
  );
}
