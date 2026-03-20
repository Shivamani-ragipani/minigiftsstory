import React from 'react';
import { Gift, Star, Sparkles, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import './Hero.css';

const FLOATING_ITEMS = [
  { icon: '🎁', delay: '0s',   x: '8%',  y: '20%', size: 48 },
  { icon: '✨', delay: '1.2s', x: '88%', y: '15%', size: 32 },
  { icon: '💝', delay: '0.6s', x: '5%',  y: '68%', size: 40 },
  { icon: '🎀', delay: '1.8s', x: '90%', y: '63%', size: 44 },
  { icon: '⭐', delay: '0.3s', x: '75%', y: '80%', size: 28 },
  { icon: '🌸', delay: '2.1s', x: '15%', y: '86%', size: 32 },
];

const STATS = [
  { value: '500+',  label: 'Happy Clients' },
  { value: '1000+', label: 'Gifts Created' },
  { value: '4.9★',  label: 'Avg Rating'    },
];

const Hero = () => {
  const { navigate } = useCart();

  const scrollToProducts = () => {
    const el = document.getElementById('products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home" aria-label="Hero — Mini Gifts Story">

      {/* Decorative Background */}
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-blob blob-1" />
        <div className="hero-blob blob-2" />
        <div className="hero-blob blob-3" />
        <div className="hero-grid" />
      </div>

      {/* Floating Emoji Decorations */}
      <div className="hero-floats" aria-hidden="true">
        {FLOATING_ITEMS.map((item, i) => (
          <span
            key={i}
            className="hero-float-item"
            style={{ left: item.x, top: item.y, fontSize: item.size, animationDelay: item.delay }}
          >
            {item.icon}
          </span>
        ))}
      </div>

      <div className="hero-container container">

        {/* ── Left: Content ── */}
        <div className="hero-content">

          <div className="hero-badge">
            <Sparkles size={14} aria-hidden="true" />
            <span>Premium Personalized Gifts</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-title-line1">Every Gift</span>
            <span className="hero-title-line2">Tells a Story</span>
          </h1>

          <p className="hero-subtitle">
            Handcrafted custom fridge magnets, badges &amp; mini gifts — made with love
            for every occasion, event, and memory worth keeping forever.
          </p>

          <div className="hero-actions">
            <button className="btn btn-primary hero-cta-primary" onClick={scrollToProducts}>
              <Gift size={18} aria-hidden="true" />
              Shop Now
              <ArrowRight size={16} className="arrow-icon" aria-hidden="true" />
            </button>
            <button className="btn btn-outline hero-cta-secondary" onClick={() => navigate('cart')}>
              <ShoppingBag size={18} aria-hidden="true" />
              View Cart
            </button>
          </div>

          <div className="hero-stats" aria-label="Business highlights">
            {STATS.map(({ value, label }) => (
              <div className="hero-stat" key={label}>
                <span className="stat-value">{value}</span>
                <span className="stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: Visual ── */}
        <div className="hero-visual" aria-hidden="true">

          {/* Background orbs */}
          <div className="hero-orb orb-1" />
          <div className="hero-orb orb-2" />

          {/* Main floating card */}
          <div className="hero-card main-card">
            <div className="card-glow" />
            <div className="card-emoji">🎁</div>
            <div className="card-content">
              <span className="card-title">Personalized Gifts</span>
              <span className="card-desc">Crafted Just For You</span>
            </div>
            <div className="card-star">
              <Star size={12} fill="currentColor" /> 4.9
            </div>
          </div>

          {/* Pill cards */}
          <div className="hero-card secondary-card top-card">
            <span role="img" aria-label="badge">🏅</span>
            <div>
              <div className="pill-title">Custom Badges</div>
              <div className="pill-sub">From ₹85/piece</div>
            </div>
          </div>

          <div className="hero-card secondary-card bottom-card">
            <span role="img" aria-label="magnet">🧲</span>
            <div>
              <div className="pill-title">Fridge Magnets</div>
              <div className="pill-sub">Best seller ✨</div>
            </div>
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-hint" aria-hidden="true">
        <div className="scroll-dot" />
      </div>

    </section>
  );
};

export default Hero;
