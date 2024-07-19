//adding cart count 

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import './Style.css'; // Assume you have your styles defined here

export interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
}

const PAGE_SIZE = 15; // Number of products per page

interface HomePageProps {
  addToCart: (product: Product) => void;
}

const HomePage: React.FC<HomePageProps> = ({ addToCart }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [cartItemCount, setCartItemCount] = useState(0); // State to hold cart item count
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [pageInput, setPageInput] = useState('');

  const navigate = useNavigate(); // Use navigate from react-router-dom

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  const fetchProducts = (page: number) => {
    const skip = (page - 1) * PAGE_SIZE;
    fetch(`https://dummyjson.com/products?limit=${PAGE_SIZE}&skip=${skip}&select=title,price,thumbnail`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setTotalPages(Math.ceil(data.total / PAGE_SIZE));
      })
      .catch((error) => console.error('Error fetching products:', error));
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleJumpToPage = () => {
    const pageNumber = parseInt(pageInput);
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    } else {
      alert('Invalid page number');
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleAddToCart = (product: Product) => {
    console.log('Added to cart:', product);
    addToCart(product);
    setCartItemCount((prevCount) => prevCount + 1); // Increment cart count
  };

  const handleViewMore = (productId: number) => {
    navigate(`/product/${productId}`); // Navigate to product details page
  };

  return (
    <div className="app">
      <Sidebar 
        isSidebarOpen={isSidebarOpen} 
        toggleSidebar={toggleSidebar} 
        cartItemCount={cartItemCount} // Pass cart item count
      />

      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.thumbnail} alt={product.title} className="product-thumbnail" />
            <div className="product-details">
              <h3>{product.title}</h3>
              <p>${product.price.toFixed(2)}</p>
              <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>Add to Cart</button>
              <button className="view-more-btn" onClick={() => handleViewMore(product.id)}>View More</button>
            </div>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          Prev
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>

      <div className="jump-to-page">
        <input
          type="number"
          value={pageInput}
          onChange={(e) => setPageInput(e.target.value)}
          placeholder="Page number"
        />
        <button onClick={handleJumpToPage}>Go</button>
      </div>
    </div>
  );
};

export default HomePage;



// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Sidebar from './Sidebar';
// import './Style.css'; // Assume you have your styles defined here

// export interface Product {
//   id: number;
//   title: string;
//   description: string;
//   price: number;
//   thumbnail: string;
//   tags: string[];
//   brand: string;
//   category: string;
//   sku: string;
//   weight: number;
//   dimensions: {
//     width: number;
//     height: number;
//     depth: number;
//   };
//   warrantyInformation: string;
//   shippingInformation: string;
//   availabilityStatus: string;
//   reviews: {
//     rating: number;
//     comment: string;
//     date: string;
//     reviewerName: string;
//     reviewerEmail: string;
//   }[];
//   returnPolicy: string;
//   minimumOrderQuantity: number;
//   meta: {
//     createdAt: string;
//     updatedAt: string;
//     barcode: string;
//     qrCode: string;
//   };
//   images: {
//     url: string;
//   }[];
// }

// const PAGE_SIZE = 15; // Number of products per page

// interface HomePageProps {
//   addToCart: (product: Product) => void;
// }

// const HomePage: React.FC<HomePageProps> = ({ addToCart }) => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [pageInput, setPageInput] = useState('');

//   const navigate = useNavigate(); // Use navigate from react-router-dom

//   useEffect(() => {
//     fetchProducts(currentPage);
//   }, [currentPage]);

//   const fetchProducts = (page: number) => {
//     const skip = (page - 1) * PAGE_SIZE;
//     fetch(`https://dummyjson.com/products?limit=${PAGE_SIZE}&skip=${skip}&select=title,price,thumbnail`)
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return res.json();
//       })
//       .then((data) => {
//         setProducts(data.products);
//         setTotalPages(Math.ceil(data.total / PAGE_SIZE));
//       })
//       .catch((error) => console.error('Error fetching products:', error));
//   };

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePrevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleJumpToPage = () => {
//     const pageNumber = parseInt(pageInput);
//     if (pageNumber > 0 && pageNumber <= totalPages) {
//       setCurrentPage(pageNumber);
//     } else {
//       alert('Invalid page number');
//     }
//   };

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const handleAddToCart = (product: Product) => {
//     console.log('Added to cart:', product);
//     addToCart(product);
//   };

//   const handleViewMore = (productId: number) => {
//     navigate(`/product/${productId}`); // Navigate to product details page
//   };

//   return (
//     <div className="app">
//       <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

//       <div className="product-list">
//         {products.map((product) => (
//           <div key={product.id} className="product-card">
//             <img src={product.thumbnail} alt={product.title} className="product-thumbnail" />
//             <div className="product-details">
//               <h3>{product.title}</h3>
//               <p>${product.price.toFixed(2)}</p>
//               <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>Add to Cart</button>
//               <button className="view-more-btn" onClick={() => handleViewMore(product.id)}>View More</button>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="pagination">
//         <button onClick={handlePrevPage} disabled={currentPage === 1}>
//           Prev
//         </button>
//         <span>
//           Page {currentPage} of {totalPages}
//         </span>
//         <button onClick={handleNextPage} disabled={currentPage === totalPages}>
//           Next
//         </button>
//       </div>

//       <div className="jump-to-page">
//         <input
//           type="number"
//           value={pageInput}
//           onChange={(e) => setPageInput(e.target.value)}
//           placeholder="Page number"
//         />
//         <button onClick={handleJumpToPage}>Go</button>
//       </div>
//     </div>
//   );
// };

// export default HomePage;


// import React, { useEffect, useState } from 'react';
// import Sidebar from './Sidebar';
// import './Style.css'; // Assume you have your styles defined here

// export interface Product {
//   id: number;
//   title: string;
//   description: string;
//   price: number;
//   thumbnail: string;
//   tags: string[];
//   brand: string;
//   category: string;
//   sku: string;
//   weight: number;
//   dimensions: {
//     width: number;
//     height: number;
//     depth: number;
//   };
//   warrantyInformation: string;
//   shippingInformation: string;
//   availabilityStatus: string;
//   reviews: {
//     rating: number;
//     comment: string;
//     date: string;
//     reviewerName: string;
//     reviewerEmail: string;
//   }[];
//   returnPolicy: string;
//   minimumOrderQuantity: number;
//   meta: {
//     createdAt: string;
//     updatedAt: string;
//     barcode: string;
//     qrCode: string;
//   };
//   images: {
//     url: string;
//   }[];
// }

// const PAGE_SIZE = 12; // Number of products per page

// interface HomePageProps {
//   addToCart: (product: Product) => void;
// }

// const HomePage: React.FC<HomePageProps> = ({ addToCart }) => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [pageInput, setPageInput] = useState('');

//   useEffect(() => {
//     fetchProducts(currentPage);
//   }, [currentPage]);

//   const fetchProducts = (page: number) => {
//     const skip = (page - 1) * PAGE_SIZE;
//     fetch(`https://dummyjson.com/products?limit=${PAGE_SIZE}&skip=${skip}&select=title,price,thumbnail`)
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return res.json();
//       })
//       .then((data) => {
//         setProducts(data.products);
//         setTotalPages(Math.ceil(data.total / PAGE_SIZE));
//       })
//       .catch((error) => console.error('Error fetching products:', error));
//   };

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePrevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleJumpToPage = () => {
//     const pageNumber = parseInt(pageInput);
//     if (pageNumber > 0 && pageNumber <= totalPages) {
//       setCurrentPage(pageNumber);
//     } else {
//       alert('Invalid page number');
//     }
//   };

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const handleAddToCart = (product: Product) => {
//     console.log('Added to cart:', product);
//     addToCart(product);
//   };

//   return (
//     <div className="app">
//       <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

//       <div className="product-list">
//         {products.map((product) => (
//           <div key={product.id} className="product-card">
//             <img src={product.thumbnail} alt={product.title} className="product-thumbnail" />
//             <div className="product-details">
//               <h3>{product.title}</h3>
//               <p>${product.price.toFixed(2)}</p>
//               <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>Add to Cart</button>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="pagination">
//         <button onClick={handlePrevPage} disabled={currentPage === 1}>
//           Prev
//         </button>
//         <span>
//           Page {currentPage} of {totalPages}
//         </span>
//         <button onClick={handleNextPage} disabled={currentPage === totalPages}>
//           Next
//         </button>
//       </div>

//       <div className="jump-to-page">
//         <input
//           type="number"
//           value={pageInput}
//           onChange={(e) => setPageInput(e.target.value)}
//           placeholder="Page number"
//         />
//         <button onClick={handleJumpToPage}>Go</button>
//       </div>
//     </div>
//   );
// };

// export default HomePage;


// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import ProductCard from './ProductCard';
// import Sidebar from './Sidebar';
// import './Style.css';

// interface Product {
//   id: number;
//   title: string;
//   description: string;
//   price: number;
//   thumbnail: string;
//   tags: string[];
//   brand: string;
//   category: string;
//   sku: string;
//   weight: number;
//   dimensions: {
//     width: number;
//     height: number;
//     depth: number;
//   };
//   warrantyInformation: string;
//   shippingInformation: string;
//   availabilityStatus: string;
//   reviews: {
//     rating: number;
//     comment: string;
//     date: string;
//     reviewerName: string;
//     reviewerEmail: string;
//   }[];
//   returnPolicy: string;
//   minimumOrderQuantity: number;
//   meta: {
//     createdAt: string;
//     updatedAt: string;
//     barcode: string;
//     qrCode: string;
//   };
//   images: {
//     url: string; // Assuming images are stored with a URL field
//   }[];
// }

// const PAGE_SIZE = 12; // Number of products per page

// const HomePage: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [pageInput, setPageInput] = useState('');

//   useEffect(() => {
//     fetchProducts(currentPage);
//   }, [currentPage]);

//   const fetchProducts = (page: number) => {
//     const skip = (page - 1) * PAGE_SIZE;
//     fetch(`https://dummyjson.com/products?limit=${PAGE_SIZE}&skip=${skip}&select=title,price,thumbnail`)
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return res.json();
//       })
//       .then((data) => {
//         setProducts(data.products);
//         setTotalPages(Math.ceil(data.total / PAGE_SIZE));
//       })
//       .catch((error) => console.error('Error fetching products:', error));
//   };

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePrevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleJumpToPage = () => {
//     const pageNumber = parseInt(pageInput);
//     if (pageNumber > 0 && pageNumber <= totalPages) {
//       setCurrentPage(pageNumber);
//     } else {
//       alert('Invalid page number');
//     }
//   };

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="app">
//       <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

//       <div className="product-list">
//         {products.map((product) => (
//           <Link key={product.id} to={`/product/${product.id}`}>
//             <ProductCard {...product} />
//           </Link>
//         ))}
//       </div>

//       <div className="pagination">
//         <button onClick={handlePrevPage} disabled={currentPage === 1}>
//           Prev
//         </button>
//         <span>
//           Page {currentPage} of {totalPages}
//         </span>
//         <button onClick={handleNextPage} disabled={currentPage === totalPages}>
//           Next
//         </button>
//       </div>

//       <div className="jump-to-page">
//         <input
//           type="number"
//           value={pageInput}
//           onChange={(e) => setPageInput(e.target.value)}
//           placeholder="Page number"
//         />
//         <button onClick={handleJumpToPage}>Go</button>
//       </div>
//     </div>
//   );
// };

// export default HomePage;

// import React, { useEffect, useState, useCallback } from 'react';
// import { Link } from 'react-router-dom';
// import ProductCard from './ProductCard';
// import Sidebar from './Sidebar';
// import './Style.css';

// interface Product {
//   id: number;
//   title: string;
//   description: string;
//   price: number;
//   thumbnail: string;
//   tags: string[];
//   brand: string;
//   category: string;
//   sku: string;
//   weight: number;
//   dimensions: {
//     width: number;
//     height: number;
//     depth: number;
//   };
//   warrantyInformation: string;
//   shippingInformation: string;
//   availabilityStatus: string;
//   reviews: {
//     rating: number;
//     comment: string;
//     date: string;
//     reviewerName: string;
//     reviewerEmail: string;
//   }[];
//   returnPolicy: string;
//   minimumOrderQuantity: number;
//   meta: {
//     createdAt: string;
//     updatedAt: string;
//     barcode: string;
//     qrCode: string;
//   };
//   images: {
//     url: string; // Assuming images are stored with a URL field
//   }[];
// }

// const PAGE_SIZE = 10; // Number of products per page

// const HomePage: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     fetchProducts(currentPage);
//   }, [currentPage]);

//   const fetchProducts = (page: number) => {
//     setIsLoading(true);
//     const skip = (page - 1) * PAGE_SIZE;
//     fetch(`https://dummyjson.com/products?limit=${PAGE_SIZE}&skip=${skip}&select=title,price,thumbnail`)
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return res.json();
//       })
//       .then((data) => {
//         setProducts((prevProducts) => [...prevProducts, ...data.products]);
//         setTotalPages(Math.ceil(data.total / PAGE_SIZE));
//         setIsLoading(false);
//       })
//       .catch((error) => {
//         console.error('Error fetching products:', error);
//         setIsLoading(false);
//       });
//   };

//   const handleScroll = useCallback(() => {
//     if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight && !isLoading && currentPage < totalPages) {
//       setCurrentPage((prevPage) => prevPage + 1);
//     }
//   }, [isLoading, currentPage, totalPages]);

//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [handleScroll]);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <div className="app">
//       <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

//       <div className="product-list">
//         {products.map((product) => (
//           <Link key={product.id} to={`/product/${product.id}`}>
//             <ProductCard {...product} />
//           </Link>
//         ))}
//       </div>

//       {isLoading && <div>Loading...</div>}
//     </div>
//   );
// };

// export default HomePage;


// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import ProductCard from './ProductCard';
// import Sidebar from './Sidebar';
// import './Style.css';

// interface Product {
//   id: number;
//   title: string;
//   description: string;
//   price: number;
//   thumbnail: string;
//   tags: string[];
//   brand: string;
//   category: string;
//   sku: string;
//   weight: number;
//   dimensions: {
//     width: number;
//     height: number;
//     depth: number;
//   };
//   warrantyInformation: string;
//   shippingInformation: string;
//   availabilityStatus: string;
//   reviews: {
//     rating: number;
//     comment: string;
//     date: string;
//     reviewerName: string;
//     reviewerEmail: string;
//   }[];
//   returnPolicy: string;
//   minimumOrderQuantity: number;
//   meta: {
//     createdAt: string;
//     updatedAt: string;
//     barcode: string;
//     qrCode: string;
//   };
//   images: {
//     url: string; // Assuming images are stored with a URL field
//   }[];
// }

// const PAGE_SIZE = 12; // Number of products per page

// const HomePage: React.FC = () => {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(0);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [pageInput, setPageInput] = useState('');
//   const [sortCriteria, setSortCriteria] = useState('');

//   useEffect(() => {
//     fetchProducts(currentPage, sortCriteria);
//   }, [currentPage, sortCriteria]);

//   const fetchProducts = (page: number, sort: string) => {
//     const skip = (page - 1) * PAGE_SIZE;
//     let url = `https://dummyjson.com/products?limit=${PAGE_SIZE}&skip=${skip}&select=title,price,thumbnail`;

//     if (sort) {
//       const [sortBy, order] = sort.split('-');
//       url += `&sortBy=${sortBy}&order=${order}`;
//     }

//     fetch(url)
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return res.json();
//       })
//       .then((data) => {
//         setProducts(data.products);
//         setTotalPages(Math.ceil(data.total / PAGE_SIZE));
//       })
//       .catch((error) => console.error('Error fetching products:', error));
//   };

//   const handleNextPage = () => {
//     if (currentPage < totalPages) {
//       setCurrentPage(currentPage + 1);
//     }
//   };

//   const handlePrevPage = () => {
//     if (currentPage > 1) {
//       setCurrentPage(currentPage - 1);
//     }
//   };

//   const handleJumpToPage = () => {
//     const pageNumber = parseInt(pageInput);
//     if (pageNumber > 0 && pageNumber <= totalPages) {
//       setCurrentPage(pageNumber);
//     } else {
//       alert('Invalid page number');
//     }
//   };

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     setSortCriteria(event.target.value);
//     setCurrentPage(1); // Reset to first page on sort change
//   };

//   return (
//     <div className="app">
//       <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

//       <div className="filter-container">
//         <label htmlFor="sort">Sort by:</label>
//         <select id="sort" value={sortCriteria} onChange={handleSortChange}>
//           <option value="">No sorting</option>
//           <option value="title-asc">Title (A-Z)</option>
//           <option value="title-desc">Title (Z-A)</option>
//           <option value="price-asc">Price (Low to High)</option>
//           <option value="price-desc">Price (High to Low)</option>
//         </select>
//       </div>

//       <div className="product-list">
//         {products.map((product) => (
//           <div key={product.id} className="product-container">
//             <Link to={`/product/${product.id}`}>
//               <ProductCard {...product} />
//             </Link>
//           </div>
//         ))}
//       </div>

//       <div className="pagination">
//         <button onClick={handlePrevPage} disabled={currentPage === 1}>
//           Prev
//         </button>
//         <span>
//           Page {currentPage} of {totalPages}
//         </span>
//         <button onClick={handleNextPage} disabled={currentPage === totalPages}>
//           Next
//         </button>
//       </div>

//       <div className="jump-to-page">
//         <input
//           type="number"
//           value={pageInput}
//           onChange={(e) => setPageInput(e.target.value)}
//           placeholder="Page number"
//         />
//         <button onClick={handleJumpToPage}>Go</button>
//       </div>
//     </div>
//   );
// };

// export default HomePage;