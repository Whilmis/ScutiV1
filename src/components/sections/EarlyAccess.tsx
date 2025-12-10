import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'; // <--- IMPORTANTE: Importar Link
import { ArrowRight, Check, Loader2, AlertCircle, User, Mail } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './EarlyAccess.css';

const EarlyAccess: React.FC = () => {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  
  const form = useRef<HTMLFormElement>(null);
  const { ref, isVisible } = useScrollReveal();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !name) return;

    setStatus('loading');

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current!, PUBLIC_KEY);
      
      setStatus('success');
      setName('');
      setEmail('');
      
      setTimeout(() => setStatus('idle'), 5000);
      
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section className="cta-section" id="waitlist" ref={ref}>
      <div className={`cta-container ${isVisible ? 'reveal-scale reveal-visible' : 'reveal-scale'}`}>
        
        <div className="cta-content">
          <h2 className="cta-title ">{t('cta.title')}</h2>
          <p className="cta-subtitle">{t('cta.subtitle')}</p>

          <form 
            ref={form} 
            className={`cta-form ${status === 'success' ? 'submitted' : ''}`} 
            onSubmit={handleSubmit}
          >
            {/* NOMBRE */}
            <div className={`input-wrapper ${status === 'error' ? 'input-error' : ''}`}>
              <User className="input-icon" size={20} />
              <input 
                type="text" 
                name="user_name" 
                placeholder={t('cta.placeholder_name')} 
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={status === 'loading' || status === 'success'}
              />
            </div>

            {/* EMAIL */}
            <div className={`input-wrapper ${status === 'error' ? 'input-error' : ''}`}>
              <Mail className="input-icon" size={20} />
              <input 
                type="email" 
                name="user_email" 
                placeholder={t('cta.placeholder_email')} 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={status === 'loading' || status === 'success'}
              />
            </div>
              
            {/* BOTÓN */}
            <button 
              type="submit" 
              className="cta-button"
              disabled={status === 'loading' || status === 'success'}
            >
              {status === 'loading' && <Loader2 size={20} className="animate-spin" />}
              {status === 'success' && <Check size={20} />}
              {status === 'error' && <AlertCircle size={20} />}
              {status === 'idle' && <ArrowRight size={20} />}
              
              <span>
                {status === 'loading' && 'Enviando...'}
                {status === 'success' && t('cta.success')}
                {status === 'error' && 'Error'}
                {status === 'idle' && t('cta.button')}
              </span>
            </button>
            
            {/* MENSAJE DE ERROR */}
            {status === 'error' && (
              <p className="error-message">Hubo un problema. Inténtalo de nuevo.</p>
            )}

            {/* --- NUEVO: CONSENTIMIENTO LEGAL --- */}
            <p className="form-disclaimer">
              {t('cta.consent_text')}{' '}
              <Link to="/privacy" className="disclaimer-link">{t('cta.consent_privacy')}</Link>
              {' '}{t('cta.consent_and')}{' '}
              <Link to="/terms" className="disclaimer-link">{t('cta.consent_terms')}</Link>
            </p>

          </form>
        </div>

        <div className="cta-glow"></div>
      </div>
    </section>
  );
};

export default EarlyAccess;