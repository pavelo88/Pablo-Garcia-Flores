import React from 'react';
import { BriefcaseBusiness, Cpu, Home, MessageCircle, UserRound } from 'lucide-react';
import { WHATSAPP_LINK } from '../utils/constants';

const items = [
  { id: 'profile', label: 'Perfil', Icon: Home },
  { id: 'experience', label: 'Trayectoria', Icon: BriefcaseBusiness },
  { id: 'systems', label: 'Habilidad', Icon: Cpu },
  { id: 'references', label: 'Referencias', Icon: UserRound },
];

export default function BottomNav({ activeTab, setActiveTab }) {
  return <nav className="bottom-app-nav" aria-label="Navegación del portafolio">
    <div className="bottom-app-nav__inner">
      {items.slice(0, 2).map(({ id, label, Icon }) => <button key={id} type="button" onClick={() => setActiveTab(id)} className={`bottom-app-nav__item ${activeTab === id ? 'is-active' : ''}`} aria-current={activeTab === id ? 'page' : undefined}>
        <Icon className="h-4 w-4" /><span>{label}</span>
      </button>)}
      <a className="bottom-app-nav__cta" href={WHATSAPP_LINK} target="_blank" rel="noreferrer" aria-label="Contactar por WhatsApp"><MessageCircle className="h-6 w-6" /><span>Contacto</span></a>
      {items.slice(2, 3).map(({ id, label, Icon }) => <button key={id} type="button" onClick={() => setActiveTab(id)} className={`bottom-app-nav__item ${activeTab === id ? 'is-active' : ''}`} aria-current={activeTab === id ? 'page' : undefined}>
        <Icon className="h-4 w-4" /><span>{label}</span>
      </button>)}
      {items.slice(3).map(({ id, label, Icon }) => <button key={id} type="button" onClick={() => setActiveTab(id)} className={`bottom-app-nav__item ${activeTab === id ? 'is-active' : ''}`} aria-current={activeTab === id ? 'page' : undefined}>
        <Icon className="h-4 w-4" /><span>{label}</span>
      </button>)}
    </div>
  </nav>;
}
