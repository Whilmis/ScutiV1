import React from 'react';
import { useTranslation } from 'react-i18next';
import { Cpu, Database, ShieldCheck } from 'lucide-react';
import './Technology.css';

interface TechItem {
  title: string;
  desc: string;
}

const Technology: React.FC = () => {
  const { t } = useTranslation();
  const items = t('technology.items', { returnObjects: true }) as TechItem[];
  const icons = [<Cpu size={32} />, <Database size={32} />, <ShieldCheck size={32} />];

  return (
    <section className="tech-section" id="technology">
      <div className="tech-container">
        
        {/* COLUMNA IZQUIERDA: Textos */}
        <div className="tech-info">
          <h2 className="tech-title text-gradient">{t('technology.title')}</h2>
          <p className="tech-subtitle">{t('technology.subtitle')}</p>
          
          <div className="tech-list">
            {items.map((item, index) => (
              <div className="tech-item" key={index}>
                <div className="tech-icon-circle">
                  {icons[index]}
                </div>
                <div className="tech-text">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* COLUMNA DERECHA: Visualización Abstracta */}
        <div className="tech-visual">
          <div className="visual-card-glass">
            {/* Elementos decorativos animados */}
            <div className="pulse-circle core"></div>
            <div className="pulse-circle ring-1"></div>
            <div className="pulse-circle ring-2"></div>
            
            <div className="floating-badge ai">AI</div>
            <div className="floating-badge chain">Blockchain</div>
            
            <div className="code-snippet">
              <code>
                <span className="code-purple">const</span> scuti = <span className="code-blue">new</span> <span className="code-yellow">Mentor</span>();<br/>
                scuti.<span className="code-blue">init</span>(User.<span className="code-purple">truth</span>);<br/>
                <span className="code-green">// System Secure</span>
              </code>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Technology;