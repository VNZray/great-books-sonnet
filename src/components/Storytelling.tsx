import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface Stanza {
  lines: string[];
  title: string;
  analysis: string;
  theme: string;
}

const stanzas: Stanza[] = [
  {
    lines: [
      "Shall I compare thee to a summer's day?",
      "Thou art more lovely and more temperate:",
      "Rough winds do shake the darling buds of May,",
      "And summer's lease hath all too short a date;",
    ],
    title: "Quatrain I: The Question",
    analysis:
      "Shakespeare opens with a rhetorical question, immediately establishing a comparison between his beloved and nature's most beautiful season. However, he quickly subverts this by noting summer's imperfections—its rough winds and fleeting nature. The word 'temperate' suggests balance and constancy, qualities the beloved possesses that summer lacks.",
    theme: "Comparison & Impermanence",
  },
  {
    lines: [
      "Sometime too hot the eye of heaven shines,",
      "And often is his gold complexion dimm'd;",
      "And every fair from fair sometime declines,",
      "By chance or nature's changing course untrimm'd;",
    ],
    title: "Quatrain II: Nature's Flaws",
    analysis:
      "The 'eye of heaven' is the sun—sometimes too harsh, sometimes hidden behind clouds. Shakespeare extends his critique of nature: everything beautiful eventually fades, whether by accident or by the inevitable march of time. The word 'untrimm'd' evokes a ship without sails, helplessly adrift on the currents of change.",
    theme: "Mortality & Decay",
  },
  {
    lines: [
      "But thy eternal summer shall not fade,",
      "Nor lose possession of that fair thou ow'st;",
      "Nor shall death brag thou wander'st in his shade,",
      "When in eternal lines to time thou grow'st:",
    ],
    title: "Quatrain III: The Promise",
    analysis:
      "Here the volta (turn) occurs—Shakespeare pivots from describing what fades to what endures. Unlike nature's summer, the beloved's 'eternal summer' will never diminish. Death itself cannot claim victory over someone immortalized in verse. The phrase 'eternal lines' refers both to the lines of poetry and the concept of lineage through time.",
    theme: "Immortality Through Art",
  },
  {
    lines: [
      "So long as men can breathe or eyes can see,",
      "So long lives this, and this gives life to thee.",
    ],
    title: "The Couplet: Eternal Life",
    analysis:
      "The concluding couplet delivers Shakespeare's triumphant promise: as long as humanity exists—as long as people breathe and read—this poem will survive, and through it, so will the beloved. Poetry becomes the ultimate act of preservation, defeating time and death through the power of language and art.",
    theme: "The Power of Poetry",
  },
];

const personalReflection = {
  title: "A Personal Reflection",
  content: [
    "Reading Sonnet 18 for the first time felt like discovering a secret that has been passed down for over 400 years. Shakespeare wasn't just writing about love—he was making a promise that transcends time itself.",
    "What strikes me most is the audacity of this claim. In an age before the internet, before photographs, before any of our modern tools of preservation, Shakespeare believed that his words alone could grant immortality. And he was right.",
    "This sonnet taught me that creation is an act of defiance against time. Every poem, every song, every piece of art we make is a small rebellion against the impermanence of existence. When Shakespeare wrote 'So long lives this, and this gives life to thee,' he wasn't just talking about his beloved—he was speaking to every reader across every century who would encounter these words.",
    "As a student in the digital age, surrounded by content that disappears in 24 hours, there's something profound about engaging with words that have endured for centuries. It makes me wonder: what will we create that might last?",
  ],
  signature: "— Rayven Clores",
  date: "December 2024",
};

const StanzaSection = ({
  stanza,
  index,
}: {
  stanza: Stanza;
  index: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const x = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [index % 2 === 0 ? -50 : 50, 0, 0, index % 2 === 0 ? -50 : 50]
  );

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className="min-h-screen flex items-center justify-center py-24 px-6"
      style={{ opacity }}
    >
      <motion.div
        className={`max-w-6xl w-full grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
          isEven ? "" : "lg:grid-flow-dense"
        }`}
        style={{ x }}
      >
        {/* Poem Side */}
        <div className={`${isEven ? "" : "lg:col-start-2"}`}>
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Decorative quote mark */}
            <div className="absolute -top-8 -left-4 text-8xl font-serif text-amber-500/10 select-none">
              "
            </div>

            {/* Stanza number */}
            <div className="inline-block px-4 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full mb-6">
              <span className="font-['Inter'] text-amber-400 text-sm tracking-wider uppercase">
                {stanza.title}
              </span>
            </div>

            {/* Poem lines */}
            <div className="space-y-3">
              {stanza.lines.map((line, lineIndex) => (
                <motion.p
                  key={lineIndex}
                  className="font-['Cormorant_Garamond'] text-2xl md:text-3xl lg:text-4xl text-slate-100 leading-relaxed italic"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + lineIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  {line}
                </motion.p>
              ))}
            </div>

            {/* Theme badge */}
            <motion.div
              className="mt-8 inline-flex items-center gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="w-8 h-px bg-amber-500/50" />
              <span className="font-['Inter'] text-amber-400/70 text-sm">
                {stanza.theme}
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Analysis Side */}
        <div className={`${isEven ? "" : "lg:col-start-1 lg:row-start-1"}`}>
          <motion.div
            className="bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 lg:p-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="font-['Inter'] text-lg font-semibold text-amber-300 mb-4 tracking-wide">
              Literary Analysis
            </h3>
            <p className="font-['Inter'] text-slate-300 leading-relaxed text-lg">
              {stanza.analysis}
            </p>

            {/* Decorative element */}
            <div className="mt-6 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-amber-500/50" />
              <div className="w-2 h-2 rounded-full bg-amber-500/30" />
              <div className="w-2 h-2 rounded-full bg-amber-500/20" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Storytelling = () => {
  return (
    <section className="bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-amber-900/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-900/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-amber-800/5 rounded-full blur-3xl" />
      </div>

      {/* Section Header */}
      <div className="min-h-[50vh] flex items-center justify-center text-center px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="font-['Inter'] text-amber-400/80 tracking-[0.3em] uppercase text-sm mb-4">
            A Journey Through Verse
          </p>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-bold text-slate-100 mb-6">
            The Story Within
          </h2>
          <p className="font-['Inter'] text-slate-400 text-lg max-w-2xl mx-auto">
            Scroll through each stanza and discover the layers of meaning
            Shakespeare wove into just fourteen lines. Classic literature meets
            modern understanding.
          </p>

          {/* Scroll indicator */}
          <motion.div
            className="mt-12"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <svg
              className="w-8 h-8 mx-auto text-amber-500/50"
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
          </motion.div>
        </motion.div>
      </div>

      {/* Stanzas */}
      {stanzas.map((stanza, index) => (
        <StanzaSection key={index} stanza={stanza} index={index} />
      ))}

      {/* Divider */}
      <div className="flex items-center justify-center py-12">
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="w-24 h-px bg-linear-to-r from-transparent to-amber-500/50" />
          <div className="text-amber-500/50 text-2xl">✦</div>
          <div className="w-24 h-px bg-linear-to-l from-transparent to-amber-500/50" />
        </motion.div>
      </div>

      {/* Personal Reflection Section */}
      <div className="min-h-screen flex items-center justify-center py-24 px-6">
        <motion.div
          className="max-w-4xl w-full"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          {/* Reflection Header */}
          <div className="text-center mb-12">
            <motion.div
              className="inline-block"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-linear-to-br from-amber-400/20 to-amber-600/20 border border-amber-500/30 flex items-center justify-center">
                <span className="text-2xl">💭</span>
              </div>
            </motion.div>
            <h3 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-slate-100 mb-4">
              {personalReflection.title}
            </h3>
            <div className="w-16 h-0.5 bg-linear-to-r from-amber-500/50 to-transparent mx-auto" />
          </div>

          {/* Reflection Content */}
          <div className="bg-linear-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-3xl p-8 md:p-12 lg:p-16">
            <div className="space-y-6">
              {personalReflection.content.map((paragraph, index) => (
                <motion.p
                  key={index}
                  className="font-['Inter'] text-slate-300 text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                  viewport={{ once: true }}
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Signature */}
            <motion.div
              className="mt-12 pt-8 border-t border-slate-700/50"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <p className="font-['Cormorant_Garamond'] text-2xl text-amber-300 italic">
                    {personalReflection.signature}
                  </p>
                  <p className="font-['Inter'] text-slate-500 text-sm mt-1">
                    4th Year BSIT Student • School of Computer and Information
                    Science
                  </p>
                </div>
                <p className="font-['Inter'] text-slate-600 text-sm">
                  {personalReflection.date}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Closing quote */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="font-['Cormorant_Garamond'] text-xl md:text-2xl text-amber-200/60 italic">
              "Poetry is the spontaneous overflow of powerful feelings:
              <br />
              it takes its origin from emotion recollected in tranquility."
            </p>
            <p className="font-['Inter'] text-slate-500 text-sm mt-4">
              — William Wordsworth
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Storytelling;
