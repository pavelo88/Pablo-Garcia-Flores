import React from 'react';
import { MapPin, ShieldCheck, Award, FileCheck, Cpu, CheckCircle2 } from 'lucide-react';
import ContactButtons from '../ContactButtons';

export default function ProfileTab() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 flex flex-col justify-between h-full">
      <div>
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-3 text-xs uppercase font-bold tracking-[0.2em] text-sky-400 mb-4">
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-500/10 border border-sky-400/20">
            <MapPin className="h-3.5 w-3.5" /> Quito, Ecuador
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-400">
            <ShieldCheck className="h-3.5 w-3.5" /> Normativa CGE NCI 400
          </span>
        </div>

        {/* Executive Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl heading-main font-black mb-6 leading-[1.15]">
          Dirección Estratégica & Transparencia en Bienes Públicos.
        </h2>

        {/* Bio summary */}
        <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mb-8 font-normal">
          Ingeniero en Administración de Empresas especializado en la **gestión patrimonial estatal, constatación física e inventarios masivos**. Lidero la conciliación contable de activos fijos garantizando la concordancia absoluta entre inventario físico y balances institucionales, respaldado por una trayectoria intachable ante la Contraloría General del Estado.
        </p>

        {/* Executive KPI Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <div className="executive-card p-5 lg:p-6 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-4 right-4 text-sky-400/20 group-hover:text-sky-400/40 transition-colors">
              <Award className="w-8 h-8" />
            </div>
            <div className="text-3xl lg:text-4xl font-black text-white mb-1 font-heading tracking-tight">15+</div>
            <div className="text-[11px] font-bold tracking-wider uppercase text-sky-400 mb-1">Años de Servicio</div>
            <div className="text-xs text-slate-400">Trayectoria en Judicatura y Registro Civil</div>
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
            <div className="text-3xl lg:text-4xl font-black text-purple-300 mb-1 font-heading tracking-tight">100%</div>
            <div className="text-[11px] font-bold tracking-wider uppercase text-purple-400 mb-1">Conciliación SAP / IT</div>
            <div className="text-xs text-slate-400">Sistemas automatizados de código de barras</div>
          </div>
        </div>

        {/* Executive Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="executive-card p-5 rounded-2xl flex items-start gap-4">
            <div className="p-3 bg-sky-500/10 border border-sky-400/20 rounded-xl text-sky-400 shrink-0">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white mb-1">Constatación Física Institucional</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Levantamiento e inspección técnica in situ a nivel nacional, codificación y asignación de custodia con responsabilidad administrativa.
              </p>
            </div>
          </div>

          <div className="executive-card p-5 rounded-2xl flex items-start gap-4">
            <div className="p-3 bg-emerald-500/10 border border-emerald-400/20 rounded-xl text-emerald-400 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white mb-1">Gobernanza y Responsabilidad</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Aplicación rigurosa del Reglamento General para la Administración y Control de Bienes del Sector Público.
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
