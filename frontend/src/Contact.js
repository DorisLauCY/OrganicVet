import React from 'react'
import Title from './Title'
import TitleImage from './TitleImage'
export default function Contact() {
  return (
    <div>
    <Title mainTitle="Contact" />
    <div className='container'>
        <div className='row'>
            <div className='col-6'>
                address
            </div>
            <div className='col-6'>
                Map
            </div>
        </div>
    </div>
    <TitleImage />
    <div className='container'>
      <form>
        Name:
        <input />
      </form>
   </div>
</div>
  )
}
