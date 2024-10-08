import React,{useState , useEffect} from 'react'
import {FaFacebook, FaYoutube } from 'react-icons/fa';
import { AiFillLinkedin } from 'react-icons/ai';
import footerlogo from '../Assets/Vector.png'
import {motion} from 'framer-motion';
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {

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

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const initialXLeft = windowSize.width >= 640 ? -200 : -100;
  const initialXRight = windowSize.width >= 640 ? 200 : 100;

  const initialGreen = {
    x: initialXLeft,
    opacity: 0
  };

  const initialRed = {
    x: initialXRight,
    opacity: 0
  };

  return (
    <>
      <div className='container py-8 mx-auto mt-20 md:px-10 px-6 text-gray-300 overflow-hidden'>
        <div className='flex flex-wrap justify-center gap-6'>
        <motion.div
        initial={initialGreen}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ 
        delay: 0.2, 
        x: { type: "spring", stiffness: 60 },
        opacity: { duration: 1 },
        ease: "easeIn", 
        duration: 1
      }}
             className='w-full lg:w-[30%] md:w-2/5'>
            <div className='space-y-3 mt-16'>
             <img src={footerlogo} className='sm:w-60 w-40' />

      </div>
      </motion.div>
   
      <div className='w-full lg:w-1/5 md:w-2/5'>
      <motion.div
        initial={initialGreen}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ 
        delay: 0.2, 
        x: { type: "spring", stiffness: 60 },
        opacity: { duration: 1 },
        ease: "easeIn", 
        duration: 1
      }}
         className='space-y-3 mt-16'>
         <ul>
            <li className='py-2 cursor-pointer text-white hover:tracking-widest duration-500'>Terms of Service</li>
            <li className='py-2 cursor-pointer text-white hover:tracking-widest duration-500'>Privacy Policy</li>      
            <li className='py-2 cursor-pointer text-white hover:tracking-widest duration-500'>Cookie Policy</li>
        </ul>

        </motion.div>
      </div>
  
      <div className='w-full lg:w-1/5 md:w-2/5'>
      <motion.div
        initial={initialRed}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ 
        delay: 0.2, 
        x: { type: "spring", stiffness: 60 },
        opacity: { duration: 1 },
        ease: "easeIn", 
        duration: 1
      }}
       className='space-y-3 mt-16'>
          <ul>
            <li className='py-2 cursor-pointer text-white hover:tracking-widest duration-500'>Accessibility</li>
            <li className='py-2 cursor-pointer text-white hover:tracking-widest duration-500'>Ads info</li>      
            <li className='py-2 cursor-pointer text-white hover:tracking-widest duration-500'>More</li>
        </ul>
        </motion.div>
      </div>
  
    
      <div className='overflow-hidden md:w-2/5 lg:w-[20%] md:px-0 px-2 w-full'>
      <motion.div
        initial={initialRed}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ 
        delay: 0.2, 
        x: { type: "spring", stiffness: 60 },
        opacity: { duration: 1 },
        ease: "easeIn", 
        duration: 1
      }}
       className="md:mx-auto md:max-w-md">
            <div className="mt-16 md:px-3">

            
            <div className="flex items-center justify-start">
        <div className='md:flex items-center py-6 text-center'>
        <div className='flex justify-end text-white xl:space-x-5 lg:space-x-3 space-x-5 flex-wrap'>
  <div>
    <button className="relative w-8 h-8 rounded-full group">
      <div
        className="w-full h-full absolute top-0 left-0 bg-[#9255E0] rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"
      ></div>
      <div
        className="relative z-10 w-full h-full flex items-center justify-center border-2 border-[#9255E0] rounded-full"
      >
         <FaFacebook className='cursor-pointer text-white text-xl' /> 

      </div>
    </button>
  </div>
  <div>
    <button className="relative w-8 h-8 rounded-full group">
      <div
        className="w-full h-full absolute top-0 left-0 bg-[#9255E0] rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"
      ></div>
      <div
        className="relative z-10 w-full h-full flex items-center justify-center border-2 border-[#9255E0] rounded-full"
      >
       <FaXTwitter className='cursor-pointer text-white text-xl' />
      </div>
    </button>
  </div>
  <div>
    <button className="relative w-8 h-8 rounded-full group">
      <div
        className="w-full h-full absolute top-0 left-0 bg-[#9255E0] rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"
      ></div>
      <div
        className="relative z-10 w-full h-full flex items-center justify-center border-2 border-[#9255E0] rounded-full"
      >
        <FaYoutube className='cursor-pointer text-white text-xl' />
      </div>
    </button>
  </div>
  <div>
    <button className="relative w-8 h-8 rounded-full group">
      <div
        className="w-full h-full absolute top-0 left-0 bg-[#9255E0] rounded-full duration-300 group-hover:-top-8 group-hover:shadow-2xl"
      ></div>
      <div
        className="relative z-10 w-full h-full flex items-center justify-center border-2 border-[#9255E0] rounded-full"
      >
        <AiFillLinkedin className='cursor-pointer text-white text-xl' />
      </div>
    </button>
  </div>
</div>

              </div>
             
          </div>
      </div>
            </motion.div>

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