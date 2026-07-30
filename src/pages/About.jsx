import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import Tag from "../components/ui/Tag.jsx";
import profile from "../data/profile.json";
import education from "../data/education.json";
import { buildMeta } from "../utils/seo.js";

export default function About() {
  const meta = buildMeta({
    title: "About",
    description: "Background, education and career direction for Deepak S.",
    path: "/about",
  });

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={meta.url} />
      </Helmet>

      <section className="mx-auto max-w-4xl px-5 py-20 lg:px-8">
        <SectionHeading eyebrow="About" title="From the shop floor to the schematic" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 space-y-5 text-ink-300"
        >
          <p>{profile.summary}</p>
          <p>
            I started on the quality floor at Essae Gears, inspecting outgoing gear and transmission
            components against tolerance — work that taught me how a single missed spec ripples through
            an entire production line. That discipline now shapes how I approach panel design: every SLD,
            wiring layout and terminal block schedule I produce is built to be built exactly as drawn, with
            nothing left to interpretation on the shop floor.
          </p>
          <p>
            At Swastiks Engineers I design LV panels — AHU, VRF, MCC, PCC and motor starter panels — for
            industrial and commercial sites, and I'm extending that into automation: writing PLC logic in
            CICON, building HMI screens in Canvas and Xpaneldesigner, and learning the SCADA layer that ties
            it all together.
          </p>
        </motion.div>

        <div className="mt-10 nameplate rounded-lg p-6">
          <p className="font-mono text-xs uppercase tracking-widest text-amber-glow">Career Direction</p>
          <p className="mt-2 text-ink-100">{profile.goal}</p>
        </div>

        <div className="mt-16">
          <p className="font-mono text-xs uppercase tracking-widest text-ink-500">Education</p>
          <div className="mt-4 space-y-4">
            {education.map((edu) => (
              <div key={edu.degree} className="nameplate rounded-lg p-6">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold text-ink-100">{edu.degree}</h3>
                  <Tag>{edu.year}</Tag>
                </div>
                <p className="mt-1 text-sm text-ink-500">{edu.school}</p>
                <p className="mt-1 font-mono text-xs text-cyan-glow">{edu.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
