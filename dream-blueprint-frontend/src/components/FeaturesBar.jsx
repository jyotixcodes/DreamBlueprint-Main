const FEATURES = [
  {
    icon: "◎",
    title: "Personalized Roadmaps",
    desc: "AI-crafted plans tailored to your dreams, goals, and lifestyle.",
    color: "#22c55e",
    bg: "rgba(34,197,94,0.1)",
  },
  {
    icon: "⊞",
    title: "Step-by-Step Guidance",
    desc: "Clear milestones, actionable tasks, and smart timelines.",
    color: "#a78bfa",
    bg: "rgba(167,139,250,0.1)",
  },
  {
    icon: "↗",
    title: "Track & Stay Motivated",
    desc: "Monitor progress, celebrate wins, and stay on track.",
    color: "#38bdf8",
    bg: "rgba(56,189,248,0.1)",
  },
  {
    icon: "⊕",
    title: "Community Support",
    desc: "Get inspired and supported by dreamers like you.",
    color: "#fb923c",
    bg: "rgba(251,146,60,0.1)",
  },
];

export default function FeaturesBar() {
  return (
    <section style={{
      padding: "0 48px 80px",
      maxWidth: 1200,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 20,
    }}>
      {FEATURES.map((f, i) => (
        <div
          key={f.title}
          onMouseEnter={e => {
            e.currentTarget.style.transform = "translateY(-4px)";
            e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.12)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "var(--shadow-sm)";
          }}
          style={{
            background: "var(--bg-card)",
            backdropFilter: "blur(16px)",
            border: "1.5px solid var(--border)",
            borderRadius: "var(--radius-md)",
            padding: 24,
            boxShadow: "var(--shadow-sm)",
            transition: "transform 0.2s, box-shadow 0.2s",
            cursor: "default",
          }}
        >
          {/* ICON */}
          <div style={{
            width: 44, height: 44,
            borderRadius: 12,
            background: f.bg,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 22, color: f.color,
            marginBottom: 14,
          }}>
            {f.icon}
          </div>

          {/* TITLE */}
          <div style={{
            fontWeight: 700, fontSize: 15,
            color: "var(--text)", marginBottom: 6,
          }}>
            {f.title}
          </div>

          {/* DESC */}
          <div style={{
            color: "var(--text-sub)",
            fontSize: 13, lineHeight: 1.6,
          }}>
            {f.desc}
          </div>
        </div>
      ))}
    </section>
  );
}