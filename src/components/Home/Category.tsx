import React, { useEffect, useState } from 'react';
import './Category.css';

interface Category {
  slug: string;
  name: string;
  url: string;
}

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    fetch('https://dummyjson.com/products/categories')
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error('Error fetching categories:', error));
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="categories-dropdown">
      <button className="dropdown-button" onClick={toggleDropdown}>
        Categories
      </button>
      {dropdownOpen && (
        <div className="dropdown-menu">
          {categories.map((category) => (
            <a key={category.slug} href={`/category/${category.slug}`} className="dropdown-item">
              {category.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Categories;


