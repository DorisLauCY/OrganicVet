import { Link , input} from 'react-router-dom';
import React from 'react'
import './styles.css';
import 'bootstrap';



export default function Header() {
   
  return (
  <>
    <nav className="py-2 border-bottom bg-green">
    <div className="container d-flex flex-wrap">
      <ul className="nav me-auto">
        <li className="nav-item"><Link to="/" className='nav-link text-white px-2 active'>Vegetable</Link></li>
        <li className="nav-item"><Link to="/about" className='nav-link text-white px-2'>Fruit</Link></li>
        <li className="nav-item"><Link to="/checkout" className='nav-link text-white px-2'>Organic Food</Link></li>
      </ul>
      <form class="col-12 col-lg-auto mb-3 mb-lg-0" role="search">
        <input type="search" className='form-control' placeholder="Search..." aria-label="Search" />
      </form>
      <ul className="nav">
      <li className="nav-item">
            <Link to="/cart" className='nav-link text-white px-2'>Shopping Bag</Link>
        </li>
        <li className="nav-item">
            <Link to="/checkout" className='nav-link text-white px-2'>CheckOut</Link>
        </li>
        <li className="nav-item">
            <Link to="/login" className='nav-link text-white px-2'>Login</Link>
        </li>
        <li className="nav-item">
            <Link to="/register" className='nav-link text-white px-2'>Register</Link>
        </li>
      </ul>
    </div>
  </nav>
  <header className="py-2 border-bottom">
    <div className="container d-flex flex-wrap justify-content-center">
      {/* <a href="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg> 
        <span class="fs-4">Double header</span>
        
      </a> */}
      <Link to="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
        <img src={process.env.PUBLIC_URL+'/img/logo_small.png'} alt="" style={{width:'150px'}}/>
        </Link>
      
      <ul className="nav">
        <li className="nav-item"><Link to="/" className='nav-link link-dark px-2 active'>Home</Link></li>
        <li className="nav-item"><Link to="/about" className='nav-link link-dark px-2'>About</Link></li>
        <li className="nav-item"><Link to="/productlist" className='nav-link link-dark px-2'>Product</Link></li>
        <li className="nav-item"><Link to="/contact" className='nav-link link-dark px-2'>Contact</Link></li>
      </ul>
    </div>
  </header>
    
    </>
  )
}
