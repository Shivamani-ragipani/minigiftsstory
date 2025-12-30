import React from 'react';
import './ProductPricing.css';
import image5 from '../../assets/images/5.jpeg';
import image6 from '../../assets/images/6.jpeg';
import image7 from '../../assets/images/7.jpeg';

const ProductPricing = () => {
  const products = [
    {
      image: image5,
      title: 'Fridge Magnets',
      description: 'Transform everyday refrigerators into memory walls. Perfect for event souvenirs, brand visibility, and heartfelt return gifts that stick around.',
      features: [
        'Custom shapes and sizes',
        'Vibrant, fade-resistant printing',
        'Strong magnetic backing',
        'Ideal for bulk event orders'
      ],
      priceRange: 'Starting from ₹15 per piece'
    },
    {
      image: image6,
      title: 'Custom Badges',
      description: 'Wearable statements for campaigns, conferences, and celebrations. Pin your brand or message close to hearts, literally.',
      features: [
        'Pin-back style',
        'Sharp, clear graphics',
        'Lightweight and durable',
        'Perfect for teams and events'
      ],
      priceRange: 'Starting from ₹12 per piece'
    },
    {
      image: image7,
      title: 'Bottle-Opener Magnets',
      description: 'Utility meets memory in this dual-purpose keepsake. Ideal for bars, cafés, corporate hampers, or any celebration where functionality adds charm.',
      features: [
        'Functional and memorable',
        'Strong opener mechanism',
        'Customizable design area',
        'Great for gifting and branding'
      ],
      priceRange: 'Starting from ₹25 per piece'
    }
  ];

  return (
    <section className="product-pricing" id="pricing">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Product Range & Indicative Pricing</h2>
          <div className="title-underline"></div>
          <p className="section-intro">
            Transparent pricing, honest conversations. These ranges serve as a starting point 
            for our discussion—final pricing adapts to your specific requirements.
          </p>
        </div>

        <div className="products-pricing-grid">
          {products.map((product, index) => (
              <div key={index} className="pricing-card">
                <div className="pricing-image-header">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="pricing-image"
                  />
                </div>
                <h3 className="pricing-title">{product.title}</h3>
                <p className="pricing-description">{product.description}</p>
                
                <ul className="pricing-features">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="pricing-feature-item">{feature}</li>
                  ))}
                </ul>
                
                <div className="price-tag">
                  <span className="price-text">{product.priceRange}</span>
                  <span className="price-note">for bulk orders</span>
                </div>
              </div>
            ))}
        </div>

        <div className="pricing-disclaimer">
          <p className="disclaimer-text">
            Final pricing is determined by order quantity, size specifications, finish preferences, 
            and artwork complexity. We share detailed quotations after understanding your unique needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductPricing;