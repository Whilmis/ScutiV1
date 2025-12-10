import React from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Star } from 'lucide-react';
import './LegacyHero.css';

const LegacyHero: React.FC = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section className="legacy-hero" ref={ref}>
      
      {/* 1. FONDO DE PARTÍCULAS + ESTRELLAS FUGACES */}
      <div className="stars-container">
        <div className="star-layer layer-1"></div>
        <div className="star-layer layer-2"></div>
        
        {/* Estrellas fugaces para dar energía */}
        <div className="shooting-star"></div>
        <div className="shooting-star delay-1"></div>
        <div className="shooting-star delay-2"></div>
      </div>

      {/* 2. CONTENIDO */}
      <div className="legacy-content">
        
        <div className={`legacy-badge ${isVisible ? 'reveal-scale reveal-visible' : 'reveal-scale'}`}>
          <Star size={14} fill="currentColor" />
          {t('legacy_page.hero.badge')}
        </div>

        <h1 className={`legacy-title ${isVisible ? 'reveal-up reveal-visible' : 'reveal-up'} delay-200`}>
          {t('legacy_page.hero.title')}
        </h1>

        <p className={`legacy-subtitle ${isVisible ? 'reveal-up reveal-visible' : 'reveal-up'} delay-300`}>
          {t('legacy_page.hero.subtitle')}
        </p>

      </div>

      {/* 3. TRANSICIÓN INFERIOR (Ahora con Teal) */}
      <div className="legacy-fade-bottom"></div>
      <div className="legacy-teal-glow"></div>
    </section>
  );
};

export default LegacyHero;