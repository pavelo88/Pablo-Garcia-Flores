import React from 'react';
import { Building2, Calendar, Award, CheckCircle2, ShieldCheck } from 'lucide-react';
import ContactButtons from '../ContactButtons';
import { cvContent } from '../../data/cvContent';

export default function ExperienceTab() {
  return <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 flex flex-col justify-between h-full">
    <div><div className="flex items-center gap-2 text-xs uppercase font-bold tracking-[0.2em] text-sky-400 mb-3"><Award className="w-4 h-4" /> Trayectoria y mejora continua</div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl heading-main font-black mb-3">Experiencia Institucional</h2>
      <p className="text-sm sm:text-base text-slate-300 max-w-3xl mb-8 leading-relaxed text-justify">{cvContent.target.fit} La experiencia está respaldada por más de 15 años de trabajo con inventarios, documentación, control y coordinación operativa.</p>
      <div className="space-y-6 max-w-4xl relative before:absolute before:inset-0 before:left-3 sm:before:left-4 before:w-0.5 before:bg-gradient-to-b before:from-sky-500 before:via-blue-500 before:to-transparent before:z-0">
        {cvContent.experience.map((item) => <div key={item.company} className="relative pl-8 sm:pl-10 group"><div className="absolute left-0 top-1.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-slate-900 border-2 border-sky-400 flex items-center justify-center text-sky-400 z-10"><Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" /></div>
          <div className="executive-card p-6 lg:p-8 rounded-3xl relative"><div className="flex flex-wrap items-center justify-between gap-2 mb-3"><div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-400 bg-sky-500/10 px-3 py-1 rounded-full border border-sky-400/20"><Calendar className="w-3.5 h-3.5" /> {item.period} • {item.company}</div><span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full flex items-center gap-1"><ShieldCheck className="w-3 h-3" /> Control</span></div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{item.role}</h3><p className="text-sm text-slate-300 leading-relaxed mb-4">{item.description}</p><div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-white/10 text-xs text-slate-300">{item.achievements.map((achievement) => <div key={achievement} className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" /><span>{achievement}</span></div>)}</div>
          </div></div>)}
      </div>
    </div><ContactButtons />
  </div>;
}
