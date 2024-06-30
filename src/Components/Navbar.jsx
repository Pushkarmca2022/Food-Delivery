import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='nav stick-top'>
     <div className="nav_bar">
      <Link to={"/"} 
      className="left"
      style={{color:"white", textDecoration: "none"}}
      >
      <h3>MERN E - Commerce</h3>
      </Link>
     </div>
     
    </div>
  )
}

export default Navbar