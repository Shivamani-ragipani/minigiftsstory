import React from 'react';
import { Sparkles, Users, Gift } from 'lucide-react';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about-header">
          <h2 className="about-title">Our Story</h2>
          <div className="title-underline"></div>
        </div>
        
        <div className="about-content">
          <div className="about-main-text">
            <p className="about-description">
              Mini Gifts Story transforms memories into elegant keepsakes. We specialize in custom fridge magnets, personalized badges, and thoughtful mini gifts for events, corporate branding, and return gifting.

           </p>
            <p className="about-description">
              Every piece is handcrafted with attention to detail, ensuring your memories are preserved beautifully, not just printed.
 
            </p>
          </div>
          
          <div className="about-features">
            <div className="feature-card">
              <div className="feature-icon">
                <Sparkles size={32} />
              </div>
              <h3 className="feature-title">Handcrafted with Love</h3>
              <p className="feature-description">
                Carefully crafted using durable materials and high-resolution printing
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Users size={32} />
              </div>
              <h3 className="feature-title">Personalized for You</h3>
              <p className="feature-description">
                Customized designs that reflect your unique story and personality
              </p>
            </div>
            
            <div className="feature-card">
              <div className="feature-icon">
                <Gift size={32} />
              </div>
              <h3 className="feature-title">Perfect Gifting</h3>
              <p className="feature-description">
                Thoughtful gifts that create lasting memories for your loved ones
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;