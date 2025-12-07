"use client";

import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

interface CircularTextProps {
  text: string;
  size?: number;            // Diameter of the whole circle
  radiusOffset?: number;    // How far outside the avatar the text should sit
  spinDuration?: number;
  onHover?: "slowDown" | "speedUp" | "pause" | "goBonkers";
  className?: string;
}

const CircularText: React.FC<CircularTextProps> = ({
  text,
  size = 260,            // bigger default size
  radiusOffset = 10,     // padding
  spinDuration = 20,
  onHover = "speedUp",
  className = "",
}) => {
  const letters = Array.from(text);
  const controls = useAnimation();

  const radius = size / 2 - radiusOffset; // automatic perfect circle

  useEffect(() => {
    controls.start({
      rotate: 360,
      transition: {
        repeat: Infinity,
        ease: "linear",
        duration: spinDuration,
      },
    });
  }, [spinDuration, controls]);

  const handleHoverStart = () => {
    let duration = spinDuration;

    if (onHover === "speedUp") duration = spinDuration / 4;
    if (onHover === "slowDown") duration = spinDuration * 2;
    if (onHover === "goBonkers") duration = spinDuration / 12;

    controls.start({
      rotate: 360,
      transition: {
        repeat: Infinity,
        ease: "linear",
        duration,
      },
    });
  };

  const handleHoverEnd = () => {
    controls.start({
      rotate: 360,
      transition: {
        repeat: Infinity,
        ease: "linear",
        duration: spinDuration,
      },
    });
  };

  return (
    <motion.div
      style={{ width: size, height: size }}
      className={`relative mx-auto flex items-center justify-center ${className}`}
      animate={controls}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      {letters.map((letter, i) => {
        const angle = (360 / letters.length) * i;
        const rad = (angle * Math.PI) / 180;

        const x = Math.cos(rad) * radius;
        const y = Math.sin(rad) * radius;

        return (
          <span
            key={i}
            className="absolute left-1/2 top-1/2 text-[14px] md:text-[16px] font-semibold"
            style={{
              transform: `
                translate(-50%, -50%)
                translate(${x}px, ${y}px)
                rotate(${angle + 90}deg)
              `,
              whiteSpace: "pre",
            }}
          >
            {letter}
          </span>
        );
      })}
    </motion.div>
  );
};

export default CircularText;
