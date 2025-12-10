import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Linkedin,  Instagram, X as XIcon, } from 'lucide-react';
import './Footer.css';
import logo from '../../assets/Scutinav.png';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const year = new Date().getFullYear();

  // Lógica de Navegación Híbrida
  const handleFooterClick = (target: string, isHash: boolean = false) => {
    if (isHash) {
      // Si es un ancla (#seccion)
      if (location.pathname !== '/') {
        navigate('/'); // Ir al Home primero
        setTimeout(() => {
          const element = document.getElementById(target);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      } else {
        const element = document.getElementById(target);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Si es una ruta (/pagina)
      navigate(target);
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* COLUMNA 1: MARCA */}
        <div className="footer-brand">
          <Link to="/" className="footer-logo" onClick={() => window.scrollTo(0,0)}>
            <img src={logo} alt="Scuti" className="footer-img-logo" />
            <span>Scuti</span>
          </Link>
          <p className="footer-tagline">
            {t('hero.subtitle').substring(0, 60)}...
          </p>
        </div>

        {/* COLUMNA 2: PRODUCTO */}
        <div className="footer-col">
          <h4>{t('footer.cols.product')}</h4>
          <ul>
            <li>
              {/* Ecosistema -> Scroll en Home */}
              <button onClick={() => handleFooterClick('ecosystem', true)} className="footer-link-btn">
                {t('nav.ecosystem')}
              </button>
            </li>
            <li>
              {/* Tecnología -> Página Nueva */}
              <button onClick={() => handleFooterClick('/technology')} className="footer-link-btn">
                {t('nav.technology')}
              </button>
            </li>
            <li>
              {/* Comunidad -> Scroll en Home */}
              <button onClick={() => handleFooterClick('community', true)} className="footer-link-btn">
                {t('nav.community')}
              </button>
            </li>
          </ul>
        </div>

        {/* COLUMNA 3: COMPAÑÍA */}
        <div className="footer-col">
          <h4>{t('footer.cols.company')}</h4>
          <ul>
            <li>
              {/* Historia -> Página About */}
              <button onClick={() => handleFooterClick('/about')} className="footer-link-btn">
                {t('nav.story')}
              </button>
            </li>
            <li>
              {/* Equipo -> Página About */}
              <button onClick={() => handleFooterClick('/about')} className="footer-link-btn">
                {t('nav.team')}
              </button>
            </li>
            <li>
              {/* Propósito -> Scroll en Home */}
              <button onClick={() => handleFooterClick('purpose', true)} className="footer-link-btn">
                {t('nav.purpose')}
              </button>
            </li>
          </ul>
        </div>

        {/* COLUMNA 4: LEGAL (Según tu imagen) */}
        <div className="footer-col">
          <h4>{t('footer.cols.legal')}</h4>
          <ul>
            <li>
              <button onClick={() => handleFooterClick('/privacy')} className="footer-link-btn">
                {t('footer.links.privacy')}
              </button>
            </li>
            <li>
              <button onClick={() => handleFooterClick('/terms')} className="footer-link-btn">
                {t('footer.links.terms')}
              </button>
            </li>
            <li>
              <button onClick={() => handleFooterClick('/contact')} className="footer-link-btn">
                {t('footer.links.contact')}
              </button>
            </li>
          </ul>
        </div>

      </div>

      {/* BARRA INFERIOR */}
      <div className="footer-bottom">
        <p>&copy; {year} Scuti Technologies. {t('footer.rights')}</p>
        <div className="footer-social">
          <a href="https://x.com/Scuti_2025" target="_blank" rel="noreferrer"><XIcon size={20} /></a>
          <a href="https://www.linkedin.com/company/scutimarketplace/" target="_blank" rel="noreferrer"><Linkedin size={20} /></a>
          <a href="https://www.instagram.com/scuti_2025/" target="_blank" rel="noreferrer"><Instagram size={20} /></a>
          <a href="https://www.tiktok.com/@scuti_2025?_r=1&_t=ZS-925ObAEKt3o" target="_blank" rel="noreferrer">  <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="22" 
                  height="22" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
                </svg></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;