import React,{useState , useEffect} from 'react'
import herologo from '../Assets/Vector.png'
import { FaApple } from "react-icons/fa";
import image1 from '../Assets/hero_bottom_right.png'
import googleplayicon from '../Assets/icons8-google-play.svg'
import {motion} from 'framer-motion';


const Hero = () => {

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []); 

  const initialX = windowSize.width >= 640 ? -300 : -170;


  return (
    <>

    <div className='h-[720px] mt-48 overflow-hidden'>

    <motion.div
    initial={{ x: initialX, opacity: 0 }} 
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ 
    delay: 0.2, 
    x: { type: "spring", stiffness: 60 },
    opacity: { duration: 1 },
    ease: "easeIn",
    duration: 1
  }}
    className='relative w-full px-2'>
     <div className='container sm:px-8 px-2 mx-auto flex flex-col lg:flex-row'>
      <div className=' w-full md:mt-8'>
      <img src={herologo} className='sm:w-96 w-64 mx-auto' />
      <p className='text-lg font-medium font-family text-white mt-6 text-center'>Polling and fundraising for cause that matter.</p>
      <div className='text-white xl:px-52 lg:px-36 mt-6'>
      <p className='text-center mb-5'>
        Our application enables users to compare opinions in news and social media with public sentiment. Amplify your voice and your impact to shape insightful public discourse and to raise funds for causes that matter.
      </p>
      <p className='text-center mb-2 sm:text-lg sm:font-family font-medium'>
        Start to monetize your passion today:
  </p>
  <div className='flex flex-wrap justify-center gap-x-2 sm:gap-x-6 text-center'>
    <span className='block'>Every poll makes a difference.</span>
    <span className='block'>Every vote counts.</span>
    <span className='block'>Every dollar helps.</span>
  </div>
</div>



   {/* App Store and Google play Buttons */}
   <div className="flex justify-center sm:flex-row flex-col sm:space-x-4 space-y-4 sm:space-y-0 mt-9">
      <button
        className="inline-flex items-center hover:bg-gradient-to-r hover:from-[#6122ED] hover:to-[#B60095] bg-black text-white py-1 px-4 sm:m-0 m-auto rounded-lg shadow-md border"
      >
        <FaApple className="text-4xl mr-2" />
        <div className="text-left">
          <p className="text-xs font-family">Available on the</p>
          <p className="text-lg font-medium font-family">App Store</p>
        </div>
      </button>

      <button
        className="inline-flex items-center bg-black hover:bg-gradient-to-r hover:from-[#6122ED] hover:to-[#B60095] text-white py-1 px-4 sm:m-0 m-auto rounded-lg shadow-md border"
      >
        <img src={googleplayicon} className='w-9 mr-2' />
        <div className="text-left">
          <p className="text-xs font-family">Get it on</p>
          <p className="text-lg font-medium font-family">Google Play</p>
        </div>
      </button>
    </div>

    <div className='flex lg:justify-start mt-3 md:justify-center'>
     
     <button
     className="group/button relative inline-flex items-center mx-auto mt-6 justify-center overflow-hidden rounded-full bg-gradient-to-r from-[#B60095] to-[#6122ED] hover:bg-gradient-to-r hover:from-[#6122ED] hover:to-[#B60095]
     text-white backdrop-blur-lg px-5 py-3 text-base font-semibold transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-[#B60095]"
     >
     <span className="font-family">Download the App</span>
     <div
         className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]"
     >
         <div className="relative h-full w-10 bg-white/30"></div>
     </div>
     </button>
   </div>


    </div>
   </div>
  </motion.div>
    <img src={image1} className='ml-auto md:block hidden w-[23%] -mt-[420px]' />

 </div>
    

    </>
  )
}

export default Hero