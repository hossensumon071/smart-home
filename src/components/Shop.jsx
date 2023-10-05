import React, { useContext, useState } from 'react'
import { ProductContext } from '../layout/Main'
import Product from "./Product"
import { addToDb } from '../utils/fakeDB';
import { toast } from 'react-toastify';

const Shop = () => {
  const products = useContext(ProductContext);
  const [cart, setCart] = useState([]);


  // const exist = [{num:1}, {num:2}, {num:3}]
  // const product = {num:3}
  // const cath = exist.find((existing) => existing.num === product.num)

  
 
  const handleAddToCart = (product) => {

    // let newCart = [];
    const exists = cart.find(existingProduct => existingProduct.id === product.id);
    if(exists) {
      const rest = cart.filter(existingProduct => existingProduct.id !== product.id)
      console.log(rest)
      exists.quantity =  exists.quantity + 1 
      newCart = [...rest, exists]    
    } else {
      product.quantity = 1
      // newCart = [...cart, product]   
      setCart([...cart, product])               
    }

    setCart(newCart);
    addToDb(product.id)
    toast.success('Product Added', { autoclose: 500})

  } 
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8'>
        {
          products.map(product => (
            <Product 
            key={product.id} 
            product={product}
            handleAddToCart={handleAddToCart}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Shop
