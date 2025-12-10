import React from 'react';
import TechHero from '../components/sections/TechHero'; // Nuevo Hero
import Technology from '../components/sections/Technology'; // Sección existente
import CinematicManifesto from '../components/sections/CinematicManifesto'; // Nuevo Manifiesto

const TechnologyPage: React.FC = () => {
  return (
    <>
      <TechHero />
      <Technology />
      <CinematicManifesto />
    </>
  );
};

export default TechnologyPage;