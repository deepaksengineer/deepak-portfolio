import { useScrollProgress } from "../../hooks/useScrollProgress.js";

export default function ScrollProgress() {
  const progress = useScrollProgress();
  return (
    <div className="fixed top-0 left-0 z-50 h-[2px] w-full bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-cyan-glow to-signal-green transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
