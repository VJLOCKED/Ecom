// AddToCart.tsx

import React from 'react';
import './AddToCart.css'; // Import the CSS file for styling

interface AddToCartProps {
  productId: number;
}

const AddToCart: React.FC<AddToCartProps> = ({ productId }) => {
  const addToCart = async () => {
    try {
      const response = await fetch('https://dummyjson.com/carts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId }),
      });
      if (!response.ok) {
        throw new Error('Failed to add to cart');
      }
      const data = await response.json();
      console.log('Added to cart:', data); // Log success response
    } catch (error) {
      console.error('Error adding to cart:', error);
    }
  };

  return (
    <button onClick={addToCart} className="add-to-cart-button">
      Add to Cart
    </button>
  );
};

export default AddToCart;
