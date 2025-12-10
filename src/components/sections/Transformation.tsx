/* src/components/sections/Transformation.tsx */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Bot, Sparkles } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Transformation.css';

const Transformation: React.FC = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollReveal(0.1);
  const oldWayItems = t('transformation.old_way.items', { returnObjects: true }) as string[];
  const newWayItems = t('transformation.new_way.items', { returnObjects: true }) as string[];
  const animClass = isVisible ? 'reveal-visible' : '';

  return (
    <section className="trans-section" id="transformation" ref={ref}>
      <div className="trans-container">
        
        <div className={`trans-header reveal-up ${animClass}`}>
          <h2 className="trans-title">{t('transformation.title')}</h2>
          <p className="trans-subtitle">{t('transformation.subtitle')}</p>
        </div>

        <div className={`trans-tablet-wrapper reveal-up delay-200 ${animClass}`}>
          <div className="trans-screen">
            
            {/* IZQUIERDA */}
            <div className="trans-side trans-old">
              <div className="icon-wrapper gray"> <Bot size={40} /> </div>
              <h3>{t('transformation.old_way.title')}</h3>
              <ul>
                {oldWayItems.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            </div>

            {/* DIVISOR */}
            <div className="trans-divider">
              <div className="trans-vs-badge">VS</div>
            </div>

            {/* DERECHA */}
            <div className="trans-side trans-new">
              <div className="icon-wrapper teal"> <Sparkles size={40} /> </div>
              <h3 className="text-gradient">{t('transformation.new_way.title')}</h3>
              <ul>
                {newWayItems.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Transformation;