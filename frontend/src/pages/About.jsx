import React from 'react'
import Title from '../components/Title'
import NewsLetterBox from '../components/NewsLetterBox'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum tenetur distinctio, nesciunt deleniti, iste eaque ab nostrum maiores esse quos, non dolores aut quidem sit corrupti omnis voluptas. Distinctio debitis eaque consequuntur accusamus optio magnam earum. Laudantium est voluptatibus nesciunt cupiditate esse molestiae ex cum?</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore temporibus suscipit possimus quas exercitationem, quis nulla officiis a provident saepe at consequuntur ullam eligendi alias ipsam cupiditate facilis quisquam molestias tenetur, voluptatibus praesentium? Nemo, sequi.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quia consequatur? Reiciendis neque odio itaque facilis aperiam officia voluptatem. Explicabo quos numquam ea nam iste at, ab laudantium. Velit, magni.</p>
        </div>
      </div>
      


      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border-gray-200 border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe distinctio, laborum laboriosam deserunt deleniti consequatur!</p>
        </div>
        <div className='border-gray-200 border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem Lorem, ipsum.. Saepe distinctio, laborum laboriosam deserunt deleniti consequatur!</p>
        </div>
        <div className='border-gray-200 border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur. deleniti consequatur!</p>
        </div>
      </div>
      <NewsLetterBox/>
    </div>
  )
}

export default About