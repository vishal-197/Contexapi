import React, { useContext } from 'react'
import { ecommerceContext } from './Home'
import { Link } from 'react-router-dom';
import './cart.css'

function Cart() { 
  const {cart, setCart} = useContext(ecommerceContext)

  function handleDeleteFromCart(e, itemToDelete){
    e.preventDefault();
    setCart(cart.filter(cartItem => cartItem.id !== itemToDelete.id));
  }

  
  
  return (
  
    <section className='cart'>


      <div className='cart-list'>
        {
          cart.map((item,index) =>{
            return(
              <div className='cart-item' key={item.id}>
                <div className='left'>
                  <img src={item.image} alt={item.title}/>
                </div>
                  <div className='right'>
                     <h4>{item.title}</h4>
                     <h4>{item.price}</h4>
                    <Link onClick={(e)=> handleDeleteFromCart(e, item)}>Delete</Link>
                  </div>
              </div>
      
            )
          })
        }


      </div>



    </section>












  )
}

export default Cart