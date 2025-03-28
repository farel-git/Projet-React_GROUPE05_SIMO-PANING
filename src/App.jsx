import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import Navbar from './components/Navbar';
import CartPopup from './components/CartPopup';
import PaymentPopup from './components/PaymentPopup';
import Footer from './components/Footer';
import './App.css';
import './index.css';

function App() {
  const [showCart, setShowCart] = useState(false);
  const [showPayment, setShowPayment] = useState(false);

  return (
    <div>
      <Navbar onCartClick={() => setShowCart(true)} />
      <HomePage />
      {showCart && (
        <CartPopup
          onClose={() => setShowCart(false)}
          onPayment={() => {
            setShowCart(false); // Fermer le panier
            setShowPayment(true); // Ouvrir le paiement
          }}
        />
      )}
      {showPayment && (
        <PaymentPopup onClose={() => setShowPayment(false)} />
      )}
      <Footer /> {/* Ajout du pied de page */}
    </div>
  );
}

export default App;
