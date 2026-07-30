import { Helmet } from "react-helmet-async";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import SkillCard from "../components/ui/SkillCard.jsx";
import skills from "../data/skills.json";
import { buildMeta } from "../utils/seo.js";

export default function Skills() {
  const meta = buildMeta({
    title: "Skills",
    description: "Electrical design, PLC, SCADA, HMI and industrial communication skills.",
    path: "/skills",
  });

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={meta.url} />
      </Helmet>

      <section className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Capabilities"
          title="Skills & Tools"
          description="Design, automation and compliance skills built across live commercial and industrial projects."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, i) => (
            <SkillCard key={skill.category} {...skill} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}
