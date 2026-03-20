import React, { useState } from 'react';
import { Phone, Mail, Instagram, MapPin, MessageCircle } from 'lucide-react';
import './Contact.css';
import qrImage from '../../assets/images/QR.png';

const WHATSAPP_NUMBER = '919347897675';

const Contact = () => {
  const [form, setForm] = useState({ name: '', message: '' });
  const [error, setError] = useState('');

  const handleWA = () => {
     if (!form.name.trim()) {
      setError('Name is required');
      return;
    }

    setError('');
    const text = form.name
      ? `Hi Mini Gifts Story! I'm ${form.name}. ${form.message || 'I want to place an order.'}`
      : 'Hi Mini Gifts Story! I want to place an order.';
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className="contact-section" id="contact" aria-label="Contact Mini Gifts Story">
      <div className="container">
        <div className="contact-header">
          <span className="section-badge">📞 Contact Us</span>
          <h2 className="section-title">Let's Create Something Beautiful</h2>
          <div className="title-underline centered" />
          <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto' }}>
            Ready to bring your vision to life? Reach out and we'll get back to you quickly.
          </p>
        </div>

        <div className="contact-layout">
          {/* Info Cards */}
          <div className="contact-info-col">
            <a href="tel:+919347897675" className="contact-info-card" aria-label="Call us">
              <div className="ci-icon"><Phone size={22} /></div>
              <div>
                <div className="ci-label">Phone / WhatsApp</div>
                <div className="ci-value">+91 9347897675</div>
              </div>
              <div className="ci-arrow">→</div>
            </a>

            <a href="mailto:minigiftsstory@gmail.com" className="contact-info-card" aria-label="Email us">
              <div className="ci-icon"><Mail size={22} /></div>
              <div>
                <div className="ci-label">Email</div>
                <div className="ci-value">minigiftsstory@gmail.com</div>
              </div>
              <div className="ci-arrow">→</div>
            </a>

            <a href="https://www.instagram.com/minigiftsstory.in/" target="_blank" rel="noopener noreferrer" className="contact-info-card" aria-label="Follow on Instagram">
              <div className="ci-icon ci-insta"><Instagram size={22} /></div>
              <div>
                <div className="ci-label">Instagram</div>
                <div className="ci-value">@minigiftsstory.in</div>
              </div>
              <div className="ci-arrow">→</div>
            </a>

            <div className="contact-info-card no-hover">
              <div className="ci-icon ci-location"><MapPin size={22} /></div>
              <div>
                <div className="ci-label">Serving</div>
                <div className="ci-value">Pan India — Online Orders</div>
              </div>
            </div>

            {/* Quick WhatsApp */}
            <div className="quick-wa-card">
              <h3 className="qwa-title">Quick Message</h3>
               <input
            className="qwa-input"
            placeholder="Your name"
            value={form.name}
            onChange={e => {
              setForm(f => ({ ...f, name: e.target.value }));
              if (error) setError('');
            }}
            aria-label="Your name"
          />

          {error && <p style={{ color: 'red', fontSize: '14px' }}>{error}</p>}

              <textarea
                className="qwa-textarea"
                placeholder="What would you like to order?"
                rows={3}
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                aria-label="Your message"
              />
              <button className="qwa-btn btn btn-primary" onClick={handleWA}>
                <MessageCircle size={18} />
                Send on WhatsApp
              </button>
            </div>
          </div>

          {/* QR + CTA */}
          <div className="contact-qr-col">
            <div className="qr-card">
              <div className="qr-badge">Scan to Order</div>
              <img src={qrImage} alt="WhatsApp QR code for Mini Gifts Story booking" className="qr-img" />
              <p className="qr-text">Scan with your phone camera to open WhatsApp instantly</p>
              <div className="qr-divider">or</div>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi! I'd like to place an order with Mini Gifts Story.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary qr-wa-btn"
                aria-label="Open WhatsApp chat"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>
            </div>

            <div className="contact-hours-card">
              <h3 className="hours-title">⏰ Response Time</h3>
              <div className="hours-row"><span>Mon – Sat</span><span className="hours-val">9 AM – 8 PM IST</span></div>
              <div className="hours-row"><span>Sunday</span><span className="hours-val">10 AM – 5 PM IST</span></div>
              <p className="hours-note">We typically reply within 1–2 hours on WhatsApp!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
