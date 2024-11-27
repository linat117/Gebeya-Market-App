
import {Routes, Route, Router } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import CartPage from './Pages/CartPage'
import Checkout from './Pages/Checkout'

function App() {

  return (
   <>

  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/CartPage" element={<CartPage />}/>
    
    <Route path="/Checkout" element={<Checkout />}/>
  </Routes>

   
   </>
  )
}

export default App
