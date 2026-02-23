import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {

    const { setshowSearch, getCartCount, token, setToken, navigate, setCartItems } = useContext(ShopContext)

    const [visible, setvisible] = useState(false);

    const logout = ()=>{
        navigate('/login')
        localStorage.removeItem('token')
        setToken('')
        setCartItems({})
    }

  return (
    <div className='flex items-center justify-between py-5 font-medium'>

        <Link to='/'>
            <img src={assets.logo} className='w-36' alt="" />
        </Link>

        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>

            <NavLink to='/' className='flex flex-col items-center gap-1'>
                <p>HOME</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                <p>COLLECTION</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/about' className='flex flex-col items-center gap-1'>
                <p>ABOUT US</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                <p>CONTACT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
        </ul>


        <div className="flex items-center gap-6">
            <img onClick={()=>setshowSearch(true)} src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
            
            <div className="group relative">
                <img onClick={()=> token ? null : navigate('/login')} src={assets.profile_icon} className='w-5 cursor-pointer' alt="" />
                {/* Drop Down */}
                {
                    token &&
                <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
                    <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                        <p className='cursor-pointer hover:text-black'>My Profile</p>
                        <p onClick={()=>navigate('/order')} className='cursor-pointer hover:text-black'>Orders</p>
                        <p onClick={logout} className='cursor-pointer hover:text-black'>Log Out</p>
                    </div>
                </div>
                }
            </div>
            <Link to='/cart' className='relative'>
                <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
                <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
            </Link>

            <img onClick={()=>{setvisible(true)}} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />

            {/* Sidebar for small screen-size  */}
            <div className={`absolute top-0 bottom-0 right-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-gray-600'>
                    <div onClick={()=>{setvisible(false)}} className='flex cursor-pointer items-center gap-4 p-3'>
                        <img src={assets.back_icon} className='h-4 rotate-90' alt="" />
                        <p>Back</p>
                    </div>

                    <NavLink onClick={()=>setvisible(false)} className='py-2 pl-6' to='/'>HOME</NavLink>
                    <NavLink onClick={()=>setvisible(false)} className='py-2 pl-6' to='/collection'>COLLECTION</NavLink>
                    <NavLink onClick={()=>setvisible(false)} className='py-2 pl-6' to='/cart'>MY CART</NavLink>
                    <NavLink onClick={()=>setvisible(false)} className='py-2 pl-6' to='/about'>ABOUT US</NavLink>
                    <NavLink onClick={()=>setvisible(false)} className='py-2 pl-6' to='/contact'>CONTACT</NavLink>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Navbar