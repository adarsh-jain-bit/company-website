import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { AnimatedText } from "./animated-shiny-text";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const observer = new ResizeObserver(() => {
        setHeight(ref.current.scrollHeight);
      });
      observer.observe(ref.current);

      return () => observer.disconnect();
    }
  }, [data]); // Update when `data` changes

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <AnimatedText
        text="Our Portfolio"
        textClassName="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 text-center"
      />
      <p className="text-md font-medium text-muted-foreground sm:text-xl mb-10 text-center">
        We are proud of our work, and we are always looking for new challenges.
        <br />
        Take a look at some of our recent creative portfolio works.
      </p>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-10  overflow-hidden">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10">
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              {/* Timeline Dot */}
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>

              {/* Title */}
              <h3 className="hidden md:block text-xl md:pl-20 md:text-3xl font-bold text-foreground bg-gradient-to-r from-purple-500 via-blue-200 to-green-400 text-transparent bg-clip-text">
                {item.title}
              </h3>
            </div>

            {/* Content Section */}
            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 className="md:hidden block text-xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}

        {/* Timeline Line */}
        <div
          style={{ height: `${height}px` }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-gradient-to-b from-transparent via-neutral-200 dark:via-neutral-700 to-transparent"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-blue-500 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
