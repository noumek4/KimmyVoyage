import React, { useState, useEffect } from 'react';
import { motion, animate } from 'framer-motion';
import { CheckCircle2, Award, Users2, Rocket } from 'lucide-react';
import './NotreAgence.css';

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
            <h1 className="modern-h1">Des professionnels du voyage <span className="gradient-text">à votre service</span></h1>
            <p>Bienvenue chez KIMYA Voyages, votre compagnon de voyage dédié à vous offrir des expériences inoubliables à travers le monde.</p>
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
            <img src="/assets/images/assurance.jpg" alt="Travelers" />
            <div className="experience-badge">
              <span className="number">Expertise</span>
              <span className="text">Dédiée</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="story__content"
          >
            <h2>Voyagez vers l'Émotion</h2>
            <p>Chez KIMYA Voyages, nous croyons que le voyage est bien plus qu’une simple destination – c’est une expérience qui change votre vie. Nous nous engageons à vous fournir des voyages sur mesure, des services de qualité et une attention personnalisée à chaque étape de votre aventure.</p>
            
            <div className="features-list">
              <div className="feature-item-modern">
                <CheckCircle2 className="icon-blue" />
                <div>
                  <h4>Authenticité</h4>
                  <p>Nous valorisons les expériences authentiques qui permettent de découvrir la culture et les traditions locales.</p>
                </div>
              </div>
              <div className="feature-item-modern">
                <CheckCircle2 className="icon-orange" />
                <div>
                  <h4>Flexibilité</h4>
                  <p>Nous concevons des itinéraires personnalisés qui répondent à vos besoins, préférences et budget.</p>
                </div>
              </div>
              <div className="feature-item-modern">
                <CheckCircle2 className="icon-blue" />
                <div>
                  <h4>Personnalisation</h4>
                  <p>En écoutant vos aspirations, nous créons des moments inoubliables qui captent votre essence.</p>
                </div>
              </div>
              <div className="feature-item-modern">
                <CheckCircle2 className="icon-orange" />
                <div>
                  <h4>Excellence</h4>
                  <p>La satisfaction du client est au cœur de toutes nos activités avec un soutien personnalisé permanent.</p>
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
              <h3><Counter value="99" suffix="%" /></h3>
              <p>Satisfaction Client</p>
            </div>
            <div className="stat-card-modern">
              <Users2 />
              <h3><Counter value="5" suffix="k+" /></h3>
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
      <section className="institutional-partners-modern">
        <div className="container">
          <div className="text-center mb-40">
            <span className="hero__tag">Certifications & Standards</span>
            <h2 className="modern-h2">Nos Garanties <span className="gradient-text">Professionnelles</span></h2>
          </div>
          <div className="partners__grid-small-modern">
            <div className="partner-logo-small">
              <img src="/assets/others/IATA_idhsFWZqbC_0.png" alt="IATA" />
            </div>
            <div className="partner-logo-small">
              <img src="/assets/others/Amadeus_IT_Group-Logo.wine.svg" alt="Amadeus" />
            </div>
            <div className="partner-logo-small">
              <img src="/assets/others/galileo-travelport-seeklogo.png" alt="Galileo" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotreAgence;
