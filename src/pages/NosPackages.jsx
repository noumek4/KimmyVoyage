import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Star, ArrowRight } from 'lucide-react';
import './NosPackages.css';

const destinations = [
  {
    id: 1,
    title: 'Dubaï Éclatant',
    location: 'Émirats Arabes Unis',
    duration: '7 Jours / 6 Nuits',
    price: '1 200 000 FCFA',
    rating: '4.9',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=800&auto=format&fit=crop',
    category: 'Luxe'
  },
  {
    id: 2,
    title: 'Cappadoce Magique',
    location: 'Turquie',
    duration: '8 Jours / 7 Nuits',
    price: '950 000 FCFA',
    rating: '4.8',
    image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?q=80&w=800&auto=format&fit=crop',
    category: 'Aventure'
  },
  {
    id: 3,
    title: 'Paris Romantique',
    location: 'France',
    duration: '6 Jours / 5 Nuits',
    price: '1 500 000 FCFA',
    rating: '5.0',
    image: 'https://images.unsplash.com/photo-1502602898657-3e9172f29f78?q=80&w=800&auto=format&fit=crop',
    category: 'Détente'
  },
  {
    id: 4,
    title: 'Bali Spirituelle',
    location: 'Indonésie',
    duration: '10 Jours / 9 Nuits',
    price: '1 800 000 FCFA',
    rating: '4.9',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop',
    category: 'Culture'
  },
  {
    id: 5,
    title: 'Santorin Azur',
    location: 'Grèce',
    duration: '7 Jours / 6 Nuits',
    price: '1 350 000 FCFA',
    rating: '4.9',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=800&auto=format&fit=crop',
    category: 'Romance'
  },
  {
    id: 6,
    title: 'Tokyo Futuriste',
    location: 'Japon',
    duration: '12 Jours / 11 Nuits',
    price: '2 100 000 FCFA',
    rating: '4.8',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=800&auto=format&fit=crop',
    category: 'Découverte'
  },
  {
    id: 7,
    title: 'New York City',
    location: 'USA',
    duration: '8 Jours / 7 Nuits',
    price: '1 950 000 FCFA',
    rating: '4.7',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=800&auto=format&fit=crop',
    category: 'Urbain'
  },
  {
    id: 8,
    title: 'Le Cap Safari',
    location: 'Afrique du Sud',
    duration: '9 Jours / 8 Nuits',
    price: '1 100 000 FCFA',
    rating: '4.9',
    image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=800&auto=format&fit=crop',
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
                className={`dest-card-modern ${index % 5 === 0 ? 'large' : ''}`}
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
                    <a href="https://wa.me/2250787141312" className="explore-link">
                      Réserver <ArrowRight size={18} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NosPackages;
