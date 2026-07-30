import { motion } from "framer-motion";
import {
  HiOutlineLightningBolt,
  HiOutlineTemplate,
  HiOutlineChip,
  HiOutlineDesktopComputer,
  HiOutlineSwitchHorizontal,
  HiOutlineShieldCheck,
  HiOutlineCube,
  HiOutlineClipboardList,
} from "react-icons/hi";

const ICONS = {
  sld: HiOutlineLightningBolt,
  panel: HiOutlineTemplate,
  plc: HiOutlineChip,
  hmi: HiOutlineDesktopComputer,
  network: HiOutlineSwitchHorizontal,
  standard: HiOutlineShieldCheck,
  cad: HiOutlineCube,
  boq: HiOutlineClipboardList,
};

export default function SkillCard({ category, icon, items, index = 0 }) {
  const Icon = ICONS[icon] || HiOutlineChip;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="nameplate group rounded-lg p-5 transition hover:border-cyan-glow/40"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-md border border-cyan-glow/25 bg-base-900 text-cyan-glow transition group-hover:shadow-glow-cyan">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="mt-4 font-display text-base font-semibold text-ink-100">{category}</h3>
      <ul className="mt-3 space-y-1.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-ink-500">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-glow/60" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
