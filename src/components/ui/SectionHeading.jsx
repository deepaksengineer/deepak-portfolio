import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={align === "center" ? "text-center" : "text-left"}
    >
      {eyebrow && (
        <p className="mb-2 font-mono text-xs uppercase tracking-[0.3em] text-cyan-glow">{eyebrow}</p>
      )}
      <h2 className="font-display text-3xl font-semibold text-ink-100 sm:text-4xl">{title}</h2>
      {description && <p className="mt-3 max-w-2xl text-ink-500">{description}</p>}
    </motion.div>
  );
}
