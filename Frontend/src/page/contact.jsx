import React, { useEffect, useState } from 'react'
import { doctors, assets } from "../assets/assets_frontend/assets";
import { db } from "../firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await addDoc(collection(db, 'messages'), {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
        createdAt: serverTimestamp(),
        read: false
      });
      setFormData({ name: '', email: '', phone: '', message: '' });
      setStatus('sent');
    } catch (error) {
      console.error('Error sending message:', error);
      setStatus('error');
    }
  };


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  return (
    <div className='px-4 md:px-10 lg:px-20 py-10'>

      {/* ================= Top Section ================= */}
      <div className='grid md:grid-cols-2 gap-12 items-start'>

        {/* Left side */}
        <div
          className={`transition-all duration-700 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className='inline-flex items-center gap-2 bg-blue-50 text-blue-600 text-sm font-medium px-4 py-2 rounded-full mb-5'>
            <img src={assets.headphones} className='w-4 h-4' alt="" />
            WE'RE HERE TO HELP
          </div>

          <h1 className='text-4xl md:text-5xl font-extrabold text-gray-800 mb-4'>
            Contact <span className='text-blue-600'>Us</span>
          </h1>

          <p className='text-gray-500 mb-8'>
            Have questions or need assistance? <br /> Our team is ready to help you.
          </p>

          {/* Image with decorative blob */}
          <div className='relative mb-8'>
            <div className='absolute -bottom-6 -left-6 w-32 h-32 bg-blue-300 rounded-full opacity-70 -z-10'></div>
            <div className='absolute -left-10 top-1/3 grid grid-cols-3 gap-1 -z-10'>
              {Array.from({ length: 9 }).map((_, i) => (
                <span key={i} className='w-1.5 h-1.5 rounded-full bg-blue-300'></span>
              ))}
            </div>
            <img
              className={`w-full max-w-md rounded-2xl shadow-md transition-all duration-700 ease-out delay-150 ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              }`}
              src={assets.contact_image}
              alt=""
            />
          </div>

          {/* Info list */}
          <div className='flex flex-col gap-6'>

            <div
              className={`flex items-start gap-4 transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '250ms' }}
            >
              <div className='bg-blue-50 text-blue-600 p-3 rounded-full'>
                <img src={assets.map_pin} className='w-5 h-5' alt="" />
              </div>
              <div>
                <p className='font-semibold text-gray-700'>OUR OFFICE</p>
                <p className='text-gray-500 text-sm'>00000 Willms Station <br /> Suite 000, Washington, USA</p>
              </div>
            </div>

            <div
              className={`flex items-start gap-4 transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '350ms' }}
            >
              <div className='bg-blue-50 text-blue-600 p-3 rounded-full'>
                <img src={assets.phone} className='w-5 h-5' alt="" />
              </div>
              <div>
                <p className='font-semibold text-gray-700'>PHONE</p>
                <p className='text-gray-500 text-sm'>Tel: (000) 000-0000</p>
              </div>
            </div>

            <div
              className={`flex items-start gap-4 transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '450ms' }}
            >
              <div className='bg-blue-50 text-blue-600 p-3 rounded-full'>
                <img src={assets.mail} className='w-5 h-5' alt="" />
              </div>
              <div>
                <p className='font-semibold text-gray-700'>EMAIL</p>
                <p className='text-gray-500 text-sm'>Email: greatchoice@gmail.com</p>
              </div>
            </div>

            <div
              className={`flex items-start gap-4 transition-all duration-500 ease-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '550ms' }}
            >
              <div className='bg-blue-50 text-blue-600 p-3 rounded-full'>
                <img src={assets.clock} className='w-5 h-5' alt="" />
              </div>
              <div>
                <p className='font-semibold text-gray-700'>WORKING HOURS</p>
                <p className='text-gray-500 text-sm'>Mon - Fri: 8:00 AM – 6:00 PM <br /> Saturday: 9:00 AM – 2:00 PM</p>
              </div>
            </div>

          </div>
        </div>

        {/* Right side - Form */}
        <div
          className={`bg-white rounded-2xl shadow-lg p-8 transition-all duration-700 ease-out delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-6'
          }`}
        >
          <h2 className='text-xl font-bold text-gray-800 mb-2'>Send Us a Message</h2>
          <div className='w-12 h-1 bg-blue-600 rounded mb-6'></div>

          <form onSubmit={handleSubmit} className='flex flex-col gap-4'>

            <div className='grid sm:grid-cols-2 gap-4'>
              <div className='flex items-center border border-gray-300 rounded-lg px-4 py-3 focus-within:border-blue-500 transition-colors'>
                <img src={assets.user} className='w-4 h-4 mr-2' alt="" />
                <input
                  type='text'
                  name='name'
                  placeholder='Your Name'
                  value={formData.name}
                  onChange={handleChange}
                  className='w-full outline-none text-sm text-gray-700'
                />
              </div>

              <div className='flex items-center border border-gray-300 rounded-lg px-4 py-3 focus-within:border-blue-500 transition-colors'>
                <img src={assets.mail} className='w-4 h-4 mr-2' alt="" />
                <input
                  type='email'
                  name='email'
                  placeholder='Your Email'
                  value={formData.email}
                  onChange={handleChange}
                  className='w-full outline-none text-sm text-gray-700'
                />
              </div>
            </div>

            <div className='flex items-center border border-gray-300 rounded-lg px-4 py-3 focus-within:border-blue-500 transition-colors'>
              <img src={assets.phone} className='w-4 h-4 mr-2' alt="" />
              <input
                type='tel'
                name='phone'
                placeholder='Phone Number'
                value={formData.phone}
                onChange={handleChange}
                className='w-full outline-none text-sm text-gray-700'
              />
            </div>

            <div className='flex items-start border border-gray-300 rounded-lg px-4 py-3 focus-within:border-blue-500 transition-colors'>
              <img src={assets.message} className='w-4 h-4 mr-2 mt-1' alt="" />
              <textarea
                name='message'
                placeholder='Message'
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className='w-full outline-none text-sm text-gray-700 resize-none'
              />
            </div>

            <button
              type='submit'
              className='flex items-center justify-center gap-2 bg-linear-to-r from-blue-600 to-blue-500 text-white font-medium py-3 rounded-lg mt-2 hover:opacity-90 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300'
            >
              <img src={assets.send} className='w-4 h-4' alt="" />
              Send Message
            </button>

          </form>
    
          {status === 'sent' && (
            <p className='text-green-600 text-sm text-center mt-4'>Your message has been sent successfully. ✅</p>
          )}
          {status === 'error' && (
            <p className='text-red-600 text-sm text-center mt-4'>An error occurred; try again. ❌</p>
          )}
        
        </div>

      </div>

      {/* ================= Bottom Features Strip ================= */}
      <div
        className={`mt-16 bg-gray-50 rounded-2xl p-8 grid sm:grid-cols-3 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-gray-200 transition-all duration-700 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}
        style={{ transitionDelay: '600ms' }}
      >

        <div className='flex items-center gap-4 sm:pl-2'>
          <div className='bg-blue-50 text-blue-600 p-3 rounded-full'>
            <img src={assets.shield_check} className='w-6 h-6' alt="" />
          </div>
          <div>
            <p className='font-semibold text-gray-700'>Trusted Care</p>
            <p className='text-gray-500 text-sm'>We are committed to providing the best healthcare for you.</p>
          </div>
        </div>

        <div className='flex items-center gap-4 sm:pl-8 pt-6 sm:pt-0'>
          <div className='bg-blue-50 text-blue-600 p-3 rounded-full'>
            <img src={assets.users} className='w-6 h-6' alt="" />
          </div>
          <div>
            <p className='font-semibold text-gray-700'>Expert Doctors</p>
            <p className='text-gray-500 text-sm'>Our team of professionals is here to support your health.</p>
          </div>
        </div>

        <div className='flex items-center gap-4 sm:pl-8 pt-6 sm:pt-0'>
          <div className='bg-blue-50 text-blue-600 p-3 rounded-full'>
            <img src={assets.heart_plus} className='w-6 h-6' alt="" />
          </div>
          <div>
            <p className='font-semibold text-gray-700'>Your Health First</p>
            <p className='text-gray-500 text-sm'>Your well-being is our top priority every day.</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Contact