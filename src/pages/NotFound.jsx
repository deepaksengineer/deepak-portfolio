import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiOutlineArrowLeft } from "react-icons/hi";
import CircuitBackground from "../components/hero/CircuitBackground.jsx";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Deepak S</title>
      </Helmet>
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
        <CircuitBackground />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative text-center"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber-glow">Fault Code 404</p>
          <h1 className="mt-4 font-display text-6xl font-semibold text-ink-100">Circuit Open</h1>
          <p className="mt-3 text-ink-500">This page isn't wired to anything. Let's reroute you.</p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-cyan-glow px-5 py-3 font-mono text-xs uppercase tracking-widest text-base-950 shadow-glow-cyan transition hover:brightness-110"
          >
            <HiOutlineArrowLeft /> Back to Home
          </Link>
        </motion.div>
      </section>
    </>
  );
}
