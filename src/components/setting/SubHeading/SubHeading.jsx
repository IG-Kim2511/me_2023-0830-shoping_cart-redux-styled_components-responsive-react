import React from 'react'

import {images} from '../../constants'

/* props */
const SubHeading = ({title}) => {
  return (
    <div style={{marginBottom:'1rem'}}>    
      <h1 style={{background:'green'}}>{title}</h1>
      <img src={images.poke1} className='spoon__img'/>    
    </div>
  )
}

export default SubHeading;