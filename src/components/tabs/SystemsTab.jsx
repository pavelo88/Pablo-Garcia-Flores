import React from 'react';
import { Cpu, QrCode, Database, Bot, Sparkles, FileCheck2 } from 'lucide-react';

export default function SystemsTab() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 lg:flex lg:flex-col lg:justify-between lg:h-full">
      <div>
        <div className="flex items-center gap-2 text-xs uppercase font-bold tracking-[0.2em] text-purple-400 mb-3">
          <Cpu className="w-4 h-4" /> Innovación & Transformación Digital
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl heading-main font-black mb-3">
          Habilidades y capacidades
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-3xl mb-8 leading-relaxed text-justify">
          Herramientas y criterios aplicables a operaciones donde la calidad del dato, la trazabilidad y la mejora continua sostienen el servicio logístico y comercial.
        </p>

        {/* Systems Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">

          {/* Card 1: Levantamiento Inteligente */}
          <div className="executive-card p-6 lg:p-8 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-2xl group-hover:bg-sky-500/20 transition-all"></div>

            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-sky-500/10 border border-sky-400/20 rounded-2xl text-sky-400">
                <QrCode className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-sky-400 bg-sky-500/10 border border-sky-400/20 px-2.5 py-1 rounded-full">
                Inventario Masivo
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
              Inventarios y trazabilidad operativa
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 text-justify">
              Diseño de flujos para levantamientos físicos, codificación, custodias y conciliación de información, con foco en orden, evidencia y continuidad operativa.
            </p>

            <div className="flex flex-wrap gap-1.5">
              <span className="text-[10px] font-semibold text-slate-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg">Next.js</span>
              <span className="text-[10px] font-semibold text-slate-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg">Node.js</span>
              <span className="text-[10px] font-semibold text-slate-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg">Control patrimonial</span>
            </div>
          </div>

          {/* Card 2: AI & Legal Automation */}
          <div className="executive-card p-6 lg:p-8 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl group-hover:bg-purple-500/20 transition-all"></div>

            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-purple-500/10 border border-purple-400/20 rounded-2xl text-purple-400">
                <Bot className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-purple-400 bg-purple-500/10 border border-purple-400/20 px-2.5 py-1 rounded-full flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-purple-400" /> Inteligencia Artificial
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
              Automatización y control documental
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 text-justify">
              Uso de herramientas digitales y apoyo con IA para estructurar información, acelerar consultas y preparar informes consistentes para la toma de decisiones.
            </p>

            <div className="flex flex-wrap gap-1.5">
              <span className="text-[10px] font-semibold text-purple-300 bg-purple-500/10 border border-purple-400/20 px-2.5 py-1 rounded-lg">Agentes IA</span>
              <span className="text-[10px] font-semibold text-purple-300 bg-purple-500/10 border border-purple-400/20 px-2.5 py-1 rounded-lg">Informes con revisión</span>
              <span className="text-[10px] font-semibold text-purple-300 bg-purple-500/10 border border-purple-400/20 px-2.5 py-1 rounded-lg">Apps Script</span>
            </div>
          </div>

          {/* Card 3: Conciliación SAP / ERP */}
          <div className="executive-card p-6 lg:p-8 rounded-3xl relative overflow-hidden group">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-emerald-500/10 border border-emerald-400/20 rounded-2xl text-emerald-400">
                <Database className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-400/20 px-2.5 py-1 rounded-full">
                Herramientas ERP
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
              Procesos, calidad y mejora continua
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 text-justify">
              Estandarización de controles, informes y seguimiento para reducir inconsistencias y facilitar revisiones documentales y planes de acción.
            </p>

            <div className="flex flex-wrap gap-1.5">
              <span className="text-[10px] font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-400/20 px-2.5 py-1 rounded-lg">Excel + VBA</span>
              <span className="text-[10px] font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-400/20 px-2.5 py-1 rounded-lg">Google Sheets</span>
            </div>
          </div>

          {/* Card 4: Seguridad & Auditoría */}
          <div className="executive-card p-6 lg:p-8 rounded-3xl relative overflow-hidden group">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-amber-500/10 border border-amber-400/20 rounded-2xl text-amber-400">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-400/20 px-2.5 py-1 rounded-full">
                Revisión y cumplimiento
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
              Coordinación y cumplimiento
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 text-justify">
              Coordinación con distintas unidades para asegurar documentación completa, responsables identificados y ejecución alineada con procedimientos.
            </p>

            <div className="flex flex-wrap gap-1.5">
              <span className="text-[10px] font-semibold text-amber-300 bg-amber-500/10 border border-amber-400/20 px-2.5 py-1 rounded-lg">Trazabilidad</span>
              <span className="text-[10px] font-semibold text-amber-300 bg-amber-500/10 border border-amber-400/20 px-2.5 py-1 rounded-lg">Actas Digitales</span>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
