import React from 'react'

import CV from '../Doc/Osama.pdf'
export const CTA = () => {
  return (
  
    <div className='cta' >
   <a href={CV} target="_blank" className='btn'>Dawnload CV</a>
    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}
