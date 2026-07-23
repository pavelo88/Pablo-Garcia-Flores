import React from 'react';
import { UserCheck, Building2, ShieldCheck, Phone, Mail, Award, CheckCircle2 } from 'lucide-react';
import ContactButtons from '../ContactButtons';

export default function ReferencesTab() {
  const referencesList = [
    {
      id: 'audelith',
      name: 'Ing. Audelith Cárdenas',
      title: 'Jefa Departamental de Activos Fijos',
      institution: 'Consejo de la Judicatura del Ecuador',
      tag: 'Sector Judicial',
      relationship: 'Supervisión directa en procesos de constatación física, conciliación contable e inventarios institucionales a nivel nacional.',
      badgeColor: 'border-sky-400/30 text-sky-400 bg-sky-500/10',
      iconColor: 'text-sky-400',
    },
    {
      id: 'johana',
      name: 'Johana Cruz',
      title: 'Supervisora de Cedulación y Pasaportes',
      institution: 'Dirección Provincial del Registro Civil, Identificación y Cedulación',
      tag: 'Registro Civil',
      relationship: 'Coordinación patrimonial, custodia física de activos operativos y validación de bienes en agencias provinciales.',
      badgeColor: 'border-emerald-400/30 text-emerald-400 bg-emerald-500/10',
      iconColor: 'text-emerald-400',
    }
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 lg:flex lg:flex-col lg:justify-between lg:h-full">
      <div>
        <div className="flex items-center gap-2 text-xs uppercase font-bold tracking-[0.2em] text-emerald-400 mb-3">
          <UserCheck className="w-4 h-4" /> Aval & Respaldo Profesional
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl heading-main font-black mb-3">
          Referencias Institucionales
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-3xl mb-8 leading-relaxed">
          Autoridades y directivos del sector público que certifican el desempeño técnico, la honestidad y la rigurosidad en la gestión de bienes patrimoniales.
        </p>

        {/* References Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {referencesList.map((ref) => (
            <div key={ref.id} className="executive-card p-6 lg:p-8 rounded-3xl relative overflow-hidden group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className={`text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border ${ref.badgeColor}`}>
                    {ref.tag}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Verificada
                  </span>
                </div>

                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-white/5 border border-white/10 rounded-2xl text-white shrink-0 group-hover:border-sky-400/40 transition-colors">
                    <UserCheck className={`w-6 h-6 ${ref.iconColor}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white leading-tight mb-1 group-hover:text-sky-300 transition-colors">
                      {ref.name}
                    </h3>
                    <p className="text-xs font-bold text-sky-400 leading-snug">
                      {ref.title}
                    </p>
                    <p className="text-[11px] font-medium text-slate-400 flex items-center gap-1 mt-1">
                      <Building2 className="w-3 h-3 text-slate-500" />
                      {ref.institution}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/5 text-xs text-slate-300 leading-relaxed mb-4">
                  <p><strong className="text-white">Alcance de Gestión:</strong> {ref.relationship}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Referencia Directa
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                  Contacto previa solicitud
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ContactButtons />
    </div>
  );
}
