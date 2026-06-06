import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import './Hero.css';

const slides = [
  {
    image: './assets/images/slide1.jpg',
    title: 'Chaque voyage mérite une bonne organisation',
    subtitle: 'Des professionnels du voyage engagés pour transformer vos rêves en réalité.'
  },
  {
    image: './assets/images/slide2.jpg',
    title: 'Le luxe au cœur du voyage',
    subtitle: 'Séjours prestigieux et services personnalisés pour les voyageurs exigeants.'
  },
  {
    image: './assets/images/slide3.jpg',
    title: 'Explorez des horizons sans fin',
    subtitle: 'Des destinations paradisiaques vous attendent pour des moments inoubliables.'
  },
  {
    image: './assets/images/slide4.jpg',
    title: 'Vivez l\'extraordinaire',
    subtitle: 'Découvrez les trésors cachés du monde avec une attention méticuleuse aux détails.'
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero-modern">
      <AnimatePresence mode='wait'>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="hero__bg"
          style={{ backgroundImage: `url(${slides[current].image})` }}
        >
          <div className="hero__overlay-modern"></div>
        </motion.div>
      </AnimatePresence>

      <div className="container hero__container-modern">
        <motion.div
          key={current + '-content'}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero__content-modern"
        >
          <span className="hero__tag">Kimya Voyages • Excellence</span>
          <h1>{slides[current].title}</h1>
          <p>{slides[current].subtitle}</p>
          <div className="hero__btns-modern">
            <a href="/nos-packages" className="btn btn-primary">Voir nos offres</a>
            <a href="/contact" className="btn btn-outline-white-modern">Nous contacter</a>
          </div>
          <div className="hero__signature">
            <span>{String(current + 1).padStart(2, '0')}</span>
            <span></span>
            <span>Voyage sur mesure</span>
          </div>
        </motion.div>
      </div>

      <div className="hero__controls">
        <button onClick={prevSlide} className="control-btn"><ChevronLeft /></button>
        <div className="hero__dots">
          {slides.map((_, i) => (
            <div key={i} className={`dot ${i === current ? 'active' : ''}`} onClick={() => setCurrent(i)}></div>
          ))}
        </div>
        <button onClick={nextSlide} className="control-btn"><ChevronRight /></button>
      </div>
    </section>
  );
};

export default Hero;
