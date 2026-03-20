import React from 'react';
import { Sparkles, Users, Gift, Heart } from 'lucide-react';
import './About.css';

const FEATURES = [
  {
    icon: <Sparkles size={28} />,
    title: 'Handcrafted with Love',
    desc: 'Every piece is carefully crafted using durable materials and precision high-resolution printing.',
  },
  {
    icon: <Users size={28} />,
    title: 'Personalized for You',
    desc: 'Custom designs that reflect your unique story, personality, and the moments that matter most.',
  },
  {
    icon: <Gift size={28} />,
    title: 'Perfect for Every Occasion',
    desc: 'Weddings, birthdays, corporate events — we create keepsakes that become cherished memories.',
  },
];

const About = () => (
  <section className="about" id="about" aria-label="About Mini Gifts Story">
    <div className="container">
      <div className="about-layout">
        {/* Text Side */}
        <div className="about-text">
          <span className="section-badge">
            <Heart size={12} /> Our Story
          </span>
          <h2 className="section-title">Where Memories Become<br /><em>Timeless Keepsakes</em></h2>
          <div className="title-underline" />
          <p className="about-para">
            <strong>Mini Gifts Story</strong> transforms your most precious memories into elegant keepsakes.
            We specialize in custom fridge magnets, personalized badges, and thoughtful mini gifts —
            crafted for events, corporate branding, and meaningful return gifting.
          </p>
          <p className="about-para">
            Every piece is <strong>handcrafted</strong> with care, ensuring your memories are preserved
            beautifully — not just printed. We believe the best gifts tell a story.
          </p>

          <div className="about-stats">
            <div className="about-stat"><span className="stat-num">500+</span><span className="stat-txt">Happy Clients</span></div>
            <div className="about-stat"><span className="stat-num">1000+</span><span className="stat-txt">Gifts Made</span></div>
            <div className="about-stat"><span className="stat-num">4.9★</span><span className="stat-txt">Rating</span></div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="about-features">
          {FEATURES.map(({ icon, title, desc }) => (
            <div className="feature-card" key={title}>
              <div className="feature-icon-wrap">{icon}</div>
              <div>
                <h3 className="feature-title">{title}</h3>
                <p className="feature-desc">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
