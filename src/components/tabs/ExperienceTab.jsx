import React from 'react';

export default function ExperienceTab() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      <h2 className="text-3xl lg:text-4xl heading-main mb-8">Trayectoria Institucional</h2>
      <div className="space-y-6 max-w-3xl">
        <div className="group bg-slate-900/40 border border-white/5 p-6 lg:p-8 rounded-[2rem] backdrop-blur-sm hover:bg-slate-900/60 transition-all hover:border-sky-500/30">
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-sky-400 mb-3">8 años - Consejo de la Judicatura</div>
          <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">Analista de Activos Fijos</h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Dirección técnica de constatación física y conciliación de inventarios.
            Responsable de la gestión patrimonial y control interno bajo el estricto cumplimiento
            de la normativa de la Contraloría General del Estado.
          </p>
        </div>
        <div className="group bg-slate-900/40 border border-white/5 p-6 lg:p-8 rounded-[2rem] backdrop-blur-sm hover:bg-slate-900/60 transition-all hover:border-sky-500/30">
          <div className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400 mb-3">7 años - Registro Civil del Ecuador</div>
          <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">Gestión de Bienes</h3>
          <p className="text-sm text-slate-300 leading-relaxed">
            Administración patrimonial institucional a nivel nacional. Optimización de recursos,
            generación de procesos eficientes y controles normativos de bienes públicos.
          </p>
        </div>
      </div>
    </div>
  );
}
