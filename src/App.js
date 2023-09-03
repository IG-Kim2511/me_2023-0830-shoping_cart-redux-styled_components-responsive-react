

/* 
🚀🚀point skill + AI - all 
show 3page with react router

display it like shoping page
react. rating feature with star icon ,  material icon

indivisual product page with useParams, react router
*/

/* 
🚀🚀point skill + AI - App.js
show 3page with react router
*/

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import  "./App.css";

import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Product from './pages/Product';


// 👉redux
import { Provider } from 'react-redux';
import store from './store';




function App() {
  return (

    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
