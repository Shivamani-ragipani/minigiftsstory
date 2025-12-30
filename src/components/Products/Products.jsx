import React from 'react';
import './Products.css';
import image1 from '../../assets/images/1.jpeg';
import image10 from '../../assets/images/11.jpeg';
import image3 from '../../assets/images/3.jpeg';

const Products = () => {
  const products = [
    {
      image: image10,
      title: 'Fridge Magnets',
      description: 'Custom-designed fridge magnets that bring your memories to life. Perfect for preserving special moments, event souvenirs, or adding a personal touch to your kitchen.',
      features: ['Personalized designs', 'High-quality printing', 'Durable materials']
    },
    {
      image: image1,
      title: 'Badges',
      description: 'Unique badges for events, celebrations, and special occasions. From birthdays to corporate events, create memorable keepsakes that everyone will cherish.',
      features: ['Custom text & images', 'Various sizes', 'Pin or magnetic backing']
    },
    {
      image: image3,
      title: 'Mini Gifts',
      description: 'Thoughtfully crafted mini gifts that make perfect tokens of appreciation. Ideal for party favors, thank you gifts, or expressing your love to someone special.',
      features: ['Personalized packaging', 'Unique designs', 'Perfect for all occasions']
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="products" id="products">
      <div className="container">
        <div className="products-header">
          <h2 className="products-title">Our Products</h2>
          <div className="title-underline"></div>
          <p className="products-subtitle">
            Discover our collection of handcrafted gifts and keepsakes
          </p>
        </div>
        
        <div className="products-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <div className="product-image-placeholder">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="product-image"
                />
              </div>
              <div className="product-content">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-description">{product.description}</p>
                <ul className="product-features">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="product-feature-item">
                      {feature}
                    </li>
                  ))}
                </ul>
                <button onClick={scrollToContact} className="btn btn-primary product-btn">
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;