import React from 'react';
import { MessageSquare, Calendar, Image, FileCheck } from 'lucide-react';
import './HowToOrder.css';

const HowToOrder = () => {
  const steps = [
    {
      icon: MessageSquare,
      number: '01',
      title: 'Share Your Vision',
      description: 'Tell us which product catches your eye—fridge magnets, badges, or bottle openers. Share your approximate quantity and any ideas you have in mind.'
    },
    {
      icon: Calendar,
      number: '02',
      title: 'Timeline & Event Details',
      description: 'Let us know your event or delivery date. This helps us plan production and ensure everything arrives on time, stress-free.'
    },
    {
      icon: Image,
      number: '03',
      title: 'Design Discussion',
      description: 'Have complete artwork ready? Perfect. Need design guidance? We will help you arrange text, logos, and photos into layouts that shine.'
    },
    {
      icon: FileCheck,
      number: '04',
      title: 'Quotation & Confirmation',
      description: 'Receive a transparent quotation tailored to your needs. Once confirmed, we begin crafting your order with the care it deserves.'
    }
  ];

  return (
    <section className="how-to-order" id="order-process">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">How to Enquire or Order</h2>
          <div className="title-underline"></div>
          <p className="section-intro">
            Getting started is simple. Four easy steps stand between your idea and a 
            beautifully crafted product.
          </p>
        </div>

        <div className="steps-grid">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="step-card">
                <div className="step-number-badge">{step.number}</div>
                <div className="step-icon-wrapper">
                  <IconComponent className="step-icon" size={32} />
                </div>
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            );
          })}
        </div>

        <div className="order-cta">
          <p className="cta-text">
            Ready to bring your vision to life? Reach out through WhatsApp, email, or Instagram. 
            We are here to help every step of the way.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowToOrder;