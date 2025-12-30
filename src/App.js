import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About.jsx';
import WhatWeCreate from './components/WhatWeCreate/WhatWeCreate.jsx';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs.jsx';
import Products from './components/Products/Products.jsx';
import ProductPricing from './components/ProductPricing/ProductPricing.jsx';
import ClientTestimonials from './components/Testimonials/ClientTestimonials.jsx';
import HowToOrder from './components/Order/HowToOrder.jsx';
import Contact from './components/Contact/Contact.jsx';
import ThankYou from './components/ThankYou/ThankYou.jsx';
import Footer from './components/Footer/Footer.jsx';
import SampleShowcase from './components/ShowCase/SampleShowcase.jsx';


function App() {
  return (
    <div className="App">
      <Header />
      <main id="main" role="main">
        <Hero />
        <About />
        <WhatWeCreate />
        <WhyChooseUs />
        <Products />
        <ProductPricing />
        <SampleShowcase />
        <ClientTestimonials />
        <HowToOrder />
        <Contact />
        <ThankYou />
      </main>
      <Footer />
    </div>
  );
}

export default App;