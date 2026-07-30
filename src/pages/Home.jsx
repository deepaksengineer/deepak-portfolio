import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";
import Hero from "../components/hero/Hero.jsx";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import StatCard from "../components/ui/StatCard.jsx";
import ProjectCard from "../components/ui/ProjectCard.jsx";
import SkillCard from "../components/ui/SkillCard.jsx";
import profile from "../data/profile.json";
import projects from "../data/projects.json";
import skills from "../data/skills.json";
import { buildMeta } from "../utils/seo.js";

export default function Home() {
  const meta = buildMeta({
    title: "Electrical Design & Industrial Automation Engineer",
    description: profile.summary,
    path: "/",
  });
  const featured = projects.slice(0, 2);
  const featuredSkills = skills.slice(0, 4);

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={meta.url} />
      </Helmet>

      <Hero />

      <section className="mx-auto max-w-6xl px-5 py-20 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {profile.stats.map((stat, i) => (
            <StatCard key={stat.label} label={stat.label} value={stat.value} index={i} />
          ))}
        </div>
      </section>

      <section className="border-t border-base-800 bg-base-900/40 py-20">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Featured Work"
            title="Panels built for real load, real heat, real deadlines"
            description="A sample of control panel and power distribution projects from live commercial and industrial installs."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {featured.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
          <Link
            to="/projects"
            className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-cyan-glow hover:underline"
          >
            All projects <HiOutlineArrowRight />
          </Link>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <SectionHeading
            eyebrow="Toolset"
            title="Design, automation and compliance in one stack"
            description="From SLDs to SCADA screens — the tools I use to take a panel from concept to commissioning."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredSkills.map((skill, i) => (
              <SkillCard key={skill.category} {...skill} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-base-800 bg-base-900/40 py-20">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <div className="nameplate flex flex-col items-start justify-between gap-6 rounded-lg p-8 sm:flex-row sm:items-center">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-amber-glow">Career Objective</p>
              <p className="mt-2 max-w-xl font-display text-xl text-ink-100">{profile.goal}</p>
            </div>
            <Link
              to="/contact"
              className="flex shrink-0 items-center gap-2 rounded-md bg-cyan-glow px-5 py-3 font-mono text-xs uppercase tracking-widest text-base-950 shadow-glow-cyan transition hover:brightness-110"
            >
              Get in touch <HiOutlineArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
