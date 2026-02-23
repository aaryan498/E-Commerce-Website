import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const PlaceOrder = () => {

  const [method, setmethod] = useState('cod');
  const { navigate, backendURL, token, cartItems, setcartItems, getCartAmount, delivery_fee, products } = useContext(ShopContext)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: ''

  })


  const onChangeHandler = (event)=>{
    const name = event.target.name
    const value = event.target.value

    setFormData(data => ({...data, [name]:value}))
  }

  const initPay = (order)=>{
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Order Payment",
      description: "Order Payment",
      order_id: order.id,
      receipt: order.receipt,
      handler: async(response)=>{
        console.log(response)
        try {

          const { data } = await axios.post(backendURL + '/api/order/verifyRazorpay', response, {headers: {token}} )
          if(data.success){
            navigate('/order')
            setcartItems({})
          }
          
        } catch (error) {
          console.log(error);
          toast.error(error.message);
        }
      }
    }
    const rzp = new window.Razorpay(options)
    rzp.open()
  }

  const onSubmitHandler = async(e)=>{
    e.preventDefault()
    try {

      let orderItems = [];
      for(const items in cartItems){
        for(const item in cartItems[items]){
          if(cartItems[items][item] > 0){
            const itemInfo = structuredClone(products.find(product => product._id === items))
            if(itemInfo){
              itemInfo.size = item
              itemInfo.quantity = cartItems[items][item]
              orderItems.push(itemInfo)
            }
          }
        }
      }
      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCartAmount() + delivery_fee
      }

      switch (method) {
        // API Calls for COD
        case 'cod':
          const response = await axios.post(backendURL + '/api/order/placeorder-cod', orderData, {headers: {token}})
          if(response.data.success){
            setcartItems({})
            navigate('/order')
          } else{
            toast.error(response.data.message)
          }
          break;

        case 'stripe':
          const responseStripe = await axios.post(backendURL + '/api/order/placeorder-stripe', orderData, {headers: {token}})
          if(responseStripe.data.success){
            const { session_url } = responseStripe.data
            window.location.replace(session_url)
          } else{
            toast.error(responseStripe.data.message)
          }
          break;

        case 'razorpay':
          const  responseRazorpay = await axios.post(backendURL + '/api/order/placeorder-razorpay', orderData, {headers: {token}})
          if(responseRazorpay.data.success){
            initPay(responseRazorpay.data.order);
            
          }

        default:

          break;
      }
      
      
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }



  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>

      {/* RIGHT SIDE OF PAGE */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
        </div>
        <div className='flex gap-3'>
          <input required onChange={onChangeHandler} name='firstName' value={formData.firstName} type="text" placeholder='FIRST NAME' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>
          <input required onChange={onChangeHandler} name='lastName' value={formData.lastName} type="text" placeholder='LAST NAME' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>
        </div>
          <input required onChange={onChangeHandler} name='email' value={formData.email} type="email" placeholder='EMAIL ADDRESS' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>
          <input required onChange={onChangeHandler} name='street' value={formData.street} type="text" placeholder='STREET' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>
        <div className='flex gap-3'>
          <input required onChange={onChangeHandler} name='city' value={formData.city} type="text" placeholder='CITY' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>
          <input required onChange={onChangeHandler} name='state' value={formData.state} type="text" placeholder='STATE' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>
        </div>
        <div className='flex gap-3'>
          <input required onChange={onChangeHandler} name='zipcode' value={formData.zipcode} type="number" placeholder='ZIP CODE' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>
          <input required onChange={onChangeHandler} name='country' value={formData.country} type="text" placeholder='COUNTRY' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>
        </div>
          <input required onChange={onChangeHandler} name='phone' value={formData.phone} type="number" placeholder='PHONE NUMBER' className='border border-gray-300 rounded py-1.5 px-3.5 w-full'/>
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
            <button type='submit' className='bg-black text-white cursor-pointer px-16 py-3 text-sm'>PLACE ORDER</button>
          </div>
        </div>
      </div>


    </form>
  )
}

export default PlaceOrder