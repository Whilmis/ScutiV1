import React from 'react';
// import PageHero from '../components/layout/PageHero'; // <-- Ya no lo usamos aquí
import LegacyHero from '../components/sections/LegacyHero'; // <-- Nuevo
import Story from '../components/sections/Story';
import Team from '../components/sections/Team';

const AboutPage: React.FC = () => {
  return (
    <>
      {/* Nuevo Hero Específico */}
      <LegacyHero />
      
      {/* Resto del contenido */}
      <Story />
      <Team />
    </>
  );
};

export default AboutPage;