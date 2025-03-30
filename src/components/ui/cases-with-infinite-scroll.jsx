"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { AnimatedText } from "./animated-shiny-text";

// Importing images
import bg2 from "/public/assets/certificate/bg2.png";
import bg3 from "/public/assets/certificate/bg3.png";
import bg4 from "/public/assets/certificate/bg4.png";
import bg5 from "/public/assets/certificate/bg5.png";
import bg6 from "/public/assets/certificate/bg6.png";
import bg7 from "/public/assets/certificate/bg7.png";
import bg8 from "/public/assets/certificate/bg8.png";
import bg9 from "/public/assets/certificate/bg9.png";
import bg10 from "/public/assets/certificate/bg10.png";
import bg11 from "/public/assets/certificate/bg11.png";
import bg12 from "/public/assets/certificate/bg12.png";

// Array of logos
const logos = [bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9, bg10, bg11, bg12];

// Duplicate logos for smooth looping
const duplicatedLogos = [...logos, ...logos];

function Case() {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!scrollRef.current) return;

    let speed = 1; // Adjust speed for smooth scrolling
    let position = 0;
    let requestId;

    const smoothScroll = () => {
      if (!isHovered) {
        position += speed;
        if (position >= scrollRef.current.scrollWidth / 2) {
          position = 0; // Reset position to create a seamless loop
        }
        scrollRef.current.scrollLeft = position;
      }
      requestId = requestAnimationFrame(smoothScroll);
    };

    requestId = requestAnimationFrame(smoothScroll);

    return () => cancelAnimationFrame(requestId);
  }, [isHovered]); // Added dependency here

  return (
    <div className="w-full py-10 lg:py-10">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          {/* Animated Heading */}
          <div className=" w-[570px]">
            <AnimatedText 
              text="Trusted by thousands of businesses worldwide" 
              textClassName="text-lg md:text-xl lg:text-2xl font-bold 
             text-left"
              className="text-left"
            />
          </div>

          {/* Scrolling Logo Section */}
          <div
            ref={scrollRef}
            className="w-full overflow-hidden flex items-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.div className="flex gap-6 min-w-max">
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-[#ffffff40] border shadow-md flex items-center justify-center w-32 h-32 md:w-48 md:h-48"
                >
                  <img
                    src={logo}
                    alt={`Logo ${index + 1}`}
                    className="h-20 w-20 md:h-32 md:w-32 object-contain"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Case };
