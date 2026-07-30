import { cn } from "../../utils/cn.js";

export default function Tag({ children, tone = "cyan" }) {
  const toneClass =
    tone === "amber"
      ? "border-amber-glow/30 text-amber-glow"
      : tone === "green"
      ? "border-signal-green/30 text-signal-green"
      : "border-cyan-glow/30 text-cyan-glow";

  return (
    <span
      className={cn(
        "inline-flex items-center rounded border bg-base-900/60 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider",
        toneClass
      )}
    >
      {children}
    </span>
  );
}
