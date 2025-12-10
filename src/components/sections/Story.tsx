import React from 'react';
import { useTranslation } from 'react-i18next';
import { MapPin, Calendar } from 'lucide-react';
import './Story.css';

interface Milestone {
  year: string;
  location: string;
  title: string;
  desc: string;
}

const Story: React.FC = () => {
  const { t } = useTranslation();
  const milestones = t('story.milestones', { returnObjects: true }) as Milestone[];

  return (
    <section className="story-section" id="story">
      <div className="story-container">
        
        <div className="story-header">
          <h2 className="story-title">{t('story.title')}</h2>
          <p className="story-subtitle">{t('story.subtitle')}</p>
        </div>

        <div className="timeline">
          {/* Línea Central */}
          <div className="timeline-line"></div>

          {milestones.map((milestone, index) => (
            // Alternamos clase left/right para el zig-zag
            <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
              
              {/* Punto Central (La Estrella) */}
              <div className="timeline-dot">
                <div className="dot-inner"></div>
              </div>

              {/* Tarjeta de Contenido */}
              <div className="timeline-content">
                <div className="timeline-date">
                  <Calendar size={14} />
                  <span>{milestone.year}</span>
                </div>
                <h3>{milestone.title}</h3>
                <div className="timeline-loc">
                  <MapPin size={14} />
                  {milestone.location}
                </div>
                <p>{milestone.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Story;