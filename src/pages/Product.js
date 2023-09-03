/* 
🚀🚀point skill + AI
indivisual product page with useParams, react router
*/

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Product = () => {
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
    <div>
      <div className="item-wrap">
        <div className="items">
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

        <button className='myButton' onClick={()=>{}}>add to Cart</button>

        </div>


      </div>
     
    </div>
  );
};

export default Product;


/* 
 <h2>{product.title}</h2>
      <p>Price: ${product.price}</p>
      <p>Rating: {product.rating.rate}</p>
      <img src={product.image} alt={product.title} />
      <p>{product.description}</p> */
