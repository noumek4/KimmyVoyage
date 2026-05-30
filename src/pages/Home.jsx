import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Services from '../components/Services';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page-modern">
      <Hero />
      
      <section className="about-modern">
        <div className="container about__wrapper-modern">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="about__content-modern"
          >
            <span className="hero__tag">Qui sommes-nous</span>
            <h2 className="modern-h2">Votre Partenaire pour des <span className="gradient-text">Voyages Mémorables</span></h2>
            <p>KIMYA VOYAGES est une agence engagée à transformer vos rêves de voyage en réalité. Nous combinons expertise locale et standards internationaux pour vous offrir le meilleur.</p>
            <div className="about__features-modern">
              <div className="feature-modern">
                <h3>99%</h3>
                <p>Satisfaction</p>
              </div>
              <div className="feature-modern">
                <h3>24/7</h3>
                <p>Assistance</p>
              </div>
            </div>
            <a href="/notre-agence" className="btn btn-primary">Découvrir notre histoire</a>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="about__image-modern"
          >
            <img src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8df6?q=80&w=1200&auto=format&fit=crop" alt="Road trip" />
          </motion.div>
        </div>
      </section>

      <Services />

      <section className="cta-modern">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="cta__box-modern"
          >
            <h2>Prêt pour l'aventure ?</h2>
            <p>Rejoignez des milliers de voyageurs qui nous font confiance pour leurs séjours les plus précieux.</p>
            <a href="/contact" className="btn btn-accent">Planifier mon voyage</a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
