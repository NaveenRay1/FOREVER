import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Placeorder from './pages/Placeorder'
import Orders from './pages/Orders'

const App = () => {
  <Routes>
  <Route path='/' element={<Home/>}></Route>
  <Route path='/collection' element={<Collection/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<Contact/>}/>
  <Route path='/product/:productId' element={<Product/>}/>
  <Route path='/cart' element={<Cart/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/place-order' element={<Placeorder/>}/>
  <Route path='/orders' element={<Orders/>}/>
  </Routes>
  return (
    <div>
        <h1 class="text-3xl font-bold underline bg-amber-600">
    Hello world!
  </h1>
    </div>
  )
}

export default App
