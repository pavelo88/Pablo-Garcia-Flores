import React, { useState, useEffect } from 'react';
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFabOpen, setIsFabOpen] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.className = theme === 'light' ? 'theme-light' : 'theme-dark';
  }, [theme]);

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
    <>
      {/* Background Architectural Layer & Dynamic Gradient Overlay */}
      <div className="bg-buildings"></div>
      <div className="bg-overlay"></div>

      {/* Floating Action Button */}
      <Fab isFabOpen={isFabOpen} setIsFabOpen={setIsFabOpen} />

      {/* Mobile Top Header Navigation */}
      <MobileHeader 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
        theme={theme} 
        setTheme={setTheme} 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />

      {/* Main Responsive Grid Layout */}
      <div className="min-h-screen pt-28 lg:pt-10 pb-6 px-4 lg:pb-10 lg:px-10 relative flex items-center justify-center">
        <div className="w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-6 lg:gap-8 lg:h-[86vh]">

          {/* Executive Sidebar / Mobile Drawer */}
          <Sidebar 
            activeTab={activeTab} 
            setActiveTab={setActiveTab} 
            isMobileMenuOpen={isMobileMenuOpen} 
            setIsMobileMenuOpen={setIsMobileMenuOpen} 
            theme={theme} 
            setTheme={setTheme} 
          />

          {/* Primary Viewport Content Glass Panel */}
          <main className="glass-panel p-6 sm:p-8 lg:p-10 flex flex-col justify-between h-full overflow-y-auto custom-scrollbar">
            {renderTabContent()}
          </main>

        </div>
      </div>
    </>
  );
}
