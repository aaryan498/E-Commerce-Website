import React, { useState, useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import { useLocation } from 'react-router-dom'

const Searchbar = () => {
    const { search, setsearch, showSearch, setshowSearch } = useContext(ShopContext)
    const [visible, setvisible] = useState(false)


    const location = useLocation();

    useEffect(()=>{
      if(location.pathname.includes('collection') && showSearch){
        setvisible(true)
      }
      else{
        setvisible(false)
      }
    },[location])


  return showSearch && visible ? (
    <div className='border-t border-b bg-gray-50 text-center'>
        <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2'>
            <input value={search} onChange={(e)=>setsearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm' type="text" placeholder='Search' />
            <img className='w-4' src={assets.search_icon} alt="" />
        </div>
        <img onClick={()=>setshowSearch(false)} className='inline w-4 cursor-pointer' src={assets.cross_icon} alt="" />
    </div>
  ) : null
}

export default Searchbar