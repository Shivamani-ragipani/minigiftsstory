import React, { useState } from 'react';
import './SampleShowcase.css';
import img1 from '../../assets/images/1.jpeg';
import img2 from '../../assets/images/2.jpeg';
import img3 from '../../assets/images/3.jpeg';
import img4 from '../../assets/images/4.jpeg';
import img5 from '../../assets/images/5.jpeg';
import img6 from '../../assets/images/6.jpeg';
import img7 from '../../assets/images/7.jpeg';
import img8 from '../../assets/images/8.jpeg';
import img9 from '../../assets/images/9.jpeg';
import img10 from '../../assets/images/10.jpeg';
import img11 from '../../assets/images/11.jpeg';

const GALLERY = [
  { src: img1,  alt: 'Custom badge - Mini Gifts Story',    label: 'Custom Badge' },
  { src: img2,  alt: 'Personalized gift - Mini Gifts',     label: 'Mini Gift' },
  { src: img3,  alt: 'Mini gift set - personalized',       label: 'Gift Set' },
  { src: img4,  alt: 'Bottle opener magnet custom',        label: 'Bottle Opener' },
  { src: img5,  alt: 'Event badge custom made',            label: 'Event Badge' },
  { src: img6,  alt: 'Handcrafted gift keepsake',          label: 'Keepsake' },
  { src: img7,  alt: 'Photo fridge magnet custom',         label: 'Photo Magnet' },
  { src: img8,  alt: 'Personalized fridge magnet',         label: 'Fridge Magnet' },
  { src: img9,  alt: 'Custom return gift',                 label: 'Return Gift' },
  { src: img10, alt: 'Wedding favor custom made',          label: 'Wedding Favor' },
  { src: img11, alt: 'Premium fridge magnet collection',   label: 'Magnet Set' },
];

const SampleShowcase = () => {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section className="showcase-section" id="showcase" aria-label="Product Gallery">
      <div className="container">
        <div className="showcase-header">
          <span className="section-badge">📸 Our Work</span>
          <h2 className="section-title">See What We Create</h2>
          <div className="title-underline centered" />
          <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto' }}>
            Real products, real smiles. Browse our showcase of handcrafted gifts and keepsakes.
          </p>
        </div>

        <div className="showcase-grid">
          {GALLERY.map((item, i) => (
            <button
              key={i}
              className="showcase-item"
              onClick={() => setLightbox(item)}
              aria-label={`View ${item.label}`}
            >
              <img src={item.src} alt={item.alt} className="showcase-img" loading="lazy" />
              <div className="showcase-overlay">
                <span className="showcase-label">{item.label}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)} role="dialog" aria-label="Image preview">
          <button className="lightbox-close" onClick={() => setLightbox(null)} aria-label="Close">✕</button>
          <div className="lightbox-inner" onClick={e => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.alt} className="lightbox-img" />
            <p className="lightbox-caption">{lightbox.alt}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default SampleShowcase;
