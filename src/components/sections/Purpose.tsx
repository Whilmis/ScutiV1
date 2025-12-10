import React from 'react';
import { useTranslation } from 'react-i18next';
import { Eye, Target, Heart } from 'lucide-react'; // Iconos para las tarjetas
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Purpose.css';

interface StatItem {
  value: string;
  label: string;
}

const Purpose: React.FC = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollReveal(0.1);
  
  // Datos de Estadísticas
  const stats = t('purpose.stats', { returnObjects: true }) as StatItem[];
  // Datos de Valores (Lista)
  const valuesList = t('manifesto.values.list', { returnObjects: true }) as string[];

  return (
    <section className="purpose-section" id="purpose" ref={ref}>
      <div className="purpose-container">
        
        {/* --- PARTE 1: DEFINICIÓN Y DATOS --- */}
        <div className="purpose-top-grid">
          
          {/* Definición (Izquierda) */}
          <div className={`purpose-content ${isVisible ? 'reveal-up reveal-visible' : 'reveal-up'}`}>
            <span className="purpose-label">{t('purpose.label')}</span>
            <h2 className="purpose-headline">{t('purpose.headline')}</h2>
            <p className="purpose-description">{t('purpose.description')}</p>
            <div className="purpose-decoration-line"></div>
          </div>

          {/* Stats (Derecha) */}
          <div className="purpose-stats-grid">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`stat-card ${isVisible ? 'reveal-scale reveal-visible' : 'reveal-scale'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <h3 className="stat-value">{stat.value}</h3>
                <p className="stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Separador Visual */}
        <div className="purpose-divider"></div>

        {/* --- PARTE 2: LAS TARJETAS (Filosofía) --- */}
        <div className="purpose-cards-grid">
          
          {/* Visión */}
          <div className={`philosophy-card ${isVisible ? 'reveal-up reveal-visible' : 'reveal-up'} delay-200`}>
            <div className="card-icon"><Eye size={32} /></div>
            <h3>{t('manifesto.vision.label')}</h3>
            <p>{t('manifesto.vision.text')}</p>
          </div>

          {/* Misión */}
          <div className={`philosophy-card ${isVisible ? 'reveal-up reveal-visible' : 'reveal-up'} delay-300`}>
            <div className="card-icon"><Target size={32} /></div>
            <h3>{t('manifesto.mission.label')}</h3>
            <p>{t('manifesto.mission.text')}</p>
          </div>

          {/* Valores */}
          <div className={`philosophy-card values-card ${isVisible ? 'reveal-up reveal-visible' : 'reveal-up'} delay-400`}>
            <div className="card-icon"><Heart size={32} /></div>
            <h3>{t('manifesto.values.label')}</h3>
            <ul className="values-list">
              {valuesList.map((val, i) => <li key={i}>{val}</li>)}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Purpose;