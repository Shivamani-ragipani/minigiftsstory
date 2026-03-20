import React from 'react';
import { Trash2, Plus, Minus, ShoppingCart, ArrowLeft, Package } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import './Cart.css';

const CartItem = ({ item }) => {
  const { updateQuantity, removeItem } = useCart();

  return (
    <div className="cart-item">
      <div className="cart-item-img-wrap">
        <img src={item.image} alt={item.title} className="cart-item-img" />
      </div>
      <div className="cart-item-info">
        <h3 className="cart-item-name">{item.title}</h3>
        <p className="cart-item-price">₹{item.price} / piece</p>
        <div className="cart-item-qty">
          <button
            className="qty-btn"
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            aria-label="Decrease quantity"
          >
            <Minus size={14} />
          </button>
          <span className="qty-value">{item.quantity}</span>
          <button
            className="qty-btn"
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            aria-label="Increase quantity"
          >
            <Plus size={14} />
          </button>
        </div>
      </div>
      <div className="cart-item-right">
        <span className="cart-item-subtotal">₹{item.price * item.quantity}</span>
        <button
          className="cart-remove-btn"
          onClick={() => removeItem(item.id)}
          aria-label={`Remove ${item.title} from cart`}
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
};

const Cart = ({ navigate }) => {
  const { items, totalPrice, totalItems, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="cart-page cart-empty-page">
        <div className="cart-empty">
          <div className="empty-icon"><ShoppingCart size={60} /></div>
          <h2 className="empty-title">Your cart is empty</h2>
          <p className="empty-desc">Add some beautiful handcrafted gifts to your cart!</p>
          <button className="btn btn-primary" onClick={() => navigate('home')}>
            <ArrowLeft size={18} /> Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="container">
        <div className="cart-header">
          <button className="cart-back-btn" onClick={() => navigate('home')}>
            <ArrowLeft size={18} /> Back to Shop
          </button>
          <h1 className="cart-title">
            <ShoppingCart size={28} />
            Your Cart
            <span className="cart-count-badge">{totalItems} item{totalItems !== 1 ? 's' : ''}</span>
          </h1>
        </div>

        <div className="cart-layout">
          {/* Items List */}
          <div className="cart-items-col">
            <div className="cart-items-header">
              <span>Product</span>
              <span>Subtotal</span>
            </div>
            {items.map(item => <CartItem key={item.id} item={item} />)}

            <div className="cart-items-footer">
              <button className="clear-cart-btn" onClick={clearCart}>
                <Trash2 size={15} /> Clear Cart
              </button>
              <button className="continue-shopping-btn" onClick={() => navigate('home')}>
                <ArrowLeft size={15} /> Continue Shopping
              </button>
            </div>
          </div>

          {/* Summary */}
          <div className="cart-summary-col">
            <div className="cart-summary-card">
              <h2 className="summary-title">Order Summary</h2>

              <div className="summary-rows">
                {items.map(item => (
                  <div className="summary-row" key={item.id}>
                    <span className="sum-name">{item.title} × {item.quantity}</span>
                    <span className="sum-price">₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              <div className="summary-divider" />

              <div className="summary-row summary-total">
                <span>Total</span>
                <span className="total-amount">₹{totalPrice}</span>
              </div>

              <div className="summary-note">
                <Package size={14} />
                Delivery charges may apply. Final pricing confirmed on WhatsApp.
              </div>

              <button
                className="btn btn-primary checkout-btn"
                onClick={() => navigate('order')}
              >
                Proceed to Checkout →
              </button>

              <div className="summary-wa-note">
                <span>📱 Order will be confirmed via WhatsApp</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
