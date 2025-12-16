import { motion } from "framer-motion";

const reasons = [
  {
    title: "Deeply Relatable",
    description:
      "We've all experienced moments when we couldn't find the right words to express our deepest feelings—this sonnet perfectly captures that universal struggle of being overwhelmed by emotion.",
  },
  {
    title: "Communication Anxiety",
    description:
      "In an age dominated by digital communication, many people struggle with authentic expression. Shakespeare's honesty about his fear and inadequacy in speaking his feelings resonates with modern social anxiety.",
  },
  {
    title: "The Power of Writing",
    description:
      "This sonnet celebrates written expression as sometimes more powerful than speech—a message that speaks to writers, introverts, and anyone who expresses themselves better through text than conversation.",
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
                  This sonnet taught me that vulnerability and honesty are
                  strengths, not weaknesses. Sometimes admitting we can't find
                  the words is more powerful than pretending to have all the
                  answers.
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
            Studying this sonnet has changed how I view communication. It's
            taught me that there are many ways to express love and
            connection—and that sometimes the most heartfelt messages come not
            from eloquent speeches, but from honest, written words that capture
            what we truly feel inside.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyIChoseIt;
