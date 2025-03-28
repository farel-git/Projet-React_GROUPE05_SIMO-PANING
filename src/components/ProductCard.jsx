import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p><strong>Prix : {product.price}€</strong></p>
      <button onClick={() => addToCart(product)}>Ajouter au panier</button>
    </div>
  );
}

export default ProductCard;
