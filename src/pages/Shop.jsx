import React, { useContext } from 'react'
import { PRODUCTS } from '../constants/products'
import Product from '../components/Product'
const Shop = () => {

  return (
    <div className='flex flex-col'>
      <div className='self-center'>
        <p className='text-5xl font-bold mt-14'>ProCell tech</p>
      </div>
      <div className='grid grid-cols-3 gap-4 ml-4 mr-4 mt-16 mb-5'>
        {PRODUCTS.map(product => {
         return <Product
           key={product.id}
           name = {product.productName}
           image = {product.productImage}
           price = {product.price}
           id = {product.id}
         />
        })}
      </div>
    </div>
  )
}

export default Shop
