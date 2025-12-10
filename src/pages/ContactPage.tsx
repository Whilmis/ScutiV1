import React from 'react';
import LegalLayout from '../components/layout/LegalLayout';

const ContactPage: React.FC = () => {
  return (
    <LegalLayout title="Contacto y Ayuda">
      <div className="legal-section">
        <p>Estamos aquí para ayudarte. Si tienes dudas sobre el marketplace, problemas técnicos o preguntas sobre la beta, contáctanos:</p>
        
        <div style={{ marginTop: '2rem', padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '16px' }}>
          <h3 style={{ color: 'var(--scuti-teal)', marginBottom: '0.5rem' }}>Email de Soporte</h3>
          <a href="mailto:support@scuti.ai" style={{ color: 'white', fontSize: '1.2rem', textDecoration: 'underline' }}>
            support@scuti.ai
          </a>
        </div>
      </div>
    </LegalLayout>
  );
};

export default ContactPage;