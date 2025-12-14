import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface TypewriterTextProps {
  text: string;
  speed?: number; // milliseconds per character
  className?: string;
  onComplete?: () => void;
}

const TypewriterText = ({
  text,
  speed = 50,
  className = "",
  onComplete,
}: TypewriterTextProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (currentIndex === text.length && !isComplete) {
      const timeout = setTimeout(() => {
        setIsComplete(true);
        if (onComplete) {
          onComplete();
        }
      }, 0);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed, isComplete, onComplete]);

  return (
    <div className={`font-serif text-[#2A2A2A] ${className}`}>
      <span className="whitespace-pre-wrap">{displayedText}</span>
      {!isComplete && (
        <motion.span
          className="inline-block w-[2px] h-[1.2em] bg-[#2A2A2A] ml-[1px] align-middle"
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        />
      )}
    </div>
  );
};

export default TypewriterText;
