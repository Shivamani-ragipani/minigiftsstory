import React, { createContext, useContext, useReducer, useCallback } from 'react';

const CartContext = createContext(null);

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(item => item.id === action.payload.id);
      if (existing) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return { ...state, items: [...state.items, { ...action.payload, quantity: 1 }] };
    }
    case 'REMOVE_ITEM':
      return { ...state, items: state.items.filter(item => item.id !== action.payload) };
    case 'UPDATE_QUANTITY': {
      if (action.payload.quantity <= 0) {
        return { ...state, items: state.items.filter(item => item.id !== action.payload.id) };
      }
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    }
    case 'CLEAR_CART':
      return { ...state, items: [] };
    default:
      return state;
  }
};

export const CartProvider = ({ children, navigate }) => {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const addItem = useCallback((product) => dispatch({ type: 'ADD_ITEM', payload: product }), []);
  const removeItem = useCallback((id) => dispatch({ type: 'REMOVE_ITEM', payload: id }), []);
  const updateQuantity = useCallback((id, quantity) =>
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } }), []);
  const clearCart = useCallback(() => dispatch({ type: 'CLEAR_CART' }), []);

  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = state.items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{
      items: state.items,
      addItem,
      removeItem,
      updateQuantity,
      clearCart,
      totalItems,
      totalPrice,
      navigate,
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside CartProvider');
  return ctx;
};
