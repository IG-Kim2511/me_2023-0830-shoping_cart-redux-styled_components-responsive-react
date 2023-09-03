/* 
🚀🚀point skill + AI
indivisual product page with useParams, react router
*/

import "./product.css"
// Product.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/reducers/cartReducer';



const Product = () => {

  // 👉redux
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart.cartItems);



  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product data based on the id parameter
    // For example, you can fetch it from an API or use a local data array
    const fetchData = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);


    // 🥒js0310-0440. redux -----------------------🎃
  
    // const dispatch = useDispatch();

  // loading
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product">
      <div className="item-wrap">
        <main className="items">
          <div className="item">
            <div className="img-parents">
              <img src={product.image} alt={product.title} />
            </div>
          </div>

          <div className="item">
            <h3 className="title">Name: {product.title}</h3>
            <div className="price">$ {product.price}</div>
            <div className="description">Desc: {product.description}</div>
          
          </div>

            
          {/* 🥒js0310-0440. redux  */}

          <button  className='myButton' onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
          

        </main>


      </div>
     
    </div>
  );
};


export default Product