import React from 'react'
import './Header.css'

function header() {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favorite food here</h2>
        <p>choose from a diverse menu featuring a delectable array of dishes </p>
        <button>View Menu</button>
      </div>
    </div>
  )
}

export default header