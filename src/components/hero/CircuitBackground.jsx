export default function CircuitBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 blueprint-bg opacity-70" />
      <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-cyan-glow/10 blur-[100px]" />
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-signal-green/10 blur-[110px]" />

      <svg
        className="absolute inset-0 h-full w-full opacity-40"
        viewBox="0 0 800 500"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <path
          d="M0 80 H200 V180 H420 V60 H800"
          stroke="#00D9FF"
          strokeWidth="1"
          strokeDasharray="6 6"
          className="animate-trace-flow"
        />
        <path
          d="M0 420 H160 V320 H500 V440 H800"
          stroke="#39FF88"
          strokeWidth="1"
          strokeDasharray="6 6"
          className="animate-trace-flow"
          style={{ animationDelay: "1.2s" }}
        />
        <circle cx="200" cy="80" r="3" fill="#00D9FF" />
        <circle cx="420" cy="180" r="3" fill="#00D9FF" />
        <circle cx="160" cy="420" r="3" fill="#39FF88" />
        <circle cx="500" cy="320" r="3" fill="#39FF88" />
      </svg>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-base-950/40 to-base-950" />
    </div>
  );
}
