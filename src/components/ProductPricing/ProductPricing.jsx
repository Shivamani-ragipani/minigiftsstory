import React from 'react';
import { Check, MessageCircle, Star } from 'lucide-react';
import './ProductPricing.css';
import image5 from '../../assets/images/5.jpeg';
import image8 from '../../assets/images/fridgeImg2.jpg';
import image7 from '../../assets/images/4.jpeg';

const PLANS = [
  {
    image: image8,
    title: 'Fridge Magnets',
    subtitle: 'Most Popular',
    featured: true,
    price: 85,
    originalPrice: 100,
    minQty: 10,
    features: [
      'Custom sizes & shapes',
      'High-quality UV print',
      'Strong magnetic hold',
      'Glossy or matte finish',
      'Bulk discounts available',
    ],
  },
  {
    image: image5,
    title: 'Custom Badges',
    subtitle: 'Best for Events',
    featured: false,
    price: 85,
    originalPrice: 100,
    minQty: 10,
    features: [
      'Pin-back design',
      'Crystal clear graphics',
      'Lightweight & durable',
      'Various sizes',
      'Corporate branding',
    ],
  },
  {
    image: image7,
    title: 'Bottle Opener Magnets',
    subtitle: 'Unique Gift',
    featured: false,
    price: 85,
    originalPrice: 100,
    minQty: 10,
    features: [
      'Dual-purpose design',
      'Strong opener build',
      'Custom branding area',
      'Perfect party favor',
      'Bulk orders welcome',
    ],
  },
];

const ProductPricing = ({ navigate }) => (
  <section className="pricing-section" id="pricing" aria-label="Product Pricing">
    <div className="container">
      <div className="pricing-header">
        <span className="section-badge">💰 Transparent Pricing</span>
        <h2 className="section-title">Product Range & Pricing</h2>
        <div className="title-underline centered" />
        <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto 16px' }}>
          Simple, transparent pricing. Final costs may vary based on quantity and customization details.
        </p>
        <div className="pricing-note-pill">
          <Star size={14} fill="currentColor" />
          Flat 15% OFF on all products — Limited time offer!
        </div>
      </div>

      <div className="pricing-grid">
        {PLANS.map((plan) => (
          <div key={plan.title} className={`pricing-card${plan.featured ? ' featured' : ''}`}>
            {plan.featured && <div className="featured-label">✨ Most Popular</div>}

            <div className="pricing-img-wrap">
              <img src={plan.image} alt={plan.title} className="pricing-img" loading="lazy" />
            </div>

            <div className="pricing-body">
              <span className="pricing-subtitle">{plan.subtitle}</span>
              <h3 className="pricing-title">{plan.title}</h3>

              <div className="pricing-price">
                <span className="price-from">Starting from</span>
                <div className="price-row">
                  <span className="price-old">₹{plan.originalPrice}</span>
                  <span className="price-new">₹{plan.price}<small>/piece</small></span>
                  <span className="price-badge">15% OFF</span>
                </div>
                <span className="price-min">Min. order: {plan.minQty} pcs</span>
              </div>

              <ul className="pricing-features">
                {plan.features.map(f => (
                  <li key={f} className="pricing-feature">
                    <span className="feat-check"><Check size={13} /></span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                className={`pricing-btn ${plan.featured ? 'btn btn-primary' : 'btn btn-outline'}`}
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <MessageCircle size={16} />
                Get a Quote
              </button>
            </div>
          </div>
        ))}
      </div>

      <p className="pricing-disclaimer">
        * Pricing varies based on quantity, size, finish, and artwork complexity. Detailed quotes shared after discussion.
      </p>
    </div>
  </section>
);

export default ProductPricing;
