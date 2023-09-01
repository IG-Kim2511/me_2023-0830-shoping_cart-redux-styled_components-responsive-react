
// router install
// redux install
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';



import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Product from './pages/Product';




function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">products</Link>
            </li>
            <li>
              <Link to="/cart">cart</Link>
            </li>
          </ul>
        </nav>  
  

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/products" element={<Products/>} />
          <Route path="/product/:id" element={<product/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
