import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import './Style.css'

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;
}

const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.products))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  return (
    <div className="app">
      <h1><b>Product List</b></h1><br />
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
};

export default App;

