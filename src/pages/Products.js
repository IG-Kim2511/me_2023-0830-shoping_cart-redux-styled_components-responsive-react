
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Products = () => {

  // 🥒js0309-1140, filtered data vs fetched data 구별하기용
  const [data, setData] = useState([])


  //🍀JS0309-1140, filter by category btn
  const [filterData, setFilterData] = useState(data)

  // 🍀js0309-0610. loading
  /* 🍄
    fetch data 완료전에는 loading
    fetch data 완료 후에는 ShowProducts
  */
  const [loading, setLoading] = useState(true)

  const [error, setError] = useState(null);

  // 🍀js0309-0630. fetch data, {data_item.description.substring(0, 12)}...

  // useEffect(() => {
  //   const fetchItems = async () => {

  //     setLoading(true);

  //     const result = await axios("https://fakestoreapi.com/products");

  //     console.log(result.data);

  //     setData(result.data);
  //     setFilterData(result.data);

  //     setLoading(false);
  //   };
  //   fetchItems();
  // }, []);



  
  useEffect(() => {
    // Define the URL of the API you want to fetch data from
    const apiUrl = "https://fakestoreapi.com/products";
    
    axios.get(apiUrl)
      .then(response => {
        setData(response.data);
        console.log(response.data)
        
        setLoading(false);
      })
      .catch(err => {
        // setError(err);
        // setLoading(true);
      });
  }, []);


  const Loading = () => {
    return (
      <h1>loading...fetching data from fakestore-api</h1>
    )
  }

  const ShowProducts = () => {
    return (
      <div>Products
       
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




