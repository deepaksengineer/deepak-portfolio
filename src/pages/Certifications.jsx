import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import certifications from "../data/certifications.json";
import { buildMeta } from "../utils/seo.js";

export default function Certifications() {
  const meta = buildMeta({
    title: "Certifications",
    description: "AutoCAD Electrical and Industrial Automation certifications held by Deepak S.",
    path: "/certifications",
  });

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={meta.url} />
      </Helmet>

      <section className="mx-auto max-w-4xl px-5 py-20 lg:px-8">
        <SectionHeading eyebrow="Credentials" title="Certifications" />
        <div className="mt-10 space-y-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="nameplate flex items-start gap-4 rounded-lg p-6"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-signal-green/30 bg-base-900 text-signal-green">
                <HiOutlineBadgeCheck className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-ink-100">{cert.title}</h3>
                <p className="mt-1 text-sm text-ink-500">{cert.issuer}</p>
                <p className="mt-1 font-mono text-xs text-cyan-glow">{cert.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
