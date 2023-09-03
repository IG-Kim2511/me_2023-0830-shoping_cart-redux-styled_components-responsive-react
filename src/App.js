
// router install
// redux install
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import  "./App.css";

import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Product from './pages/Product';




function App() {
  return (
    <Router>
      <div className="world">
          <div className="world-left">
            <nav className='nav'>
              <ul>
                <li>
                  <Link to="/" className='myButton'>Home</Link>
                </li>
                <li>
                  <Link to="/products"  className='myButton'>products</Link>
                </li>
                <li>
                  <Link to="/cart" className='myButton'>cart</Link>
                </li>
                
              </ul>
            </nav>  
          </div>
      

            <div className="world-right">
              <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/products" element={<Products/>} />
                <Route path="/product/:id" element={<Product/>} />
                <Route path="/cart" element={<Cart/>} />
              </Routes>    
          </div>
      </div>
    </Router>
  );
}

export default App;
