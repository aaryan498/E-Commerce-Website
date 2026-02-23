import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Login from './components/Login'
import { ToastContainer } from 'react-toastify';

export const backendUrl = import.meta.env.VITE_BACKEND_URL
export const currency = '$'

const App = () => {

  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '');

  useEffect(() => {
    localStorage.setItem("token", token)
  }, [token])

  return (
    <div className='bg-gray-50 min-h-screen'>
      <ToastContainer/>
      {token === ""
        ? <Login setToken={setToken}/>
        : <>

            <Navbar setToken={setToken} />

            <hr className='border-gray-300' />

            <div className='flex w-full'>

              <Sidebar />

              <div className='w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base'>

                <Routes>
                  <Route path='/add-product-admin' element={<Add token={ token } />} />
                  <Route path='/list-product-admin' element={<List token={ token } />} />
                  <Route path='/orders-admin' element={<Orders token={ token } />} />
                </Routes>

              </div>

            </div>

          </>
      }


    </div>
  )
}

export default App