
import {Routes, Route, Router } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import CartPage from './Pages/CartPage'

function App() {

  return (
   <>

  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/CartPage" element={<CartPage />}/>
  </Routes>

   
   </>
  )
}

export default App
