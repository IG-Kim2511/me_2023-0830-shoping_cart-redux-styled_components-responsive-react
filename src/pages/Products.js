
import React, { useState } from 'react'


const Products = () => {

  const [loading, setLoading] = useState(true)



  const Loading = () => {
    return (
      <h1>loading...fetching data from fakestore-api</h1>
    )
  }

  const ShowProducts = () => {
    return (
      <div>Products</div>
    )
  }


  return (
    <div>
    

    
    {
      loading? 
        <Loading/>:
         <ShowProducts/>}
    </div>
  )
}

export default Products




