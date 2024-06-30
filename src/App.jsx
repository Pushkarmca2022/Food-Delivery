import React, { useContext } from 'react'
import AppContext from './Context/AppContext'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ShowProduct from './Components/product/ShowProduct'
import Navbar from './Components/Navbar'
import { ToastContainer } from 'react-toastify'
import './App.css'

function App() {
  // const {a}=useCsontext(AppContext)

  return (
    <BrowserRouter>
    <Navbar/>
    <ToastContainer />


    <Routes>
      <Route path="/" element={<ShowProduct/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App