import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { Send } from 'lucide-react';

const logoKimya = '/assets/images/Logo-Kimya-Voyage.png';

const Footer = () => {
  return (
    <footer className="footer-modern">
      <div className="container">
        <div className="footer__grid-modern">
          <div className="footer__brand-modern">
            <img 
              src={logoKimya} 
              alt="Kimya Voyages" 
              className="footer__logo-modern" 
              onError={(e) => {
                e.target.src = 'https://kimyavoyages.com/wp-content/uploads/2024/03/Logo-Kimya-Voyages.png';
              }}
            />
            <p>Façonner des expériences de voyage uniques et mémorables à travers le monde.</p>
            <div className="footer__socials-modern">
              <a href="#" className="social-link-text">Facebook</a>
              <a href="#" className="social-link-text">Instagram</a>
              <a href="#" className="social-link-text">Twitter</a>
              <a href="#" className="social-link-text">Youtube</a>
            </div>
          </div>

          <div className="footer__nav-modern">
            <h4>Explorer</h4>
            <ul>
              <li><Link to="/">Accueil</Link></li>
              <li><Link to="/notre-agence">L'Agence</Link></li>
              <li><Link to="/nos-packages">Destinations</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer__newsletter-modern">
            <h4>Newsletter</h4>
            <p>Recevez nos meilleures offres directement dans votre boîte mail.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Votre email" />
              <button className="btn-send"><Send size={20} /></button>
            </div>
          </div>
        </div>

        <div className="footer__bottom-modern">
          <p>&copy; {new Date().getFullYear()} Kimya Voyages. Fait avec passion pour les voyageurs.</p>
          <div className="footer__legal">
            <a href="#">Politique de confidentialité</a>
            <a href="#">Conditions d'utilisation</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
