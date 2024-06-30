import React from 'react'
import "./ExploreMenu.css"
import {menu_list} from '../../assets/assets'
function ExploreMenu() {
    console.log(menu_list)
  return (
    <div className="explore-menu" id='explore-menu'>
      <h1>Explore our Menu</h1>
      <p children="explore-menu-text">Choose from a diverse menu featuring a delectable array of dishes.</p>
  <div className="explore-menu-list">
    {
      menu_list.map((item,index)=>{
        return (
          <div key={index} className="explore-menu-list-item">
            <img src={item.menu_image} alt="" />
            <p>{item.menu_name}</p>

          </div>
        )
      })
    }
  </div>
    </div>
  )
}

export default ExploreMenu