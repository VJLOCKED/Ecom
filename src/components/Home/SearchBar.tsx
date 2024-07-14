import React, { useState } from 'react'
import './SearchBar.css'
export default function SearchBar() {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
      fetch(`https://dummyjson.com/products/search?q=${searchQuery}`)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error fetching products:', error));
    };
    
  return (
    <div>
                <div className="search-bar">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={handleSearch}>
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
          </div>
    </div>
  )
}
