import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from './HomePage'; // Assuming Product interface is defined in HomePage.tsx
import './CartPage.css';

interface Props {
  cart: Product[];
  removeFromCart: (productId: number) => void;
}

const CartPage: React.FC<Props> = ({ cart, removeFromCart }) => {
  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((product) => (
            <li key={product.id}>
              <Link to={`/product/${product.id}`}>
                <img src={product.thumbnail} alt={product.title} className="cart-item-thumbnail" />
              </Link>
              <div className="cart-item-info">
                <h3>{product.title}</h3>
                <p>Price: ₹{product.price}</p>
                <button onClick={() => removeFromCart(product.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <Link to="/">Back to Homepage</Link>
    </div>
  );
};

export default CartPage;


