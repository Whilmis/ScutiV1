import React from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import heroVideo from '../../assets/hero-bg.mp4'; // Reutilizamos el video del Home
import './TechHero.css';

const TechHero: React.FC = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section className="tech-hero" ref={ref}>
      
      {/* 1. CAPA DE VIDEO DE FONDO */}
      <div className="tech-video-wrapper">
        <video className="tech-video" autoPlay loop muted playsInline>
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Overlay para oscurecer y dar tinte azulado */}
        <div className="tech-overlay"></div>
      </div>

      {/* 2. CAPA DE REJILLA (GRID) ANIMADA */}
      <div className="tech-hero-grid-bg"></div>
      
      {/* 3. CONTENIDO PRINCIPAL */}
      <div className="tech-hero-content">
        
        {/* Badge Animado */}
        <div className={`tech-badge ${isVisible ? 'reveal-scale reveal-visible' : 'reveal-scale'}`}>
          <span className="pulsing-dot"></span>
          {t('tech_page.hero.badge')}
        </div>
        
        {/* Título */}
        <h1 className={`tech-hero-title ${isVisible ? 'reveal-up reveal-visible' : 'reveal-up'} delay-200`}>
          {t('tech_page.hero.title')}
        </h1>
        
        {/* Subtítulo */}
        <p className={`tech-hero-subtitle ${isVisible ? 'reveal-up reveal-visible' : 'reveal-up'} delay-300`}>
          {t('tech_page.hero.subtitle')}
        </p>

      </div>
      
      {/* 4. GLOW INFERIOR (Transición suave) */}
      <div className="tech-hero-glow"></div>
    </section>
  );
};

export default TechHero;