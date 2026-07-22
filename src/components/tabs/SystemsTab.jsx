import React from 'react';
import ContactButtons from '../ContactButtons';

export default function SystemsTab() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <h2 className="text-3xl lg:text-4xl heading-main mb-8">Arquitectura & Sistemas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        <div className="bg-slate-900/40 border border-white/5 p-6 lg:p-8 rounded-[2rem] backdrop-blur-sm relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-sky-400 mb-3">Tecnología</div>
          <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">Levantamiento Inteligente</h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Desarrollo e implementación de macros avanzadas y validaciones robustas que soportan
            sistemas de códigos de barra y bases de datos masivas para inventarios públicos precisos.
          </p>
        </div>
        <div className="bg-slate-900/40 border border-white/5 p-6 lg:p-8 rounded-[2rem] backdrop-blur-sm relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-purple-400 mb-3">Inteligencia Artificial</div>
          <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">Automatización Legal</h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Configuración de agentes de IA y flujos automatizados que proveen asistencia legal,
            interpretación de la NCI 400 y resolución de problemas normativos en tiempo real.
          </p>
        </div>
      </div>

      {/* Los 3 botones agregados debajo de la sección Arquitectura */}
      <ContactButtons />
    </div>
  );
}
