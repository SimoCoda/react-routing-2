import React from 'react'
import { NavLink } from 'react-router-dom'

const randomIntFromInterval = (min = 1, max = 10) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

const ProductItem = ({product}) => {
  return (
    <div className='col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200'>
        {/* <li key={product.id}> <Link to={`/products/${product.slug}`}>{product.name}</Link> </li> */}
        <div className='w-full'>
            <img src={product.image} alt={product.title} />
        </div>
        <div className="w-full flex items-center justify-between p-6 space-x-6">
            <div className='flex-1 truncate'>
                <div className="flex items-center space-x-3">
                    <h3 className='text-gray-900 text-sm font-medium trucate'>{product.title}</h3>
                    <span className='flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs bg-green-100 rounded-full'>
                        {randomIntFromInterval()}
                    </span>
                </div>
                <p className="text-gray-500 mt-1 truncate text-xs">
                    {product.description}
                </p>
            </div>
        </div>
        <div>
            <div className='-mt-px flex divide-x divide-gray-200'>
                <div className="-ml-px w-0 flex-1 flex">
                    <NavLink 
                        to={`/produts/${product.id}`}
                        className="relative w-0 flex-1 inline-flex items-center justify-center py-4"
                    >
                        <span className="ml-3">Visualizza</span>
                    </NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductItem