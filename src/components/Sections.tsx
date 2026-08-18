import { motion } from "framer-motion";
import type { SectionElements } from "../types";
export const Sections = ({ number, title, children }: SectionElements) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-[120px_1fr] md:items-center gap-4 md:gap-8 py-11 border-t border-[#232328] first:border-t-0 first:pt-0"
    >
      <div className="flex items-baseline gap-2 md:flex-col md:items-start md:gap-0">
        <span className="text-xs font-mono text-zinc-600">{number}</span>
        <h2 className="text-base font-semibold text-white tracking-wide">
          {title}
        </h2>
      </div>
      <div>{children}</div>
    </motion.div>
  );
};
