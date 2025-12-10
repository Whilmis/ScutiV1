import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Globe, Menu, X } from 'lucide-react';
// Importamos hooks de router
import { useNavigate, useLocation, Link } from 'react-router-dom';
import logo from '../../assets/Scutinav.png'; 
import './Navbar.css';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  // Detectar Scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloquear scroll body en móvil
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  // --- LÓGICA DE NAVEGACIÓN HÍBRIDA ---
  const handleNavClick = (target: string, isHash: boolean = false) => {
    setIsOpen(false); // Cerrar menú móvil

    if (isHash) {
      // CASO A: Es un Ancla (#seccion)
      if (location.pathname !== '/') {
        // Si NO estamos en Home, vamos a Home y pasamos el hash
        navigate('/');
        setTimeout(() => {
          const element = document.getElementById(target);
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Pequeño delay para asegurar que cargó el Home
      } else {
        // Si YA estamos en Home, solo scrolleamos
        const element = document.getElementById(target);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // CASO B: Es una Ruta (/pagina)
      navigate(target);
      window.scrollTo(0, 0);
    }
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isOpen ? 'menu-open' : ''}`}>
        <div className="navbar-container">
          
          {/* LOGO (Siempre lleva al Home) */}
          <Link to="/" className="logo-container" onClick={() => window.scrollTo(0,0)}>
            <img src={logo} alt="Logo scuti" className='img-logo' />
          </Link>

          {/* MENÚ DESKTOP */}
        <ul className="nav-links">
             {/* 1. Scroll: Ecosistema */}
            <li>
              <button onClick={() => handleNavClick('ecosystem', true)} className="nav-link-btn">
                {t('nav.ecosystem')}
              </button>
            </li>
            
            {/* 2. Scroll: Propósito */}
            <li>
              <button onClick={() => handleNavClick('purpose', true)} className="nav-link-btn">
                {t('nav.purpose')}
              </button>
            </li>

         

            {/* 3. Scroll: Comunidad */}
            <li>
              <button onClick={() => handleNavClick('community', true)} className="nav-link-btn">
                {t('nav.community')}
              </button>
            </li>

            {/* SEPARADOR VISUAL (Opcional, un pequeño margen si quieres separarlos más) */}
            <li style={{ width: '1px', height: '20px', background: 'rgba(255,255,255,0.2)', margin: '0 10px' }}></li>

            {/* 4. Página: Innovación (Tech) */}
            <li>
              <button onClick={() => handleNavClick('/technology')} className="nav-link-btn external-link">
                {t('nav.innovation')}
              </button>
            </li>

            {/* 5. Página: Legado (About) */}
            <li>
              <button onClick={() => handleNavClick('/about')} className="nav-link-btn external-link">
                {t('nav.legacy')}
              </button>
            </li>

          </ul>

          {/* ACCIONES */}
          <div className="nav-actions">
            <button onClick={toggleLanguage} className="lang-btn desktop-only">
              <Globe size={18} />
              <span>{i18n.language.toUpperCase()}</span>
            </button>
            
            <button onClick={() => handleNavClick('waitlist', true)} className="btn-waitlist desktop-only">
              {t('nav.waitlist')}
            </button>

            {/* Hamburguesa */}
            <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>     

      {/* MENÚ MÓVIL */}
      <div className={`mobile-menu ${isOpen ? 'active' : ''}`}>
        <div className="mobile-links">
          <button onClick={() => handleNavClick('transformation', true)}>{t('nav.purpose')}</button>
          <button onClick={() => handleNavClick('ecosystem', true)}>{t('nav.ecosystem')}</button>
          <button onClick={() => handleNavClick('/technology')}>{t('nav.innovation')}</button>
          <button onClick={() => handleNavClick('/about')}>{t('nav.legacy')}</button>
          <button onClick={() => handleNavClick('community', true)}>{t('nav.community')}</button>
        </div>

        <div className="mobile-footer">
          <button onClick={toggleLanguage} className="mobile-lang-btn">
            <Globe size={20} /> 
            <span>{i18n.language === 'en' ? 'English' : 'Español'}</span>
          </button>
          
          <button className="mobile-cta" onClick={() => handleNavClick('waitlist', true)}>
            {t('nav.waitlist')}
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;