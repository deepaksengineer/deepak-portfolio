import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-base-950 blueprint-bg">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center gap-4"
      >
        <div className="flex items-center gap-2 font-mono text-xs tracking-[0.3em] text-cyan-glow">
          <span className="h-2 w-2 animate-blink rounded-full bg-signal-green" />
          SYSTEM INITIALIZING
        </div>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 160 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="h-[2px] rounded-full bg-gradient-to-r from-cyan-glow to-signal-green"
        />
        <p className="font-display text-sm text-ink-500">Deepak S — Electrical Design Engineer</p>
      </motion.div>
    </div>
  );
}
