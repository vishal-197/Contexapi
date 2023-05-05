import React, { createContext, useState } from 'react';
import Header from './Header';
import About from './About';
import Products from './Products';
import './ecommerce.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './Cart';
import Main from './Main';
// import {ecommerceContext} from './Header'

export const ecommerceContext = createContext({})


function Home() {
  const [cart,setCart] = useState([])

  return (
    <>
    <ecommerceContext.Provider value={{cart, setCart}}>
      
    <BrowserRouter>

    
      <Header/>
      <Routes>
       <Route path='/' element={<Main/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/cart" element={<Cart/>}/>

       
      </Routes>
      </BrowserRouter>
    </ecommerceContext.Provider>
  
    



  
   
   
    </>
  )
}

export default Home