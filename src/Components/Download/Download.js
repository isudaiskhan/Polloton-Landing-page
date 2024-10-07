import React from 'react';
import { FaApple } from "react-icons/fa";
import image1 from '../Assets/QR Code.png'
import googleplayicon from '../Assets/icons8-google-play.svg'
import { motion } from "framer-motion";


const Download = () => {
  return (
    <>
    <div className='sm:px-6 container overflow-hidden mx-auto' id='download'>
    <motion.div
     initial={{ y: 150, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ 
      delay: 0.4, 
      y: { type: "spring", stiffness: 60 },
      opacity: { duration: 0.2 },
      ease: "easeIn",
      duration: 1
  }}
     className='py-24 mt-12'>
    <div className="bg-gradient-to-r from-[#9255E0] to-[#6122ED] text-white sm:p-8 p-5 rounded-xl">
      <div className="mb-8">
      <h1 className="text-4xl font-semibold font-family mb-4">Get Started</h1>

        <h1 className="text-2xl font-family font-medium mb-4">Monetize your passion for driving positive change today.</h1>
    
      </div>
      
      <div className="grid lg:grid-cols-2 gap-6">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 60, duration: 1 }}
         className="bg-[#1A1A1A] p-6 rounded-lg flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-medium font-family text-white mb-4">Download the App</h2>
            <p className="text-gray-400">
            Enjoy a new experience to feel the pulse of the people, to shape public opinion, and to drive positive change for causes that matter. Available on both IOS and Android platforms.

            </p>
          </div>

       {/* App Store and Google Play Buttons */}
      <div className="flex justify-start sm:flex-row flex-col sm:space-x-4 space-y-4 sm:space-y-0 mt-7"> 
       <button
        className="inline-flex items-center bg-black text-white py-1 px-4 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-[#6122ED] hover:to-[#B60095] me-auto sm:m-0 border"
      >
        <FaApple className="text-4xl mr-2" />
        <div className="text-left">
          <p className="text-xs font-family">Available on the</p>
          <p className="text-lg font-family font-medium">App Store</p>
        </div>
      </button>


      <button
        className="inline-flex items-center bg-black text-white py-1 px-4 rounded-lg shadow-md hover:bg-gradient-to-r hover:from-[#6122ED] hover:to-[#B60095] me-auto sm:m-0 border"
      >
        <img src={googleplayicon} className='w-9 mr-2' />
        <div className="text-left">
          <p className="text-xs font-family">Get it on</p>
          <p className="text-lg font-family font-medium">Google Play</p>
        </div>
      </button>
    </div>
        </motion.div>

    {/* Right Card - QR Code Section */}
    <motion.div
        initial={{ scale: 0.5, opacity: 0 }} 
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 60, duration: 1 }}
    className="bg-[#1A1A1A] p-6 md:space-x-3 rounded-lg flex flex-col md:flex-row justify-between">
   <div className="md:w-3/4 text-left">
    <h2 className="text-2xl font-medium text-white font-family mb-4">Scan QR Code</h2>
    <p className="text-gray-400">
    No needs to type out links. Just scan and get started in seconds. Works with any smartphone or tablet.

    </p>
  </div>

      <div className="mt-6 md:mt-0 flex justify-center items-center md:justify-end">
        <img src={image1} alt="QR Code" className="w-32 h-32" />
      </div>
    </motion.div>

      </div>
    </div>
    </motion.div>
    </div>
    </>
  );
};

export default Download;