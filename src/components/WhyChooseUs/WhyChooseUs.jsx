import React from 'react';
import { Shield, Zap, Palette, Truck, Award, HeartHandshake } from 'lucide-react';
import './WhyChooseUs.css';

const REASONS = [
  { icon: <Palette size={28} />, title: '100% Custom Designs', desc: 'Every piece is uniquely crafted to match your vision. No templates — just your story told beautifully.' },
  { icon: <Award size={28} />, title: 'Premium Quality Print', desc: 'We use high-resolution UV printing on durable materials that last for years without fading.' },
  { icon: <Zap size={28} />, title: 'Quick Turnaround', desc: 'Fast production without cutting corners. Most orders are ready within 3–5 business days.' },
  { icon: <Truck size={28} />, title: 'Pan India Delivery', desc: 'We deliver across India with safe, padded packaging to ensure your gifts arrive perfectly.' },
  { icon: <Shield size={28} />, title: 'Satisfaction Guaranteed', desc: 'Not happy with your order? We fix it — no questions asked. Your satisfaction is our priority.' },
  { icon: <HeartHandshake size={28} />, title: 'Bulk & Corporate Orders', desc: 'Special pricing for bulk orders, corporate events, and weddings. Contact us for custom quotes.' },
];

const WhyChooseUs = () => (
  <section className="why-section" id="why-us" aria-label="Why Choose Mini Gifts Story">
    <div className="container">
      <div className="why-header">
        <span className="section-badge">🏆 Why Us</span>
        <h2 className="section-title">Why Choose Mini Gifts Story?</h2>
        <div className="title-underline centered" />
        <p className="section-subtitle" style={{ textAlign: 'center', margin: '0 auto' }}>
          We're not just a gifting store — we're memory keepers who care deeply about every single order.
        </p>
      </div>

      <div className="why-grid">
        {REASONS.map(({ icon, title, desc }) => (
          <div className="why-card" key={title}>
            <div className="why-icon">{icon}</div>
            <h3 className="why-title">{title}</h3>
            <p className="why-desc">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
