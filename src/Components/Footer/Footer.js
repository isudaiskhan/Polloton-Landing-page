import React from 'react'
import {FaFacebook, FaYoutube } from 'react-icons/fa';
import {AiOutlineTwitter, AiFillLinkedin} from 'react-icons/ai';
import footerlogo from '../Assets/Vector.png'


const Footer = () => {
  return (
    <>
      <div className='container py-8 mx-auto mt-20 md:px-10 px-6 text-gray-300 overflow-hidden'>
        <div className='flex flex-wrap justify-center gap-6'>
            <div className='w-full lg:w-[30%] md:w-2/5'>
            <div className='space-y-3 mt-16'>
             <img src={footerlogo} className='sm:w-60 w-40' />

      </div>
      </div>
   
      <div className='w-full lg:w-1/5 md:w-2/5'>
        <div className='space-y-3 mt-16'>
         <ul>
            <li className='py-2 cursor-pointer text-white hover:tracking-widest duration-500'>Terms of Service</li>
            <li className='py-2 cursor-pointer text-white hover:tracking-widest duration-500'>Privacy Policy</li>      
            <li className='py-2 cursor-pointer text-white hover:tracking-widest duration-500'>Cookie Policy</li>
        </ul>

        </div>
      </div>
  
      <div className='w-full lg:w-1/5 md:w-2/5'>
      <div className='space-y-3 mt-16'>
          <ul>
            <li className='py-2 cursor-pointer text-white hover:tracking-widest duration-500'>Accessibility</li>
            <li className='py-2 cursor-pointer text-white hover:tracking-widest duration-500'>Ads info</li>      
            <li className='py-2 cursor-pointer text-white hover:tracking-widest duration-500'>More</li>
        </ul>
        </div>
      </div>
  
    
      <div className='overflow-hidden md:w-2/5 lg:w-[20%] md:px-0 px-2 w-full'>
      <div className="md:mx-auto md:max-w-md">
            <div className="mt-16 md:px-3">

            
            <div className="flex items-center justify-start">
        <div className='md:flex items-center py-6 text-center'>
        <div className='flex justify-end text-white space-x-5 flex-wrap ps-1'>
                      <FaFacebook className='cursor-pointer text-[#9255E0] text-xl' />

                      <AiOutlineTwitter className='cursor-pointer text-[#9255E0] text-xl' />
  
                      <FaYoutube className='cursor-pointer text-[#9255E0] text-xl' />
  
                      <AiFillLinkedin className='cursor-pointer text-[#9255E0] text-xl' />
              </div>
             
          </div>
      </div>

                </div>
            </div>

                </div>
                <div className='py-2 mt-2'>
                <h1>© 2024 Polloton. All Rights Reserved.</h1>
              </div>
                </div> 
            </div>  
    </>
  )
}

export default Footer