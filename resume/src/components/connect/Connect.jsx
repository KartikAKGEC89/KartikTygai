import React from 'react'
import logo1 from './linkedin.png'
import logo2 from './instagram.png'
import logo3 from './github.png'
import './Connect.css'

const Connect = () => {
  return (
      <div className='connect'>
          <h1>Let's Connect !!!</h1>
          <div className='images'>
              <div className='first'>
           <img src={logo1} alt='Link' className='logo' />
           <h3>linkedin</h3>
              </div>
               <div className='first'>
           <img src={logo2} alt='Link' className='logo' />
           <h3>Instagram</h3>        
              </div>
               <div className='first'>
           <img src={logo3} alt='Link' className='logo' />
          <h3>Github</h3>  
          </div>
      </div>
    </div>
  )
}

export default Connect
