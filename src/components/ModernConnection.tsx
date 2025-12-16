import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const connections = [
  {
    shakespeare:
      "As an unperfect actor on the stage, Who with his fear is put beside his part",
    modern:
      "Social anxiety and performance pressure in modern presentations and public speaking",
    icon: "🎤",
  },
  {
    shakespeare:
      "So I, for fear of trust, forget to say The perfect ceremony of love's rite",
    modern:
      "Texting anxiety and difficulty expressing feelings face-to-face in the digital age",
    icon: "💬",
  },
  {
    shakespeare:
      "O let my books be then the eloquence And dumb presagers of my speaking breast",
    modern:
      "Written communication as more authentic—emails, texts, and letters over phone calls",
    icon: "📝",
  },
  {
    shakespeare: "To hear with eyes belongs to love's fine wit",
    modern:
      "Reading emotions through text messages, understanding between the lines of digital communication",
    icon: "👀",
  },
];

const ModernConnection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={containerRef}
      className="min-h-screen py-24 px-6 bg-slate-950 relative overflow-hidden"
    >
      {/* Parallax background elements */}
      <motion.div className="absolute inset-0" style={{ y: backgroundY }}>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </motion.div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(212, 175, 55, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(212, 175, 55, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-['Inter'] text-amber-400/80 tracking-[0.3em] uppercase text-sm mb-4">
            Then & Now
          </p>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-slate-100 mb-6">
            Modern Connections
          </h2>
          <p className="font-['Inter'] text-slate-400 max-w-2xl mx-auto">
            Shakespeare's struggle with verbal expression from 400 years ago
            mirrors our modern communication challenges in profound and
            surprising ways.
          </p>
        </motion.div>

        {/* Split-screen connections */}
        <div className="space-y-8">
          {connections.map((connection, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="group"
            >
              <div className="grid md:grid-cols-2 gap-0 bg-linear-to-r from-slate-900/80 to-slate-800/80 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-amber-500/30 transition-all duration-500">
                {/* Shakespeare side */}
                <div className="p-8 md:p-10 bg-linear-to-br from-amber-900/20 to-transparent relative overflow-hidden">
                  <div className="absolute top-4 right-4 text-4xl opacity-20">
                    📜
                  </div>
                  <p className="font-['Inter'] text-amber-400/80 text-xs tracking-widest uppercase mb-3">
                    Shakespeare Wrote
                  </p>
                  <p className="font-['Cormorant_Garamond'] text-xl md:text-2xl text-slate-200 italic">
                    "{connection.shakespeare}"
                  </p>
                </div>

                {/* Modern side */}
                <div className="p-8 md:p-10 bg-linear-to-bl from-purple-900/20 to-transparent relative overflow-hidden border-t md:border-t-0 md:border-l border-slate-700/50">
                  <div className="absolute top-4 right-4 text-4xl">
                    {connection.icon}
                  </div>
                  <p className="font-['Inter'] text-purple-400/80 text-xs tracking-widest uppercase mb-3">
                    Today We See
                  </p>
                  <p className="font-['Inter'] text-xl md:text-2xl text-slate-200 font-light">
                    {connection.modern}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Conclusion */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-linear-to-r from-slate-800/50 via-slate-900/50 to-slate-800/50 border border-slate-700/50 rounded-3xl p-8 md:p-12 text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="font-['Playfair_Display'] text-2xl md:text-3xl font-bold text-slate-100 mb-6">
                The Universal Struggle to Communicate
              </h3>
              <p className="font-['Inter'] text-slate-400 leading-relaxed mb-8">
                What makes Sonnet 23 truly remarkable is its honest portrayal of
                something we all experience: the struggle to express our deepest
                feelings. Shakespeare's admission that he becomes tongue-tied
                validates our own communication anxieties. Whether it's through
                handwritten letters, carefully crafted texts, or heartfelt
                emails, we continue to find that written words can express what
                our voices cannot. The medium evolves, but the human need to be
                understood remains timeless.
              </p>
              <div className="flex items-center justify-center gap-4">
                <span className="w-12 h-px bg-amber-500/50" />
                <span className="text-amber-400 text-2xl">💬</span>
                <span className="w-12 h-px bg-amber-500/50" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ModernConnection;
