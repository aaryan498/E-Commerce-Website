import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Cart from './pages/Cart'
import Collection from './pages/Collection'
import Product from './pages/Product'
import Order from './pages/Order'
import PlaceOrder from './pages/PlaceOrder'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/collection' element={<Collection/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<Order/>} />
        <Route path='/place-order' element={<PlaceOrder/>} />
        <Route path='/product' element={<Product/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
      <Footer/>
    
    
    
    </div>
  )
}

export default App