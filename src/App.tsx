// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import HomePage from './components/Home/HomePage';
// import ProductDetail from './components/Home/ProductDetail';
// import ProductsByCategory from './components/Home/ProductsByCategory';
// import CartPage from './components/Home/CartPage';

// const App: React.FC = () => {
//   return (
//     <Router>
//       <div className="app">
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/product/:id" element={<ProductDetail />} />
//           <Route path="/category/:categorySlug" element={<ProductsByCategory />} />
//           <Route path="/cart" element={<CartPage cart={[]} removeFromCart={function (productId: number): void {
//             throw new Error('Function not implemented.');
//           } } />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage, { Product } from './components/Home/HomePage';
import ProductDetail from './components/Home/ProductDetail';
import ProductsByCategory from './components/Home/ProductsByCategory';
import CartPage from './components/Home/CartPage';

const App: React.FC = () => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) =>
      prevCart.filter((product) => product.id !== productId)
    );
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route
            path="/category/:categorySlug"
            element={<ProductsByCategory />}
          />
          <Route path="/" element={<HomePage addToCart={addToCart} />} />
          <Route
            path="/cart"
            element={<CartPage cart={cart} removeFromCart={removeFromCart} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
