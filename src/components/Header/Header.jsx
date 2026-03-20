import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Gift } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import './Header.css';

const NAV_ITEMS = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Products', id: 'products' },
  { label: 'Testimonials', id: 'testimonials' },
  { label: 'Contact', id: 'contact' },
];

const Header = ({ navigate, currentPage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalItems } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    if (currentPage !== 'home') {
      navigate('home');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={`header${scrolled ? ' scrolled' : ''}`}>
        <div className="header-inner container">
          {/* Logo */}
          <button className="logo" onClick={() => navigate('home')} aria-label="Mini Gifts Story Home">
            <div className="logo-icon"><Gift size={20} /></div>
            <span className="logo-text">Mini Gifts Story</span>
          </button>

          {/* Desktop Nav */}
          <nav className="nav-desktop" aria-label="Main Navigation">
            {NAV_ITEMS.map(({ label, id }) => (
              <button key={id} className="nav-link" onClick={() => scrollTo(id)}>
                {label}
              </button>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="header-actions">
            <button
              className="cart-btn"
              onClick={() => navigate('cart')}
              aria-label={`Cart (${totalItems} items)`}
            >
              <ShoppingBag size={22} />
              {totalItems > 0 && (
                <span className="cart-badge">{totalItems > 9 ? '9+' : totalItems}</span>
              )}
            </button>
            <button
              className="menu-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu${menuOpen ? ' open' : ''}`} role="dialog" aria-label="Mobile menu">
        <div className="mobile-menu-inner">
          {NAV_ITEMS.map(({ label, id }) => (
            <button key={id} className="mobile-nav-link" onClick={() => scrollTo(id)}>
              {label}
            </button>
          ))}
          <button className="mobile-cart-btn" onClick={() => { setMenuOpen(false); navigate('cart'); }}>
            <ShoppingBag size={18} />
            View Cart {totalItems > 0 && <span className="mobile-badge">{totalItems}</span>}
          </button>
        </div>
      </div>

      {menuOpen && <div className="menu-overlay" onClick={() => setMenuOpen(false)} />}
    </>
  );
};

export default Header;
