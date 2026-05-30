import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageSquare, Sun, Moon, Share2, Mail, MapPin } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import logoKimya from '../../assets/images/Logo-Kimya-Voyage.png';
import './Header.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar - Following original site */}
      <div className="header__topbar">
        <div className="container topbar__wrapper">
          <div className="topbar__contact">
            <a href="tel:+2252721794804"><Phone size={14} /> +225 27 21 79 48 04</a>
            <a href="tel:+2250787141312"><Phone size={14} /> +225 07 87 14 13 12</a>
            <a href="mailto:info@kimyavoyages.com"><Mail size={14} /> info@kimyavoyages.com</a>
          </div>
          <div className="topbar__socials">
            <a href="#"><Share2 size={14} /></a>
            <a href="#"><Share2 size={14} /></a>
            <a href="#"><Share2 size={14} /></a>
            <button onClick={toggleTheme} className="theme-toggle-mini">
              {isDarkMode ? <Sun size={14} /> : <Moon size={14} />}
            </button>
          </div>
        </div>
      </div>

      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container header__wrapper">
          <Link to="/" className="header__logo">
            <img 
              src={logoKimya} 
              alt="Kimya Voyages" 
              onError={(e) => {
                e.target.src = 'https://kimyavoyages.com/wp-content/uploads/2024/03/Logo-Kimya-Voyages.png';
              }}
            />
          </Link>

          <nav className="header__nav">
            <ul>
              <li><Link to="/" className={location.pathname === '/' ? 'active' : ''}>Accueil</Link></li>
              <li><Link to="/notre-agence" className={location.pathname === '/notre-agence' ? 'active' : ''}>Notre agence</Link></li>
              <li><Link to="/nos-packages" className={location.pathname === '/nos-packages' ? 'active' : ''}>Nos Packages</Link></li>
              <li><Link to="/creez-votre-voyage" className={location.pathname === '/creez-votre-voyage' ? 'active' : ''}>Créez votre voyage</Link></li>
              <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Nous contacter</Link></li>
            </ul>
          </nav>

          <div className="header__actions">
            <a href="https://wa.me/2250787141312" className="btn btn-accent btn-nav">
              Réserver <MessageSquare size={16} />
            </a>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
