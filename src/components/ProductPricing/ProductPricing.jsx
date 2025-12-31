import React from 'react';
import { useEffect, useState } from 'react';
import './ProductPricing.css';
import image5 from '../../assets/images/5.jpeg';
import image8 from '../../assets/images/fridgeImg2.jpg';
import image7 from '../../assets/images/4.jpeg';



const ProductPricing = () => {
  const [timeLeft, setTimeLeft] = useState({
  hours: 0,
  minutes: 0,
  seconds: 0,
});

useEffect(() => {
  const getISTTime = () => {
    const now = new Date();
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    return new Date(utc + 5.5 * 60 * 60 * 1000);
  };

  const timer = setInterval(() => {
    const nowIST = getISTTime();

    // Next day 12:00 AM IST
    const nextDayIST = new Date(nowIST);
    nextDayIST.setHours(24, 0, 0, 0);

    const diff = nextDayIST - nowIST;

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    setTimeLeft({ hours, minutes, seconds });
  }, 1000);

  return () => clearInterval(timer);
}, []);


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

<div className="offer-timer">
  <span className="timer-label">Offer Ends In</span>

  <div className="timer-box">
    <div className="time-unit">
      <span className="time-value">{String(timeLeft.hours).padStart(2, '0')}</span>
      <span className="time-label">HRS</span>
    </div>
    <span className="time-separator">:</span>
    <div className="time-unit">
      <span className="time-value">{String(timeLeft.minutes).padStart(2, '0')}</span>
      <span className="time-label">MIN</span>
    </div>
    <span className="time-separator">:</span>
    <div className="time-unit">
      <span className="time-value">{String(timeLeft.seconds).padStart(2, '0')}</span>
      <span className="time-label">SEC</span>
    </div>
  </div>
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
