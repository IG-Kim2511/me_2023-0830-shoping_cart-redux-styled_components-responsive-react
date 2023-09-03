
/* 
🚀🚀point skill + AI


display it like shoping page
react. rating feature with star icon ,  material icon
*/

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import "./products.css"

// 🍀2023-0901 star rating + material ui icon
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { Rating } from '@mui/material';

const Products = () => {

  // 🥒js0309-1140, filtered data vs fetched data 구별하기용
  const [data, setData] = useState([])
  console.log(data)


  //🍀JS0309-1140, filter by category btn
  const [filterData, setFilterData] = useState([])

  // 🍀js0309-0610. loading
  /* 🍄
    fetch data 완료전에는 loading
    fetch data 완료 후에는 ShowProducts
  */
  const [loading, setLoading] = useState(true)

  const [error, setError] = useState(null);

  // 🍀js0309-0630. fetch data, {data_item.description.substring(0, 12)}...


  
  useEffect(() => {
    // Define the URL of the API you want to fetch data from
    const apiUrl = "https://fakestoreapi.com/products";
    
    axios.get(apiUrl)
      .then(response => {
        setData(response.data);
        setFilterData(response.data);
        console.log(response.data)
        
        setLoading(false);       


      })
      .catch(err => {
        // setError(err);
        // setLoading(true);
      });
  }, []);
  
    // 🥒JS0309-1140    filterProductFunc  
    const filterProductFunc=(item)=>{

      console.log(item)
      const updatedList = data.filter((x)=>{
        return x.category === item});

      setFilterData(updatedList);
    }

    

    // 👉2023-0901 star rating
      const StarRating = ({ rating }) => {
        return (
          <div className="star-rating">
            <Rating
              name="half-rating"
              value={rating}
              precision={0.5}
              icon={<StarIcon fontSize="inherit" />}
              emptyIcon={<StarOutlineIcon fontSize="inherit" />}
              halfIcon={<StarHalfIcon fontSize="inherit" />}
              readOnly
            />
          </div>
        );
      };

    // 

  const Loading = () => {
    return (
      <h1>Loading...Fetching data from fakestore-api</h1>
    )
  }

  const ShowProducts = () => {
    return (
      <div>
        {/* 🥒js0309-0610. 🥒JS0309-1140, */}
        <div className="btn-container">
          <button className='myButton' onClick={()=>{setFilterData(data)}}>All</button>
          <button className='myButton' onClick={()=>{filterProductFunc("men's clothing")}}>men</button>
          <button className='myButton' onClick={()=>{filterProductFunc("women's clothing")}}>women</button>
          <button className='myButton' onClick={()=>{filterProductFunc("jewelery")}}>Jewelery</button>
          <button className='myButton' onClick={()=>{filterProductFunc("electronics")}}>Electronic</button>
        </div>
       
        {/* 🥒js0309-0630, 🥒JS0309-1140, */}
        <div className="item-container">
        {
          filterData.map(product => (
              <div key={product.id} className='product'>
                <Link to={`/product/${product.id}`}>
                  <img src={product.image} alt={product.title}/>
                      <p>{product.title}</p>
                      <p>Price: ${product.price}</p>
                      <p>Rating:{product.rating.rate}</p>

                      {/* 👉2023-0901 star rating */}
                      <StarRating rating={product.rating.rate} />
                  </Link>
                  
              </div>
          ))
        }
          
        </div>  
      </div>
    )
  }


  return (
    <div> 

      
      {
        loading? 
          <Loading/>:
          <ShowProducts/>
        }
    </div>
  )
}

export default Products




