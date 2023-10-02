import React from 'react'
import logo1 from './html-5.png'
import logo2 from './css-3.png'
import logo3 from './java-script.png'
import logo4 from './react.png'
import logo5 from './nodejs.png'
import logo6 from './c-.png'
import './Skill.css'


const Skill = () => {
  return (
      <div className='skill'>
          <h1>Skills</h1>
          <div className='developer'>
              <div className='Sills'>
              <img src={logo1} alt='' />
              </div>
              <div className='Sills'>
              <img src={logo2} alt='' />
                  </div>
              <div className='Sills'>
              <img src={logo3} alt='' />
                  </div>
              <div className='Sills'>
              <img src={logo4} alt='' />
                  </div>
              <div className='Sills'>
              <img src={logo5} alt='' />
                  </div>
              <div className='Sills'>
              <img src={logo6} alt='' />
                  </div>
        </div>
    </div>
  )
}

export default Skill;
