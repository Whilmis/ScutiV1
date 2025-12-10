import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import '../../pages/Legal.css'; // Importamos el CSS que creamos

interface LegalLayoutProps {
  title: string;
  children: React.ReactNode;
}

const LegalLayout: React.FC<LegalLayoutProps> = ({ title, children }) => {
  const { t } = useTranslation();

  return (
    <div className="legal-page">
      <div className="legal-container">
        
        {/* Botón Volver */}
        <Link to="/" className="back-link">
          <ArrowLeft size={20} />
          {t('legal_pages.back_home')}
        </Link>

        {/* Encabezado */}
        <header className="legal-header">
          <h1 className="legal-title">{title}</h1>
          <p className="last-updated">{t('legal_pages.last_updated')}</p>
        </header>

        {/* Contenido Dinámico */}
        <div className="legal-content">
          {children}
        </div>

      </div>
    </div>
  );
};

export default LegalLayout;