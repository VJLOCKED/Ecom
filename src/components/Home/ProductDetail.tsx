// ProductDetail.tsx
import React from 'react';
import './ProductDetail.css';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  tags: string[];
  brand: string;
  category: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
  }[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  images: string[];
}

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack }) => {
  return (
    <div className="product-detail">
      <button className="back-button" onClick={onBack}>Back to Products</button>
      <h2>{product.title}</h2>
      <img src={product.thumbnail} alt={product.title} />
      <p className="price">Price: ${product.price}</p>
      <p>{product.description}</p>
      <div className="product-tags">
        <h3>Tags:</h3>
        <ul>
          {product.tags.map((tag, index) => (
            <li key={index}>{tag}</li>
          ))}
        </ul>
      </div>
      <div className="product-dimensions">
        <h3>Dimensions:</h3>
        <p>Width: {product.dimensions.width} cm</p>
        <p>Height: {product.dimensions.height} cm</p>
        <p>Depth: {product.dimensions.depth} cm</p>
      </div>
      <p>Brand: {product.brand}</p>
      <p>Category: {product.category}</p>
      <p>SKU: {product.sku}</p>
      <p>Weight: {product.weight} grams</p>
      <p>Warranty Information: {product.warrantyInformation}</p>
      <p>Shipping Information: {product.shippingInformation}</p>
      <p>Availability Status: {product.availabilityStatus}</p>
      <div className="product-reviews">
        <h3>Reviews:</h3>
        {product.reviews.map((review, index) => (
          <div key={index} className="review">
            <p>Rating: {review.rating}</p>
            <p>Comment: {review.comment}</p>
            <p className="reviewer-name">Reviewer: {review.reviewerName}</p>
            <p>Date: {new Date(review.date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
      <p>Return Policy: {product.returnPolicy}</p>
      <p>Minimum Order Quantity: {product.minimumOrderQuantity}</p>
      <p>Barcode: {product.meta.barcode}</p>
    </div>
  );
};

export default ProductDetail;


