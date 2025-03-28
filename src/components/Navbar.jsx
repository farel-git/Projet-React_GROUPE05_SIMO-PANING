import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function Navbar({ onCartClick }) {
  const { cart } = useContext(CartContext);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="navbar">
      <h1>Ma Boutique</h1>
      <div className="cart-icon" onClick={onCartClick}>
        🛒
        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
      </div>
    </div>
  );
}

export default Navbar;
