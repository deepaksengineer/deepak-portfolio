import { motion } from "framer-motion";

export default function StatCard({ label, value, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="nameplate flex flex-col items-center justify-center rounded-lg p-5 text-center"
    >
      <p className="font-display text-3xl font-semibold text-gradient">{value}</p>
      <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-ink-500">{label}</p>
    </motion.div>
  );
}
