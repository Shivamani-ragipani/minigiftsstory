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
    features: ['Custom sizes & shapes', 'High-quality print', 'Strong magnetic hold'],
    startingText: 'Starting from',
    originalPrice: 100,
    discountedPrice: 85,
    discount: '15% OFF'
  },
  {
    image: image5,
    title: 'Custom Badges',
    features: ['Pin-back design', 'Clear, sharp graphics', 'Lightweight & durable'],
    startingText: 'Starting from',
    originalPrice: 100,
    discountedPrice: 85,
    discount: '15% OFF'
  },
  {
    image: image7,
    title: 'Bottle-Opener Magnets',
    features: ['Dual-purpose design', 'Strong opener build', 'Custom branding area'],
    startingText: 'Starting from',
    originalPrice: 100,
    discountedPrice: 85,
    discount: '15% OFF'
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

  <div className="price-row">
    <span className="price-original">₹{product.originalPrice}</span>
    <span className="price-final">₹{product.discountedPrice} / Piece</span>
    <span className="price-discount">{product.discount}</span>
  </div>

  <span className="price-note">Prices may vary for bulk orders</span>
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
