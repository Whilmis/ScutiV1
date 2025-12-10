import React from 'react';
import { useTranslation } from 'react-i18next';
import LegalLayout from '../components/layout/LegalLayout';

// 1. Definimos la interfaz (puede llamarse igual, no choca)
interface LegalSection {
  heading: string;
  body: string;
}

const PrivacyPage: React.FC = () => {
  const { t } = useTranslation();
  
  // 2. Usamos el tipo correcto
  const sections = t('legal_pages.privacy.sections', { returnObjects: true }) as LegalSection[];

  return (
    <LegalLayout title={t('legal_pages.privacy.title')}>
      {sections.map((section, index) => (
        <div key={index} className="legal-section">
          <h2>{section.heading}</h2>
          <p>{section.body}</p>
        </div>
      ))}
    </LegalLayout>
  );
};

export default PrivacyPage;