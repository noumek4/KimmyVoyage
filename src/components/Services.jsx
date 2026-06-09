import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Plane, Hotel, Car, Globe, ArrowUpRight, ShieldCheck, Zap } from 'lucide-react';
import './Services.css';

const services = [
  {
    title: "Billet d'avion",
    description: "KIMYA Voyages facilite votre voyage dès le premier instant en émettant vos billets d’avion avec des tarifs compétitifs.",
    icon: <Plane size={32} />,
    image: '/assets/images/billet.jpg',
    color: '#0F6672'
  },
  {
    title: "Hôtel",
    description: "Profitez d’un séjour confortable et relaxant avec nos réservations de chambres d’hôtels adaptées à votre budget.",
    icon: <Hotel size={32} />,
    image: '/assets/images/hotel.jpg',
    color: '#D59A00'
  },
  {
    title: "Transferts",
    description: "Soyez assuré d’un transport sans tracas avec nos services de transferts et de location de véhicules avec chauffeurs professionnels.",
    icon: <Car size={32} />,
    image: '/assets/images/transfert.png',
    color: '#0F6672'
  },
  {
    title: "Tourisme",
    description: "Découvrez les merveilles du monde grâce à nos circuits touristiques soigneusement organisés et immersifs.",
    icon: <Globe size={32} />,
    image: '/assets/images/tour1.jpg',
    color: '#D59A00'
  },
  {
    title: "Visa",
    description: "Assistance complète pour vos démarches de visa (Dubaï, Schengen, Turquie, Chine, USA et plus encore).",
    icon: <Zap size={32} />,
    image: '/assets/images/visa.jpg',
    color: '#0F6672'
  },
  {
    title: "Assurance Voyage",
    description: "Notre assurance voyages couvre vos périples dans le monde entier, vous offrant une protection complète.",
    icon: <ShieldCheck size={32} />,
    image: '/assets/images/assurance.jpg',
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
          <p className="modern-p">Plongez dans l’aventure avec KIMYA Voyages, où chaque service vous promet une expérience de voyage inoubliable. Faites juste vos bagages, on s'occupe du reste.</p>
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
                <Link to="/nos-packages" className="service-card__link-modern">
                  Explorer <ArrowUpRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
