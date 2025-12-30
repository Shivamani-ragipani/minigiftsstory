import React from 'react';
import { HeartHandshake, CheckCircle, Sparkles, MessageCircle } from 'lucide-react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: HeartHandshake,
      title: 'Dedicated Partnership',
      description: 'From your first enquiry to the moment your order arrives, we walk alongside you. Every question answered, every timeline respected, every detail honored.'
    },
    {
      icon: CheckCircle,
      title: 'Flawless Consistency',
      description: 'Order 50 or 500, each piece mirrors the next. Uniform colors, matching sizes, identical finishes—because your brand deserves nothing less than perfection.'
    },
    {
      icon: Sparkles,
      title: 'Your Brand, Your Way',
      description: 'Bring your complete artwork or let us guide your vision. Names, dates, logos, taglines—we customize every element to reflect your unique story and brand identity.'
    },
    {
      icon: MessageCircle,
      title: 'Design Support Included',
      description: 'Not a designer? No worries. Share your ideas, photos, or text, and we will help arrange them into polished layouts that capture your vision beautifully.'
    }
  ];

  return (
    <section className="why-choose-us" id="why-choose">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Why Clients Choose MiniGiftsStory</h2>
          <div className="title-underline"></div>
          <p className="section-intro">
            Working with us means more than placing an order. It means gaining a partner 
            who cares about your success as much as you do.
          </p>
        </div>

        <div className="reasons-grid">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div key={index} className="reason-card">
                <div className="reason-icon-container">
                  <IconComponent className="reason-icon" size={32} />
                </div>
                <div className="reason-content">
                  <h3 className="reason-title">{reason.title}</h3>
                  <p className="reason-description">{reason.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;