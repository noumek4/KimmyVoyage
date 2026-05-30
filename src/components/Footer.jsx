import React from 'react';
import './Footer.css';
import { Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer-modern">
      <div className="container">
        <div className="footer__grid-modern">
          <div className="footer__brand-modern">
            <img 
              src="/assets/images/Logo-Kimya-Voyages.png" 
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
              <li><a href="/">Accueil</a></li>
              <li><a href="/notre-agence">L'Agence</a></li>
              <li><a href="/nos-packages">Destinations</a></li>
              <li><a href="/contact">Contact</a></li>
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
