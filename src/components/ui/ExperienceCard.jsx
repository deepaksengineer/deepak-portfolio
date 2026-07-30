export default function ExperienceCard({ item }) {
  return (
    <div className="nameplate rounded-lg p-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="font-display text-lg font-semibold text-ink-100">{item.role}</h3>
        {item.current && (
          <span className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-signal-green">
            <span className="status-dot h-1.5 w-1.5 rounded-full bg-signal-green" />
            Current
          </span>
        )}
      </div>
      <p className="mt-1 text-sm text-ink-500">
        {item.company} · {item.location}
      </p>
      <p className="mt-1 font-mono text-xs text-cyan-glow">{item.period}</p>
    </div>
  );
}
