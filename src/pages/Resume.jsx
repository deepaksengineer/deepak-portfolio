import { Helmet } from "react-helmet-async";
import { HiOutlineDownload, HiOutlineExternalLink } from "react-icons/hi";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import profile from "../data/profile.json";
import { buildMeta } from "../utils/seo.js";

export default function Resume() {
  const meta = buildMeta({
    title: "Resume",
    description: "Download or view the resume of Deepak S.",
    path: "/resume",
  });

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={meta.url} />
      </Helmet>

      <section className="mx-auto max-w-4xl px-5 py-20 lg:px-8">
        <SectionHeading eyebrow="Resume" title="Full Resume" />

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href={profile.resumeFile}
            download
            className="flex items-center gap-2 rounded-md bg-cyan-glow px-5 py-3 font-mono text-xs uppercase tracking-widest text-base-950 shadow-glow-cyan transition hover:brightness-110"
          >
            Download PDF <HiOutlineDownload />
          </a>
          <a
            href={profile.resumeFile}
            target="_blank"
            rel="noreferrer noopener"
            className="flex items-center gap-2 rounded-md border border-base-700 px-5 py-3 font-mono text-xs uppercase tracking-widest text-ink-100 transition hover:border-cyan-glow/50 hover:text-cyan-glow"
          >
            Open in new tab <HiOutlineExternalLink />
          </a>
        </div>

        <div className="mt-10 overflow-hidden rounded-lg border border-base-700">
          <object data={profile.resumeFile} type="application/pdf" width="100%" height="800" aria-label="Deepak S resume PDF preview">
            <p className="p-6 text-sm text-ink-500">
              Your browser can't preview PDFs inline. Use the download button above instead.
            </p>
          </object>
        </div>
      </section>
    </>
  );
}
