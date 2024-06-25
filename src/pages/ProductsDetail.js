import React from 'react'
import { useParams } from 'react-router';

const ProductsDetail = () => {
  const {id} = useParams();
  return (
    <div>
      <p className='text-4xl'>ProductsDetail</p>
      <p className='text-2xl'>{id}</p>
    </div>
  )
}

export default ProductsDetail