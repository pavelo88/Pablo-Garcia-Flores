import React, { useState, useEffect } from 'react';
import './App.css';

// Components
import MobileHeader from './components/MobileHeader';
import Fab from './components/Fab';
import Sidebar from './components/Sidebar';
import ProfileTab from './components/tabs/ProfileTab';
import ExperienceTab from './components/tabs/ExperienceTab';
import SystemsTab from './components/tabs/SystemsTab';
// import ChatTab from './components/tabs/ChatTab'; // Desactivado temporalmente

export default function App() {
  const [activeTab, setActiveTab] = useState('profile');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFabOpen, setIsFabOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  
  // Lift chat messages state so they persist across tab switches
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: 'Bienvenido. Soy la IA de Pablo para consultas sobre control patrimonial, normativa CGE y gestión de bienes públicos.'
    }
  ]);

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
      /* 
      case 'ai':
        return <ChatTab messages={messages} setMessages={setMessages} />;
      */
      default:
        return <ProfileTab />;
    }
  };

  return (
    <>
      <div className="bg-buildings"></div>
      <div className="bg-overlay"></div>

      <Fab isFabOpen={isFabOpen} setIsFabOpen={setIsFabOpen} />

      <MobileHeader 
        isMobileMenuOpen={isMobileMenuOpen} 
        setIsMobileMenuOpen={setIsMobileMenuOpen} 
        theme={theme} 
        setTheme={setTheme} 
      />

      <div className="min-h-screen pt-20 pb-4 px-4 lg:pt-12 lg:pb-12 lg:px-12 relative flex items-start justify-center overflow-hidden">
        <div className="w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-6 lg:gap-8 lg:h-[84vh]">

          <Sidebar 
            activeTab={activeTab} 
            setActiveTab={setActiveTab} 
            isMobileMenuOpen={isMobileMenuOpen} 
            setIsMobileMenuOpen={setIsMobileMenuOpen} 
            theme={theme} 
            setTheme={setTheme} 
          />

          <main className="glass-panel p-8 lg:p-12 flex flex-col justify-start h-full overflow-y-auto custom-scrollbar">
            {renderTabContent()}
          </main>

        </div>
      </div>
    </>
  );
}
