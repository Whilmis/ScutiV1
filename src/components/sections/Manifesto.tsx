import React from 'react';
import { useTranslation } from 'react-i18next';
import { Eye, Target, Heart, Play } from 'lucide-react';
import './Manifesto.css';

const Manifesto: React.FC = () => {
  const { t } = useTranslation();
  const bgText = new Array(4).fill(t('manifesto.background_text'));
  const valuesList = t('manifesto.values.list', { returnObjects: true }) as string[];

  return (
    <section className="manifesto-section" id="manifesto">
      
      {/* CAPA 1: Fondo Tipográfico */}
      <div className="marquee-background">
        <div className="marquee-track">
          {bgText.map((text, index) => (
            <span key={index} className="marquee-text-bg">{text}</span>
          ))}
        </div>
      </div>

      {/* CAPA 2: Contenido Vertical */}
      <div className="manifesto-wrapper">
        
        {/* A. EL MANIFIESTO (Video/Texto Principal) */}
        <div className="manifesto-core-block">
          <span className="manifesto-label">{t('manifesto.label')}</span>
          <h2 className="manifesto-statement">
            "{t('manifesto.core_text')}"
          </h2>
          
          {/* Botón Simulado de Play (O real si tienes video) */}
          <button className="manifesto-play-btn">
            <div className="play-icon-circle">
              <Play size={24} fill="currentColor" />
            </div>
            <span>{t('manifesto.video_button')}</span>
          </button>
        </div>

        {/* Separador */}
        <div className="manifesto-line"></div>

        {/* B. LOS PILARES (Grid de 3 Tarjetas) */}
        <div className="manifesto-grid">
          {/* Visión */}
          <div className="philosophy-card">
            <div className="card-icon"><Eye size={32} /></div>
            <h3>{t('manifesto.vision.label')}</h3>
            <p>{t('manifesto.vision.text')}</p>
          </div>

          {/* Misión */}
          <div className="philosophy-card">
            <div className="card-icon"><Target size={32} /></div>
            <h3>{t('manifesto.mission.label')}</h3>
            <p>{t('manifesto.mission.text')}</p>
          </div>

          {/* Valores */}
          <div className="philosophy-card values-card">
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

export default Manifesto;