import React from 'react'
import { Link } from 'react-router-dom';
export default function ImageBTN() {
  return (
    <div className="container">
        <div className='row'> 
            <div className='col-sm-6 col-lg-3 mb-3'> <Link to="/about"><img className='d-block w-100' src={process.env.PUBLIC_URL+'/img/imageBtn.png'} /></Link> </div>
            <div className='col-sm-6 col-lg-3 mb-3'> <Link to="/register"><img className='d-block w-100' src={process.env.PUBLIC_URL+'/img/imageBtn02.png'} /></Link> </div>
            <div className='col-sm-6 col-lg-3 mb-3'> <Link to="/login"><img className='d-block w-100' src={process.env.PUBLIC_URL+'/img/imageBtn.png'} /></Link> </div>
            <div className='col-sm-6 col-lg-3 mb-3'> <Link to="/contact"><img className='d-block w-100' src={process.env.PUBLIC_URL+'/img/imageBtn02.png'} /></Link> </div>
        </div>
    </div>
  )
}
