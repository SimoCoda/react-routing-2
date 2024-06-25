import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductItem from './ProductItem'

const ProductsList = () => {

  const [products, setProducts] = useState([]);

  const fetchService = () => {
    fetch("http://localhost:3004/products")
    .then(res => res.json())
    .then(data => setProducts(data))
  }

  useEffect(() => {
    fetchService();
  },[])

  return (
    <div>
      <div className='text-4xl font-bold mt-5 mb-5'>Products</div>
      <ul className='grid grid-cols-4 gap-6'>
        {products.map((product) => {
          // return <li key={product.id} className='pb-2'>{product.id} : {product.name}</li>
          return <ProductItem product={product} />
        })}
      </ul>
    </div>
  )
}

export default ProductsList