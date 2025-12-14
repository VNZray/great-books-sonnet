import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// Pre-computed particle data (generated once at module load time)
interface Particle {
  x: number;
  y: number;
  animateY: number;
  duration: number;
  delay: number;
}

// Static particle data - computed once at module initialization
const PARTICLES: Particle[] = [
  { x: 15, y: 20, animateY: -180, duration: 7, delay: 0.5 },
  { x: 85, y: 35, animateY: -220, duration: 9, delay: 1.2 },
  { x: 45, y: 80, animateY: -150, duration: 6, delay: 2.0 },
  { x: 25, y: 60, animateY: -200, duration: 8, delay: 0.8 },
  { x: 70, y: 15, animateY: -170, duration: 7.5, delay: 3.1 },
  { x: 55, y: 45, animateY: -190, duration: 6.5, delay: 1.5 },
  { x: 10, y: 75, animateY: -160, duration: 8.5, delay: 2.3 },
  { x: 90, y: 55, animateY: -210, duration: 7, delay: 0.3 },
  { x: 35, y: 25, animateY: -185, duration: 9.5, delay: 4.0 },
  { x: 60, y: 90, animateY: -175, duration: 6, delay: 1.8 },
  { x: 5, y: 40, animateY: -195, duration: 8, delay: 2.7 },
  { x: 75, y: 70, animateY: -165, duration: 7.2, delay: 0.9 },
  { x: 40, y: 10, animateY: -205, duration: 9, delay: 3.5 },
  { x: 20, y: 85, animateY: -155, duration: 6.8, delay: 1.1 },
  { x: 95, y: 30, animateY: -215, duration: 7.8, delay: 4.5 },
  { x: 50, y: 65, animateY: -180, duration: 8.2, delay: 2.0 },
  { x: 30, y: 50, animateY: -190, duration: 6.3, delay: 0.6 },
  { x: 80, y: 5, animateY: -170, duration: 9.2, delay: 3.8 },
  { x: 65, y: 95, animateY: -200, duration: 7.5, delay: 1.4 },
  { x: 12, y: 42, animateY: -185, duration: 8.8, delay: 2.5 },
];

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-linear-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating literary elements */}
        <motion.div
          className="absolute top-1/4 left-10 text-6xl opacity-10"
          animate={{
            y: [-20, 20, -20],
            rotate: [-5, 5, -5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          📖
        </motion.div>

        <motion.div
          className="absolute top-1/3 right-20 text-5xl opacity-10"
          animate={{
            y: [20, -20, 20],
            rotate: [5, -5, 5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
        >
          🪶
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 left-1/4 text-7xl opacity-10"
          animate={{
            y: [-15, 15, -15],
            rotate: [-3, 3, -3],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        >
          📜
        </motion.div>

        <motion.div
          className="absolute top-2/3 right-1/4 text-6xl opacity-10"
          animate={{
            y: [15, -15, 15],
            rotate: [4, -4, 4],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          ✒️
        </motion.div>

        {/* Floating particles */}
        {PARTICLES.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-400/30 rounded-full"
            style={{ left: `${particle.x}%`, top: `${particle.y}%` }}
            animate={{
              y: [0, particle.animateY],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              repeatType: "loop",
              delay: particle.delay,
            }}
          />
        ))}

        {/* Radial gradient overlay */}
        <div
          className="absolute inset-0 bg-radial from-amber-900/10 via-transparent to-transparent"
          style={{
            transform: `translateY(${scrollY * 0.3}px)`,
          }}
        />

        {/* Decorative lines */}
        <motion.div
          className="absolute top-1/4 left-0 w-full h-px bg-linear-to-r from-transparent via-amber-500/20 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        <motion.div
          className="absolute bottom-1/4 left-0 w-full h-px bg-linear-to-r from-transparent via-amber-500/20 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2, delay: 0.7 }}
        />

        {/* Decorative corner ornaments */}
        <motion.div
          className="absolute top-8 left-8 text-amber-500/20 text-4xl"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          ❦
        </motion.div>
        <motion.div
          className="absolute top-8 right-8 text-amber-500/20 text-4xl"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          ❦
        </motion.div>
        <motion.div
          className="absolute bottom-8 left-8 text-amber-500/20 text-4xl rotate-90"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          ❦
        </motion.div>
        <motion.div
          className="absolute bottom-8 right-8 text-amber-500/20 text-4xl rotate-180"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          ❦
        </motion.div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.p
          className="font-['Inter'] text-amber-400/80 tracking-[0.3em] uppercase text-sm mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Great Books Final Project
        </motion.p>

        <motion.h1
          className="font-['Playfair_Display'] text-6xl md:text-8xl lg:text-9xl font-bold text-transparent bg-clip-text bg-linear-to-b from-amber-100 via-amber-200 to-amber-400 mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Sonnet 18
        </motion.h1>

        <motion.p
          className="font-['Cormorant_Garamond'] text-2xl md:text-3xl text-slate-300 italic mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          "Shall I compare thee to a summer's day?"
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-3 text-slate-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <span className="w-12 h-px bg-slate-600" />
          <span className="font-['Inter'] text-sm tracking-wider">
            William Shakespeare
          </span>
          <span className="w-12 h-px bg-slate-600" />
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1, duration: 0.5 },
            y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
          }}
        >
          <div className="flex flex-col items-center gap-2 text-slate-500">
            <span className="font-['Inter'] text-xs tracking-widest uppercase">
              Scroll to explore
            </span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
