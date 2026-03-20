import React, { useState } from 'react';
import { ShoppingCart, Eye, Star, Check } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import './Products.css';
import image10 from '../../assets/images/11.jpeg';
import image1 from '../../assets/images/1.jpeg';
import image3 from '../../assets/images/3.jpeg';
import image5 from '../../assets/images/5.jpeg';
import image7 from '../../assets/images/4.jpeg';
import image8 from '../../assets/images/fridgeImg2.jpg';

const PRODUCTS = [
  {
    id: 1,
    image: image10,
    title: 'Fridge Magnets',
    category: 'Popular',
    price: 85,
    originalPrice: 100,
    description: 'Custom-designed fridge magnets that bring your memories to life. Perfect for event souvenirs and personal keepsakes.',
    features: ['Personalized designs', 'High-quality printing', 'Strong magnetic hold'],
  },
  {
    id: 2,
    image: image1,
    title: 'Custom Badges',
    category: 'Trending',
    price: 85,
    originalPrice: 100,
    description: 'Unique badges for events, celebrations, and special occasions. Memorable keepsakes everyone will cherish.',
    features: ['Custom text & images', 'Various sizes available', 'Pin or magnetic backing'],
  },
  {
    id: 3,
    image: image3,
    title: 'Mini Gift Sets',
    category: 'New',
    price: 85,
    originalPrice: 100,
    description: 'Thoughtfully crafted mini gifts perfect for party favors, thank you gifts, or expressing love to someone special.',
    features: ['Personalized packaging', 'Unique designs', 'Perfect for all occasions'],
  },
  {
    id: 4,
    image: image8,
    title: 'Photo Magnets',
    category: 'Best Seller',
    price: 85,
    originalPrice: 100,
    description: 'Turn your favorite photos into beautiful fridge magnets. A unique way to display and gift your precious memories.',
    features: ['Crystal clear print', 'Durable finish', 'Custom sizes & shapes'],
  },
  {
    id: 5,
    image: image5,
    title: 'Event Badges',
    category: 'Corporate',
    price: 85,
    originalPrice: 100,
    description: 'Professional badges for corporate events, weddings, and conferences. Brand your events beautifully.',
    features: ['Bulk orders welcome', 'Corporate branding', 'Fast turnaround'],
  },
  {
    id: 6,
    image: image7,
    title: 'Bottle Opener Magnets',
    category: 'Unique',
    price: 85,
    originalPrice: 100,
    description: 'Dual-purpose bottle opener magnets — functional and fun! Perfect for home bars and gifting.',
    features: ['Dual-purpose design', 'Strong opener build', 'Custom branding area'],
  },
];

const CATEGORIES = ['All', 'Popular', 'Trending', 'Corporate', 'Unique'];

const ProductCard = ({ product }) => {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        <img
          src={product.image}
          alt={`${product.title} - personalized gift by Mini Gifts Story`}
          className="product-img"
          loading="lazy"
        />
        <span className={`product-category-badge cat-${product.category.toLowerCase().replace(/\s+/, '-')}`}>
          {product.category}
        </span>
        <span className="product-discount-badge">-{discount}%</span>
        <div className="product-overlay">
          <button className="overlay-btn" onClick={handleAddToCart} aria-label={`Add ${product.title} to cart`}>
            <Eye size={16} /> Quick Add
          </button>
        </div>
      </div>

      <div className="product-body">
        <div className="product-rating">
          {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" className="star-icon" />)}
          <span className="rating-text">(24)</span>
        </div>

        <h3 className="product-name">{product.title}</h3>
        <p className="product-desc">{product.description}</p>

        <ul className="product-features">
          {product.features.map(f => (
            <li key={f} className="product-feature">
              <Check size={13} className="check-icon" />
              {f}
            </li>
          ))}
        </ul>

        <div className="product-footer">
          <div className="product-price">
            <span className="price-current">₹{product.price}<small>/piece</small></span>
            <span className="price-original">₹{product.originalPrice}</span>
          </div>
          <button
            className={`add-cart-btn ${added ? 'added' : ''}`}
            onClick={handleAddToCart}
            aria-label={added ? 'Added to cart' : `Add ${product.title} to cart`}
          >
            {added ? <><Check size={16} /> Added!</> : <><ShoppingCart size={16} /> Add to Cart</>}
          </button>
        </div>
      </div>
    </article>
  );
};

const Products = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filtered = activeFilter === 'All'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeFilter);

  return (
    <section className="products-section" id="products" aria-label="Our Products">
      <div className="container">
        <div className="products-header">
          <span className="section-badge">🛍️ Shop Now</span>
          <h2 className="section-title">Our Handcrafted Collection</h2>
          <div className="title-underline" />
          <p className="section-subtitle">
            Every product is made-to-order with your personal touch — perfect for any occasion.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="product-filters" role="tablist" aria-label="Filter products">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeFilter === cat}
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="products-grid">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="products-cta">
          <p className="cta-text">Want something custom? We take special orders too!</p>
          <a href="tel:+919347897675" className="btn btn-outline">
            📞 Call for Custom Order
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
