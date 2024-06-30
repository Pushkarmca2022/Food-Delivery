import React, { useContext } from 'react'
import AppContext from '../../Context/AppContext'

function ShowProduct() {
  const {products}=useContext(AppContext)
  console.log('products---',products)
  return (
    <div className=" d-flex justify-content-center align-item-center">

    <div className='container  row d-flex justify-content-center align-items-center'>
      {products.map((product,index)=>{
        return(<div key={product._id} className='col-md-4 my-4'>
          <div className='card bg-dark '>

            <div className='py-4  d-flex justify-content-center align-items-center  '>
        <img src={product.imgSrc} alt=""
        style={{
          width:"200px",
          height:"200px",
          borderRadius:"10px",
          border:"2px solid yellow",
        }}
        // className='card-img-top '
        />
        </div>

        <div className='card-body'>

        <h5 className='card-title text-center'>{product.title}</h5>
        <div className="d-flex justify-content-between px-3 py-3 " >
     <button className='btn btn-primary'>{product.price}</button>
     <button className='btn btn-warning'>{product.qty}</button>
     </div>

        </div>

        </div>

        </div>)
      })}
    </div>
    </div>

  )
}

export default ShowProduct