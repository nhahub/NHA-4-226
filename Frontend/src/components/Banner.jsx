import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

    const navigate = useNavigate()

    return (
        <div className='flex bg-primary rounded-lg my-20 md:mx-10 overflow-hidden relative'>

            {/* ------- Left Side (الجزء الأيسر المكتوب) ------- */}
            <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 pl-8 sm:pl-12 md:pl-16 lg:pl-20 pr-8 md:pr-0'>
                <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>
                    <p>Book Appointment</p>
                    <p className='mt-4'>With 100+ Trusted Doctors</p>
                </div>
                <button
                    onClick={() => { navigate('/doctors'); window.scrollTo(0, 0) }}
                    className='bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all duration-300'
                >
                    Book Appointment
                </button>
            </div>

            {/* ------- Right Side (الجزء الأيمن المخصص للصورة) ------- */}
            <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
                <img
                    className='w-auto h-full absolute bottom-0 right-0 max-w-md object-contain object-bottom'
                    src={assets.appointment_img}
                    alt="Appointment"
                />
            </div>

        </div>
    )
}

export default Banner