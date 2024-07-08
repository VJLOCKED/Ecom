// import React from 'react';

// interface Product {
//   id: number;
//   title: string;
//   description: string;
//   price: number;
//   thumbnail: string;
// }

// const ProductCard: React.FC<Product> = ({ id, title, description, price, thumbnail }) => {
//   return (
//     <div className="product-card">
//       <img src={thumbnail} alt={title} />
//       <div className="product-info">
//         <h3>{title}</h3>
//         <p><strong>Price: </strong>${price}</p>
//         <p>{description}</p>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

// import React from 'react';
// import './Style.css';

// interface ProductCardProps {
//   id: number;
//   title: string;
//   description: string;
//   price: number;
//   thumbnail: string;
//   category : string;
// }

// const ProductCard: React.FC<ProductCardProps> = ({ id, title, description, price, thumbnail,category }) => {
//   const handleClick = () => {
//     console.log(`Product ${id} clicked`);
//   };

//   return (
//     <div className="product-card" onClick={handleClick}>
//       <img src={thumbnail} alt={title} />
//       <div className="product-card-content">
//         <h2>{title}</h2>
//         <p className="price"><b>${price}</b></p>
//         <p>{description}</p>
//         <h2>{category}</h2>
//       </div>
//     </div>
//   );
// };

// export default ProductCard;

// ProductCard.tsx
import React from 'react';
import './Style.css';

interface ProductCardProps {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  onClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, title, description, price, thumbnail, onClick }) => {
  return (
    <div className="product-card" onClick={onClick}>
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




