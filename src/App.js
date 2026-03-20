import React, { useState } from 'react';
import './App.css';
import { CartProvider } from './context/CartContext';

import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Products from './components/Products/Products';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import ProductPricing from './components/ProductPricing/ProductPricing';
import SampleShowcase from './components/ShowCase/SampleShowcase';
import ClientTestimonials from './components/Testimonials/ClientTestimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import OrderForm from './components/OrderForm/OrderForm';
import WhatsAppFloat from './components/WhatsAppFloat/WhatsAppFloat';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const navigate = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <CartProvider navigate={navigate}>
      <div className="App">
        <Header navigate={navigate} currentPage={currentPage} />

        {currentPage === 'home' && (
          <main id="main" role="main">
            <Hero navigate={navigate} />
            <About />
            <Products navigate={navigate} />
            <WhyChooseUs />
            <ProductPricing navigate={navigate} />
            <SampleShowcase />
            <ClientTestimonials />
            <Contact />
          </main>
        )}

        {currentPage === 'cart' && <Cart navigate={navigate} />}
        {currentPage === 'order' && <OrderForm navigate={navigate} />}

        <Footer navigate={navigate} />
        <WhatsAppFloat />
      </div>
    </CartProvider>
  );
}

export default App;