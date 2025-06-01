import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FcRating } from "react-icons/fc";
import { FaUserCircle } from "react-icons/fa";
import { AppContext } from '../context/AppContext';


const Navbar = () => {
  const { user, setShowLogin, logOut, credit } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className='flex items-center justify-between py-4'>
      <Link to='/'>
        <h1 className='text-2xl sm:text-3xl'>AI-Flash📷</h1>
      </Link>

      <div>
        {user ? (
          <div className='flex items-center gap-2 sm:gap-3'>
            <button
              onClick={() => navigate('/BuyCredit')}
              className='flex items-center gap-2 bg-orange-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700'
            >
              <FcRating size={30} />
              <p className='text-gray-700'>Credits Left: {credit}</p>
            </button>

            <p className='text-gray-700 max-sm:hidden pl-4'>Hi {user.name}</p>

            <div className='relative group'>
              <FaUserCircle size={25} className='drop-shadow' />
              <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-black pt-10 bg-transparent transition-all duration-700'>
                <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm'>
                  <li onClick={logOut} className='py-1 px-2 cursor-pointer pr-10'>Logout</li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <div className='flex items-center gap-4'>
            <p onClick={() => navigate('/BuyCredit')} className='cursor-pointer'>Pricing</p>
            <button
              className='bg-blue-700 text-white px-6 py-4 rounded-2xl cursor-pointer sm:py-2'
              onClick={() => setShowLogin(true)}
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
