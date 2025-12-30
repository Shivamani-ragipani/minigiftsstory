import React from 'react';
import { Heart } from 'lucide-react';
import './ThankYou.css';

const ThankYou = () => {
  return (
    <section className="thank-you" id="thank-you">
      <div className="container">
        <div className="thank-you-card">
          <div className="heart-icon-wrapper">
            <Heart className="heart-icon" size={48} />
          </div>
          <h2 className="thank-you-title">Thank You for Choosing Handcrafted</h2>
          <p className="thank-you-message">
            In a world of mass production, you chose something made with care. You chose 
            to preserve memories in tangible form, to honor moments beyond pixels and screens. 
            Every order you place supports a small business that believes in quality, authenticity, 
            and the power of personalized gifting.
          </p>
          <p className="thank-you-message">
            We don't just create magnets and badges—we help memories live on walls, jackets, 
            and refrigerators, where they belong. Thank you for trusting us with your stories.
          </p>
          <div className="signature">
            <p className="signature-text">With gratitude,</p>
            <p className="signature-name">Sukanya & SaiSri &hearts;</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;