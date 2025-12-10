import React from 'react';
import Hero from '../components/sections/Hero';
import Transformation from '../components/sections/Transformation';
import Purpose from '../components/sections/Purpose'; // Versión limpia
import Ecosystem from '../components/sections/Ecosystem';
import SocialHub from '../components/sections/SocialHub';
import EarlyAccess from '../components/sections/EarlyAccess';

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
        <Ecosystem />
      <Purpose />
    <Transformation />
      <EarlyAccess />
       <SocialHub />
    </>
  );
};

export default HomePage;