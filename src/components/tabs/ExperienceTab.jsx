import React from 'react';
import { Building2, Calendar, Award, CheckCircle2, ShieldCheck, FileSpreadsheet } from 'lucide-react';
import ContactButtons from '../ContactButtons';

export default function ExperienceTab() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center gap-2 text-xs uppercase font-bold tracking-[0.2em] text-sky-400 mb-3">
          <Award className="w-4 h-4" /> Trayectoria Liderando Bienes Públicos
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl heading-main font-black mb-3">
          Experiencia Institucional
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-3xl mb-8 leading-relaxed">
          Más de 15 años de liderazgo comprobado en la administración, fiscalización y regularización de bienes muebles e inmuebles del Estado ecuatoriano.
        </p>

        {/* Executive Timeline */}
        <div className="space-y-6 max-w-4xl relative before:absolute before:inset-0 before:left-3 sm:before:left-4 before:w-0.5 before:bg-gradient-to-b before:from-sky-500 before:via-blue-500 before:to-transparent before:z-0">
          
          {/* Item 1: Consejo de la Judicatura */}
          <div className="relative pl-8 sm:pl-10 group">
            <div className="absolute left-0 top-1.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-slate-900 border-2 border-sky-400 flex items-center justify-center text-sky-400 z-10 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all shadow-[0_0_15px_rgba(56,189,248,0.4)]">
              <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>

            <div className="executive-card p-6 lg:p-8 rounded-3xl relative">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-400/20">
                  <Calendar className="w-3.5 h-3.5" /> 8 Años • Consejo de la Judicatura del Ecuador
                </div>
                <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" /> CGE NCI 400
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Analista de Activos Fijos y Control Patrimonial
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Dirección técnica nacional de constataciones físicas, inventarios y conciliaciones contable-patrimoniales en todas las dependencias judiciales.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/10 text-xs text-slate-300">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>Constatación física al 100% sin discrepancias contables.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>Informes técnicos sustentados sin observaciones de CGE.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>Baja y enajenación de bienes bajo normativa legal vigente.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>Implementación de códigos de barra para control inmediato.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Item 2: Registro Civil */}
          <div className="relative pl-8 sm:pl-10 group">
            <div className="absolute left-0 top-1.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-slate-900 border-2 border-slate-600 flex items-center justify-center text-slate-400 z-10 group-hover:scale-110 group-hover:border-sky-400 group-hover:bg-slate-800 group-hover:text-sky-400 transition-all">
              <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </div>

            <div className="executive-card p-6 lg:p-8 rounded-3xl relative">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" /> 7 Años • Dirección General del Registro Civil
                </div>
                <span className="text-[11px] font-semibold text-sky-300 bg-sky-500/10 border border-sky-400/20 px-2.5 py-0.5 rounded-full flex items-center gap-1">
                  <FileSpreadsheet className="w-3 h-3" /> Cobertura Nacional
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                Especialista en Gestión de Bienes Públicos
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Administración patrimonial operativa a nivel nacional. Planificación de inventarios periódicos, custodia institucional, recepción y asignación formal de activos fijos.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/10 text-xs text-slate-300">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Reorganización y digitalización del catastro patrimonial.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>Estandarización de actas de entrega-recepción de custodias.</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <ContactButtons />
    </div>
  );
}
