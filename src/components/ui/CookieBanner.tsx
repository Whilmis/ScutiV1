import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Cookie } from 'lucide-react';
import './CookieBanner.css';

const CookieBanner: React.FC = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verificamos si ya existe la preferencia guardada
    const consent = localStorage.getItem('scuti_cookie_consent');
    if (!consent) {
      // Si no existe, mostramos el banner con un pequeño retraso elegante
      setTimeout(() => setIsVisible(true), 2000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('scuti_cookie_consent', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('scuti_cookie_consent', 'false');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-banner">
      <div className="cookie-content">
        <div className="cookie-icon">
          <Cookie size={24} />
        </div>
        <p>{t('cookies.text')}</p>
      </div>
      
      <div className="cookie-actions">
        <button onClick={handleDecline} className="btn-decline">
          {t('cookies.decline')}
        </button>
        <button onClick={handleAccept} className="btn-accept">
          {t('cookies.accept')}
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;