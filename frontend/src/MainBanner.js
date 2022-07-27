import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

export default function MainBanner() {
  return (
    
    <Carousel>
      <Carousel.Item>
        <img className='d-block w-100' src={process.env.PUBLIC_URL+'/img/banner_01.png'} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={process.env.PUBLIC_URL+'/img/banner_01.png'} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={process.env.PUBLIC_URL+'/img/banner_01.png'}  alt="Third slide" />
      </Carousel.Item>
    </Carousel>

                                                                                               

        
    
  )
}
