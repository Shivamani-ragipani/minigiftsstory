import React from 'react';
import { Palette, Award, Package } from 'lucide-react';
import './WhatWeCreate.css';

const WhatWeCreate = () => {
  const creations = [
    {
      icon: Palette,
      title: 'Event Keepsakes',
      description: 'Transform your celebrations into tangible memories. From weddings to birthdays, our custom magnets and badges become cherished mementos that guests treasure long after the event.'
    },
    {
      icon: Award,
      title: 'Corporate Excellence',
      description: 'Elevate your brand presence with precision-crafted gifting solutions. Perfect for team recognition, client appreciation, and promotional campaigns that leave a lasting impression.'
    },
    {
      icon: Package,
      title: 'Thoughtful Return Gifts',
      description: 'Say thank you in the most meaningful way. Our handcrafted pieces serve as perfect tokens of gratitude, combining functionality with sentiment in every design.'
    }
  ];

  return (
    <section className="what-we-create" id="what-we-create">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What We Create</h2>
          <div className="title-underline"></div>
          <p className="section-intro">
            Every piece we craft is a labor of love, designed to capture moments that matter. 
            Specializing in fridge magnets, badges, and bottle-opener magnets, we bring your 
            vision to life with meticulous attention to detail and uncompromising quality.
          </p>
        </div>

        <div className="creations-grid">
          {creations.map((creation, index) => {
            const IconComponent = creation.icon;
            return (
              <div key={index} className="creation-card">
                <div className="creation-icon-wrapper">
                  <IconComponent className="creation-icon" size={36} />
                </div>
                <h3 className="creation-title">{creation.title}</h3>
                <p className="creation-description">{creation.description}</p>
              </div>
            );
          })}
        </div>

        <div className="quality-promise">
          <p className="promise-text">
            Behind every order lies our commitment to excellence: high-resolution printing 
            that brings designs to vibrant life, durable materials chosen for longevity, 
            and a consistent finish that ensures every piece in your bulk order matches 
            perfectly. This is small-batch craftsmanship scaled with care.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeCreate;