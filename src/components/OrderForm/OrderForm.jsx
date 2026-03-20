import React, { useState } from 'react';
import { ArrowLeft, MessageCircle, User, Phone, MapPin, MessageSquare, Package, AlertCircle } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import './OrderForm.css';

const WHATSAPP_NUMBER = '919347897675';

const generateWAMessage = (form, items, total) => {
  const lines = [
    '🎁 *New Order — Mini Gifts Story*',
    '',
    '👤 *Customer Details*',
    `• Name: ${form.name}`,
    `• Phone: ${form.phone}`,
    `• Address: ${form.address}`,
    '',
    '🛒 *Order Items*',
    ...items.map(i => `• ${i.title} × ${i.quantity} = ₹${i.price * i.quantity}`),
    '',
    `💰 *Total: ₹${total}*`,
  ];

  if (form.message) {
    lines.push('', `📝 *Note:* ${form.message}`);
  }

  lines.push('', '— Sent via minigiftsstory.in');

  return lines.join('\n');
};

const FIELDS = [
  { id: 'name',    label: 'Full Name',       placeholder: 'e.g. Priya Sharma',          type: 'text',  icon: <User size={16} />,       required: true },
  { id: 'phone',   label: 'Phone Number',    placeholder: 'e.g. 9876543210',            type: 'tel',   icon: <Phone size={16} />,      required: true },
  { id: 'address', label: 'Delivery Address',placeholder: 'Street, City, State — PIN', type: 'text',  icon: <MapPin size={16} />,     required: true },
];

const OrderForm = ({ navigate }) => {
  const { items, totalPrice, clearCart } = useCart();
  const [form, setForm] = useState({ name: '', phone: '', address: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.phone.trim()) e.phone = 'Phone number is required';
    else if (!/^\+?[0-9]{7,15}$/.test(form.phone.replace(/\s/g, ''))) e.phone = 'Enter a valid phone number';
    if (!form.address.trim()) e.address = 'Delivery address is required';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});

    const message = generateWAMessage(form, items, totalPrice);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    setSubmitted(true);
    setTimeout(() => {
      clearCart();
      window.open(url, '_blank');
      navigate('home');
    }, 1200);
  };

  const handleChange = (id, val) => {
    setForm(f => ({ ...f, [id]: val }));
    if (errors[id]) setErrors(e => ({ ...e, [id]: '' }));
  };

  if (items.length === 0 && !submitted) {
    return (
      <div className="order-form-page">
        <div className="container">
          <div className="order-empty">
            <Package size={56} />
            <h2>No items in cart</h2>
            <p>Add products first, then checkout.</p>
            <button className="btn btn-primary" onClick={() => navigate('home')}>
              <ArrowLeft size={16} /> Go to Shop
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="order-form-page">
      <div className="container">
        <div className="order-header">
          <button className="order-back-btn" onClick={() => navigate('cart')}>
            <ArrowLeft size={18} /> Back to Cart
          </button>
          <h1 className="order-title">Complete Your Order</h1>
          <p className="order-subtitle">Fill in your details and we'll connect you on WhatsApp to confirm your order.</p>
        </div>

        <div className="order-layout">
          {/* Form */}
          <form className="order-form-card" onSubmit={handleSubmit} noValidate>
            <div className="form-section-title">
              <User size={18} /> Customer Details
            </div>

            {FIELDS.map(({ id, label, placeholder, type, icon, required }) => (
              <div className={`form-group${errors[id] ? ' has-error' : ''}`} key={id}>
                <label htmlFor={id} className="form-label">
                  {label} {required && <span className="required-star">*</span>}
                </label>
                <div className="input-wrap">
                  <span className="input-icon">{icon}</span>
                  <input
                    id={id}
                    type={type}
                    className="form-input"
                    placeholder={placeholder}
                    value={form[id]}
                    onChange={e => handleChange(id, e.target.value)}
                    required={required}
                    aria-describedby={errors[id] ? `${id}-error` : undefined}
                    aria-invalid={!!errors[id]}
                  />
                </div>
                {errors[id] && (
                  <span id={`${id}-error`} className="form-error" role="alert">
                    <AlertCircle size={13} /> {errors[id]}
                  </span>
                )}
              </div>
            ))}

            <div className="form-group" key="message">
              <label htmlFor="message" className="form-label">
                <MessageSquare size={15} style={{ display: 'inline', verticalAlign: 'middle', marginRight: 5 }} />
                Additional Notes <span className="optional-tag">Optional</span>
              </label>
              <textarea
                id="message"
                className="form-input form-textarea"
                placeholder="Any special instructions, customization details, or questions?"
                rows={4}
                value={form.message}
                onChange={e => handleChange('message', e.target.value)}
              />
            </div>

            <div className="form-wa-info">
              <MessageCircle size={16} />
              <span>After submitting, you'll be redirected to WhatsApp to confirm your order.</span>
            </div>

            <button
              type="submit"
              className={`btn btn-primary submit-order-btn${submitted ? ' submitted' : ''}`}
              disabled={submitted}
            >
              {submitted ? (
                <>✅ Order Sent! Redirecting...</>
              ) : (
                <><MessageCircle size={18} /> Send Order on WhatsApp</>
              )}
            </button>
          </form>

          {/* Order Summary */}
          <div className="order-summary-card">
            <h2 className="os-title">Order Summary</h2>
            <div className="os-items">
              {items.map(item => (
                <div className="os-item" key={item.id}>
                  <img src={item.image} alt={item.title} className="os-item-img" />
                  <div className="os-item-info">
                    <span className="os-item-name">{item.title}</span>
                    <span className="os-item-qty">Qty: {item.quantity}</span>
                  </div>
                  <span className="os-item-price">₹{item.price * item.quantity}</span>
                </div>
              ))}
            </div>
            <div className="os-total-row">
              <span>Total</span>
              <span className="os-total-val">₹{totalPrice}</span>
            </div>
            <p className="os-note">Final delivery charges will be communicated on WhatsApp.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
