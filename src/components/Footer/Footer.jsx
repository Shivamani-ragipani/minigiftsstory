import React from 'react';
import { Heart, Instagram } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-logo">Mini Gifts Story</h3>
            <p className="footer-tagline">
              <Heart size={16} className="heart-icon" />
              Crafted with Love & Care
            </p>
          </div>

          <div className="footer-social">
            <span className="footer-follow">Follow our story</span>
            <a
              href="https://www.instagram.com/minigiftsstory.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Instagram"
            >
              <Instagram size={22} />
            </a>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="footer-credits">
            Where Every Gift Tells a Story
          </p>
          <p className="footer-copyright">
            © {currentYear} Mini Gifts Story. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
