import React,{useState,useEffect} from 'react'
import { FaArrowUpLong } from "react-icons/fa6";


const ScrollButton = () => {
    const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>

<div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-12 right-7 bg-gradient-to-r from-[#B60095] to-[#6122ED] hover:bg-gradient-to-r hover:from-[#6122ED] hover:to-[#B60095] p-4 rounded-full text-white focus:outline-none transition duration-300"
        >
          <FaArrowUpLong className='text-lg' />
        </button>
      )}
    </div>
      
    </>
  )
}

export default ScrollButton