import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ProductsByCategory.css'; // Assuming you have a CSS file for styling

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string; // Assuming there is a thumbnail URL in the product data
}

const ProductsByCategory: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/category/${categorySlug}`);
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    if (categorySlug) {
      fetchProducts();
    }
  }, [categorySlug]);

  return (
    <div className="products-container">
      <h2 className="category-title">{categorySlug}</h2>
      <div className="products-grid">
        {products.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`} className="product-card-link">
            <div className="product-card">
              <img src={product.thumbnail} alt={product.title} className="product-thumbnail" />
              <div className="product-details">
                <h3 className="product-title">{product.title}</h3>
                <p className="product-description">{product.description}</p>
                <p className="product-price">Price: ${product.price}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductsByCategory;







