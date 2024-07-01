import React from 'react';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

const ProductCard: React.FC<Product> = ({ id, title, description, price, thumbnail }) => {
  return (
    <div className="product-card">
      <img src={thumbnail} alt={title} />
      <div className="product-info">
        <h3>{title}</h3>
        <p><strong>Price: </strong>${price}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;

