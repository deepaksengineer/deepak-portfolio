import { motion } from "framer-motion";
import Tag from "./Tag.jsx";

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="nameplate flex flex-col rounded-lg p-6 transition hover:border-cyan-glow/40"
    >
      <div className="flex items-center justify-between">
        <Tag>{project.category}</Tag>
        <span className="font-mono text-xs text-ink-700">{project.year}</span>
      </div>

      <h3 className="mt-4 font-display text-xl font-semibold text-ink-100">{project.title}</h3>
      <p className="mt-2 text-sm text-ink-500">{project.summary}</p>

      <ul className="mt-4 space-y-2">
        {project.highlights.slice(0, 3).map((h) => (
          <li key={h} className="flex gap-2 text-sm text-ink-300">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal-green" />
            {h}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2 border-t border-base-800 pt-4">
        {project.tech.map((t) => (
          <Tag key={t} tone="amber">
            {t}
          </Tag>
        ))}
      </div>
    </motion.article>
  );
}
