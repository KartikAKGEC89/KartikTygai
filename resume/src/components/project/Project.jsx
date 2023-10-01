import React from 'react'
import './Project.css'
import Projectlist from './Projectlist'
import logo1 from './Weather.png'
import logo2 from './matchinggame.png'
import logo3 from './CartAPI.png'
import logo4 from './News Application.png'

const Project = () => {
  return (
    <div className='project'>
          <div className='text'>
             <h1 className='title'>Create & Inspire</h1> 
          </div>
          <div className='projectlist'>
        <Projectlist 
          image={logo1}
          name="Weather APP"
          Projectnumber="Project Number :- 1"
          description="HTML, CSS & Javascript"
              />
        <Projectlist 
          image={logo2}
          name="Matching Game"
          Projectnumber="Project Number :- 2"
          description="HTML, CSS & Javascript"
              />
        <Projectlist 
          image={logo3}
          name="Cart API"
          Projectnumber="Project Number :- 3"
          description="NodeJs, ExpressJs & Mongodb"
              />
        <Projectlist 
          image={logo4}
          name="News Application"
          Projectnumber="Project Number :- 4"
          description="MERN Stack"
              />
          </div>
      </div>
      
  )
}

export default Project;
