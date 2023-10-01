import React from 'react'
import './Projectlist.css'

const Projectlist = ({ image, name, Projectnumber, description}) => {
  return (
    <div className='card'>
          <img src={image} alt='Pic' className='card--image'/>
          <div className='card--stats'>
        <span className='gray'>{ Projectnumber}</span>
          </div>
      <p>{name}</p>
      <pre>
        {description}
      </pre>
    </div>
  )
}

export default Projectlist
