import React from 'react'
import './Intro.css'
import logo from './Astro.jpg'

const Intro = () => {
  return (
    <div className='intro'>
          <div className='left'>
              <div className='wrapperleft'>
                <h2 className='txt'>My name is</h2>
                <h1 className='name'>Kartik Tyagi</h1>
                  <div className='tittle'>
                      <div className='tittlewrapper'>
                          <div className='item'>
                              Web Developer
                          </div>
                          <div className='item'>
                   competitive programming
                          </div>
                      </div>
                  </div> 
                  <div className='desc'>
                      My journey so far has included working with both front-end and back-end development, where I have gained knowledge about different technologies, databases and frameworks.
                      I want to stay in my learning zone and keep myself updated with the latest developments in this field. 
                  </div>
              </div>
              
          </div>
          <div className='right'>
            <img src={logo} alt='intro' className='image' />
          </div>
          
    </div>
  )
}

export default Intro;
