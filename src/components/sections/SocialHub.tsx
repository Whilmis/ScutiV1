import React from 'react';
import { useTranslation } from 'react-i18next';
// Quitamos Facebook, mantenemos los demás
import { X as XIcon, Linkedin, Instagram, ArrowUpRight } from 'lucide-react';
import './SocialHub.css';

const SocialHub: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="social-section" id="community">
      <div className="social-container">
        
        <div className="social-header">
          <h2 className="cta-title ">{t('social.title')}</h2>
          <p className="social-subtitle">{t('social.subtitle')}</p>
        </div>

        <div className="orbit-system">
          <div className="orbit-core">
            <div className="core-glow"></div>
          </div>

          <div className="social-grid">
            
            {/* 1. TIKTOK (Reemplaza a Facebook) */}
            {/* Nota: Usamos un SVG personalizado porque Lucide no tiene TikTok */}
            <a href="https://www.tiktok.com/@scuti_2025?_r=1&_t=ZS-925ObAEKt3o" target="_blank" rel="noreferrer" className="social-card tiktok">
              <div className="social-icon-box">
                {/* SVG de TikTok estilo Lucide */}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="32" 
                  height="32" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg>
              </div>
              <div className="social-info">
                <h3>{t('social.tiktok.label')}</h3>
                <p>{t('social.tiktok.desc')}</p>
              </div>
              <ArrowUpRight className="arrow-icon" size={20} />
            </a>

            {/* 2. X */}
            <a href="https://x.com/Scuti_2025" target="_blank" rel="noreferrer" className="social-card x-social">
              <div className="social-icon-box">
                <XIcon size={32} />
              </div>
              <div className="social-info">
                <h3>{t('social.x.label')}</h3>
                <p>{t('social.x.desc')}</p>
              </div>
              <ArrowUpRight className="arrow-icon" size={20} />
            </a>

            {/* 3. INSTAGRAM */}
            <a href="https://www.instagram.com/scuti_2025?igsh=MWRtN2s4eDQ4MGhwZw%3D%3D" target="_blank" rel="noreferrer" className="social-card instagram">
              <div className="social-icon-box">
                <Instagram size={32} />
              </div>
              <div className="social-info">
                <h3>{t('social.instagram.label')}</h3>
                <p>{t('social.instagram.desc')}</p>
              </div>
              <ArrowUpRight className="arrow-icon" size={20} />
            </a>

            {/* 4. LINKEDIN */}
            <a href="https://www.linkedin.com/company/scutimarketplace/" target="_blank" rel="noreferrer" className="social-card linkedin">
              <div className="social-icon-box">
                <Linkedin size={32} />
              </div>
              <div className="social-info">
                <h3>{t('social.linkedin.label')}</h3>
                <p>{t('social.linkedin.desc')}</p>
              </div>
              <ArrowUpRight className="arrow-icon" size={20} />
            </a>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialHub;