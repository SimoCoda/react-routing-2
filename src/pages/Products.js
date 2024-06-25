import React from 'react'
import { Link } from 'react-router-dom'

const products = [
  { id: 1, name: "Prodotto Uno", slug: "prodotto-uno" },
  { id: 2, name: "Prodotto Due", slug: "prodotto-due" },
  { id: 3, name: "Prodotto Tre", slug: "prodotto-tre" },
]

const Products = () => {
  return (
    <div>
      <div className='text-4xl font-bold mt-5 mb-5'>Products</div>
      <ul className='list-disc'>
        {products.map((product) => {
          // return <li key={product.id} className='pb-2'>{product.id} : {product.name}</li>
          return <li key={product.id}> <Link to={`/products/${product.slug}`}>{product.name}</Link> </li>
        })}
      </ul>
    </div>
  )
}

export default Products