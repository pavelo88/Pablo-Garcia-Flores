import React from 'react';
import { Cpu, QrCode, Database, Bot, Sparkles, Binary, FileCheck2, Terminal } from 'lucide-react';
import ContactButtons from '../ContactButtons';

export default function SystemsTab() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 lg:flex lg:flex-col lg:justify-between lg:h-full">
      <div>
        <div className="flex items-center gap-2 text-xs uppercase font-bold tracking-[0.2em] text-purple-400 mb-3">
          <Cpu className="w-4 h-4" /> Innovación & Transformación Digital
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl heading-main font-black mb-3">
          Arquitectura Tecnológica & Sistemas
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-3xl mb-8 leading-relaxed">
          Modernización de la administración pública mediante el diseño de herramientas automatizadas, integración con ERP/SAP y la aplicación de Inteligencia Artificial para el cumplimiento normativo CGE.
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
              Levantamiento Inteligente & Código de Barras
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              Desarrollo de macros automatizadas en Excel y algoritmos de validación de integridad masiva que interactúan con terminales portátiles de lectura de barras y RFID.
            </p>

            <div className="flex flex-wrap gap-1.5">
              <span className="text-[10px] font-semibold text-slate-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg">Macros VBA</span>
              <span className="text-[10px] font-semibold text-slate-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg">Barcode/RFID</span>
              <span className="text-[10px] font-semibold text-slate-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg">Data Cleaning</span>
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
              Automatización Legal Normativa CGE
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              Configuración de agentes inteligentes instruidos con la NCI 400 y jurisprudencia administrativa para la absolución inmediata de consultas sobre bajas, remates y transferencias.
            </p>

            <div className="flex flex-wrap gap-1.5">
              <span className="text-[10px] font-semibold text-purple-300 bg-purple-500/10 border border-purple-400/20 px-2.5 py-1 rounded-lg">Agentes IA</span>
              <span className="text-[10px] font-semibold text-purple-300 bg-purple-500/10 border border-purple-400/20 px-2.5 py-1 rounded-lg">NCI 400 CGE</span>
              <span className="text-[10px] font-semibold text-purple-300 bg-purple-500/10 border border-purple-400/20 px-2.5 py-1 rounded-lg">Asistencia Legal</span>
            </div>
          </div>

          {/* Card 3: Conciliación SAP / ERP */}
          <div className="executive-card p-6 lg:p-8 rounded-3xl relative overflow-hidden group">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-emerald-500/10 border border-emerald-400/20 rounded-2xl text-emerald-400">
                <Database className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-400/20 px-2.5 py-1 rounded-full">
                Sistemas ERP
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
              Conciliación Contable SAP & ERP Estatal
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              Estructuración de datos masivos para migración y emparejamiento con módulos de activos fijos en plataformas ERP institucionales (depreciaciones, revalorización y cuentas de orden).
            </p>

            <div className="flex flex-wrap gap-1.5">
              <span className="text-[10px] font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-400/20 px-2.5 py-1 rounded-lg">SAP Asset Mgmt</span>
              <span className="text-[10px] font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-400/20 px-2.5 py-1 rounded-lg">Depreciaciones</span>
            </div>
          </div>

          {/* Card 4: Seguridad & Auditoría */}
          <div className="executive-card p-6 lg:p-8 rounded-3xl relative overflow-hidden group">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-amber-500/10 border border-amber-400/20 rounded-2xl text-amber-400">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-400/20 px-2.5 py-1 rounded-full">
                Auditoría Ready
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
              Expedientes & Trazabilidad de Custodias
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              Generación automatizada de expedientes de custodias individuales, actas institucionales y matrices de trazabilidad preparadas para exámenes especiales de auditoría.
            </p>

            <div className="flex flex-wrap gap-1.5">
              <span className="text-[10px] font-semibold text-amber-300 bg-amber-500/10 border border-amber-400/20 px-2.5 py-1 rounded-lg">Trazabilidad</span>
              <span className="text-[10px] font-semibold text-amber-300 bg-amber-500/10 border border-amber-400/20 px-2.5 py-1 rounded-lg">Actas Digitales</span>
            </div>
          </div>

        </div>
      </div>

      <ContactButtons />
    </div>
  );
}
