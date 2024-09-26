import React, { useState } from "react";
import { motion } from "framer-motion";
import defaultImage from '../Assets/Polloton Hand.png';
import image1 from '../Assets/wmud1.1.png';
import image2 from '../Assets/hwd2.0.png';
import image3 from '../Assets/wmud3.0.png';
import image4 from '../Assets/Vector 4.png';
import image5 from '../Assets/Vector5.png';
import image6 from '../Assets/Vector6.png';
import image7 from '../Assets/Vector 7.png';
import image8 from '../Assets/image1.png';
import image9 from '../Assets/image2.png';
import image10 from '../Assets/image3.png';
import image11 from '../Assets/image4.png';
import image12 from '../Assets/image5.png';
import image13 from '../Assets/image6.png';
import image14 from '../Assets/image7.png';

const AccordionItem = ({ title, content, icon, isActive, onMouseEnter, onMouseLeave }) => {
  return (
    <div>
      <div
        className="w-full text-left flex items-center justify-between py-4 focus:outline-none"
      >
        <div className="flex items-center group">
          <img src={icon} alt="icon" className="w-7 h-7 mr-4" />
          <span 
            onMouseEnter={onMouseEnter} 
            onMouseLeave={onMouseLeave}
            className="group-hover:text-[#6122ED] font-family duration-500 cursor-pointer select-none"
          >
            {title}
          </span>
        </div>
      </div>
      
      {/* Smooth Animation */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }} 
        style={{ overflow: "hidden" }}
      >
        <p className="sm:pt-2 sm:px-10 ps-11 text-sm pb-4 text-white">{content}</p>
      </motion.div>
    </div>
  );
};

const NewOffers = () => {
  const [activeIndex, setActiveIndex] = useState(null); 
  const [activeImage, setActiveImage] = useState(defaultImage);

  const handleMouseEnter = (index, image) => {
    setActiveIndex(index);
    setActiveImage(image);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null); 
    setActiveImage(defaultImage);
  };

  const items = [
    {
      title: "Empowered by Voice, United by Purpose.",
      content: "We are not just a polling service; we are a platform for change. Join a diverse community that is passionate about shaping insightful public discourse on topics that matter, and united in driving positive change. Amplify your voice and your impact.",
      icon: image1,
      image: image8,
    },
    {
      title: "Dual Impact",
      content: "Combine polling of topics that matter to you with fundraising for causes you care about, with great user experience and dual impact. Every poll makes a difference, every comment counts, every vote matters, every dollar helps.",
      icon: image2,
      image: image9,
    },
    {
      title: "Play with Purpose.",
      content: "Who said making a difference can't be fun? Gamify your polls and fundraising efforts for a unique and rewarding experience. Or have fun with popular polls and supporting meaningful causes at the same time.",
      icon: image3,
      image: image10,
    },
    {
      title: "The Media Meter: Real-time Reality Check.",
      content: "Poll trending topics and measure opinions in news and social media posts with public sentiments in real time.",
      icon: image4,
      image: image11,
    },
    {
      title: "The Power of Diverse Opinions.",
      content: "Tap into a universe of voters across many social media and news media platforms to understand the real pulse of the people.",
      icon: image5,
      image: image12,
    },
    {
      title: "From Influencer to Changemaker.",
      content: "Transform your influence into real-world impact. Use your power as social media influencer to help shape the public discourse on topics that matter to us all and to support causes, we all care about.",
      icon: image6,
      image: image13,
    },
    {
      title: "Monetize Your Insights.",
      content: "Turn your interest in topics that matter to many of us into income. We empower creators of popular polls to monetize their content through tips and business sponsorships.",
      icon: image7,
      image: image14,
    },
  ];

  return (
    <div className="text-white py-20 px-6 container mx-auto flex flex-col lg:flex-row items-center justify-between">
      {/* Accordion */}
      <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
        <h2 className="text-3xl font-medium font-family mb-6">What's new?</h2>
        <div className="space-y-4">
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              content={item.content}
              icon={item.icon}
              isActive={activeIndex === index}
              onMouseEnter={() => handleMouseEnter(index, item.image)}
              onMouseLeave={handleMouseLeave}
            />
          ))}
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="relative">
          <img
            src={activeImage} 
            alt="Hand Graphic"
            className="max-h-[32rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default NewOffers;
