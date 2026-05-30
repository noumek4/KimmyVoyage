import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageSquare, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page-modern">
      <section className="contact-hero-modern">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span className="hero__tag">Contactez-nous</span>
            <h1 className="modern-h1">Parlons de votre <span className="gradient-text">Prochain Voyage</span></h1>
          </motion.div>
        </div>
      </section>

      <section className="contact-content-modern">
        <div className="container">
          <div className="contact-grid-modern">
            <div className="contact-cards-modern">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="contact-card-modern"
              >
                <div className="card-icon-modern"><Phone /></div>
                <h3>Téléphone</h3>
                <p>+225 27 21 79 48 04</p>
                <p>+225 07 87 14 13 12</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="contact-card-modern"
              >
                <div className="card-icon-modern"><Mail /></div>
                <h3>Email</h3>
                <p>info@kimyavoyages.com</p>
                <p>reservations@kimyavoyages.com</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="contact-card-modern"
              >
                <div className="card-icon-modern"><MapPin /></div>
                <h3>Bureau</h3>
                <p>Cocody Angré nv. CHU</p>
                <p>Abidjan, Côte d'Ivoire</p>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="contact-form-card-modern"
            >
              <form>
                <div className="form-grid-modern">
                  <div className="form-group-modern">
                    <label>Nom complet</label>
                    <input type="text" placeholder="Ex: Marc Yao" />
                  </div>
                  <div className="form-group-modern">
                    <label>Email</label>
                    <input type="email" placeholder="marc@email.com" />
                  </div>
                </div>
                <div className="form-group-modern">
                  <label>Destination souhaitée</label>
                  <input type="text" placeholder="Ex: Dubaï, Maldives..." />
                </div>
                <div className="form-group-modern">
                  <label>Message</label>
                  <textarea rows="6" placeholder="Parlez-nous de vos envies de voyage..."></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-full-modern">
                  Envoyer ma demande <Send size={18} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="whatsapp-banner-modern">
        <div className="container">
          <div className="whatsapp-box-modern">
            <MessageSquare size={48} />
            <div>
              <h2>Besoin d'une réponse rapide ?</h2>
              <p>Nos conseillers sont disponibles sur WhatsApp pour vous répondre en direct.</p>
            </div>
            <a href="https://wa.me/2250787141312" className="btn btn-accent">Discuter maintenant</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
