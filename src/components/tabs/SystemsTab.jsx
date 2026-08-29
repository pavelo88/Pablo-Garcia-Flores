import React from 'react';
import { Cpu, QrCode, Database, Bot, Sparkles, Binary, FileCheck2, Terminal, Map, Users, BarChart3, Settings } from 'lucide-react';
import ContactButtons from '../ContactButtons';

export default function SystemsTab() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 lg:flex lg:flex-col lg:justify-between lg:h-full">
      <div>
        <div className="flex items-center gap-2 text-xs uppercase font-bold tracking-[0.2em] text-purple-400 mb-3">
          <Cpu className="w-4 h-4" /> Innovación & Sistemas Informáticos
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl heading-main font-black mb-3">
          Sistemas & Arquitectura de Procesos
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-3xl mb-8 leading-relaxed">
          Modernización de la administración pública mediante el diseño de herramientas automatizadas, bases de datos y sistemas informáticos que garantizan el control, planificación y eficiencia logística a nivel nacional.
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
                Inventario & Logística
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
              Levantamiento Inteligente & Código de Barras
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 text-justify">
              Desarrollo e implementación de sistemas de código de barras para el control territorial de bienes. Optimización de la logística de distribución y planificación operativa para auditorías físicas.
            </p>

            <div className="flex flex-wrap gap-1.5">
              <span className="text-[10px] font-semibold text-slate-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg">Logística y Transporte</span>
              <span className="text-[10px] font-semibold text-slate-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-lg">Sistemas de Control</span>
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
              Automatización Normativa & Análisis de Procesos
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              Configuración de agentes inteligentes instruidos con normativa (NCI 400) para asistir en procedimientos y toma de decisiones. Capacitación del personal en el uso de herramientas IA.
            </p>

            <div className="flex flex-wrap gap-1.5">
              <span className="text-[10px] font-semibold text-purple-300 bg-purple-500/10 border border-purple-400/20 px-2.5 py-1 rounded-lg">Capacitación</span>
              <span className="text-[10px] font-semibold text-purple-300 bg-purple-500/10 border border-purple-400/20 px-2.5 py-1 rounded-lg">Ingeniería de Procesos</span>
            </div>
          </div>

          {/* Card 3: Conciliación SAP / ERP */}
          <div className="executive-card p-6 lg:p-8 rounded-3xl relative overflow-hidden group">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-emerald-500/10 border border-emerald-400/20 rounded-2xl text-emerald-400">
                <Database className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-emerald-400 bg-emerald-500/10 border border-emerald-400/20 px-2.5 py-1 rounded-full">
                Sistemas ERP & Data
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
              Bases de Datos, Registros & Conciliación SAP
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              Estructuración masiva de bases de datos estadísticos para integración con sistemas ERP institucionales. Garantizando la validación de registros demográficos y patrimoniales con alta precisión.
            </p>

            <div className="flex flex-wrap gap-1.5">
              <span className="text-[10px] font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-400/20 px-2.5 py-1 rounded-lg">Bases de Datos Demográficos</span>
              <span className="text-[10px] font-semibold text-emerald-300 bg-emerald-500/10 border border-emerald-400/20 px-2.5 py-1 rounded-lg">Registros Institucionales</span>
            </div>
          </div>

          {/* Card 4: Seguridad & Auditoría */}
          <div className="executive-card p-6 lg:p-8 rounded-3xl relative overflow-hidden group">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-amber-500/10 border border-amber-400/20 rounded-2xl text-amber-400">
                <FileCheck2 className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-400/20 px-2.5 py-1 rounded-full">
                Planificación Documental
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
              Expedientes & Información Territorial
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              Generación automatizada de expedientes, actas y matrices de trazabilidad. Uso de información cartográfica para validar las inspecciones y despliegues operativos a nivel nacional.
            </p>

            <div className="flex flex-wrap gap-1.5">
              <span className="text-[10px] font-semibold text-amber-300 bg-amber-500/10 border border-amber-400/20 px-2.5 py-1 rounded-lg">Información Cartográfica</span>
              <span className="text-[10px] font-semibold text-amber-300 bg-amber-500/10 border border-amber-400/20 px-2.5 py-1 rounded-lg">Planificación y Administración</span>
            </div>
          </div>

        </div>
      </div>

      <ContactButtons />
    </div>
  );
}
