import React from 'react';

function PaymentPopup({ onClose }) {
  return (
    <div className="popup">
      <div className="payment-popup-content">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>Regler le paiment</h2>
        <form>
          <label htmlFor="credit-card">Veuillez entrer votre numéro de carte de crédit :</label>
          <input
            type="text"
            id="credit-card"
            placeholder="1234 5678 9012 3456"
            style={{
              width: '100%', // Prendre toute la largeur
              padding: '10px', // Espacement interne
              marginTop: '10px', // Espacement externe
              borderRadius: '5px', // Arrondir les bords
              border: '1px solid #ccc',
            }}
          />
          <button type="submit" style={{ marginTop: '20px', padding: '10px 20px' }}>
            Payer
          </button>
        </form>
      </div>
    </div>
  );
}

export default PaymentPopup;
