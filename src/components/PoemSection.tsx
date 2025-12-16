import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import TypewriterText from "./TypewriterText";

interface SonnetLine {
  original: string;
  modern: string;
}

const sonnetLines: SonnetLine[] = [
  {
    original: "As an unperfect actor on the stage,",
    modern: "Like a nervous actor who forgets his lines on stage,",
  },
  {
    original: "Who with his fear is put beside his part,",
    modern: "Who is so afraid that he can't perform his role,",
  },
  {
    original: "Or some fierce thing replete with too much rage,",
    modern: "Or like someone filled with so much emotion,",
  },
  {
    original: "Whose strength's abundance weakens his own heart;",
    modern: "That the intensity of their feelings overwhelms them;",
  },
  {
    original: "So I, for fear of trust, forget to say",
    modern: "In the same way, I'm too afraid to express myself,",
  },
  {
    original: "The perfect ceremony of love's rite,",
    modern: "To speak the proper words that love requires,",
  },
  {
    original: "And in mine own love's strength seem to decay,",
    modern: "And the power of my love seems to fade away,",
  },
  {
    original: "O'ercharged with burden of mine own love's might.",
    modern: "Because I'm overwhelmed by how much I love you.",
  },
  {
    original: "O let my books be then the eloquence",
    modern: "So let my written words speak for me",
  },
  {
    original: "And dumb presagers of my speaking breast,",
    modern: "As silent messengers of my feelings,",
  },
  {
    original: "Who plead for love, and look for recompense",
    modern: "That ask for your love and hope for your response",
  },
  {
    original: "More than that tongue that more hath more express'd.",
    modern: "Better than my tongue ever could.",
  },
  {
    original: "O learn to read what silent love hath writ:",
    modern: "Please learn to read what my silent love has written:",
  },
  {
    original: "To hear with eyes belongs to love's fine wit.",
    modern:
      "True love knows how to 'hear' with the eyes by reading heartfelt words.",
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
            Sonnet 23
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
                  <div className="relative">
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
                    {hoveredLine === index && (
                      <motion.div
                        className="absolute left-12 top-full mt-2 z-50 pointer-events-none"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="bg-amber-900/95 backdrop-blur-sm text-amber-100 px-4 py-3 rounded-lg text-sm font-['Inter'] shadow-2xl border border-amber-700/50 max-w-md">
                          <span className="text-amber-400 font-semibold">
                            Modern:{" "}
                          </span>
                          {line.modern}
                        </div>
                      </motion.div>
                    )}
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
