import { useState } from "react";
import { motion } from "framer-motion";
import profile from "../../data/profile.json";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || "a recruiter"}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <form onSubmit={handleSubmit} className="nameplate space-y-4 rounded-lg p-6">
      <div>
        <label htmlFor="name" className="font-mono text-xs uppercase tracking-widest text-ink-500">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          value={form.name}
          onChange={handleChange}
          className="mt-2 w-full rounded-md border border-base-700 bg-base-900 px-3 py-2 text-sm text-ink-100 outline-none transition focus:border-cyan-glow"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="font-mono text-xs uppercase tracking-widest text-ink-500">
          Email
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          value={form.email}
          onChange={handleChange}
          className="mt-2 w-full rounded-md border border-base-700 bg-base-900 px-3 py-2 text-sm text-ink-100 outline-none transition focus:border-cyan-glow"
          placeholder="you@company.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="font-mono text-xs uppercase tracking-widest text-ink-500">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
          className="mt-2 w-full rounded-md border border-base-700 bg-base-900 px-3 py-2 text-sm text-ink-100 outline-none transition focus:border-cyan-glow"
          placeholder="Tell me about the role or project..."
        />
      </div>
      <motion.button
        whileTap={{ scale: 0.97 }}
        type="submit"
        className="w-full rounded-md border border-cyan-glow/40 bg-cyan-glow/10 py-2.5 font-mono text-xs uppercase tracking-widest text-cyan-glow transition hover:bg-cyan-glow/20"
      >
        {status === "sent" ? "Opening your mail client…" : "Send Message"}
      </motion.button>
      <p className="text-center text-xs text-ink-700">
        Opens your email client addressed to {profile.email}
      </p>
    </form>
  );
}
