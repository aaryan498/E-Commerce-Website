import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px] border' src={assets.contact} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>27th KM Stone, Delhi-Hapur Bypass Road, <br />Adhyatmik Nagar, Ghaziabad - 201009, <br />Uttar Pradesh, India</p>
          <p className='text-gray-500'>Phone: +91-82-1005-2459 <br /> Email: kumaraaryan498@gmail.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at CobraLite</p>
          <p className='text-gray-500'>Learn more about our teams and Job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default Contact