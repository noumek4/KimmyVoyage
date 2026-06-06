import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Clock, Star, ArrowRight, MessageSquare } from 'lucide-react';
import './NosPackages.css';

const destinations = [
  {
    id: 1,
    title: 'Dubaï Éclatant',
    location: 'Émirats Arabes Unis',
    duration: '7 Jours / 6 Nuits',
    price: '1 200 000 FCFA',
    rating: '4.9',
    image: '../../assets/images/Dubaï.jpg',
    category: 'Luxe'
  },
  {
    id: 2,
    title: 'Rome Antique',
    location: 'Italie',
    duration: '8 Jours / 7 Nuits',
    price: '950 000 FCFA',
    rating: '4.8',
    image: '../../assets/images/4.jpg',
    category: 'Aventure'
  },
  {
    id: 3,
    title: 'Paris Romantique',
    location: 'France',
    duration: '6 Jours / 5 Nuits',
    price: '1 500 000 FCFA',
    rating: '5.0',
    image: '../../assets/images/8.jpg',
    category: 'Détente'
  },
  {
    id: 4,
    title: 'Ouagadougou Culturel',
    location: 'Burkina Faso',
    duration: '10 Jours / 9 Nuits',
    price: '1 800 000 FCFA',
    rating: '4.9',
    image: '../../assets/images/7.jpg',
    category: 'Culture'
  },
  {
    id: 5,
    title: 'London Urbain',
    location: 'Angleterre',
    duration: '7 Jours / 6 Nuits',
    price: '1 350 000 FCFA',
    rating: '4.9',
    image: '../../assets/images/3.jpg',
    category: 'Romance'
  },
  {
    id: 6,
    title: 'Tokyo Futuriste',
    location: 'Japon',
    duration: '12 Jours / 11 Nuits',
    price: '2 100 000 FCFA',
    rating: '4.8',
    image: '../../assets/images/9.jpg',
    category: 'Découverte'
  },
  {
    id: 7,
    title: 'Frankfurt Moderne',
    location: 'Allemagne',
    duration: '8 Jours / 7 Nuits',
    price: '1 950 000 FCFA',
    rating: '4.7',
    image: '../../assets/images/slide3.jpg',
    category: 'Urbain'
  },
  {
    id: 8,
    title: 'Le Cap Safari',
    location: 'Afrique du Sud',
    duration: '9 Jours / 8 Nuits',
    price: '1 100 000 FCFA',
    rating: '4.9',
    image: '../../assets/images/2.jpg',
    category: 'Safari'
  }
];

const NosPackages = () => {
  return (
    <div className="destinations-page-modern">
      <section className="destinations-hero">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="hero__tag">Explorez le monde</span>
            <h1 className="modern-h1">Nos Destinations <span className="gradient-text">Favorites</span></h1>
          </motion.div>
        </div>
      </section>

      <section className="destinations-grid-section">
        <div className="container">
          <div className="destinations-masonry">
            {destinations.map((dest, index) => (
              <motion.div 
                key={dest.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`dest-card-modern ${index === 0 ? '' : (index % 5 === 0 ? 'large' : '')}`}
              >
                <div className="dest-card__image">
                  <img src={dest.image} alt={dest.title} />
                  <div className="dest-card__category">{dest.category}</div>
                  <div className="dest-card__price-modern">{dest.price}</div>
                </div>
                <div className="dest-card__content-modern">
                  <div className="dest-card__meta-modern">
                    <span><MapPin size={14} /> {dest.location}</span>
                    <span><Clock size={14} /> {dest.duration}</span>
                  </div>
                  <h3>{dest.title}</h3>
                  <div className="dest-card__footer-modern">
                    <div className="rating">
                      <Star size={16} fill="var(--accent-orange)" color="var(--accent-orange)" />
                      <span>{dest.rating}</span>
                    </div>
                    <Link to="/contact" className="explore-link">
                      Réserver <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="whatsapp-banner-modern">
        <div className="container">
          <div className="whatsapp-box-modern">
            <MessageSquare size={48} />
            <div>
              <h2>Des questions sur nos offres ?</h2>
              <p>Nos conseillers sont disponibles sur WhatsApp pour vous guider dans votre choix.</p>
            </div>
            <a href="https://wa.me/2250787141312" className="btn btn-accent">Discuter maintenant</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NosPackages;
