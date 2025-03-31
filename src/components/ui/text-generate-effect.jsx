"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");

  useEffect(() => {
    animate("span", {
      opacity: 1,
      filter: filter ? "blur(0px)" : "none",
    }, {
      duration: duration ? duration : 1,
      delay: stagger(0.2),
    });
  }, [scope.current]);

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        {/* ✅ Apply gradient to the entire text container */}
        <motion.div
          ref={scope}
          className="bg-gradient-to-r from-purple-500 via-blue-200 to-green-400 text-transparent bg-clip-text md:text-xl text-sm leading-snug tracking-wide"
        >
          {wordsArray.map((word, idx) => (
            <motion.span
              key={word + idx}
              className="opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
