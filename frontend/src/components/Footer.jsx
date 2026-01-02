import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>

      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        
        {/* Section 1: Brand Description */}
        <div>
            <img src={assets.logo} className='mb-5 w-32' alt="Logo" />
            <p className='w-full md:w-2/3 text-gray-600'>
                Forever was born out of a passion for innovation and a desire to revolutionize the shopping experience. We are committed to providing the best quality products with a seamless browsing and delivery service.
            </p>
        </div>

        {/* Section 2: Company Links */}
        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600 cursor-pointer'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        {/* Section 3: Contact Info */}
        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1-212-456-7890</li>
                <li>contact@forever.com</li>
            </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div>
            <hr />
            <p className='text-sm py-5 text-center'>Copyright 2025@ forever.com - All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footer