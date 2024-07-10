import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/Home/HomePage';
import ProductDetail from './components/Home/ProductDetail';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
