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
            In a world of mass production, you chose something made with heart.
You chose memories over machines, stories over shortcuts.


          </p>
          <p className="thank-you-message">
           We don’t just make magnets and badges, we help memories live on walls, jackets, and refrigerators, where they belong.
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