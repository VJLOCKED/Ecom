import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css';

interface Product {
  id: number;
  title: string;
}

const SearchBar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (searchQuery) {
        try {
          const response = await fetch(`https://dummyjson.com/products/search?q=${searchQuery}`);
          const data = await response.json();
          setSuggestions(data.products);
        } catch (error) {
          console.error('Error fetching products:', error);
        }
      } else {
        setSuggestions([]);
      }
    };

    fetchSuggestions();
  }, [searchQuery]);

  const handleSelect = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M10.742 9.742a5.5 5.5 0 1 0-1.487 1.487l3.525 3.525a1 1 0 0 0 1.414-1.414l-3.525-3.525zM2 6.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0z"
          />
        </svg>
      </button>
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((product) => (
            <li
              key={product.id}
              onClick={() => handleSelect(product.id)}
              className="suggestion-item"
            >
              {product.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
