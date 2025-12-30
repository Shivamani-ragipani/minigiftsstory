import React from 'react';
import { Heart } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-background">
        <div className="watercolor-overlay"></div>
      </div>
      
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">Mini Gifts Story</h1>
          <p className="hero-tagline">Where Every Gift Tells a Story</p>
          <p className="hero-description">
            Creating personalized fridge magnets and mini gifts that capture your most cherished memories. 
            Each piece is crafted with love to celebrate life's special moments.
          </p>
          <button onClick={scrollToContact} className="btn btn-primary hero-cta">
            <Heart className="cta-icon" size={20} />
            Scan for Booking
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;