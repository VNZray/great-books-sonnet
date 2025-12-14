import { motion } from "framer-motion";

const reasons = [
  {
    title: "Timeless Relevance",
    description:
      "In an age of fleeting digital content, Shakespeare's message about preserving beauty through art resonates more than ever.",
  },
  {
    title: "Emotional Depth",
    description:
      "The sonnet captures the universal human desire to hold onto what we love and fear losing—a feeling I deeply connect with.",
  },
  {
    title: "Masterful Craft",
    description:
      "The way Shakespeare structures his argument across 14 lines, building to that powerful closing couplet, showcases literary genius.",
  },
];

const WhyIChoseIt = () => {
  return (
    <section className="min-h-screen py-24 px-6 bg-linear-to-b from-slate-900 via-slate-950 to-slate-900 relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 50%)",
          ],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="font-['Inter'] text-amber-400/80 tracking-[0.3em] uppercase text-sm mb-4">
              Personal Reflection
            </p>
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-slate-100 mb-8">
              Why This Sonnet
              <br />
              <span className="text-amber-300">Speaks to Me</span>
            </h2>

            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4"
                >
                  <div className="shrink-0 w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                    <span className="font-['Playfair_Display'] text-amber-400 font-bold">
                      {index + 1}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-['Playfair_Display'] text-xl font-semibold text-slate-100 mb-2">
                      {reason.title}
                    </h3>
                    <p className="font-['Inter'] text-slate-400 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Featured quote */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-linear-to-r from-amber-500/20 via-amber-600/10 to-amber-500/20 rounded-3xl blur-xl" />

            <div className="relative bg-linear-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 md:p-12">
              {/* Quote marks */}
              <div className="absolute top-4 left-6 text-8xl font-serif text-amber-500/20 leading-none">
                "
              </div>

              <div className="relative z-10">
                <p className="font-['Cormorant_Garamond'] text-2xl md:text-3xl text-slate-200 italic leading-relaxed mb-8">
                  This sonnet taught me that love isn't just about feelings—it's
                  about creation. Shakespeare didn't just feel love; he built a
                  monument to it that has outlasted centuries.
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-linear-to-br from-amber-400 to-amber-600 flex items-center justify-center">
                    <span className="text-slate-900 font-bold text-lg">📚</span>
                  </div>
                  <div>
                    <p className="font-['Inter'] font-medium text-slate-100">
                      Personal Reflection
                    </p>
                    <p className="font-['Inter'] text-sm text-slate-400">
                      Great Books Student
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute bottom-6 right-6 w-24 h-24 border border-amber-500/20 rounded-full" />
              <div className="absolute bottom-8 right-8 w-16 h-16 border border-amber-500/10 rounded-full" />
            </div>
          </motion.div>
        </div>

        {/* Additional reflection */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="font-['Inter'] text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Studying this sonnet has changed how I view literature. It's not
            just about reading words on a page—it's about connecting with ideas
            that transcend time and understanding that great art has the power
            to make us immortal in some small way.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyIChoseIt;
