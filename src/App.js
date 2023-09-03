/* 
  🚀🚀point skill + AI - all 

  🍀show 3page with react router

  🍀display it like shoping page
  🍀react. rating feature with star icon ,  material icon

  🍀indivisual product page with useParams, react router

  🍀redux : show example how to use redux with cart and product page.
   use redux, configurestore, dispatch, reducer, useSelector, localstorage
  plus, minus,remove button: add plus, minus,remove button on cart page. 
  localstorage : save items on cart page on localstorage
*/

/* 
🚀🚀point skill + AI - App.js
show 3page with react router
*/

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import  "./App.css";

import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Product from './pages/Product';


// 👉redux
import { Provider, useSelector } from 'react-redux';
import store from './store';



function App() {
  
  useEffect(() => {
    // Initialize localStorage if it's empty
    if (!localStorage.getItem('cartItems')) {
      localStorage.setItem('cartItems', JSON.stringify([]));
    }
  }, []);

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
