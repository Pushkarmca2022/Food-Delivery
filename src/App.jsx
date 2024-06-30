import React, { useContext } from 'react'
import AppContext from './Context/AppContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Navbar from './Components/navbar/Navbar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'

function App() {
  // const {a}=useCsontext(AppContext)

  return (

      <BrowserRouter>
    <div className="app">
      <Navbar/>
     

    {/* <ToastContainer /> */}
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/order" element={<PlaceOrder/>} />


    </Routes>
    </div>

    </BrowserRouter>
  )
}

export default App