import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Users2, Rocket } from 'lucide-react';
import './NotreAgence.css';

const NotreAgence = () => {
  return (
    <div className="agency-page-modern">
      <section className="agency-hero">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="agency-hero__content"
          >
            <span className="hero__tag">À propos de nous</span>
            <h1 className="modern-h1">Redéfinir le <span className="gradient-text">Voyage Moderne</span></h1>
            <p>Plus qu'une agence, nous sommes vos architectes de souvenirs.</p>
          </motion.div>
        </div>
      </section>

      <section className="agency-story">
        <div className="container grid-2">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="story__image"
          >
            <img src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=1200&auto=format&fit=crop" alt="Travelers" />
            <div className="experience-badge">
              <span className="number">10+</span>
              <span className="text">Ans d'Expertise</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="story__content"
          >
            <h2>Notre Engagement</h2>
            <p>Forts de notre expertise et de notre engagement envers l’authenticité, nous vous offrons bien plus que de simples voyages... nous façonnons des expériences sur mesure.</p>
            
            <div className="features-list">
              <div className="feature-item-modern">
                <CheckCircle2 className="icon-blue" />
                <div>
                  <h4>Authenticité Garantie</h4>
                  <p>Découvrez la culture locale au-delà des sentiers battus.</p>
                </div>
              </div>
              <div className="feature-item-modern">
                <CheckCircle2 className="icon-orange" />
                <div>
                  <h4>Flexibilité Totale</h4>
                  <p>Vos plans changent ? Nous nous adaptons à votre rythme.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="agency-stats">
        <div className="container">
          <div className="stats-grid-modern">
            <div className="stat-card-modern">
              <Award />
              <h3>99%</h3>
              <p>Satisfaction Client</p>
            </div>
            <div className="stat-card-modern">
              <Users2 />
              <h3>5k+</h3>
              <p>Voyageurs Heureux</p>
            </div>
            <div className="stat-card-modern">
              <Rocket />
              <h3>24/7</h3>
              <p>Assistance Dédiée</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotreAgence;
