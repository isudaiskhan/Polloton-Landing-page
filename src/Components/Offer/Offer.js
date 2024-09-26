import React, { useState } from "react"; 
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
import image11 from '../Assets/hoverImage (1).png';
import image12 from '../Assets/hoverImage (2).png';
import image13 from '../Assets/hoverImage (3).png';
import image14 from '../Assets/hoverImage (1).png';

const AccordionItem = ({ title, content, icon, isActive, onMouseEnter, onMouseLeave }) => {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="cursor-pointer"
    >
      <button className="w-full text-left flex items-center justify-between py-4 focus:outline-none">
        <div className="flex items-center group">
          <img src={icon} alt="icon" className="w-7 h-7 mr-4" />
          <span className="group-hover:text-[#6122ED] font-family duration-500">{title}</span>
        </div>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ${isActive ? "max-h-40" : "max-h-0"}`}>
        <p className="pt-2 px-10 pb-4 text-gray-400">{content}</p>
      </div>
    </div>
  );
};

const Offer = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeImage, setActiveImage] = useState(defaultImage);

  const items = [
    {
      title: "Create a profile to become a member of the new 'Scene'.",
      content: "This section explains how voice technology unites people with a shared purpose.",
      icon: image1,
      image: image8,
    },
    {
      title: "Author and post polls on social and news media.",
      content: "A deeper look into how actions can create a dual impact for greater good.",
      icon: image2,
      image: image9,
    },
    {
      title: "Raise donations for charitable causes you care about.",
      content: "Learn how playful experiences are crafted with meaningful outcomes.",
      icon: image3,
      image: image10,
    },
    {
      title: "Collect tips for popular polls and earn sponsorships for meaningful activism and impactful influence.",
      content: "Understand the real-time media analysis provided by the Media Meter.",
      icon: image4,
      image: image11,
    },
    {
      title: "Vote, like, share, and comment to shape insightful public discourse on topics that really matter to you and all of us.",
      content: "Discover how diverse opinions shape the future and bring positive change.",
      icon: image5,
      image: image12,
    },
    {
      title: "Broaden your perspectives on trending topics with valuable content vetted by polls and public discourse.",
      content: "How influencers are becoming changemakers in their respective fields.",
      icon: image6,
      image: image13,
    },
    {
      title: "Follow your favorite authors to deepen your understanding on trending topics.",
      content: "Details on how you can monetize the insights you provide.",
      icon: image7,
      image: image14,
    },
  ];

  return (
    <div className="text-white container mx-auto py-24 px-6 flex flex-col lg:flex-row items-center justify-between">
      {/* Accordion */}
      <div className="w-full lg:w-[45%] mb-12 lg:mb-0">
        <h2 className="text-3xl font-medium font-family mb-6">What we offer?</h2>
        <div className="space-y-">
          {items.map((item, index) => (
            <AccordionItem
              key={index}
              title={item.title}
              content={item.content}
              icon={item.icon}
              isActive={activeIndex === index}
              onMouseEnter={() => setActiveImage(item.image)}
              onMouseLeave={() => setActiveImage(defaultImage)}
            />
          ))}
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="relative">
          <img
            src={activeImage}
            alt="Hand Graphic"
            className={`max-h-[32rem] transition-all duration-500 ease-in-out opacity-100`}
          />
        </div>
      </div>
    </div>
  );
};

export default Offer;
