import { Helmet } from "react-helmet-async";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import ProjectCard from "../components/ui/ProjectCard.jsx";
import projects from "../data/projects.json";
import { buildMeta } from "../utils/seo.js";

export default function Projects() {
  const meta = buildMeta({
    title: "Projects",
    description: "Panel design and automation projects by Deepak S — AHU, MDP, APFC and more.",
    path: "/projects",
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
          eyebrow="Key Projects"
          title="Panels engineered end-to-end"
          description="Design documentation through to component selection, for HVAC, power distribution and reactive power correction."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}
