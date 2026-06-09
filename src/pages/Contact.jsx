import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, MessageSquare, Send, CheckCircle, AlertCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const data = Object.fromEntries(formData.entries());

    const subject = encodeURIComponent(`Nouveau Projet de Voyage - ${data.Nom} ${data.Prénom}`);
    
    const bodyText = `
Détails du projet de voyage :
---------------------------
Nom : ${data.Nom}
Prénom : ${data.Prénom}
Email : ${data.Email}
Téléphone : ${data.Téléphone}
Pays : ${data.Pays}
Destination : ${data.Destination}
Dates : Du ${data.Date_Début} au ${data.Date_Fin}
Voyageurs : ${data.Adultes} Adulte(s), ${data.Enfants} Enfant(s), ${data.Bébés} Bébé(s)

Projet :
${data.Message}
    `;

    const body = encodeURIComponent(bodyText);
    
    // Ouvre le client mail par défaut (Gmail, Outlook, etc.)
    window.location.href = `mailto:info@kimyavoyages.com?subject=${subject}&body=${body}`;
  };

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
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="contact-card-modern"
              >
                <div className="card-icon-modern"><MapPin /></div>
                <h3>Bureau</h3>
                <p>Abidjan, Côte d'Ivoire</p>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="contact-form-card-modern"
            >
              <form ref={form} onSubmit={handleSubmit}>
                <div className="form-grid-modern">
                  <div className="form-group-modern">
                    <label>Nom *</label>
                    <input type="text" name="Nom" placeholder="Ex: KOUAKOU" required />
                  </div>
                  <div className="form-group-modern">
                    <label>Prénom *</label>
                    <input type="text" name="Prénom" placeholder="Ex: Joel" required />
                  </div>
                </div>
                <div className="form-grid-modern">
                  <div className="form-group-modern">
                    <label>Adresse email *</label>
                    <input type="email" name="Email" placeholder="example@domain.com" required />
                  </div>
                  <div className="form-group-modern">
                    <label>Téléphone</label>
                    <input type="tel" name="Téléphone" placeholder="+225 07 07 07 07 07" />
                  </div>
                </div>
                <div className="form-grid-modern">
                  <div className="form-group-modern">
                    <label>Pays de résidence</label>
                    <input type="text" name="Pays" placeholder="Votre pays de résidence" />
                  </div>
                  <div className="form-group-modern">
                    <label>Destination</label>
                    <input type="text" name="Destination" placeholder="Où partez-vous ?" />
                  </div>
                </div>
                <div className="form-grid-modern">
                  <div className="form-group-modern">
                    <label>A partir de</label>
                    <input type="date" name="Date_Début" />
                  </div>
                  <div className="form-group-modern">
                    <label>Jusqu'au</label>
                    <input type="date" name="Date_Fin" />
                  </div>
                </div>
                <div className="form-grid-modern">
                  <div className="form-group-modern">
                    <label>Adultes *</label>
                    <select name="Adultes" required>
                      <option value="">Sélectionnez</option>
                      {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n}>{n}</option>)}
                    </select>
                  </div>
                  <div className="form-group-modern">
                    <label>Enfants (-12ans)</label>
                    <select name="Enfants">
                      <option value="0">Aucun</option>
                      {[1,2,3,4,5].map(n => <option key={n} value={n}>{n}</option>)}
                    </select>
                  </div>
                  <div className="form-group-modern">
                    <label>Bébé (-02ans)</label>
                    <select name="Bébés">
                      <option value="0">Aucun</option>
                      {[1,2,3,4,5].map(n => <option key={n} value={n}>{n}</option>)}
                    </select>
                  </div>
                </div>
                <div className="form-group-modern">
                  <label>Décrivez votre projet *</label>
                  <textarea name="Message" rows="4" placeholder="Dites-nous le plus précisement possible : envies, itinéraires, étapes..." required></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-full-modern">
                  Valider mon projet <Send size={18} />
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

export default Contact;
