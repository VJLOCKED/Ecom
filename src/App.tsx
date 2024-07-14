import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import ProductDetail from './components/Home/ProductDetail';
import Sidebar from './components/Home/Sidebar';
import ProductsByCategory from './components/Home/ProductsByCategory';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/category/:categorySlug" element={<ProductsByCategory />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
