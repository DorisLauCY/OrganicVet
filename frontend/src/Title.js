import React from 'react'
import './styles.css';

export default function Title({mainTitle}) {
  return (
    <div className='title_bg'>
        <h1 className='pagetitle'>
            {mainTitle}
        </h1>
    </div>
  )
}
