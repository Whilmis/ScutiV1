import React from 'react';
import { useTranslation } from 'react-i18next';
import { Brain, Wallet, Activity } from 'lucide-react';
import './Ecosystem.css';

// 1. DEFINIMOS LA FORMA DE LOS DATOS (INTERFACE)
// Esto le dice a TypeScript qué esperar del JSON
interface EcosystemCard {
  title: string;
  desc: string;
  tag: string;
}

const Ecosystem: React.FC = () => {
  const { t } = useTranslation();
  
  // Array de iconos para mapear con las tarjetas
  // Nota: Agregamos 'key' en el map de abajo, no aquí.
  const icons = [<Brain size={40} />, <Wallet size={40} />, <Activity size={40} />];
  
  // 2. CORRECCIÓN DEL ERROR
  // En lugar de 'as any[]', usamos 'as EcosystemCard[]'
  const cards = t('ecosystem.cards', { returnObjects: true }) as EcosystemCard[];

  return (
    <section className="eco-section" id="ecosystem">
      <div className="eco-container">
        
        {/* Cabecera */}
        <div className="eco-header">
          <h2 className="eco-title text-gradient">{t('ecosystem.title')}</h2>
          <p className="eco-subtitle">{t('ecosystem.subtitle')}</p>
        </div>

        {/* Grid de Tarjetas */}
        <div className="eco-grid">
          {cards.map((card, index) => (
            <div className="eco-card" key={index}>
              <div className="eco-card-content">
                <div className="eco-icon-box">
                  {/* Renderizamos el icono correspondiente al índice */}
                  {icons[index]}
                </div>
                <span className="eco-tag">{card.tag}</span>
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
              </div>
              {/* Capa decorativa para el hover */}
              <div className="eco-glow"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Ecosystem;