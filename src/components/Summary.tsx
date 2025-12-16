import { motion } from "framer-motion";

interface SummaryCard {
  title: string;
  content: string;
  icon: string;
}

const summaryCards: SummaryCard[] = [
  {
    title: "The Struggle to Speak",
    content:
      "Shakespeare compares himself to a nervous actor who forgets his lines, or someone overcome with emotion. He's so deeply in love that when he's in front of his beloved, fear and overwhelming feelings make him tongue-tied and unable to express himself properly.",
    icon: "🎭",
  },
  {
    title: "The Power of Silence",
    content:
      "Rather than viewing his inability to speak as weakness, Shakespeare suggests that his silence is actually caused by the overwhelming strength of his love. The intensity of his feelings is so great that words fail him—it's not lack of love, but too much of it.",
    icon: "💭",
  },
  {
    title: "Written Words as Voice",
    content:
      "Since he cannot speak his feelings aloud, Shakespeare turns to his 'books'—his written poems. He asks that these writings become his eloquence, serving as silent messengers that plead his case better than his stammering tongue ever could.",
    icon: "📖",
  },
  {
    title: "The Reader's Role",
    content:
      "The final couplet makes a powerful request: learn to read what silent love has written. Shakespeare suggests that true love has a special wisdom—the ability to 'hear with eyes,' to understand feelings expressed through the written word rather than spoken speech.",
    icon: "👁️",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

const Summary = () => {
  return (
    <section className="min-h-screen py-24 px-6 bg-linear-to-b from-slate-950 to-slate-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-amber-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="font-['Inter'] text-amber-400/80 tracking-[0.3em] uppercase text-sm mb-4">
            In My Own Words
          </p>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-slate-100 mb-6">
            Summary & Analysis
          </h2>
          <p className="font-['Inter'] text-slate-400 max-w-2xl mx-auto">
            Sonnet 23 explores the paradox of being silenced by love's
            intensity—when feelings are so powerful that words fail, and written
            expression becomes more eloquent than speech.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {summaryCards.map((card, index) => (
            <motion.div key={index} variants={cardVariants} className="group">
              <div className="h-full bg-linear-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-amber-500/30 transition-all duration-500 hover:shadow-xl hover:shadow-amber-900/10">
                {/* Icon */}
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {card.icon}
                </div>

                {/* Title */}
                <h3 className="font-['Playfair_Display'] text-2xl font-semibold text-slate-100 mb-4 group-hover:text-amber-200 transition-colors duration-300">
                  {card.title}
                </h3>

                {/* Content */}
                <p className="font-['Inter'] text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                  {card.content}
                </p>

                {/* Decorative line */}
                <div className="mt-6 w-12 h-0.5 bg-linear-to-r from-amber-500/50 to-transparent group-hover:w-24 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Key takeaway */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="inline-block bg-linear-to-r from-amber-900/30 via-amber-800/30 to-amber-900/30 border border-amber-600/30 rounded-2xl px-8 py-6">
            <p className="font-['Cormorant_Garamond'] text-xl md:text-2xl text-amber-100 italic">
              "When words fail, love writes its own language—one that speaks
              directly to the heart."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Summary;
