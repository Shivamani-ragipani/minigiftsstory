import React from 'react';
import { Heart, Instagram, Phone, Mail, Gift, MapPin, MessageCircle } from 'lucide-react';
import './Footer.css';

const WHATSAPP_NUMBER = '919347897675';

const Footer = ({ navigate }) => {
  // const year = new Date().getFullYear();
  const year = 2025;

  const scrollTo = (id) => {
    navigate('home');
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-top">
        <div className="container">
          <div className="footer-grid">
            {/* Brand */}
            <div className="footer-brand-col">
              <button className="footer-logo" onClick={() => navigate('home')}>
                <div className="footer-logo-icon"><Gift size={20} /></div>
                <span className="footer-logo-text">Mini Gifts Story</span>
              </button>
              <p className="footer-tagline">
                Transforming your memories into timeless, handcrafted keepsakes — made with love for every occasion.
              </p>
              <div className="footer-social">
                <a
                  href="https://www.instagram.com/minigiftsstory.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  aria-label="Follow Mini Gifts Story on Instagram"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn social-wa"
                  aria-label="Chat on WhatsApp"
                >
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-links-col">
              <h3 className="footer-col-title">Quick Links</h3>
              <ul className="footer-links">
                {[
                  { label: 'Home', id: 'home' },
                  { label: 'About Us', id: 'about' },
                  { label: 'Products', id: 'products' },
                  { label: 'Pricing', id: 'pricing' },
                  { label: 'Testimonials', id: 'testimonials' },
                  { label: 'Contact', id: 'contact' },
                ].map(({ label, id }) => (
                  <li key={id}>
                    <button className="footer-link" onClick={() => scrollTo(id)}>{label}</button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div className="footer-links-col">
              <h3 className="footer-col-title">Our Products</h3>
              <ul className="footer-links">
                {['Fridge Magnets', 'Custom Badges', 'Mini Gift Sets', 'Photo Magnets', 'Event Badges', 'Bottle Opener Magnets'].map(p => (
                  <li key={p}>
                    <button className="footer-link" onClick={() => scrollTo('products')}>{p}</button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="footer-contact-col">
              <h3 className="footer-col-title">Get In Touch</h3>
              <ul className="footer-contact-list">
                <li>
                  <a href="tel:+919347897675" className="footer-contact-item">
                    <Phone size={15} /> +91 9347897675
                  </a>
                </li>
                <li>
                  <a href="mailto:minigiftsstory@gmail.com" className="footer-contact-item">
                    <Mail size={15} /> minigiftsstory@gmail.com
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/minigiftsstory.in/" target="_blank" rel="noopener noreferrer" className="footer-contact-item">
                    <Instagram size={15} /> @minigiftsstory.in
                  </a>
                </li>
                <li>
                  <div className="footer-contact-item no-link">
                    <MapPin size={15} /> Pan India — Online Orders
                  </div>
                </li>
              </ul>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'd like to place an order.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-wa-btn"
              >
                <MessageCircle size={16} />
                Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-inner">
            <p className="footer-copy">
              © {year} Mini Gifts Story. All rights reserved.
            </p>
            <p className="footer-made-with">
              Made with <Heart size={13} className="footer-heart" /> for gifting lovers
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
