const STEPS = [
  {
    num: 1,
    icon: "✏️",
    title: "Share Your Dream",
    desc: "Tell us what you want to achieve in your own words.",
  },
  {
    num: 2,
    icon: "✨",
    title: "AI Builds Your Blueprint",
    desc: "Our AI creates a personalized plan just for you.",
  },
  {
    num: 3,
    icon: "☑️",
    title: "Take Action",
    desc: "Follow your step-by-step roadmap with ease.",
  },
  {
    num: 4,
    icon: "🏆",
    title: "Achieve & Beyond",
    desc: "Track progress, celebrate wins, and keep growing.",
  },
];

export default function HowItWorks() {
  return (
    <section style={{
      padding: "0 48px 80px",
      maxWidth: 1200,
      margin: "0 auto",
    }}>
      {/* LABEL */}
      <div style={{
        fontSize: 12, fontWeight: 700,
        color: "var(--primary)",
        letterSpacing: 2, marginBottom: 12,
        textTransform: "uppercase",
      }}>
        ✦ HOW IT WORKS
      </div>

      {/* HEADING */}
      <h2 style={{
        fontFamily: "var(--font-display)",
        fontSize: "clamp(28px, 4vw, 36px)",
        fontWeight: 900, lineHeight: 1.2,
        color: "var(--text)",
        marginBottom: 48,
      }}>
        From Dream to Reality in{" "}
        <span style={{ color: "var(--primary)" }}>4 Simple Steps</span>
      </h2>

      {/* STEP NUMBERS ROW */}
      <div style={{ position: "relative", marginBottom: 24 }}>

        {/* Connector line */}
        <div style={{
          position: "absolute",
          top: 22, left: "12%", right: "12%",
          height: 2,
          background: "linear-gradient(to right, #0ea5e9, #6366f1, #a78bfa, #38bdf8)",
          borderRadius: 2,
          zIndex: 0,
        }} />

        {/* Number circles */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 16,
          position: "relative",
          zIndex: 1,
        }}>
          {STEPS.map(s => (
            <div key={s.num} style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}>
              <div style={{
                width: 44, height: 44,
                borderRadius: "var(--radius-full)",
                background: "linear-gradient(135deg, var(--primary), var(--secondary))",
                color: "#fff",
                fontWeight: 800, fontSize: 16,
                display: "flex", alignItems: "center", justifyContent: "center",
                boxShadow: "0 4px 14px rgba(14,165,233,0.35)",
              }}>
                {s.num}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* STEP CARDS */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 16,
        marginBottom: 36,
      }}>
        {STEPS.map(s => (
          <div
            key={s.num}
            onMouseEnter={e => e.currentTarget.style.transform = "translateY(-3px)"}
            onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
            style={{
              background: "var(--bg-card)",
              border: "1.5px solid var(--border)",
              borderRadius: "var(--radius-md)",
              padding: "20px 16px",
              textAlign: "center",
              boxShadow: "var(--shadow-sm)",
              transition: "transform 0.2s",
            }}
          >
            <div style={{ fontSize: 28, marginBottom: 10 }}>{s.icon}</div>
            <div style={{
              fontWeight: 700, fontSize: 13,
              color: "var(--text)", marginBottom: 6,
            }}>
              {s.title}
            </div>
            <div style={{
              color: "var(--text-sub)",
              fontSize: 12, lineHeight: 1.6,
            }}>
              {s.desc}
            </div>
          </div>
        ))}
      </div>

      {/* LEARN MORE LINK */}
      <button
        onMouseEnter={e => e.currentTarget.style.gap = "10px"}
        onMouseLeave={e => e.currentTarget.style.gap = "6px"}
        style={{
          background: "none", border: "none",
          color: "var(--primary)", fontWeight: 600,
          fontSize: 14, display: "flex",
          alignItems: "center", gap: 6,
          transition: "gap 0.2s",
        }}
      >
        Learn more about how it works →
      </button>
    </section>
  );
}