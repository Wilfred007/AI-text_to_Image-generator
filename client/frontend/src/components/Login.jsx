// import React, { useContext, useEffect, useState } from 'react'
// import { FaUserCircle } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import { FaLock } from "react-icons/fa";
// import { RxCross2 } from "react-icons/rx";
// import { AppContext } from '../context/AppContext';
// import axios from 'axios'
// import { toast } from 'react-toastify';


// const  Login = () => {

//   const [state, setState] =  useState('Login')
//   const { setShowLogin, backendUrl, setToken, setUser} = useContext(AppContext)
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')


//   const onsubmitHandler = async(e) => {
//     e.preventDefault();

//     try {
//       if(state === 'Login') {
//         const {data} = await axios.post(backendUrl + '/api/user/login', {
//           email,
//           password
//         })
//         console.log(data)
//         if(data.success) {
//           setToken(data.token)
//           setUser(data.user)
//           localStorage.getItem('token', data.token)
//           setShowLogin(false)
//         } else {
//           toast.error(error.message)
//         }
//       } else {
//           const {data} = await axios.post(backendUrl + '/api/user/register', {
//           name,
//           email,
//           password
//         })
//           if(data.success) {
//           setToken(data.token)
//           setUser(data.user)
//           localStorage.getItem('token', data.token)
//           setShowLogin(false)
//         } else {
//           toast.error(data.message)
//         }

        

//       }
//     } catch (error) {

//       toast.error(error.message)
      
//     }

//   }



//   useEffect(() => {
//     document.body.style.overflow = 'hidden';

//     return () => {
//       document.body.style.overflow = 'unset';
//     }
//   }, [])
//   return (
//     <div className='absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center'>
//         <form className='relative bg-white p-10 rounded-xl text-slate-500'>
//             <h1 className='text-center text-2xl text-neutral-500 font-medium'>{state}</h1>
//             <p className='text-sm text-gray-500'>Welcome back! Please sign in to continue</p>

//             { state !== 'Login'  &&
//             <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5 border-gray-200'>
//                 <FaUserCircle size={25} className='drop-shadow' />
//                 <input onChange={e => setName(e.target.value)} value={name} type="text" className='outline-none text-sm' placeholder='Full Name' required />
//             </div>
            
//             }
//              <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5 border-gray-200'>
//                 <MdEmail size={25} className='drop-shadow' />
//                 <input onChange={e => setEmail(e.target.value)} value={email} type="email" className='outline-none text-sm' placeholder='Email' required />
//             </div>
//              <div className='border px-6 py-2 flex items-center gap-2 rounded-full mt-5 border-gray-200'>
//                 <FaLock size={25} className='drop-shadow' />
//                 <input onChange={e => setPassword(e.target.value)} value={password} type="password" className='outline-none text-sm' placeholder='Full Name' required />
//             </div>
//             <p className='text-sm text-blue-600 my-4 cursor-pointer'>Forgot Password?</p>
//             <button className='bg-blue-600 w-full text-white py-2 rounded-full'>{state === 'Login' ? 'Login' : 'Sign Up'}</button>

//             { state === 'Login' ?
//             <p className='mt-5 text-center'>Don't have an account? <span className='text-blue-600 cursor-pointer' onClick={() => setState('Sign Up')}>Sign Up</span></p>

//               :
//             <p className='mt-5 text-center'>Already have an account? <span className='text-blue-600 cursor-pointer' onClick={() => setState('Login')}>Login</span></p>
//             }

//             <RxCross2 onClick={() => setShowLogin(false)} className='absolute top-5 right-5 cursor-pointer' />


//         </form>
//     </div>
//   )
// }

// export default  Login


import React, { useContext, useEffect, useState } from 'react';
import { FaUserCircle, FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { RxCross2 } from 'react-icons/rx';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [state, setState] = useState('Login');
  const { setShowLogin, backendUrl, setToken, setUser } = useContext(AppContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const onsubmitHandler = async (e) => {
    e.preventDefault();

    if (!email || !password || (state === 'Sign Up' && !name)) {
      toast.error('Please fill in all required fields');
      return;
    }

    try {
      setLoading(true);
      let response;
      if (state === 'Login') {
        response = await axios.post(`${backendUrl}/api/user/login`, { email, password });
      } else {
        response = await axios.post(`${backendUrl}/api/user/register`, { name, email, password });
      }

      const data = response.data;

      if (data.success) {
        setToken(data.token);
        setUser(data.user);
        localStorage.setItem('token', data.token);
        setShowLogin(false);
        toast.success(`${state} successful`);
      } else {
        toast.error(data.message || 'Something went wrong');
      }

    } catch (error) {
      toast.error(error.response?.data?.message || error.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
      <form onSubmit={onsubmitHandler} className="relative bg-white p-10 rounded-xl text-slate-500">
        <h1 className="text-center text-2xl text-neutral-500 font-medium">{state}</h1>
        <p className="text-sm text-gray-500">Welcome back! Please sign in to continue</p>

        {state !== 'Login' && (
          <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5 border-gray-200">
            <FaUserCircle size={25} className="drop-shadow" />
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              className="outline-none text-sm w-full"
              placeholder="Full Name"
              required={state === 'Sign Up'}
            />
          </div>
        )}

        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5 border-gray-200">
          <MdEmail size={25} className="drop-shadow" />
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            className="outline-none text-sm w-full"
            placeholder="Email"
            required
          />
        </div>

        <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-5 border-gray-200">
          <FaLock size={25} className="drop-shadow" />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            type="password"
            className="outline-none text-sm w-full"
            placeholder="Password"
            required
          />
        </div>

        <p className="text-sm text-blue-600 my-4 cursor-pointer">Forgot Password?</p>
        <button
          type="submit"
          className="bg-blue-600 w-full text-white py-2 rounded-full"
          disabled={loading}
        >
          {loading ? 'Please wait...' : state === 'Login' ? 'Login' : 'Sign Up'}
        </button>

        {state === 'Login' ? (
          <p className="mt-5 text-center">
            Don't have an account?{' '}
            <span className="text-blue-600 cursor-pointer" onClick={() => setState('Sign Up')}>
              Sign Up
            </span>
          </p>
        ) : (
          <p className="mt-5 text-center">
            Already have an account?{' '}
            <span className="text-blue-600 cursor-pointer" onClick={() => setState('Login')}>
              Login
            </span>
          </p>
        )}

        <RxCross2 onClick={() => setShowLogin(false)} className="absolute top-5 right-5 cursor-pointer" />
      </form>
    </div>
  );
};

export default Login;
