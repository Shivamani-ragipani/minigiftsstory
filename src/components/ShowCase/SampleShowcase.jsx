import React from 'react';
import './SampleShowcase.css';
import image7 from '../../assets/images/fridge-img.jpg';


const SampleShowcase = () => {
  const sampleImage = 'https://customer-assets.emergentagent.com/job_keepsake-hub-1/artifacts/loaiuymz_WhatsApp%20Image%202025-12-30%20at%207.33.38%20PM.jpeg';

  return (
    <section className="sample-showcase" id="samples">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Crafted With Care</h2>
          <div className="title-underline"></div>
          <p className="section-intro">
            Every piece tells a story. Here's a glimpse of our handcrafted work, precision 
            printing, thoughtful design, and attention to detail in every creation.
          </p>
        </div>

        <div className="showcase-content">
          <div className="sample-card">
            <div className="sample-image-wrapper">
              <img 
                src={image7} 
                alt="Custom fridge magnet sample - handcrafted with precision" 
                className="sample-image"
              />
            </div>
            <div className="sample-caption">
              <p className="caption-text">
                Custom fridge magnet – printed with care and precision, designed to preserve 
                memories that matter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SampleShowcase;