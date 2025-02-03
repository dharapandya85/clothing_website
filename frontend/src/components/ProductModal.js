import React from 'react';
import './ProductModal.css';

const ProductModal = ({ product, onClose }) => {
  return (
    <div className="product-modal">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <div className="modal-actions">
          <button className="add-to-cart">Add to Cart</button>
          <button className="buy-now">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
