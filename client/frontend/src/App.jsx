import React, { useContext } from 'react'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import Navbar from './components/Navbar'
import Login from './components/Login'
import { AppContext } from './context/AppContext'
import { ToastContainer, toast } from 'react-toastify';

const App = () => {

  const { showLogin} = useContext(AppContext)
  return (
     <div className='px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to to-blue-50'>
      <ToastContainer position='bottom-right' />
      <Navbar/> 
      {showLogin && <Login/>}
     <Routes>
  <Route path='/' element={<Home />} />
  <Route path='/result' element={<Result />} />
  <Route path='/BuyCredit' element={<BuyCredit />} />
</Routes>

     </div>
  )
}

export default App