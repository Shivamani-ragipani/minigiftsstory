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
              Mini Gifts Story is where memories transform into treasured keepsakes. We specialize in 
              creating personalized fridge magnets, custom badges, and thoughtful mini gifts that celebrate 
              the beautiful moments of your life.
            </p>
            <p className="about-description">
              Every gift we create is designed with love and attention to detail, ensuring that your special 
              memories are preserved in a way that brings joy every time you see them. Whether it's a wedding, 
              birthday, anniversary, or just a moment you want to remember, we help you tell your story through 
              our handcrafted creations.
            </p>
          </div>
          
          <div className="about-features">
            <div className="feature-card">
              <div className="feature-icon">
                <Sparkles size={32} />
              </div>
              <h3 className="feature-title">Handcrafted with Love</h3>
              <p className="feature-description">
                Each piece is carefully crafted to capture the essence of your special moments
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