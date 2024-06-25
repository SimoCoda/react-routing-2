import React from 'react'
import { Link } from 'react-router-dom'
import ProductItem from './ProductItem'

const products = [
  { id: 1, name: "Prodotto Uno", slug: "prodotto-uno" },
  { id: 2, name: "Prodotto Due", slug: "prodotto-due" },
  { id: 3, name: "Prodotto Tre", slug: "prodotto-tre" },
  { id: 4, name: "Prodotto Quattro", slug: "prodotto-quattro" },
  { id: 5, name: "Prodotto Cinque", slug: "prodotto-cinque" },
  { id: 6, name: "Prodotto Sei", slug: "prodotto-sei" },
  { id: 7, name: "Prodotto Sette", slug: "prodotto-sette" },
  { id: 8, name: "Prodotto Otto", slug: "prodotto-otto" },
  { id: 9, name: "Prodotto Nove", slug: "prodotto-nove" },
]

const ProductsList = () => {
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