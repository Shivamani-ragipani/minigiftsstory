import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo">
          <h1 className="logo-text">Mini Gifts Story</h1>
        </div>
        
        <nav className="nav">
          <ul className="nav-list">
            <li className="nav-item">
              <button onClick={() => scrollToSection('home')} className="nav-link">Home</button>
            </li>
            <li className="nav-item">
              <button onClick={() => scrollToSection('about')} className="nav-link">About</button>
            </li>
            <li className="nav-item">
              <button onClick={() => scrollToSection('products')} className="nav-link">Products</button>
            </li>
            <li className="nav-item">
              <button onClick={() => scrollToSection('contact')} className="nav-link">Contact</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;