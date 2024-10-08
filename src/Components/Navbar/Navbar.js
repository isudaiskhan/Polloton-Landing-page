import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { IoMdMenu } from "react-icons/io";
import { motion } from 'framer-motion';
import footerlogo from '../Assets/Vector.png';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setMobileMenu(false);
    window.scrollTo(0, 0);
  }, []);

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  const closeMobileMenu = () => {
    setMobileMenu(false);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className={`fixed top-0 w-full border-b border-b-[#6122ED] z-50 transition duration-300 ${hasScrolled ? 'bg-[#13072E]' : ''} ${hasScrolled && window.scrollY > 10 ? 'top-0 shadow-xl' : ''}`}>
        <div className="relative max-w-[1240px] mx-auto sm:ps-9 sm:pe-9 ps-5 pe-5 xl:ps-0 xl:pe-0">
          <div className="py-4 mx-auto flex items-center justify-between xl:justify-start">
            <div className="cursor-pointer">
              <img src={footerlogo} className='w-36' alt="Footer logo" />
            </div>

            {/* Center Text */}
            <div className="hidden md:flex flex-1 items-center justify-center text-white space-x-4">
              <span
                onClick={() => { scrollToSection('whatsnew'); handleSectionClick('whatsnew'); }}
                className={`text-lg cursor-pointer duration-300 ${activeSection === 'whatsnew' ? 'text-[#6122ED]' : 'hover:text-[#6122ED]'}`}
              >
                What's new?
              </span>
              <span
                onClick={() => { scrollToSection('whatweoffer'); handleSectionClick('whatweoffer'); }}
                className={`text-lg cursor-pointer duration-300 ${activeSection === 'whatweoffer' ? 'text-[#6122ED]' : 'hover:text-[#6122ED]'}`}
              >
                What we offer?
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-24 ml-auto">
              <button
                onClick={() => { scrollToSection('download'); handleSectionClick('download'); }}
                className="group/button relative items-center mx-auto justify-center overflow-hidden rounded-full bg-gradient-to-r from-[#B60095] to-[#6122ED] hover:bg-gradient-to-r hover:from-[#6122ED] hover:to-[#B60095]
                text-white backdrop-blur-lg px-5 py-1.5 text-base font-semibold"
              >
                <span className="text-lg tracking-wider font-family">Get Started</span>
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                  <div className="relative h-full w-10 bg-white/30"></div>
                </div>
              </button>
            </div>

            <div className="block md:hidden">
              <button onClick={() => setMobileMenu(!mobileMenu)}>
                {mobileMenu ? (
                  <IoMdMenu className="text-4xl text-[#6122ED]" />
                ) : (
                  <IoMdMenu className="text-4xl text-[#6122ED]" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="fixed inset-0 z-50 min-h-screen bg-black bg-opacity-70">
          <motion.div
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 60, duration: 1 }}
            className="absolute right-0 min-h-screen sm:w-3/5 w-full py-4 px-8 shadow md:w-1/3 bg-gradient-to-r from-[#B60095] to-[#6122ED] z-50"
          >
            <button className="absolute top-0 right-0 mt-4 mr-4" onClick={() => setMobileMenu(false)}>
              <AiOutlineClose className="text-4xl text-white hover:text-gray-300" />
            </button>
            <ul className="mt-8 flex flex-col space-y-7">
              <div className="md:hidden block text-white" onClick={closeMobileMenu}>
                <div
                  onClick={() => { scrollToSection('whatsnew'); handleSectionClick('whatsnew'); }}
                  className={`text-lg mb-4 ${activeSection === 'whatsnew' ? 'text-[#6122ED]' : ''}`}
                >
                  What's new?
                </div>
                <div
                  onClick={() => { scrollToSection('whatweoffer'); handleSectionClick('whatweoffer'); }}
                  className={`text-lg mb-6 ${activeSection === 'whatweoffer' ? 'text-[#6122ED]' : ''}`}
                >
                  What we offer?
                </div>
                <button
                  onClick={() => { scrollToSection('download'); handleSectionClick('download'); }}
                  className="group/button relative items-center border-2 mx-auto justify-center overflow-hidden rounded-full bg-gradient-to-r from-[#B60095] to-[#6122ED] hover:bg-gradient-to-r hover:from-[#6122ED] hover:to-[#B60095]
                  text-white backdrop-blur-lg px-5 py-1.5 text-base font-semibold"
                >
                  <span className="text-lg tracking-wider font-family">Get Started</span>
                  <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                    <div className="relative h-full w-10 bg-white/30"></div>
                  </div>
                </button>
              </div>
            </ul>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Navbar;
