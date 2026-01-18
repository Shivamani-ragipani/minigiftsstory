import React, { useState } from 'react';
import { Sparkles, Heart, QrCode } from 'lucide-react';
import './Hero.css';
import firecrackersVideo from '../../assets/videos/fireCracker.mp4';
import mobileFirecrackersVideo from '../../assets/videos/mobile-firecrackers.mp4';

const Hero = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Premium New Year 2026 Offer Banner */}
      {/* <div className="offer-banner">
        <div className="offer-content">
          <div className="offer-sparkle">
            <Sparkles size={18} className="sparkle-icon" />
          </div>
          <span className="offer-text">
            <strong>NEW YEAR 2026 SPECIAL</strong>
            <span className="offer-divider">•</span>
            Flat <span className="offer-highlight">15% OFF</span> on All Personalized Gifts
            <span className="offer-divider">•</span>
            Limited Time Only
          </span>
          <div className="offer-sparkle">
            <Sparkles size={18} className="sparkle-icon" />
          </div>
        </div>
      </div> */}

      <section className="hero" id="home">
        {/* Full-Screen Video Background */}
        <div className="hero-video-container">
          <video
  className="hero-video"
  autoPlay
  loop
  muted
  playsInline
  onLoadedData={() => setIsVideoLoaded(true)}
>
  {/* Desktop video */}
  <source
    src={firecrackersVideo}
    type="video/mp4"
    media="(min-width: 769px)"
  />

  {/* Mobile portrait video */}
  <source
    src={mobileFirecrackersVideo}
    type="video/mp4"
    media="(max-width: 768px)"
  />
</video>

          
          {/* Fallback gradient if video fails */}
          {!isVideoLoaded && (
            <div className="hero-video-fallback" />
          )}
          
          {/* Dark overlay for text readability */}
          <div className="hero-overlay" />
          
          {/* Ambient glow effects */}
          <div className="ambient-glow glow-1" />
          <div className="ambient-glow glow-2" />
          <div className="ambient-glow glow-3" />
        </div>

        {/* Floating particles for festive atmosphere */}
        <div className="particles-container">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${8 + Math.random() * 7}s`,
              }}
            />
          ))}
        </div>

        {/* Main Hero Content */}
        <div className="hero-content">
          {/* New Year 2026 Badge */}
          <div className="year-badge">
            <div className="year-badge-inner">
              <Sparkles size={16} className="badge-icon" />
              <span className="badge-text">New Year 2026</span>
              <Sparkles size={16} className="badge-icon" />
            </div>
          </div>

          {/* Main Content Container */}
          <div className="hero-main">
            {/* Brand Logo/Title */}
            <div className="brand-container">
              <h1 className="brand-title">
                <span className="brand-mini">Mini</span>
                <span className="brand-gifts">Gifts Story</span>
              </h1>
              <div className="brand-divider">
                <Heart size={24} className="heart-icon" />
              </div>
            </div>

            {/* Tagline */}
            <p className="hero-tagline">
              Where Every Gift Tells a Story
            </p>

    

            {/* Description */}
            <p className="hero-description">
              Celebrate the New Year with timeless memories.
               {/* Premium personalized gifts
              <br className="hidden sm:block" />
              crafted with precision and designed to last forever. */}
            </p>

            {/* CTA Section */}
            <div className="cta-section">
              <button onClick={scrollToContact} className="cta-primary">
                <QrCode size={22} className="cta-icon" />
                <span className="cta-text">Scan for Booking</span>
                <div className="cta-shine" />
              </button>
            
            </div>
          </div>

  
        </div>
      </section>
    </>
  );
};

export default Hero;