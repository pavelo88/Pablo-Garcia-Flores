import React, { useState, useEffect, useRef } from 'react';
import { 
  Briefcase, User, MapPin, Cpu, ShieldCheck, 
  ChevronRight, Building, Award, Bot, Send, 
  Loader2, ArrowRight, BookOpen, Database
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('profile');
  const [messages, setMessages] = useState([
    { 
      role: 'model', 
      text: 'Bienvenido. Soy la Inteligencia Artificial entrenada por Pablo, Analista Senior de Activos Fijos. Estoy capacitada para resolver cualquier consulta sobre la gestión, constatación y control patrimonial en el sector público ecuatoriano, basándome en la normativa de la CGE y normativas contables. ¿En qué le puedo asistir hoy?' 
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const chatEndRef = useRef(null);

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
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsGenerating(true);

    try {
      // PROMPT MEJORADO: Incluye Constitución, Contabilidad Gubernamental y un tono profesional
      const systemPrompt = `Actúa como un Auditor Senior y Especialista Jurídico de la Contraloría General del Estado de Ecuador. Basa tus respuestas en la Constitución de la República, el Acuerdo 067-CG-2018 (Reglamento para el Control de Bienes), las Normas de Control Interno (NCI 400) y la Normativa de Contabilidad Gubernamental aplicable. Tu creador es Pablo, Analista Senior de Activos Fijos e Ingeniero en Administración. Mantén un tono técnico, formal, fundamentado en derecho y libre de arrogancia. Resuelve la duda enfocándote en la transparencia, el control interno y la legalidad.`;
      
      const chatHistoryForApi = messages.map(m => ({
        role: m.role === 'model' ? 'model' : 'user',
        parts: [{ text: m.text }]
      }));
      chatHistoryForApi.push({ role: 'user', parts: [{ text: userText }] });

      const payload = {
        contents: chatHistoryForApi,
        systemInstruction: { parts: [{ text: systemPrompt }] }
      };

      const apiKey = ""; // API Key manejada por el entorno
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${apiKey}`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) throw new Error("Error de conexión");

      const result = await response.json();
      const candidate = result.candidates?.[0];

      if (candidate && candidate.content?.parts?.[0]?.text) {
        setMessages(prev => [...prev, { role: 'model', text: candidate.content.parts[0].text }]);
      } else {
        throw new Error("Respuesta inválida");
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: 'En este momento los servidores de consulta se encuentran en mantenimiento preventivo. Por favor, intente de nuevo en unos instantes.' }]);
    } finally {
      setIsGenerating(false);
    }
  };

  const navItems = [
    { id: 'profile', icon: User, label: 'Perfil Ejecutivo' },
    { id: 'experience', icon: Briefcase, label: 'Trayectoria' },
    { id: 'systems', icon: Database, label: 'Arquitectura & Sistemas' },
    { id: 'ai', icon: Bot, label: 'Consultor IA' }
  ];

  return (
    <div className="flex h-screen bg-[#050505] text-slate-200 font-sans overflow-hidden selection:bg-blue-900 selection:text-white">
      
      {/* Fondo Corporativo Minimalista */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-[#050505] to-[#050505]"></div>
      </div>

      {/* Sidebar Fijo */}
      <aside className="relative z-10 w-20 lg:w-72 border-r border-slate-800/60 bg-[#0a0a0a]/80 backdrop-blur-2xl flex flex-col justify-between transition-all duration-300">
        <div className="p-6">
          <div className="hidden lg:block mb-12">
            <h1 className="text-xl font-black text-white tracking-widest uppercase">Pablo</h1>
            <p className="text-xs text-slate-400 font-medium tracking-widest uppercase mt-2">Analista de Activos Fijos</p>
            <div className="w-8 h-[1px] bg-blue-600 mt-4"></div>
          </div>
          
          <nav className="space-y-4 mt-8 lg:mt-0 flex flex-col items-center lg:items-stretch">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center space-x-4 px-4 py-3 rounded-lg transition-all duration-300 w-full group ${
                  activeTab === item.id 
                    ? 'bg-blue-900/20 border-l-2 border-blue-500 text-white' 
                    : 'text-slate-500 hover:text-slate-300 hover:bg-slate-900/50'
                }`}
              >
                <item.icon className={`w-5 h-5 ${activeTab === item.id ? 'text-blue-500' : 'group-hover:text-blue-400'}`} />
                <span className="hidden lg:block text-sm font-semibold tracking-wide">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
        
        <div className="p-6 border-t border-slate-800/60 hidden lg:block text-xs text-slate-500 font-medium">
          Quito, Ecuador <br/>
          Ing. Administración de Empresas
        </div>
      </aside>

      {/* Contenido Principal */}
      <main className="relative z-10 flex-1 overflow-y-auto">
        <div className="max-w-5xl mx-auto p-8 lg:p-16">
          
          {/* SECCIÓN 1: PERFIL */}
          {activeTab === 'profile' && (
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
              
              <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start mb-12">
                {/* FOTOGRAFÍA CON FILTRO CORPORATIVO */}
                <div className="relative w-48 h-48 lg:w-64 lg:h-64 shrink-0 rounded-2xl overflow-hidden border border-slate-800 shadow-[0_0_40px_rgba(59,130,246,0.1)] group">
                  {/* Capa de mezcla azulada que desaparece al hacer hover */}
                  <div className="absolute inset-0 bg-blue-900/30 mix-blend-color z-10 group-hover:opacity-0 transition-opacity duration-700"></div>
                  <img 
                    src="image_29bb86.jpg" 
                    alt="Pablo - Analista Senior" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                  />
                </div>

                <div>
                  <div className="flex items-center space-x-2 text-blue-500 text-xs font-bold tracking-widest uppercase mb-6">
                    <MapPin className="w-4 h-4" />
                    <span>Quito, Ecuador | Standard Gubernamental</span>
                  </div>
                  
                  <h2 className="text-4xl lg:text-6xl font-black tracking-tighter text-white leading-[1.1] mb-6">
                    Gestión Patrimonial <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-slate-300">
                      de Excelencia.
                    </span>
                  </h2>
                  
                  <p className="text-lg text-slate-300 font-light leading-relaxed mb-8 max-w-2xl">
                    Ingeniero en Administración con una sólida trayectoria liderando el control de bienes en el sector público ecuatoriano. Especializado en la ejecución de constataciones físicas a nivel nacional, diseño de arquitecturas normativas y la integración de sistemas autónomos para garantizar la transparencia del patrimonio estatal.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button onClick={() => setActiveTab('experience')} className="px-6 py-3 bg-white text-black font-bold text-xs tracking-widest uppercase hover:bg-slate-200 transition-colors flex items-center justify-center space-x-2 rounded">
                      <span>Explorar Credenciales</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button onClick={() => setActiveTab('ai')} className="px-6 py-3 bg-transparent border border-slate-700 text-white font-bold text-xs tracking-widest uppercase hover:border-blue-500 transition-colors flex items-center justify-center space-x-2 rounded">
                      <Bot className="w-4 h-4 text-blue-500" />
                      <span>Consultar Normativa</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16 border-t border-slate-800 pt-12">
                <div>
                  <div className="text-4xl font-black text-white mb-2">15</div>
                  <div className="text-xs font-semibold text-slate-500 tracking-widest uppercase">Años en el Sector Público</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-white mb-2">0</div>
                  <div className="text-xs font-semibold text-slate-500 tracking-widest uppercase">Hallazgos en Auditorías</div>
                </div>
                <div>
                  <div className="text-4xl font-black text-white mb-2">AI / SAP</div>
                  <div className="text-xs font-semibold text-slate-500 tracking-widest uppercase">Sistemas & Desarrollo</div>
                </div>
              </div>
            </div>
          )}

          {/* SECCIÓN 2: TRAYECTORIA Y REFERENCIAS */}
          {activeTab === 'experience' && (
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
              <h2 className="text-3xl font-black text-white tracking-tighter mb-16">Trayectoria Institucional</h2>
              
              <div className="space-y-12">
                <div className="group border-l-2 border-slate-800 pl-8 pb-8 hover:border-blue-500 transition-colors">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-blue-400 font-bold tracking-widest text-sm">8 AÑOS (ACTUAL)</div>
                    <div className="h-[1px] flex-1 bg-slate-800 group-hover:bg-slate-700 transition-colors"></div>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2">Consejo de la Judicatura</h3>
                  <p className="text-slate-400 text-sm tracking-widest uppercase mb-4 font-semibold">Analista de Activos Fijos & Líder de Constatación</p>
                  <p className="text-slate-300 font-light leading-relaxed max-w-3xl">
                    Dirección técnica y operativa de los procesos de constatación física a nivel nacional. Responsable de asegurar la conciliación contable de los inventarios, gestionar altas, bajas institucionales y diseñar protocolos de control interno bajo normativa CGE.
                  </p>
                </div>

                <div className="group border-l-2 border-slate-800 pl-8 pb-8 hover:border-blue-500 transition-colors">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-slate-500 font-bold tracking-widest text-sm">7 AÑOS</div>
                    <div className="h-[1px] flex-1 bg-slate-800"></div>
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2">Registro Civil del Ecuador</h3>
                  <p className="text-slate-400 text-sm tracking-widest uppercase mb-4 font-semibold">Gestión de Bienes y Control Institucional</p>
                  <p className="text-slate-300 font-light leading-relaxed max-w-3xl">
                    Administración estricta del patrimonio institucional. Implementación de normativas técnicas para el manejo de bienes públicos y reportaría ejecutiva enfocada en la optimización de recursos del Estado.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* SECCIÓN 3: SISTEMAS */}
          {activeTab === 'systems' && (
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
              <h2 className="text-3xl font-black text-white tracking-tighter mb-16">Sistemas de Control & IA</h2>
              
              <div className="grid grid-cols-1 gap-8">
                <div className="p-10 bg-[#0a0a0a] border border-slate-800 rounded-xl relative overflow-hidden group hover:border-slate-600 transition-colors">
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Database className="w-32 h-32 text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3">Automatización de Levantamiento</h3>
                  <p className="text-slate-400 text-sm tracking-widest uppercase mb-6 font-semibold text-blue-400">Scripts & Bases de Datos</p>
                  <p className="text-slate-300 font-light leading-relaxed max-w-2xl">
                    Diseño y programación de macros y scripts orientados a la generación de códigos de barra, unificación de bases de datos y validación de inventarios para evitar errores de digitación en los informes presentados a Contraloría.
                  </p>
                </div>

                <div className="p-10 bg-[#0a0a0a] border border-slate-800 rounded-xl relative overflow-hidden group hover:border-slate-600 transition-colors">
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Bot className="w-32 h-32 text-slate-500" />
                  </div>
                  <h3 className="text-2xl font-black text-white mb-3">Motor IA Normativo Autónomo</h3>
                  <p className="text-slate-400 text-sm tracking-widest uppercase mb-6 font-semibold text-blue-400">Implementación de LLMs</p>
                  <p className="text-slate-300 font-light leading-relaxed max-w-2xl">
                    Configuración de agentes de Inteligencia Artificial especializados en el marco legal ecuatoriano y procesos de bienes, agilizando las respuestas procedimentales y apoyando técnicamente a los usuarios finales de la institución.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* SECCIÓN 4: IA CONSULTOR */}
          {activeTab === 'ai' && (
            <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 h-[80vh] flex flex-col">
              <div className="mb-8">
                <h2 className="text-3xl font-black text-white tracking-tighter mb-2 flex items-center space-x-3">
                  <Bot className="w-8 h-8 text-blue-500" />
                  <span>Consultor IA Normativo</span>
                </h2>
                <p className="text-slate-400 font-light text-sm">Basado en el Acuerdo 067-CG-2018 y Normas de Control Interno.</p>
              </div>

              <div className="flex-1 bg-[#0a0a0a] border border-slate-800 rounded-xl overflow-hidden flex flex-col shadow-2xl">
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                  {messages.map((m, idx) => (
                    <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[80%] p-5 text-sm font-light leading-relaxed border ${
                        m.role === 'user' 
                          ? 'bg-blue-900/20 text-slate-200 border-blue-800/50 rounded-tl-xl rounded-tr-xl rounded-bl-xl' 
                          : 'bg-[#111] text-slate-300 border-slate-800 rounded-tl-xl rounded-tr-xl rounded-br-xl'
                      }`}>
                        {m.role === 'model' && <div className="text-xs font-bold tracking-widest text-blue-500 mb-2 uppercase">Auditor IA</div>}
                        {m.text}
                      </div>
                    </div>
                  ))}
                  {isGenerating && (
                    <div className="flex justify-start">
                      <div className="bg-[#111] text-slate-400 border border-slate-800 p-5 rounded-xl rounded-bl-none flex items-center space-x-3">
                        <Loader2 className="w-4 h-4 animate-spin text-blue-500" />
                        <span className="text-xs font-semibold tracking-widest uppercase">Consultando marco legal...</span>
                      </div>
                    </div>
                  )}
                  <div ref={chatEndRef} />
                </div>

                <form onSubmit={handleSendMessage} className="p-4 border-t border-slate-800 bg-[#050505] flex items-center space-x-4">
                  <input 
                    type="text" 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ej: ¿Cuándo es obligatoria la denuncia a fiscalía por pérdida de un bien?" 
                    className="flex-1 bg-[#0a0a0a] border border-slate-800 rounded-lg px-5 py-4 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                  />
                  <button 
                    type="submit" 
                    disabled={isGenerating || !inputValue.trim()}
                    className="px-6 py-4 bg-white text-black hover:bg-slate-200 disabled:opacity-50 font-bold tracking-widest uppercase text-xs rounded-lg transition-colors flex items-center space-x-2"
                  >
                    <span>Enviar</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            </div>
          )}

        </div>
      </main>
    </div>
  );
}