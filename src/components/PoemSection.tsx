import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import TypewriterText from "./TypewriterText";

interface SonnetLine {
  original: string;
  modern: string;
}

const sonnetLines: SonnetLine[] = [
  {
    original: "Shall I compare thee to a summer's day?",
    modern: "Should I compare you to a beautiful summer day?",
  },
  {
    original: "Thou art more lovely and more temperate:",
    modern: "You are more lovely and more balanced:",
  },
  {
    original: "Rough winds do shake the darling buds of May,",
    modern: "Strong winds damage the delicate flowers of spring,",
  },
  {
    original: "And summer's lease hath all too short a date;",
    modern: "And summer doesn't last long enough;",
  },
  {
    original: "Sometime too hot the eye of heaven shines,",
    modern: "Sometimes the sun is too hot,",
  },
  {
    original: "And often is his gold complexion dimm'd;",
    modern: "And often it's hidden by clouds;",
  },
  {
    original: "And every fair from fair sometime declines,",
    modern: "And everything beautiful eventually loses its beauty,",
  },
  {
    original: "By chance or nature's changing course untrimm'd;",
    modern: "By accident or by nature's inevitable changes;",
  },
  {
    original: "But thy eternal summer shall not fade,",
    modern: "But your everlasting beauty shall not fade,",
  },
  {
    original: "Nor lose possession of that fair thou ow'st;",
    modern: "Nor will you lose the beauty that you possess;",
  },
  {
    original: "Nor shall death brag thou wander'st in his shade,",
    modern: "Nor shall death claim you walk in his shadow,",
  },
  {
    original: "When in eternal lines to time thou grow'st:",
    modern: "When in these immortal verses you become one with time:",
  },
  {
    original: "So long as men can breathe or eyes can see,",
    modern: "As long as people live and can see,",
  },
  {
    original: "So long lives this, and this gives life to thee.",
    modern: "This poem will live on, and it will keep you alive.",
  },
];

const PoemSection = () => {
  const [hoveredLine, setHoveredLine] = useState<number | null>(null);
  const [currentLine, setCurrentLine] = useState(0);
  const [startTyping, setStartTyping] = useState(false);

  // Start typing animation when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !startTyping) {
            setStartTyping(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    const section = document.getElementById("poem-content");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, [startTyping]);

  const handleLineComplete = () => {
    if (currentLine < sonnetLines.length - 1) {
      setCurrentLine(currentLine + 1);
    }
  };

  return (
    <section className="min-h-screen py-24 px-6 bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 relative">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-600 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-['Inter'] text-amber-400/80 tracking-[0.3em] uppercase text-sm mb-4">
            The Poem
          </p>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            Sonnet 18
          </h2>
          <p className="font-['Inter'] text-slate-400 text-sm">
            Hover over each line to see the modern interpretation
          </p>
        </motion.div>

        {/* Poem container */}
        <motion.div
          id="poem-content"
          className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 md:p-12 shadow-2xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="space-y-4">
            {sonnetLines.map((line, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: index <= currentLine && startTyping ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                onMouseEnter={() => setHoveredLine(index)}
                onMouseLeave={() => setHoveredLine(null)}
              >
                {index <= currentLine && startTyping && (
                  <div className="relative overflow-hidden">
                    {/* Line number and typewriter text */}
                    <div className="flex items-start">
                      <span className="text-slate-600 text-sm mr-4 font-['Inter'] mt-1">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="flex-1">
                        {index === currentLine ? (
                          <TypewriterText
                            text={line.original}
                            speed={40}
                            className={`font-['Cormorant_Garamond'] text-lg md:text-xl transition-all duration-300 cursor-pointer ${
                              hoveredLine === index
                                ? "text-amber-300"
                                : "text-slate-200 hover:text-amber-200"
                            }`}
                            onComplete={handleLineComplete}
                          />
                        ) : (
                          <p
                            className={`font-['Cormorant_Garamond'] text-lg md:text-xl transition-all duration-300 cursor-pointer ${
                              hoveredLine === index
                                ? "text-amber-300 translate-x-2"
                                : "text-slate-200 hover:text-amber-200"
                            }`}
                          >
                            {line.original}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Modern translation tooltip */}
                    <motion.div
                      className="absolute left-0 top-full mt-1 z-20"
                      initial={{ opacity: 0, y: -10, scale: 0.95 }}
                      animate={{
                        opacity: hoveredLine === index ? 1 : 0,
                        y: hoveredLine === index ? 0 : -10,
                        scale: hoveredLine === index ? 1 : 0.95,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="bg-amber-900/90 backdrop-blur-sm text-amber-100 px-4 py-2 rounded-lg text-sm font-['Inter'] shadow-xl border border-amber-700/50 max-w-md">
                        <span className="text-amber-400 font-medium">
                          Modern:{" "}
                        </span>
                        {line.modern}
                      </div>
                    </motion.div>
                  </div>
                )}

                {/* Quatrain dividers */}
                {(index === 3 || index === 7 || index === 11) &&
                  index < currentLine && (
                    <div className="w-16 h-px bg-linear-to-r from-amber-500/50 to-transparent my-6 ml-12" />
                  )}
              </motion.div>
            ))}
          </div>

          {/* Attribution */}
          <motion.div
            className="mt-12 pt-8 border-t border-slate-700/50 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="font-['Cormorant_Garamond'] text-slate-400 italic text-lg">
              — William Shakespeare, c. 1609
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PoemSection;
