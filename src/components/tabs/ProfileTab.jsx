import React from 'react';
import { MapPin, ShieldCheck, Award, FileCheck, Cpu, CheckCircle2, Sparkles, BrainCircuit } from 'lucide-react';
import ContactButtons from '../ContactButtons';

export default function ProfileTab() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 flex flex-col justify-between h-full">
      <div>
        {/* Mobile ONLY Executive Hero Card (Hidden on Desktop to prevent duplicate photo!) */}
        <div className="block lg:hidden executive-card p-6 rounded-3xl mb-6 flex flex-col items-center text-center relative overflow-hidden group border-sky-400/30">
          <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-sky-500 via-blue-500 to-purple-500"></div>

          {/* Centered Avatar Image */}
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-sky-400/60 shadow-[0_0_30px_rgba(56,189,248,0.35)] relative mb-4">
            <img 
              src="/foto.png" 
              alt="Pablo Fabricio García Flores" 
              className="w-full h-full object-cover" 
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-full"></div>
          </div>

          <h1 className="text-2xl font-black heading-main tracking-tight mb-1">
            Pablo Fabricio<br />García Flores
          </h1>

          <p className="text-xs font-black tracking-[0.2em] uppercase text-sky-400 mb-3">
            Ing. Administración de Empresas
          </p>

          <div className="flex flex-wrap justify-center items-center gap-1.5">
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-300 text-[11px] font-bold">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
              <span>Control Patrimonial & CGE</span>
            </div>
            <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-400/30 text-purple-300 text-[11px] font-bold">
              <BrainCircuit className="w-3.5 h-3.5 text-purple-400" />
              <span>Experto en IA & Sistemas</span>
            </div>
          </div>
        </div>

        {/* Location & AI Badges Header */}
        <div className="flex flex-wrap items-center gap-3 text-xs uppercase font-bold tracking-[0.2em] text-sky-400 mb-4">
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20">
            <MapPin className="h-3.5 w-3.5" /> Quito, Ecuador
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-400/20 text-purple-300">
            <Sparkles className="h-3.5 w-3.5 text-purple-400" /> Experto en IA & Normativa CGE NCI 400
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl heading-main font-black mb-6 leading-[1.15]">
          Dirección Estratégica & Transparencia en Bienes Públicos.
        </h2>

        {/* Bio */}
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mb-8 font-normal">
          Ingeniero en Administración de Empresas especializado en **Control Patrimonial Estatal, Constatación Física al 100% e Inteligencia Artificial aplicada a la gestión de bienes**. Combino más de 15 años de experiencia pública intachable ante la Contraloría General del Estado (CGE) con la implementación de agentes de IA y sistemas automatizados de código de barras para garantizar la conciliación contable perfecta.
        </p>

        {/* Executive KPI Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="executive-card p-5 lg:p-6 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-4 right-4 text-sky-400/20 group-hover:text-sky-400/40 transition-colors">
              <Award className="w-8 h-8" />
            </div>
            <div className="text-3xl lg:text-4xl font-black text-white mb-1 font-heading tracking-tight">15+</div>
            <div className="text-[11px] font-bold tracking-wider uppercase text-sky-400 mb-1">Años de Servicio</div>
            <div className="text-xs text-slate-400">Judicatura y Registro Civil del Ecuador</div>
          </div>

          <div className="executive-card p-5 lg:p-6 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-4 right-4 text-emerald-400/20 group-hover:text-emerald-400/40 transition-colors">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="text-3xl lg:text-4xl font-black text-emerald-400 mb-1 font-heading tracking-tight">0</div>
            <div className="text-[11px] font-bold tracking-wider uppercase text-emerald-400 mb-1">Observaciones CGE</div>
            <div className="text-xs text-slate-400">Auditoría e informes de control 100% limpios</div>
          </div>

          <div className="executive-card p-5 lg:p-6 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-4 right-4 text-purple-400/20 group-hover:text-purple-400/40 transition-colors">
              <Cpu className="w-8 h-8" />
            </div>
            <div className="text-3xl lg:text-4xl font-black text-purple-300 mb-1 font-heading tracking-tight">Experto IA</div>
            <div className="text-[11px] font-bold tracking-wider uppercase text-purple-400 mb-1">Sistemas & NCI 400</div>
            <div className="text-xs text-slate-400">Agentes inteligentes y conciliación SAP/IT</div>
          </div>
        </div>

        {/* Core Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="executive-card p-5 rounded-2xl flex items-start gap-4">
            <div className="p-3 bg-sky-500/10 border border-sky-400/20 rounded-xl text-sky-400 shrink-0">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white mb-1">Constatación Física Institucional</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Inspección física al 100%, codificación con tecnología de barras/RFID y asignación formal de custodias con responsabilidad administrativa.
              </p>
            </div>
          </div>

          <div className="executive-card p-5 rounded-2xl flex items-start gap-4">
            <div className="p-3 bg-purple-500/10 border border-purple-400/20 rounded-xl text-purple-400 shrink-0">
              <BrainCircuit className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white mb-1">Innovación con Inteligencia Artificial</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Desarrollo de asistentes de IA preentrenados en normativa CGE para la solución inmediata de consultas legales y administrativas patrimoniales.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <ContactButtons />
    </div>
  );
}
