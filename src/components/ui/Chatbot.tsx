import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { MessageSquare, X, Send, Bot } from 'lucide-react';
import Groq from "groq-sdk";
import './Chatbot.css';

// Inicialización de Groq
const apiKey = import.meta.env.VITE_GROQ_API_KEY || '';
const groq = new Groq({ 
  apiKey: apiKey, 
  dangerouslyAllowBrowser: true 
});

interface Message {
  id: number;
  text: string;
  sender: 'bot' | 'user';
}

const Chatbot: React.FC = () => {
  // Obtenemos 'i18n' para saber el idioma actual
  const { t, i18n } = useTranslation();
  
  const [messages, setMessages] = useState<Message[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Inicializar saludo (se actualiza si cambias de idioma)
  useEffect(() => {
    setMessages([{ id: 1, text: t('chatbot.welcome') as string, sender: 'bot' }]);
  }, [t, i18n.language]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping, isOpen]);

  // --- LÓGICA DE IA (BILINGÜE) ---
  const generateAIResponse = async (userMessage: string) => {
    setIsTyping(true);

    try {
      if (!apiKey) {
        throw new Error("Falta la API Key de Groq en .env");
      }

      // 1. Detectar idioma actual (puede ser 'en', 'en-US', 'es', 'es-ES')
      const isSpanish = i18n.language.startsWith('es');

      // 2. Definir Prompts en ambos idiomas
      const systemPromptES = `
        Eres 'Scuti', un Asistente Virtual Inteligente y Mentor para una plataforma global.
        
        TUS CONOCIMIENTOS:
        1. **Marketplace:** Conectas alumnos con tutores.
        2. **Aprender:** Busca tutores o cursos.
        3. **Enseñar (Ganar):** Cualquiera puede monetizar su talento.
        4. **Swap (Intercambio):** Trueque de habilidades sin dinero (ej: Inglés x Programación).
        5. **IA:** Creas rutas de aprendizaje y organizas rutinas.
        
        TU PERSONALIDAD:
        - Responde SIEMPRE en ESPAÑOL.
        - Sé empático, motivador y breve (máx 3 frases).
        - Usa emojis ✨.
        - Si preguntan por dinero, sugiere enseñar.
        - Si preguntan por aprender, sugiere tutores o Swap.
      `;

      const systemPromptEN = `
        You are 'Scuti', an Intelligent Virtual Assistant and Mentor for a global platform.
        
        YOUR KNOWLEDGE:
        1. **Marketplace:** You connect learners with tutors.
        2. **Learn:** Find tutors or courses.
        3. **Teach (Earn):** Anyone can monetize their talent.
        4. **Swap:** Skill barter without money (e.g., English for Coding).
        5. **AI:** You create learning paths and organize routines.
        
        YOUR PERSONALITY:
        - Respond ALWAYS in ENGLISH.
        - Be empathetic, motivating, and brief (max 3 sentences).
        - Use emojis ✨.
        - If asked about money, suggest teaching.
        - If asked about learning, suggest tutors or Swap.
      `;

      // 3. Seleccionar el prompt correcto
      const selectedPrompt = isSpanish ? systemPromptES : systemPromptEN;

      const completion = await groq.chat.completions.create({
        messages: [
          { role: "system", content: selectedPrompt },
          { role: "user", content: userMessage },
        ],
        model: "llama-3.1-8b-instant",
        temperature: 0.7,
        max_tokens: 200,
      });

      const text = completion.choices[0]?.message?.content || (isSpanish ? "No tengo respuesta para eso." : "I don't have an answer for that.");

      setMessages(prev => [...prev, { id: Date.now(), text: text, sender: 'bot' }]);

    } catch (error) {
      console.error("Error Groq:", error);
      const errorMsg = i18n.language.startsWith('es') 
        ? "Hubo un error técnico con mi conexión neuronal. Intenta de nuevo."
        : "There was a technical error with my neural connection. Please try again.";
        
      setMessages(prev => [...prev, { 
        id: Date.now(), 
        text: errorMsg, 
        sender: 'bot' 
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSend = () => {
    if (!inputText.trim()) return;
    const userMsg: Message = { id: Date.now(), text: inputText, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInputText(''); 
    generateAIResponse(inputText);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  const handleOptionClick = (optionKey: string) => {
    const userText = t(`chatbot.options.${optionKey}` as string);
    const newUserMsg: Message = { id: Date.now(), text: userText, sender: 'user' };
    setMessages(prev => [...prev, newUserMsg]);
    generateAIResponse(userText); 
  };

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      <div className="chatbot-window">
        <div className="chat-header">
          <div className="chat-avatar">
            <Bot size={20} />
            <div className="status-dot"></div>
          </div>
          <div className="chat-title">
            <h4>Scuti AI</h4>
          {/* Reusamos traducción existente o texto fijo */}
          </div>
          <button className="close-chat" onClick={() => setIsOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <div className="chat-messages">
          {messages.map((msg) => (
            <div key={msg.id} className={`message ${msg.sender}`}>
              {msg.text}
            </div>
          ))}
          {isTyping && (
            <div className="message bot typing">
              <span className="dot"></span><span className="dot"></span><span className="dot"></span>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {!isTyping && (
          <div className="chat-options">
        
            <button onClick={() => handleOptionClick('earn')}>💰 {t('chatbot.options.earn') as string}</button>
          </div>
        )}

        <div className="chat-input-area">
          <input 
            type="text" 
            placeholder={i18n.language.startsWith('es') ? "Escribe a Scuti..." : "Type to Scuti..."}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={isTyping} 
          />
          <button onClick={handleSend} disabled={isTyping || !inputText.trim()}>
            <Send size={16} />
          </button>
        </div>
      </div>
      <button className="chatbot-toggle" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <MessageSquare size={28} />}
      </button>
    </div>
  );
};

export default Chatbot;