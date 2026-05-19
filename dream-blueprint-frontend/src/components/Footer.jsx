const FOOTER_LINKS = {
  Product: ["Blueprints", "Roadmap", "Dashboard", "Pricing"],
  Company: ["About Us", "Blog", "Careers", "Press"],
  Resources: ["Documentation", "Community", "Support", "Status"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

export default function Footer({ dark }) {
  return (
    <footer style={{
      borderTop: "1px solid var(--border)",
      background: dark ? "rgba(15,23,42,0.9)" : "rgba(255,255,255,0.6)",
      backdropFilter: "blur(16px)",
      padding: "60px 48px 32px",
    }}>

      {/* TOP ROW */}
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
        gap: 40,
        marginBottom: 48,
      }}>

        {/* BRAND */}
        <div>
          <div style={{
            display: "flex", alignItems: "center",
            gap: 10, marginBottom: 16,
          }}>
            <div style={{
              width: 34, height: 34, borderRadius: 10,
              background: "linear-gradient(135deg, #38bdf8, #818cf8)",
              display: "flex", alignItems: "center",
              justifyContent: "center", fontSize: 18,
            }}>🔷</div>
            <span style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700, fontSize: 18,
              color: "var(--text)",
            }}>Dream Blueprint</span>
          </div>
          <p style={{
            color: "var(--text-sub)",
            fontSize: 14, lineHeight: 1.7,
            maxWidth: 260,
          }}>
            Turn your dreams into actionable plans with the power of AI. Start your journey today.
          </p>

          {/* SOCIAL ICONS */}
          <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
            {["𝕏", "in", "f", "▶"].map((icon, i) => (
              <button key={i}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "var(--primary)";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "var(--bg-card)";
                  e.currentTarget.style.color = "var(--text-sub)";
                }}
                style={{
                  width: 36, height: 36,
                  borderRadius: "var(--radius-sm)",
                  background: "var(--bg-card)",
                  border: "1.5px solid var(--border)",
                  color: "var(--text-sub)",
                  fontSize: 14, fontWeight: 700,
                  display: "flex", alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.2s",
                }}
              >
                {icon}
              </button>
            ))}
          </div>
        </div>

        {/* LINK COLUMNS */}
        {Object.entries(FOOTER_LINKS).map(([category, links]) => (
          <div key={category}>
            <div style={{
              fontWeight: 700, fontSize: 14,
              color: "var(--text)", marginBottom: 16,
            }}>
              {category}
            </div>
            <div style={{
              display: "flex", flexDirection: "column", gap: 10,
            }}>
              {links.map(link => (
                <a key={link} href="#"
                  onMouseEnter={e => e.currentTarget.style.color = "var(--primary)"}
                  onMouseLeave={e => e.currentTarget.style.color = "var(--text-sub)"}
                  style={{
                    color: "var(--text-sub)",
                    fontSize: 14, transition: "color 0.2s",
                  }}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* BOTTOM ROW */}
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        paddingTop: 24,
        borderTop: "1px solid var(--border)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <div style={{ color: "var(--text-sub)", fontSize: 13 }}>
          © 2025 Dream Blueprint · Built with ✦ and ambition
        </div>
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 6,
          background: "rgba(14,165,233,0.1)",
          border: "1.5px solid rgba(14,165,233,0.2)",
          borderRadius: "var(--radius-full)",
          padding: "6px 14px",
          fontSize: 12, fontWeight: 600,
          color: "var(--primary)",
        }}>
          ✦ AI-Powered Platform
        </div>
      </div>

    </footer>
  );
}