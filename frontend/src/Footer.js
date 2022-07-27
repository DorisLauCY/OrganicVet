import React from 'react'
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div >
        <nav className="navbar navbar-expand-sm navbar-dark bg-white bottom-border">
        <Link to="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
        <img src={process.env.PUBLIC_URL+'/img/logo_small.png'} alt="" style={{width:'100px'}}/>
        </Link>
    
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link green-link">Home</Link>
          </li>
          <li class="nav-item">
            <Link to="/" className="nav-link  green-link">Link</Link>
          </li>
          <li class="nav-item">
            <Link to="/" className="nav-link  green-link">Disabled</Link>
          </li>
          
        </ul>
      </div>
    </nav>

      
    </div>
  )
}
