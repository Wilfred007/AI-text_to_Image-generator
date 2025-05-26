import React from 'react'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import Navbar from './components/Navbar'
import Login from './components/Login'

const App = () => {
  return (
     <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to to-blue-50'>
      <Navbar/> 
      <Login/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Result' element={<Result/>}/>
        <Route path='/BuyCredit' element={<BuyCredit/>}/>
      </Routes>
     </div>
  )
}

export default App