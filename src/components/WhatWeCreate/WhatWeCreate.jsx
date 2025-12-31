import React from 'react';
import { Palette, Award, Package } from 'lucide-react';
import './WhatWeCreate.css';

const WhatWeCreate = () => {
  const creations = [
    {
      icon: Palette,
      title: 'Event Keepsakes',
      description: 'Turn weddings, birthdays, baby showers, and celebrations into tangible memories your guests can take home and cherish'
    },
    {
      icon: Award,
      title: 'Corporate Excellence',
      description: 'Professional, precision-crafted gifts for branding, promotions, team recognition, and client appreciation—designed to leave a lasting impression.'
    },
    {
      icon: Package,
      title: 'Thoughtful Return Gifts',
      description: 'Say thank you in the most meaningful way. Meaningful tokens of gratitude that combine usefulness with sentiment.'
    }
  ];

  return (
    <section className="what-we-create" id="what-we-create">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">What We Create</h2>
          <div className="title-underline"></div>
          <p className="section-intro">
            Every creation is a balance of creativity, quality, and consistency. We specialize in:
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