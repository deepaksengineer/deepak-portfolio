import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight, HiOutlineDownload } from "react-icons/hi";
import profile from "../../data/profile.json";
import CircuitBackground from "./CircuitBackground.jsx";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-base-800">
      <CircuitBackground />
      <div className="relative mx-auto max-w-6xl px-5 py-24 lg:px-8 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-signal-green"
        >
          <span className="status-dot h-2 w-2 rounded-full bg-signal-green" />
          {profile.availability}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-tight text-ink-100 sm:text-5xl lg:text-6xl"
        >
          {profile.tagline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-2xl text-lg text-ink-500"
        >
          {profile.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Link
            to="/projects"
            className="flex items-center gap-2 rounded-md bg-cyan-glow px-5 py-3 font-mono text-xs uppercase tracking-widest text-base-950 shadow-glow-cyan transition hover:brightness-110"
          >
            View Projects <HiOutlineArrowRight />
          </Link>
          <a
            href={profile.resumeFile}
            download
            className="flex items-center gap-2 rounded-md border border-base-700 px-5 py-3 font-mono text-xs uppercase tracking-widest text-ink-100 transition hover:border-cyan-glow/50 hover:text-cyan-glow"
          >
            Download Resume <HiOutlineDownload />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
