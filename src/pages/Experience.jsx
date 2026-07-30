import { Helmet } from "react-helmet-async";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import Timeline from "../components/ui/Timeline.jsx";
import experience from "../data/experience.json";
import { buildMeta } from "../utils/seo.js";

export default function Experience() {
  const meta = buildMeta({
    title: "Experience",
    description: "Professional experience of Deepak S in electrical design and quality engineering.",
    path: "/experience",
  });

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={meta.url} />
      </Helmet>

      <section className="mx-auto max-w-4xl px-5 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Career Path"
          title="Professional Experience"
          description="From quality inspection to leading LV panel design and automation work."
        />
        <div className="mt-12">
          <Timeline items={experience} />
        </div>
      </section>
    </>
  );
}
