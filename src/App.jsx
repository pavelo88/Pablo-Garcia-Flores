import React, { useState, useEffect, useRef } from 'react';
import './App.css';

// Components
import MobileHeader from './components/MobileHeader';
import Fab from './components/Fab';
import Sidebar from './components/Sidebar';
import ProfileTab from './components/tabs/ProfileTab';
import ExperienceTab from './components/tabs/ExperienceTab';
import SystemsTab from './components/tabs/SystemsTab';
import ReferencesTab from './components/tabs/ReferencesTab';

export default function App() {
  const [activeTab, setActiveTab] = useState('profile');
  const [theme, setTheme] = useState('dark');
  const mainRef = useRef(null);

  useEffect(() => {
    document.documentElement.className = theme === 'light' ? 'theme-light' : 'theme-dark';
  }, [theme]);

  // Scroll to top on both inner glass container and mobile window viewport when changing tabs
  useEffect(() => {
    if (mainRef.current) {
      mainRef.current.scrollTo({ top: 0 });
    }
    window.scrollTo({ top: 0 });
  }, [activeTab]);

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileTab />;
      case 'experience':
        return <ExperienceTab />;
      case 'systems':
        return <SystemsTab />;
      case 'references':
        return <ReferencesTab />;
      default:
        return <ProfileTab />;
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden relative">
      {/* Background Architectural Layer & Dynamic Gradient Overlay */}
      <div className="bg-buildings"></div>
      <div className="bg-overlay"></div>

      {/* Floating Action Button (Single WhatsApp Floating Bubble) */}
      <Fab />

      {/* Mobile Top Header Navigation */}
      <MobileHeader 
        theme={theme} 
        setTheme={setTheme} 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Responsive Layout Container (Clipping viewport scroll on mobile so text never goes under header) */}
      <div className="flex-1 pt-28 lg:pt-10 pb-6 px-4 lg:px-10 overflow-hidden flex items-center justify-center z-10">
        <div className="w-full h-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-[330px_1fr] gap-6 lg:gap-8 lg:h-[86vh]">

          {/* Desktop Executive Sidebar */}
          <Sidebar 
            activeTab={activeTab} 
            setActiveTab={setActiveTab} 
            theme={theme} 
            setTheme={setTheme} 
          />

          {/* Primary Viewport Content Glass Panel */}
          <main className="glass-panel overflow-hidden flex flex-col h-full rounded-3xl border border-white/10 relative">
            <div 
              ref={mainRef}
              className="p-6 sm:p-8 lg:p-10 flex-1 overflow-y-auto custom-scrollbar scroll-smooth flex flex-col justify-between"
            >
              {renderTabContent()}
            </div>
          </main>

        </div>
      </div>
    </div>
  );
}
