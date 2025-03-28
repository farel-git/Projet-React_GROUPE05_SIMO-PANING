import React from 'react';
import products from '../assets/products.json';
import ProductCard from '../components/ProductCard';

function HomePage() {
  return (
    <div className="home-page">
      <h1>Nos Produits</h1>
      <div className="products-list">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
