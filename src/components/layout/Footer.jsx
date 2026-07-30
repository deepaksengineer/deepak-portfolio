import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import profile from "../../data/profile.json";

export default function Footer() {
  return (
    <footer className="border-t border-base-800 bg-base-900">
      <div className="mx-auto max-w-6xl px-5 py-12 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2">
          <div>
            <p className="font-display text-lg font-semibold text-ink-100">Deepak S</p>
            <p className="mt-2 max-w-xs text-sm text-ink-500">{profile.title}</p>
          </div>


          <div className="space-y-6 text-sm">
            <div className="space-y-2">
              <p className="font-mono text-xs uppercase tracking-widest text-ink-500">Contact</p>
              <a href={`mailto:${profile.email}`} className="flex items-center gap-2 text-ink-300 hover:text-cyan-glow">
                <HiOutlineMail /> {profile.email}
              </a>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="flex items-center gap-2 text-ink-300 hover:text-cyan-glow">
                <HiOutlinePhone /> {profile.phone}
              </a>
              <p className="flex items-center gap-2 text-ink-300">
                <HiOutlineLocationMarker /> {profile.location}
              </p>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-2 text-ink-300 hover:text-cyan-glow"
              >
                <FaLinkedin /> linkedin.com/in/deepakseng
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-base-800 pt-6 text-xs text-ink-600 sm:flex-row">
  <p>
    © {new Date().getFullYear()} <span className="text-ink-300 font-medium">Deepak S</span>. All rights reserved.
  </p>

  <p className="font-mono uppercase tracking-[0.2em] text-ink-500">
    Electrical Design • LV Panel Engineering • Industrial Automation
  </p>
</div>
      </div>
    </footer>
  );
}
