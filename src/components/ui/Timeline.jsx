import { motion } from "framer-motion";

export default function Timeline({ items }) {
  return (
    <div className="relative border-l border-base-700 pl-8">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
          className="relative pb-12 last:pb-0"
        >
          <span
            className={`absolute -left-[calc(2rem+5px)] top-1 h-2.5 w-2.5 rounded-full ${
              item.current ? "bg-signal-green shadow-glow-cyan" : "bg-cyan-glow/60"
            }`}
          />
          <p className="font-mono text-xs uppercase tracking-widest text-cyan-glow">{item.period}</p>
          <h3 className="mt-1 font-display text-lg font-semibold text-ink-100">{item.role}</h3>
          <p className="text-sm text-ink-500">
            {item.company} · {item.location}
          </p>
          <ul className="mt-3 space-y-2">
            {item.points.map((point) => (
              <li key={point} className="flex gap-2 text-sm text-ink-300">
                <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-ink-500" />
                {point}
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
