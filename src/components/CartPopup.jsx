import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function CartPopup({ onClose, onPayment }) {
  const { cart, updateQuantity, totalPrice } = useContext(CartContext);

  return (
    <div className="popup">
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>Panier</h2>
        <ul>
          {cart.map(item => (
            <li key={item.id}>
              <span>{item.name} - {item.price}€</span>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                <span style={{ margin: '0 10px' }}>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
              </div>
            </li>
          ))}
        </ul>
        <h3>Total : {totalPrice.toFixed(2)}€</h3>
        <button 
          disabled={totalPrice === 0}
          onClick={onPayment}
        >
          Payer
        </button>
      </div>
    </div>
  );
}

export default CartPopup;
