import React from 'react';
import { Phone, Mail, Instagram } from 'lucide-react';
import './Contact.css';
import qrImage from '../../assets/images/QR.png';

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact-header">
          <h2 className="contact-title">Get in Touch</h2>
          <div className="title-underline"></div>
          <p className="contact-subtitle">
            Ready to create something special? Reach out to us and let's bring your memories to life
          </p>
        </div>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <div className="contact-icon">
                <Phone size={28} />
              </div>
              <h3 className="contact-label">Phone</h3>
              <a href="tel:+919347897675" className="contact-value">+91 9347897675</a>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">
                <Mail size={28} />
              </div>
              <h3 className="contact-label">Email</h3>
              <a href="mailto:minigiftsstory@gmail.com" className="contact-value">minigiftsstory@gmail.com</a>
            </div>
            
            <div className="contact-card">
              <div className="contact-icon">
                <Instagram size={28} />
              </div>
              <h3 className="contact-label">Instagram</h3>
              <a 
                href="https://www.instagram.com/minigiftsstory.in/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="contact-value"
              >
                @minigiftsstory
              </a>
            </div>
          </div>
          
          <div className="qr-section">
            <div className="qr-container">
              <div className="qr-placeholder">
                <img 
                  src={qrImage} 
                  alt="QR Code for Booking"
                  className="qr-image"
                />
              </div>
              <p className="qr-text">Scan for Booking</p>
              <p className="qr-description">
                Scan this QR code to quickly book your personalized gifts
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;