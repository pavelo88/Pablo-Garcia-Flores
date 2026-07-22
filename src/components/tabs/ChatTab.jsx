import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, Loader2 } from 'lucide-react';
import { SYSTEM_PROMPT } from '../../utils/systemPrompt';

export default function ChatTab({ messages, setMessages }) {
  const [inputValue, setInputValue] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [questionCount, setQuestionCount] = useState(0);
  const chatEndRef = useRef(null);
  
  const apiKey = import.meta.env.VITE_GROQ_API_KEY || '';

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isGenerating) return;

    const userText = inputValue.trim();
    setInputValue('');
    setMessages((prev) => [...prev, { role: 'user', text: userText }]);
    setIsGenerating(true);
    setQuestionCount(prev => prev + 1);

    try {
      const chatHistoryForApi = messages.map((m) => ({
        role: m.role,
        content: m.text
      }));
      chatHistoryForApi.push({ role: 'user', content: userText });

      // Add instruction if question count is reached (4th or 5th question)
      let currentSystemPrompt = SYSTEM_PROMPT;
      if (questionCount >= 3) { // After 3 questions, the next ones will trigger this
        currentSystemPrompt += `\n\n[INSTRUCCIÓN INTERNA AL MODELO]: El usuario ya ha hecho varias preguntas. Asegúrate de incluir sutilmente en tu respuesta una invitación amistosa para que contacte a Pablo mediante un mensaje a su WhatsApp o a su correo para una asesoría más personalizada y agendar una reunión.`;
      }

      const payload = {
        model: "llama3-8b-8192",
        messages: [
          { role: 'system', content: currentSystemPrompt },
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
    } catch (error) {
      console.error(error);
      setMessages((prev) => [...prev, { role: 'assistant', text: 'En este momento los servidores de consulta se encuentran en mantenimiento preventivo. Por favor, intente de nuevo en unos instantes o póngase en contacto directamente vía WhatsApp.' }]);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
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
  );
}
