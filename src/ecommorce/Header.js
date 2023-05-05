import React,{useContext, useState} from 'react'
import './header.css'
import { Link,  } from 'react-router-dom'
import { ecommerceContext } from './Home'


// export const ecommerceContext = createContext({})
function Header() {
    const {cart} = useContext(ecommerceContext)
    const [isSticky, setIsSticky] = useState(false)

    window.onscroll = () =>{
        if(window.scrollY >100) setIsSticky(true);
        else setIsSticky(false)
    }



  return (
   <header className={isSticky ? "fixed show":"fixed"}>
    <h1>Ecommorce</h1>
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/cart"> Cart <span className='count'>{cart.length}</span> </Link>
            </li>
           
        </ul>
    </nav>
   </header>
  )
}

export default Header