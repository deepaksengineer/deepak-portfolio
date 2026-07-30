import { Helmet } from "react-helmet-async";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import ContactForm from "../components/ui/ContactForm.jsx";
import profile from "../data/profile.json";
import { buildMeta } from "../utils/seo.js";

export default function Contact() {
  const meta = buildMeta({
    title: "Contact",
    description: "Get in touch with Deepak S for electrical design and automation opportunities.",
    path: "/contact",
  });

  const channels = [
    { icon: HiOutlineMail, label: profile.email, href: `mailto:${profile.email}` },
    { icon: HiOutlinePhone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: FaLinkedin, label: "LinkedIn — deepakseng", href: profile.linkedin },
    { icon: HiOutlineLocationMarker, label: profile.location, href: null },
  ];

  return (
    <>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="canonical" href={meta.url} />
      </Helmet>

      <section className="mx-auto max-w-5xl px-5 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk about your panel or automation project"
          description="Open to Electrical Design and Industrial Automation roles — including long-term opportunities."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <div className="flex flex-col gap-4 lg:col-span-2">
            {channels.map((channel) => {
              const Icon = channel.icon;
              const content = (
                <div className="nameplate flex items-center gap-3 rounded-lg p-4 transition hover:border-cyan-glow/40">
                  <Icon className="h-5 w-5 text-cyan-glow" />
                  <span className="text-sm text-ink-300">{channel.label}</span>
                </div>
              );
              return channel.href ? (
                <a
                  key={channel.label}
                  className="block"
                  href={channel.href}
                  target={channel.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={channel.label}
                >
                  {content}
                </a>
              ) : (
                <div key={channel.label} className="block">
                  {content}
                </div>
              );
            })}
          </div>

          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
