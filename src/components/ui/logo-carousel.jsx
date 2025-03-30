import React, { useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";


const allLogos = [
  { name: "Apple", id: 1, img: bg1 },
  { name: "CEO Supabase", id: 2, img: bg2 },
  { name: "Vercel", id: 3, img: bg3 },
  { name: "Lowes", id: 4, img: bg4 },
  { name: "Ally", id: 5, img: bg5 },
  { name: "Pierre", id: 6, img: bg6 },
  { name: "BMW", id: 7, img: bg7 },
  { name: "Claude", id: 8, img: bg8 },
  { name: "Nextjs", id: 9, img: bg9 },
  { name: "Tailwind", id: 10, img: bg10 },
  { name: "Upstash", id: 11, img: bg11 },
  { name: "Typescript", id: 12, img: bg12 },
];

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

const distributeLogos = (allLogos, columnCount) => {
  const shuffled = shuffleArray(allLogos);
  const columns = Array.from({ length: columnCount }, () => []);

  shuffled.forEach((logo, index) => {
    columns[index % columnCount].push(logo);
  });

  const maxLength = Math.max(...columns.map((col) => col.length));
  columns.forEach((col) => {
    while (col.length < maxLength) {
      col.push(shuffled[Math.floor(Math.random() * shuffled.length)]);
    }
  });

  return columns;
};

const LogoColumn = React.memo(({ logos, index, currentTime }) => {
  const cycleInterval = 2000;
  const columnDelay = index * 200;
  const adjustedTime = (currentTime + columnDelay) % (cycleInterval * logos.length);
  const currentIndex = Math.floor(adjustedTime / cycleInterval);
  const CurrentLogo = useMemo(() => logos[currentIndex].img, [logos, currentIndex]);

  return (
    <motion.div
      className="relative h-14 w-24 overflow-hidden md:h-24 md:w-48"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}>
      <AnimatePresence mode="wait">
        <motion.img
          key={`${logos[currentIndex].id}-${currentIndex}`}
          src={CurrentLogo}
          alt={logos[currentIndex].name}
          className="absolute inset-0 h-20 w-20 max-h-[80%] max-w-[80%] object-contain md:h-32 md:w-32"
          initial={{ y: "10%", opacity: 0, filter: "blur(8px)" }}
          animate={{
            y: "0%", opacity: 1, filter: "blur(0px)",
            transition: { type: "spring", stiffness: 300, damping: 20, mass: 1, bounce: 0.2, duration: 0.5 },
          }}
          exit={{ y: "-20%", opacity: 0, filter: "blur(6px)", transition: { type: "tween", ease: "easeIn", duration: 0.3 } }}
        />
      </AnimatePresence>
    </motion.div>
  );
});

export function LogoCarousel({ columnCount = 2, logos }) {
  const [logoSets, setLogoSets] = useState([]);
  const [currentTime, setCurrentTime] = useState(0);

  const updateTime = useCallback(() => {
    setCurrentTime((prevTime) => prevTime + 100);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(updateTime, 100);
    return () => clearInterval(intervalId);
  }, [updateTime]);

  useEffect(() => {
    setLogoSets(distributeLogos(logos, columnCount));
  }, [logos, columnCount]);

  return (
    <div className="flex space-x-4">
      {logoSets.map((logos, index) => (
        <LogoColumn key={index} logos={logos} index={index} currentTime={currentTime} />
      ))}
    </div>
  );
}
