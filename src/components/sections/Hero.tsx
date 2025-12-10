import React, { useRef } from 'react'; // <--- Importa useRef
import { useTranslation } from 'react-i18next';
import './Hero.css';
import heroVideo from '../../assets/hero-bg.mp4';

const Hero: React.FC = () => {
  const { t } = useTranslation();
  const cardRef = useRef<HTMLDivElement>(null);
  

  // Lógica para el efecto Spotlight
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const div = cardRef.current;
    const rect = div.getBoundingClientRect();

    // Calculamos la posición X e Y relativa a la tarjeta
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Inyectamos las coordenadas como variables CSS directamente
    div.style.setProperty('--mouse-x', `${x}px`);
    div.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <section className="hero-section" id="vision">
      {/* 1. VIDEO DE FONDO */}
      <video className="hero-video" autoPlay  muted playsInline>
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Capa oscura para que el texto se lea bien */}
      <div className="hero-overlay"></div>

      {/* 2. CONTENIDO PRINCIPAL (Glassmorphism) */}
     <div 
        className="hero-content spotlight-card" 
        ref={cardRef}
        onMouseMove={handleMouseMove}
      >
        {/* Esta capa extra dibuja el brillo siguiendo al mouse */}
        <div className="spotlight-overlay"></div>

        <h1 className="hero-title">{t('hero.title')}</h1>
        <p className="hero-subtitle">{t('hero.subtitle')}</p>
        
        <div className="hero-actions">
          <a href="#community" className="btn-primary">
            
            {t('hero.cta_primary')}
          </a>
          <a href="#waitlist" className="btn-secondary">
            {t('hero.cta_secondary')}
     

         <p className='arrow'>{'->'}</p>
          </a>
        </div>
      </div>

      {/* 3. SEPARADOR DE OLA (Transición al color Cream) */}
      <div className="hero-wave">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;