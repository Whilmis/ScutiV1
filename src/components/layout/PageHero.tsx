import React from 'react';
import './PageHero.css';

interface PageHeroProps {
  title: string;
  subtitle: string;
}

const PageHero: React.FC<PageHeroProps> = ({ title, subtitle }) => {
  return (
    <section className="page-hero">
      <div className="page-hero-container">
        <h1 className="page-hero-title">{title}</h1>
        <p className="page-hero-subtitle">{subtitle}</p>
      </div>
      <div className="page-hero-glow"></div>
    </section>
  );
};

export default PageHero;