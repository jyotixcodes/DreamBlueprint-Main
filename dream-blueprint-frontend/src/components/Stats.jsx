const STATS = [
  { value: "10K+", label: "Dreams Planned" },
  { value: "25K+", label: "Blueprints Created" },
  { value: "95%", label: "User Satisfaction" },
  { value: "150+", label: "Countries" },
];

const AVATARS = ["👩🏽", "👨🏻", "👩🏾", "👨🏿", "👩🏼"];

export default function Stats() {
  return (
    <section style={{
      padding: "0 48px 80px",
      maxWidth: 1200,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 380px",
      gap: 40,
      alignItems: "center",
    }}>

      {/* LEFT — AVATARS + STATS */}
      <div>

        {/* AVATARS ROW */}
        <div style={{
          display: "flex",
          alignItems: "center",
          marginBottom: 8,
        }}>
          {AVATARS.map((a, i) => (
            <span key={i} style={{
              display: "inline-flex",
              width: 36, height: 36,
              borderRadius: "var(--radius-full)",
              background: "var(--bg-card)",
              alignItems: "center", justifyContent: "center",
              fontSize: 18,
              marginLeft: i > 0 ? -10 : 0,
              border: "2px solid var(--bg)",
              zIndex: 10 - i,
              boxShadow: "var(--shadow-sm)",
            }}>
              {a}
            </span>
          ))}
          <span style={{
            marginLeft: 10,
            fontSize: 14,
            color: "var(--text-sub)",
            fontWeight: 500,
          }}>
            +10K
          </span>
        </div>

        {/* TRUSTED TEXT */}
        <div style={{
          fontWeight: 600,
          fontSize: 16,
          color: "var(--text)",
          marginBottom: 32,
        }}>
          Trusted by dreamers worldwide
        </div>

        {/* STAT NUMBERS */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 24,
        }}>
          {STATS.map(s => (
            <div key={s.label}>
              <div style={{
                fontFamily: "var(--font-display)",
                fontSize: 32, fontWeight: 900,
                color: "var(--primary)",
              }}>
                {s.value}
              </div>
              <div style={{
                color: "var(--text-sub)",
                fontSize: 13, marginTop: 4,
              }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT — CTA CARD */}
      <div style={{
        background: "linear-gradient(135deg, var(--primary), var(--secondary))",
        borderRadius: "var(--radius-lg)",
        padding: "36px 32px",
        color: "#fff",
        boxShadow: "0 20px 50px rgba(14,165,233,0.3)",
      }}>
        <div style={{
          fontFamily: "var(--font-display)",
          fontSize: 24, fontWeight: 900,
          marginBottom: 10,
        }}>
          Ready to build your future?
        </div>
        <div style={{
          fontSize: 14, opacity: 0.85,
          marginBottom: 24, lineHeight: 1.6,
        }}>
          Join thousands of dreamers and start your journey today.
        </div>
        <button
          onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
          onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
          style={{
            background: "#fff",
            border: "none",
            color: "var(--primary)",
            padding: "13px 28px",
            borderRadius: "var(--radius-md)",
            fontWeight: 800, fontSize: 15,
            width: "100%", transition: "transform 0.2s",
          }}
        >
          Start Your Blueprint →
        </button>
      </div>

    </section>
  );
}