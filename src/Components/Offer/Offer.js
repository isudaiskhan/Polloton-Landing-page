// import React, { useState , useEffect } from "react"; 
// import defaultImage from '../Assets/Phone.png';
// import image1 from '../Assets/Vector (1).png';
// import image2 from '../Assets/Vector (2).png';
// import image3 from '../Assets/Vector (3).png';
// import image4 from '../Assets/Vector (4).png';
// import image5 from '../Assets/Vector (5).png';
// import image6 from '../Assets/Vector (6).png';
// import image7 from '../Assets/Vector (7).png';
// import image8 from '../Assets/hoverImage (1).png';
// import image9 from '../Assets/hoverImage (2).png';
// import image10 from '../Assets/hoverImage (3).png';
// import image11 from '../Assets/hoverImage (1).png';
// import image12 from '../Assets/hoverImage (2).png';
// import image13 from '../Assets/hoverImage (3).png';
// import image14 from '../Assets/hoverImage (1).png';
// import { motion } from "framer-motion";


// const AccordionItem = ({ title, content, icon, isActive, onMouseEnter, onMouseLeave }) => {
//   return (
//     <div
//       onMouseEnter={onMouseEnter}
//       onMouseLeave={onMouseLeave}
//       className="cursor-pointer"
//     >
//       <button className="w-full text-left flex items-center justify-between py-4 focus:outline-none">
//         <div className="flex items-center group">
//           <img src={icon} alt="icon" className="w-7 h-7 mr-4" />
//           <span className="group-hover:text-[#6122ED] font-family duration-500">{title}</span>
//         </div>
//       </button>
//       <div className={`overflow-hidden transition-all duration-500 ${isActive ? "max-h-40" : "max-h-0"}`}>
//         <p className="pt-2 px-10 pb-4 text-gray-400">{content}</p>
//       </div>
//     </div>
//   );
// };

// const Offer = () => {
//   const [activeIndex, setActiveIndex] = useState(null);
//   const [activeImage, setActiveImage] = useState(defaultImage);


//   const [windowSize, setWindowSize] = useState({
//     width: window.innerWidth,
//     height: window.innerHeight,
//   });

//   useEffect(() => {
//     const handleResize = () => {
//       setWindowSize({
//         width: window.innerWidth,
//         height: window.innerHeight,
//       });
//     };

//     window.addEventListener('resize', handleResize);

//     // Cleanup
//     return () => window.removeEventListener('resize', handleResize);
//   }, []); // Empty dependency array ensures that effect runs only once after mount

//   const initialX = windowSize.width >= 640 ? -300 : -170;


//   const items = [
//     {
//       title: "Create a profile to become a member of the new 'Scene'.",
//       content: "This section explains how voice technology unites people with a shared purpose.",
//       icon: image1,
//       image: image8,
//     },
//     {
//       title: "Author and post polls on social and news media.",
//       content: "A deeper look into how actions can create a dual impact for greater good.",
//       icon: image2,
//       image: image9,
//     },
//     {
//       title: "Raise donations for charitable causes you care about.",
//       content: "Learn how playful experiences are crafted with meaningful outcomes.",
//       icon: image3,
//       image: image10,
//     },
//     {
//       title: "Collect tips for popular polls and earn sponsorships for meaningful activism and impactful influence.",
//       content: "Understand the real-time media analysis provided by the Media Meter.",
//       icon: image4,
//       image: image11,
//     },
//     {
//       title: "Vote, like, share, and comment to shape insightful public discourse on topics that really matter to you and all of us.",
//       content: "Discover how diverse opinions shape the future and bring positive change.",
//       icon: image5,
//       image: image12,
//     },
//     {
//       title: "Broaden your perspectives on trending topics with valuable content vetted by polls and public discourse.",
//       content: "How influencers are becoming changemakers in their respective fields.",
//       icon: image6,
//       image: image13,
//     },
//     {
//       title: "Follow your favorite authors to deepen your understanding on trending topics.",
//       content: "Details on how you can monetize the insights you provide.",
//       icon: image7,
//       image: image14,
//     },
//   ];

//   return (
//     <div className="text-white overflow-hidden container mx-auto py-24 px-6 flex flex-col lg:flex-row items-center justify-between" id="whatweoffer">
//       {/* Accordion */}
//       <motion.div
//     initial={{ x: initialX, opacity: 0 }}
//     whileInView={{ x: 0, opacity: 1 }}
//     transition={{ 
//     delay: 0.2, 
//     x: { type: "spring", stiffness: 60 },
//     opacity: { duration: 1 },
//     ease: "easeIn",
//     duration: 1
//   }}
//        className="w-full lg:w-[45%] mb-12 lg:mb-0">
//         <h2 className="text-3xl font-medium font-family mb-6">What we offer?</h2>
//         <div className="space-y-">
//           {items.map((item, index) => (
//             <AccordionItem
//               key={index}
//               title={item.title}
//               content={item.content}
//               icon={item.icon}
//               isActive={activeIndex === index}
//               onMouseEnter={() => setActiveImage(item.image)}
//               onMouseLeave={() => setActiveImage(defaultImage)}
//             />
//           ))}
//         </div>
//       </motion.div>

//       <div className="w-full lg:w-1/2 flex justify-center">
//       <motion.div
//         initial={{ scale: 0.5, opacity: 0 }}
//         whileInView={{ scale: 1, opacity: 1 }} 
//         transition={{ delay: 0.2, type: "spring", stiffness: 60, duration: 1 }}
//          className="relative">
//           <img
//             src={activeImage}
//             alt="Hand Graphic"
//             className={`max-h-[32rem] `}
//           />
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Offer;





































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
import image11 from '../Assets/hoverImage (1).png';
import image12 from '../Assets/hoverImage (2).png';
import image13 from '../Assets/hoverImage (3).png';
import image14 from '../Assets/hoverImage (1).png';
import { motion } from "framer-motion";

const AccordionItem = ({ title, content, icon, isActive, onMouseEnter, onMouseLeave }) => {
  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="cursor-pointer">
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
            className="max-h-[32rem] transition-all duration-500 ease-in-out"
            onError={handleImageError}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Offer;
