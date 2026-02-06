import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {

  const [method, setmethod] = useState('cod');
  const { navigate } = useContext(ShopContext)

  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>

      {/* RIGHT SIDE OF PAGE */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
        </div>
        <div className='flex gap-3'>
          <input type="text" placeholder='FIRST NAME' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>
          <input type="text" placeholder='LAST NAME' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>
        </div>
          <input type="email" placeholder='EMAIL ADDRESS' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>
          <input type="text" placeholder='STREET' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>
        <div className='flex gap-3'>
          <input type="text" placeholder='CITY' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>
          <input type="text" placeholder='STATE' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>
        </div>
        <div className='flex gap-3'>
          <input type="number" placeholder='ZIP CODE' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>
          <input type="text" placeholder='COUNTRY' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>
        </div>
          <input type="number" placeholder='PHONE NUMBER' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>
      </div>

      {/* LEFT SIDE OF PAGE */}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal/>
        </div>

        <div className='mt-12'>
          <Title text1={'PAYMENT'} text2={'METHOD'} />
          {/* PAYMENT METHOD SELECTION */}
          <div className='flex gap-3 flex-col lg:flex-row'>
            <div onClick={()=>setmethod('stripe')} className='flex items-center gap-3 border border-gray-200 p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border border-gray-500 rounded-full ${method === 'stripe' ? 'bg-green-400' : ''}`}></p>
              <img className='h-10 mx-3' src={assets.stripe} alt="" />
            </div>
            <div onClick={()=>setmethod('razorpay')} className='flex items-center gap-3 border border-gray-200 p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border border-gray-500 rounded-full ${method === 'razorpay' ? 'bg-green-400' : ''}`}></p>
              <img className='h-4 mx-3' src={assets.razorpay} alt="" />
            </div>
            <div onClick={()=>setmethod('cod')} className='flex items-center gap-3 border border-gray-200 p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border border-gray-500 rounded-full ${method === 'cod' ? 'bg-green-400' : ''}`}></p>
              <p className='text-gray-500 text-xs font-medium mx-3'>CASH ON DELIVERY</p>
            </div>
          </div>

          <div className='w-full text-end mt-8'>
            <button onClick={()=>navigate('/order')} className='bg-black text-white cursor-pointer px-16 py-3 text-sm'>PLACE ORDER</button>
          </div>
        </div>
      </div>


    </div>
  )
}

export default PlaceOrder