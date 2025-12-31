import React from 'react';
import './ProductPricing.css';
import image5 from '../../assets/images/5.jpeg';
import image8 from '../../assets/images/fridgeImg2.jpg';
import image7 from '../../assets/images/4.jpeg';

const ProductPricing = () => {
  const products = [
    {
      image: image8,
      title: 'Fridge Magnets',
      description: 'Turn everyday spaces into lasting memories. Ideal for events, brands, and thoughtful gifting.',
      features: [
        'Custom sizes & shapes',
        'High-quality print',
        'Strong magnetic hold'
      ],
      startingText: 'Starting from',
      price: '₹15 / piece'
    },
    {
      image: image5,
      title: 'Custom Badges',
      description: 'Wear your message with pride. Perfect for campaigns, teams, and celebrations.',
      features: [
        'Pin-back design',
        'Clear, sharp graphics',
        'Lightweight & durable'
      ],
      startingText: 'Starting from',
      price: '₹12 / piece'
    },
    {
      image: image7,
      title: 'Bottle-Opener Magnets',
      description: 'A smart keepsake that blends function with memory. Great for gifting and branding.',
      features: [
        'Dual-purpose design',
        'Strong opener build',
        'Custom branding area'
      ],
      startingText: 'Starting from',
      price: '₹25 / piece'
    }
  ];

  return (
    <section className="product-pricing" id="pricing">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Product Range & Pricing</h2>
          <div className="title-underline"></div>
          <p className="section-intro">
            Simple, transparent pricing. Final costs depend on quantity and customization.
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

              <ul className="pricing-features">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="pricing-feature-item">
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="price-tag">
                <span className="price-start">{product.startingText}</span>
                <span className="price-text">{product.price}</span>
                <span className="price-note">Bulk orders only</span>
              </div>
            </div>
          ))}
        </div>

        <div className="pricing-disclaimer">
          <p className="disclaimer-text">
            Pricing varies based on quantity, size, finish, and artwork. Detailed quotes are shared after discussion.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductPricing;
