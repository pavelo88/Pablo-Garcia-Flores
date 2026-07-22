import React, { useState, useEffect, useRef } from 'react';
import { jsPDF } from 'jspdf';
import { User, Briefcase, Database, Bot, MapPin, Send, Loader2, Download, Phone, Link, MessageCircle, Mail, Plus, X, Menu, Sun, Moon } from 'lucide-react';
import './App.css';

export default function App() {
  const [activeTab, setActiveTab] = useState('profile');
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: 'Bienvenido. Soy la IA de Pablo para consultas sobre control patrimonial, normativa CGE y gestión de bienes públicos.'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [isFabOpen, setIsFabOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState('dark');
  const chatEndRef = useRef(null);
  
  const contactEmail = 'pablofgarciaf@gmail.com';
  const phoneNumber = '0983992549';
  const whatsappLink = `https://wa.me/593983992549?text=Hola%20Pablo,%20vengo%20de%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20una%20asesor%C3%ADa.`;
  const linkedinUrl = 'https://www.linkedin.com/in/pablo-fabricio-garc%C3%ADa-flores/';
  const mailToLink = `mailto:${contactEmail}?subject=Contacto%20desde%20mi%20portafolio&body=Hola%20Pablo%2C%20quiero%20contactarte%20para%20conocer%20más%20sobre%20tus%20servicios.`;
  const webLink = 'https://pablo-garcia-flores.vercel.app/';
  const apiKey = import.meta.env.VITE_GROQ_API_KEY || '';

  useEffect(() => {
    document.documentElement.className = theme === 'light' ? 'theme-light' : 'theme-dark';
  }, [theme]);

  const handleDownloadCV = async () => {
    const doc = new jsPDF({ unit: 'pt', format: 'letter' });
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const leftWidth = 220;

    doc.setFillColor(252, 252, 254);
    doc.rect(0, 0, pageWidth, pageHeight, 'F');
    doc.setFillColor(15, 23, 42); 
    doc.rect(0, 0, leftWidth, pageHeight, 'F');

    const loadImage = async (url) => {
      const response = await fetch(url);
      const blob = await response.blob();
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
    };

    try {
      const photoDataUrl = await loadImage('/foto.png');
      const photoWidth = 140;
      const photoHeight = 140;
      const photoX = (leftWidth - photoWidth) / 2;
      const photoY = 40;

      doc.setTextColor(15, 23, 42);
      doc.setFontSize(6);
      doc.text(
        'I am qualified for public asset control, audit, and government asset management. Expert in assets.',
        photoX,
        photoY + 20,
        { maxWidth: photoWidth }
      );
      
      doc.addImage(photoDataUrl, 'PNG', photoX, photoY, photoWidth, photoHeight);
      doc.link(photoX, photoY, photoWidth, photoHeight, { url: webLink }); 
    } catch (err) {
      console.warn('No se pudo cargar foto.png para el PDF:', err);
    }

    doc.setTextColor(255, 255, 255);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.text('CONTACTO', 30, 220);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(200, 200, 200);
    doc.text(contactEmail, 30, 240);
    doc.text('Celular: 0983992549', 30, 255);
    doc.link(30, 245, 100, 15, { url: whatsappLink }); 
    doc.text('Quito, Ecuador', 30, 270);
    doc.text('Cédula: 1721790721', 30, 285);
    doc.text('Edad: 38 años', 30, 300);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.setTextColor(255, 255, 255);
    doc.text('HABILIDADES', 30, 340);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(200, 200, 200);
    doc.text('• Control patrimonial', 30, 360);
    doc.text('• Auditoría y constatación', 30, 375);
    doc.text('• Integración de sistemas', 30, 390);
    doc.text('• IA para bienes públicos', 30, 405);
    doc.text('• Normativa CGE y NCI 400', 30, 420);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(14);
    doc.setTextColor(255, 255, 255);
    doc.text('IDIOMAS', 30, 460);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(200, 200, 200);
    doc.text('Español (Nativo)', 30, 480);
    doc.text('Inglés (Intermedio)', 30, 495);

    const rightMargin = leftWidth + 40;
    doc.setTextColor(15, 23, 42);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(26);
    doc.text('PABLO FABRICIO', rightMargin, 70);
    doc.text('GARCÍA FLORES', rightMargin, 98);
    doc.link(rightMargin, 50, 300, 55, { url: webLink }); 

    doc.setTextColor(56, 189, 248);
    doc.setFontSize(14);
    doc.text('ANALISTA DE ACTIVOS FIJOS', rightMargin, 125);

    doc.setDrawColor(220, 220, 220);
    doc.setLineWidth(1);
    doc.line(rightMargin, 140, pageWidth - 40, 140);

    doc.setTextColor(15, 23, 42);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.text('PERFIL EJECUTIVO', rightMargin, 175);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    doc.setTextColor(80, 80, 80);
    const summary = 'Ingeniero en Administración con amplia experiencia en control patrimonial, constatación física y auditorías en el sector público. Experto en normativa CGE, control interno y soluciones integrales de inventario soportadas por automatización tecnológica e inteligencia artificial.';
    doc.text(summary, rightMargin, 195, { maxWidth: pageWidth - rightMargin - 40, lineHeightFactor: 1.5 });

    doc.setTextColor(15, 23, 42);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.text('EXPERIENCIA PROFESIONAL', rightMargin, 280);

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.text('Analista de Activos Fijos — Consejo de la Judicatura', rightMargin, 305);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(120, 120, 120);
    doc.text('8 años de servicio', rightMargin, 320);
    doc.setTextColor(80, 80, 80);
    doc.text('Dirección técnica de constatación física y conciliación de inventarios. Liderazgo en gestión patrimonial y control interno garantizando el fiel cumplimiento de la normativa CGE.', rightMargin, 335, { maxWidth: pageWidth - rightMargin - 40, lineHeightFactor: 1.5 });

    doc.setTextColor(15, 23, 42);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.text('Gestión de Bienes — Registro Civil del Ecuador', rightMargin, 390);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10);
    doc.setTextColor(120, 120, 120);
    doc.text('7 años de servicio', rightMargin, 405);
    doc.setTextColor(80, 80, 80);
    doc.text('Administración patrimonial institucional, optimización de recursos mediante procesos normativos robustos, y control exhaustivo de bienes públicos a nivel nacional.', rightMargin, 420, { maxWidth: pageWidth - rightMargin - 40, lineHeightFactor: 1.5 });

    doc.setTextColor(15, 23, 42);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.text('FORMACIÓN ACADÉMICA', rightMargin, 490);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.text('Ingeniería en Administración', rightMargin, 515);
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(11);
    doc.setTextColor(80, 80, 80);
    doc.text('Institución Universitaria, Ecuador', rightMargin, 530);

    doc.save('CV_Pablo_Garcia_Flores.pdf');
  };

  useEffect(() => {
    if (activeTab === 'ai') {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, activeTab]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isGenerating) return;

    const userText = inputValue.trim();
    setInputValue('');
    setMessages((prev) => [...prev, { role: 'user', text: userText }]);
    setIsGenerating(true);

    try {
      const systemPrompt = `Actúa como un Auditor Senior y Especialista Jurídico de la Contraloría General del Estado de Ecuador. Basa tus respuestas en la Constitución de la República, el Acuerdo 067-CG-2018, NCI 400 y la Normativa de Contabilidad Gubernamental aplicable. Mantén un tono técnico, formal y fundamentado en derecho. MUY IMPORTANTE: Si el usuario tiene dudas adicionales o en casos complejos, incítalo amablemente de forma natural a que contacte directamente a Pablo llamándolo por teléfono o enviándole un mensaje por WhatsApp para una asesoría sobre los bienes.`;
      const chatHistoryForApi = messages.map((m) => ({
        role: m.role,
        content: m.text
      }));
      chatHistoryForApi.push({ role: 'user', content: userText });

      const payload = {
        model: "llama3-8b-8192",
        messages: [
          { role: 'system', content: systemPrompt },
          ...chatHistoryForApi
        ]
      };

      if (!apiKey) throw new Error('Falta la clave de API en .env');
      const apiUrl = `https://api.groq.com/openai/v1/chat/completions`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error('Error de conexión');
      const result = await response.json();
      const candidate = result.choices?.[0]?.message?.content;

      if (candidate) {
        setMessages((prev) => [...prev, { role: 'assistant', text: candidate }]);
      } else {
        throw new Error('Respuesta inválida');
      }
    } catch {
      setMessages((prev) => [...prev, { role: 'assistant', text: 'En este momento los servidores de consulta se encuentran en mantenimiento preventivo. Por favor, intente de nuevo en unos instantes o póngase en contacto directamente vía WhatsApp.' }]);
    } finally {
      setIsGenerating(false);
    }
  };

  const navItems = [
    { id: 'profile', icon: User, label: 'Perfil Ejecutivo' },
    { id: 'experience', icon: Briefcase, label: 'Trayectoria' },
    { id: 'systems', icon: Database, label: 'Arquitectura' },
    { id: 'ai', icon: Bot, label: 'Consultor IA' }
  ];

  return (
    <>
      <div className="bg-buildings"></div>
      <div className="bg-overlay"></div>

      {/* Floating Action Button (FAB) */}
      <div className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 z-50 flex flex-col items-end gap-4">
        {isFabOpen && (
          <div className="flex flex-col gap-3 animate-in slide-in-from-bottom-5 fade-in duration-200">
            <a 
              href={whatsappLink} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-3 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:bg-[#20bd5a] transition-all"
            >
              <span className="font-semibold text-sm">WhatsApp</span>
              <MessageCircle className="w-5 h-5" />
            </a>
            <a 
              href={mailToLink} 
              className="flex items-center gap-3 bg-sky-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-sky-400 transition-all"
            >
              <span className="font-semibold text-sm">Correo</span>
              <Mail className="w-5 h-5" />
            </a>
          </div>
        )}
        <button 
          onClick={() => setIsFabOpen(!isFabOpen)}
          className="w-14 h-14 bg-gradient-to-r from-sky-500 to-blue-600 rounded-full flex items-center justify-center text-white shadow-[0_0_20px_rgba(56,189,248,0.4)] hover:shadow-[0_0_30px_rgba(56,189,248,0.6)] transition-all"
        >
          {isFabOpen ? <X className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE HEADER (Hamburguesa) */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-16 glass-panel z-40 flex items-center justify-between px-4 border-b border-white/5 rounded-none">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border border-slate-700">
            <img src="/foto.png" alt="Pablo Fabricio" className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="text-sm font-bold text-white leading-tight">Pablo Fabricio</h1>
            <p className="text-[10px] uppercase tracking-wider text-sky-400">Activos Fijos</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 bg-white/5 border border-white/10 rounded-lg text-white"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5 text-amber-600" />}
          </button>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 bg-white/5 border border-white/10 rounded-lg text-white"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* CONTENEDOR PRINCIPAL */}
      <div className="min-h-screen pt-20 pb-4 px-4 lg:pt-12 lg:pb-12 lg:px-12 relative flex items-start justify-center overflow-hidden">
        <div className="w-full max-w-[1400px] grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-8 lg:gap-12 h-full">

          {/* SIDEBAR IZQUIERDA */}
          <aside className={`
            glass-panel p-8 lg:p-10 flex flex-col justify-start
            fixed lg:relative inset-x-4 top-20 bottom-4 lg:inset-auto 
            z-30 transition-all duration-300 transform overflow-y-auto custom-scrollbar
            ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0 pointer-events-none lg:pointer-events-auto lg:translate-y-0 lg:opacity-100'}
          `}>
            <div className="absolute top-6 right-6 hidden lg:block">
              <button 
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white transition-all"
                title="Cambiar tema"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5 text-amber-600" />}
              </button>
            </div>

            <div className="flex flex-col h-full">
              <div className="hidden lg:flex justify-center mb-6 mt-4">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-slate-700/50 shadow-2xl relative">
                  <img src="/foto.png" alt="Pablo Fabricio" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-full"></div>
                </div>
              </div>

              <div className="hidden lg:block text-center mb-8">
                <h1 className="text-2xl heading-main mb-1">Pablo Fabricio<br />García Flores</h1>
                <p className="text-[11px] font-semibold tracking-[0.2em] uppercase text-sky-400">
                  Ing. Administración<br /> de Empresas
                </p>
              </div>

              <nav className="flex flex-col gap-2 mb-6">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveTab(item.id);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`nav-button flex items-center gap-4 px-5 py-3.5 rounded-2xl font-medium text-sm border border-transparent ${activeTab === item.id
                        ? 'active'
                        : 'text-slate-400'
                        }`}
                    >
                      <Icon className={`w-5 h-5 ${activeTab === item.id ? 'text-sky-300' : 'text-slate-500'}`} />
                      {item.label}
                    </button>
                  );
                })}
              </nav>

              <div className="space-y-3 mt-auto">
                <a 
                  href={whatsappLink} 
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white py-3.5 rounded-2xl font-medium text-sm border border-white/10 transition-all backdrop-blur-md"
                >
                  <Phone className="w-4 h-4 text-sky-400" /> {phoneNumber}
                </a>
                <a 
                  href={linkedinUrl} 
                  target="_blank"
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white py-3.5 rounded-2xl font-medium text-sm border border-white/10 transition-all backdrop-blur-md"
                >
                  <Link className="w-4 h-4 text-blue-400" /> LinkedIn
                </a>
                <button
                  onClick={handleDownloadCV}
                  className="w-full flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 text-white py-3.5 rounded-2xl font-medium text-sm border border-white/10 transition-all backdrop-blur-md"
                >
                  <Download className="w-4 h-4 text-emerald-400" /> Descargar PDF
                </button>
              </div>
            </div>
          </aside>

          {/* MAIN CONTENT DERECHA (Alineado arriba, ajustado márgenes) */}
          <main className="glass-panel p-8 lg:p-12 flex flex-col justify-start h-full max-h-[84vh] overflow-y-auto custom-scrollbar">

            {activeTab === 'profile' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-sky-400 mb-4">
                  <MapPin className="h-4 w-4" /> Quito, Ecuador
                </div>
                <h2 className="text-4xl lg:text-5xl heading-main mb-6 leading-tight">
                  Dirección sólida <br />para bienes públicos.
                </h2>
                <p className="text-base text-slate-300 leading-relaxed max-w-2xl mb-8">
                  Ingeniero en Administración con amplia experiencia en control patrimonial estatal.
                  Lidero la constatación física, conciliación contable y diseño de sistemas que
                  soportan auditorías y garantizan la transparencia total.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="bg-slate-900/40 border border-white/5 p-6 rounded-3xl backdrop-blur-sm">
                    <div className="text-4xl font-black text-white mb-1">15</div>
                    <div className="text-[10px] tracking-[0.2em] uppercase text-slate-400">Años de Servicio</div>
                  </div>
                  <div className="bg-slate-900/40 border border-white/5 p-6 rounded-3xl backdrop-blur-sm">
                    <div className="text-4xl font-black text-white mb-1">0</div>
                    <div className="text-[10px] tracking-[0.2em] uppercase text-slate-400">Hallazgos CGE</div>
                  </div>
                  <div className="bg-slate-900/40 border border-white/5 p-6 rounded-3xl backdrop-blur-sm">
                    <div className="text-4xl font-black text-white mb-1">AI</div>
                    <div className="text-[10px] tracking-[0.2em] uppercase text-slate-400">Sistemas & SAP</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'experience' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <h2 className="text-3xl lg:text-4xl heading-main mb-8">Trayectoria Institucional</h2>
                <div className="space-y-6 max-w-3xl">
                  <div className="group bg-slate-900/40 border border-white/5 p-6 lg:p-8 rounded-[2rem] backdrop-blur-sm hover:bg-slate-900/60 transition-all hover:border-sky-500/30">
                    <div className="text-xs font-bold uppercase tracking-[0.3em] text-sky-400 mb-3">8 años - Consejo de la Judicatura</div>
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">Analista de Activos Fijos</h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Dirección técnica de constatación física y conciliación de inventarios.
                      Responsable de la gestión patrimonial y control interno bajo el estricto cumplimiento
                      de la normativa de la Contraloría General del Estado.
                    </p>
                  </div>
                  <div className="group bg-slate-900/40 border border-white/5 p-6 lg:p-8 rounded-[2rem] backdrop-blur-sm hover:bg-slate-900/60 transition-all hover:border-sky-500/30">
                    <div className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400 mb-3">7 años - Registro Civil del Ecuador</div>
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">Gestión de Bienes</h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Administración patrimonial institucional a nivel nacional. Optimización de recursos,
                      generación de procesos eficientes y controles normativos de bienes públicos.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'systems' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                <h2 className="text-3xl lg:text-4xl heading-main mb-8">Arquitectura & Sistemas</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
                  <div className="bg-slate-900/40 border border-white/5 p-6 lg:p-8 rounded-[2rem] backdrop-blur-sm relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="text-xs font-bold uppercase tracking-[0.3em] text-sky-400 mb-3">Tecnología</div>
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">Levantamiento Inteligente</h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Desarrollo e implementación de macros avanzadas y validaciones robustas que soportan
                      sistemas de códigos de barra y bases de datos masivas para inventarios públicos precisos.
                    </p>
                  </div>
                  <div className="bg-slate-900/40 border border-white/5 p-6 lg:p-8 rounded-[2rem] backdrop-blur-sm relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <div className="text-xs font-bold uppercase tracking-[0.3em] text-purple-400 mb-3">Inteligencia Artificial</div>
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-3">Automatización Legal</h3>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      Configuración de agentes de IA y flujos automatizados que proveen asistencia legal,
                      interpretación de la NCI 400 y resolución de problemas normativos en tiempo real.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'ai' && (
              <div className="flex flex-col h-full animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="mb-4 flex items-center justify-between shrink-0">
                  <div>
                    <h2 className="text-2xl lg:text-3xl heading-main mb-1">Auditor IA</h2>
                    <p className="text-xs text-slate-400">Consultor interactivo sobre normativa CGE y NCI 400</p>
                  </div>
                  <div className="p-2 bg-sky-500/10 rounded-full border border-sky-500/20">
                    <Bot className="w-5 h-5 text-sky-400" />
                  </div>
                </div>

                {/* Se redujo un poco el alto mínimo del chat (380px) */}
                <div className="flex-1 bg-slate-950/50 rounded-[2rem] border border-white/5 p-4 lg:p-6 mb-4 overflow-y-auto min-h-[380px] shadow-inner space-y-4 custom-scrollbar">
                  {messages.map((m, idx) => (
                    <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[85%] rounded-2xl p-4 text-sm leading-relaxed border ${m.role === 'user'
                        ? 'bg-sky-600/20 text-sky-50 border-sky-500/30 rounded-tr-sm'
                        : 'bg-slate-800/50 text-slate-200 border-slate-700/50 rounded-tl-sm'
                        }`}>
                        {m.text}
                      </div>
                    </div>
                  ))}
                  {isGenerating && (
                    <div className="flex justify-start">
                      <div className="flex items-center gap-3 rounded-2xl rounded-tl-sm border border-slate-700/50 bg-slate-800/50 p-4 text-slate-400">
                        <Loader2 className="w-4 h-4 animate-spin text-sky-400" />
                        <span className="text-[10px] uppercase tracking-[0.2em]">Consultando...</span>
                      </div>
                    </div>
                  )}
                  <div ref={chatEndRef} />
                </div>

                <form onSubmit={handleSendMessage} className="flex gap-3 shrink-0">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ej: Baja por obsolescencia..."
                    className="flex-1 rounded-2xl border border-white/10 bg-slate-900/50 px-5 py-4 text-sm text-white placeholder-slate-500 focus:border-sky-500/50 focus:outline-none focus:ring-1 focus:ring-sky-500/50 backdrop-blur-md transition-all"
                  />
                  <button
                    type="submit"
                    disabled={isGenerating || !inputValue.trim()}
                    className="flex items-center justify-center rounded-2xl bg-sky-500 px-6 py-4 text-sm font-bold uppercase tracking-[0.1em] text-white transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-50 shadow-[0_0_20px_rgba(56,189,248,0.2)]"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            )}
          </main>

        </div>
      </div>
    </>
  );
}
