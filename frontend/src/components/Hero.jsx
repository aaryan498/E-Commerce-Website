import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
    return (
        <div>
            <div className="flex flex-col sm:flex-row border border-gray-400">

                {/* Hero Left Side */}
                <div className='w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0'>
                    <div className='text-[#414141] playwrite-nz-basic-400'>
                        <div className="flex items-center gap-2">
                            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
                            <p className='font-medium text-sm md:text-base'>OUR BESTSELLER</p>
                        </div>
                        <h1 className='text-3xl sm:py-3 lg:text-5xl leading-relaxed'>Latest Arrival</h1>
                        <div className='flex items-center gap-2'>
                            <p className='font-semibold text-sm md:text-base'>SHOP NOW</p>
                            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
                        </div>
                    </div>
                </div>

                {/* Hero Right Side */}
                {/* Hero Right Side */}
                <div className="w-full sm:w-1/2 h-[70vh] flex">

                    <div className="w-1/2 h-full">
                        <img
                            src={assets.hero_img}
                            alt="Hero 1"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="w-1/2 h-full">
                        <img
                            src={assets.hero_img1}
                            alt="Hero 2"
                            className="w-full h-full object-cover"
                        />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Hero