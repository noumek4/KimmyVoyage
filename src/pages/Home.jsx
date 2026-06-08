import React, { useState, useEffect } from 'react';
import { motion, useSpring, useTransform, animate } from 'framer-motion';
import Hero from '../components/Hero';
import Services from '../components/Services';
import './Home.css';

const Counter = ({ value, suffix = "" }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const targetValue = parseInt(value);

  useEffect(() => {
    const controls = animate(0, targetValue, {
      duration: 2,
      onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
    });
    return () => controls.stop();
  }, [targetValue]);

  return <span>{displayValue}{suffix}</span>;
};

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
            <h2 className="modern-h2">Des professionnels du voyage <span className="gradient-text">engagés</span></h2>
            <p>Forts de notre expertise et de notre engagement envers l’authenticité, nous vous offrons bien plus que de simples voyages. Avec une attention méticuleuse aux détails, nous façonnons des expériences sur mesure, vous invitant à découvrir les trésors cachés du monde.</p>
            <div className="about__features-modern">
              <div className="feature-modern">
                <h3><Counter value="99" suffix="%" /></h3>
                <p>Satisfaction</p>
              </div>
              <div className="feature-modern">
                <h3><Counter value="100" suffix="%" /></h3>
                <p>Disponibilité</p>
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
            <img src="/assets/images/travel.jpg" alt="Road trip" />
          </motion.div>
        </div>
      </section>

      <section className="features-grid-modern">
        <div className="container">
          <div className="grid-3">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="feature-card-detailed"
            >
              <h3>Voyage et tourisme</h3>
              <p>Explorez le monde en toute sérénité avec Kimya Voyages. De la réservation de votre billet d’avion à l’organisation de votre hébergement, en passant par la location de véhicules et les transferts, nous prenons en charge chaque aspect de votre voyage. Nos circuits touristiques soigneusement conçus vous permettent de découvrir les joyaux cachés de chaque destination, vous offrant des expériences authentiques et enrichissantes.
</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="feature-card-detailed"
            >
              <h3>Formalités & documents</h3>
              <p>Nous comprenons que la préparation d’un voyage peut être complexe. C’est pourquoi nous vous accompagnons à chaque étape du processus, en vous aidant à obtenir tous les documents nécessaires. Des attestations de réservation à l’assurance voyage, en passant par les procédures de visa et les informations essentielles sur votre destination, nous nous assurons que vous êtes prêt pour une expérience de voyage sans stress.

            .</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="feature-card-detailed"
            >
              <h3>Assistance garantie</h3>
              <p>Votre satisfaction est notre priorité absolue. Avec KIMYA Voyages, vous bénéficiez d’une assistance complète avant, pendant et après votre voyage. Que ce soit pour répondre à vos questions, gérer des changements de dernière minute ou vous aider en cas d’imprévu, notre équipe est toujours à votre disposition. Voyagez en toute confiance, sachant que vous êtes entre de bonnes mains avec KIMYA Voyages.
.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <Services />

      <section className="partners-modern">
        <div className="container">
          <div className="text-center mb-60">
            <span className="hero__tag">Ils nous font confiance</span>
            <h2 className="modern-h2">Nos Partenaires <span className="gradient-text">Aériens</span></h2>
          </div>
          <div className="partners__grid-modern">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="partner-logo">
              <img src="/assets/logos/Air Cote.png" alt="Air Côte d'Ivoire" />
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }} viewport={{ once: true }} className="partner-logo">
              <img src="/assets/logos/Air Senegal.png" alt="Air Sénégal" />
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.2 }} viewport={{ once: true }} className="partner-logo">
              <img src="/assets/logos/Air_France-Logo.wine.svg" alt="Air France" />
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }} viewport={{ once: true }} className="partner-logo">
              <img src="/assets/logos/Brussels_Airlines-Logo.wine.svg" alt="Brussels Airlines" />
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }} viewport={{ once: true }} className="partner-logo">
              <img src="/assets/logos/Emirates_(airline)-Logo.wine.svg" alt="Emirates" />
            </motion.div>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }} viewport={{ once: true }} className="partner-logo">
              <img src="/assets/logos/Turkish_Airlines-Logo.wine.svg" alt="Turkish Airlines" />
            </motion.div>
          </div>
        </div>
      </section>

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
