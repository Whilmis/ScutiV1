import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Play, X, Zap } from 'lucide-react';

// IMPORTAMOS AMBOS VIDEOS
import videoES from '../../assets/Manifiesto.mp4';
import videoEN from '../../assets/manifiestoen.mp4';

import './CinematicManifesto.css';

const CinematicManifesto: React.FC = () => {
  const { t, i18n } = useTranslation(); // Importamos i18n para detectar idioma
  const [showVideo, setShowVideo] = useState(false);
  
  const bgText = new Array(8).fill(t('tech_page.manifesto.background_text'));

  // Lógica de selección de video
  // Si el idioma empieza por 'es' (es, es-ES, etc.), usa el video en español.
  // Para cualquier otro caso (en, fr, etc.), usa el inglés por defecto.
  const currentVideo = i18n.language.startsWith('es') ? videoES : videoEN;

  return (
    <section className="cine-manifesto">
      
      {/* 1. FONDO BLUEPRINT */}
      <div className="cine-marquee-layer">
        <div className="cine-track">
          {bgText.map((text, index) => <span key={index} className="outline-text">{text}</span>)}
        </div>
        <div className="cine-track reverse">
          {bgText.map((text, index) => <span key={index} className="outline-text">{text}</span>)}
        </div>
      </div>

      {/* 2. NÚCLEO CENTRAL */}
      <div className="cine-center-stage">
        <div className="video-trigger-card" onClick={() => setShowVideo(true)}>
          
          <div className="card-header">
            <span className="live-badge"><span className="dot"></span> LIVE SYSTEM</span>
            <Zap size={16} className="energy-icon" />
          </div>

          <div className="card-body">
            <h3 className="manifesto-label">{t('tech_page.manifesto.label')}</h3>
            <p className="manifesto-quote">"{t('tech_page.manifesto.core_text')}"</p>

            <div className="play-action-row">
              <div className="play-circle-small">
                <Play fill="currentColor" size={20} />
              </div>
              <span className="cta-text">{t('tech_page.manifesto.video_cta')}</span>
            </div>
          </div>

          <div className="card-glow"></div>
        </div>
      </div>

      {/* 3. MODAL DE VIDEO DINÁMICO */}
      {showVideo && (
        <div className="video-modal-overlay" onClick={() => setShowVideo(false)}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            
            <button className="close-video-btn" onClick={() => setShowVideo(false)}>
              <X size={32} />
            </button>
            
            {/* IMPORTANTE: 'key={currentVideo}' fuerza a React a recargar el componente 
               si cambia el idioma, asegurando que se cargue el archivo correcto.
            */}
            <video 
              key={currentVideo} 
              className="local-video-player"
              src={currentVideo} 
              autoPlay 
              controls 
              playsInline
            >
              Tu navegador no soporta videos HTML5.
            </video>

          </div>
        </div>
      )}
    </section>
  );
};

export default CinematicManifesto;