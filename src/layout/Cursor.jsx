import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      animate={{
        x: position.x - 80, // Centering for larger size
        y: position.y - 80,
      }}
      transition={{ type: "tween", duration: 0.1 }}
    >
      <div className="w-40 h-40 rounded-full bg-white opacity-50 blur-3xl"></div>
    </motion.div>
  );
}
