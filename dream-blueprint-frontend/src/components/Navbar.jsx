import { useState } from "react";

const NAV_LINKS = ["Home", "Blueprints", "Roadmap", "Resources", "Community", "Pricing"];

export default function Navbar({ dark, setDark }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 48px",
      height: 64,
      background: dark ? "rgba(15,23,42,0.9)" : "rgba(255,255,255,0.75)",
      backdropFilter: "blur(16px)",
      borderBottom: `1px solid var(--border)`,
      position: "sticky",
      top: 0,
      zIndex: 100,
      transition: "all 0.4s",
    }}>

      {/* LOGO */}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{
          width: 34, height: 34, borderRadius: 10,
          background: "linear-gradient(135deg, #38bdf8, #818cf8)",
          display: "flex", alignItems: "center",
          justifyContent: "center", fontSize: 18,
        }}>🔷</div>
        <span style={{
          fontFamily: "var(--font-display)",
          fontWeight: 700, fontSize: 20,
          color: "var(--text)",
        }}>Dream Blueprint</span>
      </div>

      {/* NAV LINKS */}
      <div style={{ display: "flex", gap: 32 }}>
        {NAV_LINKS.map(link => (
          <a key={link} href="#" style={{
            fontWeight: 500,
            fontSize: 15,
            color: link === "Home" ? "var(--primary)" : "var(--text-sub)",
            transition: "color 0.2s",
          }}
            onMouseEnter={e => e.target.style.color = "var(--primary)"}
            onMouseLeave={e => e.target.style.color = link === "Home" ? "var(--primary)" : "var(--text-sub)"}
          >
            {link}
          </a>
        ))}
      </div>

      {/* RIGHT SIDE */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>

        {/* Dark mode toggle */}
        <button onClick={() => setDark(!dark)} style={{
          background: "none", border: "none",
          fontSize: 20, color: "var(--text-sub)",
          padding: "4px 8px", borderRadius: 8,
          transition: "background 0.2s",
        }}>
          {dark ? "☀️" : "🌙"}
        </button>

        {/* Log in */}
        <button style={{
          background: "none",
          border: `1.5px solid var(--border)`,
          color: "var(--text)",
          padding: "8px 20px", borderRadius: "var(--radius-sm)",
          fontWeight: 600, fontSize: 14,
          transition: "all 0.2s",
        }}>
          Log in
        </button>

        {/* Sign up */}
        <button style={{
          background: "linear-gradient(135deg, var(--primary), var(--secondary))",
          border: "none", color: "#fff",
          padding: "8px 22px", borderRadius: "var(--radius-sm)",
          fontWeight: 700, fontSize: 14,
          transition: "all 0.2s",
        }}
          onMouseEnter={e => e.currentTarget.style.transform = "translateY(-1px)"}
          onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
        >
          Sign up
        </button>

      </div>
    </nav>
  );
}