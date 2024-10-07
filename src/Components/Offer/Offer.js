import React, { useState, useEffect } from "react";
import defaultImage from '../Assets/Phone.png';
import image1 from '../Assets/Vector (1).png';
import image2 from '../Assets/Vector (2).png';
import image3 from '../Assets/Vector (3).png';
import image4 from '../Assets/Vector (4).png';
import image5 from '../Assets/Vector (5).png';
import image6 from '../Assets/Vector (6).png';
import image7 from '../Assets/Vector (7).png';
import image8 from '../Assets/hoverImage (1).png';
import image9 from '../Assets/hoverImage (2).png';
import image10 from '../Assets/hoverImage (3).png';
import image11 from '../Assets/hoverImage (4).png';
import image12 from '../Assets/hoverImage (5).png';
import image13 from '../Assets/hoverImage (6).png';
import image14 from '../Assets/hoverImage (7).png';
import { motion } from "framer-motion";
import image15 from '../Assets/Vector (8).png';
import image16 from '../Assets/hoverImage (8).png';



const AccordionItem = ({ title, icon, isActive, onMouseEnter, onMouseLeave }) => {
  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="cursor-pointer">
      <button className="w-full text-left flex items-center justify-between py-4 focus:outline-none">
        <div className="flex items-center group">
          <img src={icon} alt="icon" className="w-7 h-7 mr-4" />
          <span className="group-hover:text-[#6122ED] font-family duration-500">{title}</span>
        </div>
      </button>
    </div>
  );
};

const Offer = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeImage, setActiveImage] = useState(defaultImage);

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

  const items = [
        {
          title: "Create a profile to become a member of the 'Scene'.",
          icon: image1,
          image: image8,
        },
        {
          title: "Author and post polls on social and news media.",
          icon: image2,
          image: image9,
        },
        {
          title: "Raise donations for charitable causes you care about.",
          icon: image3,
          image: image10,
        },
        {
          title: "Collect tips for popular polls for meaningful activism and impactful influence.",
          icon: image4,
          image: image11,
        },
        {
          title: "Vote, like, share, and comment to shape insightful public discourse on topics that really matter to you .",
          icon: image5,
          image: image12,
        },
        {
          title: "Broaden your perspectives on trending topics with valuable content vetted by polls and public discourse.",
          icon: image6,
          image: image13,
        },
        {
          title: "Follow your favorite authors to deepen your understanding on trending topics.",
          icon: image7,
          image: image14,
        },

        {
          title: "Build and keep in touch with a diverse, insightful and passionate community of influencers and changemakers.",
          icon: image15,
          image: image16,
        },
      ];

  const handleImageError = () => {
    setActiveImage(defaultImage);
  };

  return (
    <div className="text-white overflow-hidden container mx-auto py-24 px-6 flex flex-col lg:flex-row items-center justify-between" id="whatweoffer">
      <motion.div
        initial={{ x: initialX, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          delay: 0.2,
          x: { type: "spring", stiffness: 60 },
          opacity: { duration: 1 },
          ease: "easeIn",
          duration: 1,
        }}
        className="w-full lg:w-[45%] mb-12 lg:mb-0"
      >
        <h2 className="text-3xl font-medium font-family mb-6">What we offer?</h2>
        <div>
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              icon={item.icon}
              isActive={activeIndex === index}
              onMouseEnter={() => setActiveImage(item.image)}
              onMouseLeave={() => setActiveImage(defaultImage)}
            />
          ))}
        </div>
      </motion.div>

      <div className="w-full lg:w-1/2 flex justify-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 60, duration: 1 }}
          className="relative"
        >
          <img
            src={activeImage}
            alt="Hand Graphic"
            className="max-h-[32rem]"
            onError={handleImageError}
          />
        </motion.div>

      </div>
    </div>
    
  );
};

export default Offer;