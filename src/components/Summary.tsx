import { motion } from "framer-motion";

interface SummaryCard {
  title: string;
  content: string;
  icon: string;
}

const summaryCards: SummaryCard[] = [
  {
    title: "The Question",
    content:
      "Shakespeare opens with a rhetorical question, asking if he should compare his beloved to a summer's day. But he immediately suggests that such a comparison falls short—the person he loves surpasses even the beauty of summer.",
    icon: "❓",
  },
  {
    title: "Nature's Flaws",
    content:
      "The poet points out summer's imperfections: rough winds damage delicate flowers, the season is too brief, the sun can be too hot or hidden by clouds. Everything in nature is subject to change and decay.",
    icon: "🍃",
  },
  {
    title: "Eternal Beauty",
    content:
      "Unlike summer, the beloved's beauty will never fade. Death cannot claim them, and they will not lose their radiance. Shakespeare promises immortality through his verse.",
    icon: "✨",
  },
  {
    title: "The Promise",
    content:
      "The closing couplet delivers Shakespeare's powerful conclusion: as long as humanity exists and can read these words, this poem will live on—and so will the beauty it celebrates.",
    icon: "📜",
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
            Sonnet 18 is one of Shakespeare's most celebrated works, exploring
            themes of beauty, time, mortality, and the power of art to preserve
            what we love.
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
              "Art transcends time—while nature fades, poetry endures forever."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Summary;
