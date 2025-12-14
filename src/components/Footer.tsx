import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-16 px-6 bg-slate-950 border-t border-slate-800">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Decorative quote */}
          <p className="font-['Cormorant_Garamond'] text-2xl md:text-3xl text-amber-200/80 italic mb-8">
            "So long as men can breathe or eyes can see,
            <br />
            So long lives this, and this gives life to thee."
          </p>

          <div className="w-24 h-px bg-linear-to-r from-transparent via-amber-500/50 to-transparent mx-auto mb-8" />

          {/* Project info */}
          <div className="space-y-2">
            <p className="font-['Playfair_Display'] text-xl text-slate-100">
              Great Books Final Project
            </p>
            <p className="font-['Inter'] text-slate-400 text-sm">
              A Literary Analysis of Shakespeare's Sonnet 18
            </p>
          </div>

          {/* Author info */}
          <div className="mt-8 pt-8 border-t border-slate-800/50">
            <p className="font-['Playfair_Display'] text-2xl font-semibold text-amber-300 mb-2">
              Rayven Clores
            </p>
            <p className="font-['Inter'] text-slate-400 text-sm">
              4th Year BSIT Student
            </p>
            <p className="font-['Inter'] text-slate-500 text-sm">
              School of Computer and Information Science
            </p>
          </div>

          {/* Credits */}
          <div className="mt-8 pt-8 border-t border-slate-800/50">
            <p className="font-['Inter'] text-slate-500 text-sm">
              Created with ❤️ for the appreciation of timeless literature
            </p>
            <p className="font-['Inter'] text-slate-600 text-xs mt-2">
              © {new Date().getFullYear()} • Built with React, TypeScript &
              Framer Motion
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
