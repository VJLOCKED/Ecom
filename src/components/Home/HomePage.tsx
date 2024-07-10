import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';
import Sidebar from './Sidebar';
import './Style.css';

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

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="app">
      <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <div className="product-list">
        {products.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <ProductCard {...product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;

