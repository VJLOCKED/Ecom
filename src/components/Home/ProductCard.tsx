import React from 'react';
import './Style.css';

interface ProductCardProps {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, title, description, price, thumbnail }) => {
  return (
    <div className="product-card">
      <img src={thumbnail} alt={title} />
      <div className="product-card-content">
        <h2>{title}</h2>
        <p className="price"><b>${price}</b></p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProductCard;





