import React from 'react';
import { motion } from 'framer-motion';
import { Plane, Hotel, Car, Globe, ArrowUpRight, ShieldCheck, Zap } from 'lucide-react';
import billetImage from '../../assets/images/Billet-avion.jpg';
import hotelImage from '../../assets/images/Hotel.jpg';
import transfertImage from '../../assets/images/Transfert.jpg';
import tourismeImage from '../../assets/images/Tourisme.jpg';
import sliderOne from '../../assets/images/Slider-1.jpg';
import sliderTwo from '../../assets/images/Slider-2.jpg';
import './Services.css';

const services = [
  {
    title: "Vols & Billetterie",
    description: "Des tarifs compétitifs pour toutes vos destinations préférées.",
    icon: <Plane size={32} />,
    image: billetImage,
    color: '#0F6672'
  },
  {
    title: "Hébergements",
    description: "Hôtels de luxe et villas privées sélectionnés avec soin.",
    icon: <Hotel size={32} />,
    image: hotelImage,
    color: '#D59A00'
  },
  {
    title: "Transferts VIP",
    description: "Déplacez-vous en toute sérénité avec nos chauffeurs privés.",
    icon: <Car size={32} />,
    image: transfertImage,
    color: '#0F6672'
  },
  {
    title: "Expériences",
    description: "Découvrez le monde à travers des activités uniques.",
    icon: <Globe size={32} />,
    image: tourismeImage,
    color: '#D59A00'
  },
  {
    title: "Assurance Voyage",
    description: "Partez l'esprit tranquille avec nos couvertures complètes.",
    icon: <ShieldCheck size={32} />,
    image: sliderTwo,
    color: '#0F6672'
  },
  {
    title: "Visa Express",
    description: "Assistance rapide pour toutes vos démarches administratives.",
    icon: <Zap size={32} />,
    image: sliderOne,
    color: '#D59A00'
  }
];

const Services = () => {
  return (
    <section className="services-modern">
      <div className="container">
        <div className="services__header-modern">
          <div>
            <span className="hero__tag">Nos Services</span>
            <h2 className="modern-h2">Solutions de Voyage <span className="gradient-text">Premium</span></h2>
          </div>
          <p className="modern-p">Nous concevons des expériences sur mesure qui surpassent vos attentes.</p>
        </div>

        <div className="services__grid-modern">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="service-card-modern"
            >
              <div className="service-card__image-modern">
                <img src={service.image} alt={service.title} />
                <div className="service-card__overlay-modern"></div>
                <div className="service-card__icon-modern">
                  {service.icon}
                </div>
              </div>
              <div className="service-card__content-modern">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="/contact" className="service-card__link-modern">
                  Explorer <ArrowUpRight size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
