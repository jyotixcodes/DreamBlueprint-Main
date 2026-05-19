import { useState, useRef } from "react";

const TIMEFRAMES = ["1 Month", "3 Months", "6 Months", "1 Year", "2+ Years"];
const SKILLS = ["Beginner", "Intermediate", "Advanced", "Expert"];

export default function Hero({ dark }) {
  const [dream, setDream] = useState("");
  const [timeframe, setTimeframe] = useState("Timeframe");
  const [skillLevel, setSkillLevel] = useState("Skill Level");
  const [showTimeframe, setShowTimeframe] = useState(false);
  const [showSkill, setShowSkill] = useState(false);

  const closeDropdowns = () => {
    setShowTimeframe(false);
    setShowSkill(false);
  };

  return (
    <section
      onClick={closeDropdowns}
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "100px 48px 80px",
        textAlign: "center",
        minHeight: 580,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* BACKGROUND ORBS */}
      <div style={{
        position: "absolute", width: 400, height: 400, borderRadius: "50%",
        background: "rgba(56,189,248,0.18)", top: -80, left: -100,
        filter: "blur(80px)", animation: "float 8s ease-in-out infinite",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", width: 350, height: 350, borderRadius: "50%",
        background: "rgba(167,139,250,0.15)", top: 50, right: -80,
        filter: "blur(80px)", animation: "float 8s 3s ease-in-out infinite",
        pointerEvents: "none",
      }} />

      {/* MOUNTAIN */}
      <div style={{
        position: "absolute", right: 60, top: "50%",
        transform: "translateY(-50%)",
        fontSize: 160, opacity: 0.07,
        filter: "blur(1px)", pointerEvents: "none", userSelect: "none",
      }}>🏔️</div>

      {/* PILL TAG */}
      <div className="fade-up" style={{
        display: "inline-flex", alignItems: "center", gap: 6,
        background: dark ? "rgba(56,189,248,0.15)" : "rgba(56,189,248,0.1)",
        border: "1.5px solid rgba(56,189,248,0.3)",
        borderRadius: "var(--radius-full)",
        padding: "6px 16px", fontSize: 13,
        color: "var(--primary)", fontWeight: 600,
        marginBottom: 28,
      }}>
        ✦ AI-Powered. Purpose-Driven. Built for You.
      </div>

      {/* HEADING */}
      <h1 className="fade-up-2" style={{
        fontFamily: "var(--font-display)",
        fontSize: "clamp(40px, 6vw, 70px)",
        fontWeight: 900, lineHeight: 1.1,
        color: "var(--text)",
        maxWidth: 780, marginBottom: 16,
      }}>
        Turn your{" "}
        <span style={{ color: "var(--primary)", fontStyle: "italic" }}>
          'someday'
        </span>
        <br />into a step-by-step plan.
      </h1>

      {/* SUBHEADING */}
      <p className="fade-up-3" style={{
        fontSize: 18, color: "var(--text-sub)",
        marginBottom: 44, fontWeight: 400,
      }}>
        Dream it. Plan it. Build it. Live it.
      </p>

      {/* INPUT CARD */}
      <div className="fade-up-4" style={{
        background: "var(--bg-card)",
        backdropFilter: "blur(20px)",
        border: "1.5px solid var(--border)",
        borderRadius: "var(--radius-lg)",
        padding: "24px 28px",
        width: "100%", maxWidth: 720,
        boxShadow: "var(--shadow-lg)",
      }}>
        {/* TEXT INPUT */}
        <div style={{
          display: "flex", alignItems: "center",
          gap: 12, marginBottom: 20,
          borderBottom: "1.5px solid var(--border)",
          paddingBottom: 16,
        }}>
          <input
            value={dream}
            onChange={e => setDream(e.target.value)}
            placeholder="Tell us your dream..."
            style={{
              flex: 1, background: "none",
              border: "none", outline: "none",
              fontSize: 17, color: "var(--text)",
              fontFamily: "var(--font-body)",
            }}
          />
          <span style={{ color: "var(--primary)", fontSize: 22 }}>✦</span>
        </div>

        {/* DROPDOWNS + BUTTON */}
        <div style={{
          display: "flex", alignItems: "center",
          justifyContent: "space-between", gap: 12,
        }}>
          <div style={{ display: "flex", gap: 10 }}>

            {/* Timeframe Dropdown */}
            <div style={{ position: "relative" }}>
              <button
                onClick={e => { e.stopPropagation(); setShowTimeframe(!showTimeframe); setShowSkill(false); }}
                style={{
                  display: "flex", alignItems: "center", gap: 8,
                  background: dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)",
                  border: "1.5px solid var(--border)",
                  borderRadius: "var(--radius-sm)",
                  padding: "9px 16px", color: "var(--text-sub)",
                  fontSize: 14, fontWeight: 500,
                }}
              >
                📅 {timeframe} ▾
              </button>
              {showTimeframe && (
                <div style={{
                  position: "absolute", top: "calc(100% + 8px)", left: 0,
                  background: dark ? "#1e293b" : "#fff",
                  border: "1.5px solid var(--border)",
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden", zIndex: 50, minWidth: 140,
                  boxShadow: "var(--shadow-md)",
                }}>
                  {TIMEFRAMES.map(t => (
                    <div key={t}
                      onClick={e => { e.stopPropagation(); setTimeframe(t); setShowTimeframe(false); }}
                      style={{
                        padding: "10px 16px", cursor: "pointer",
                        fontSize: 14, color: "var(--text)",
                        transition: "all 0.15s",
                      }}
                      onMouseEnter={e => e.currentTarget.style.background = "rgba(14,165,233,0.1)"}
                      onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                    >{t}</div>
                  ))}
                </div>
              )}
            </div>

            {/* Skill Level Dropdown */}
            <div style={{ position: "relative" }}>
              <button
                onClick={e => { e.stopPropagation(); setShowSkill(!showSkill); setShowTimeframe(false); }}
                style={{
                  display: "flex", alignItems: "center", gap: 8,
                  background: dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)",
                  border: "1.5px solid var(--border)",
                  borderRadius: "var(--radius-sm)",
                  padding: "9px 16px", color: "var(--text-sub)",
                  fontSize: 14, fontWeight: 500,
                }}
              >
                📊 {skillLevel} ▾
              </button>
              {showSkill && (
                <div style={{
                  position: "absolute", top: "calc(100% + 8px)", left: 0,
                  background: dark ? "#1e293b" : "#fff",
                  border: "1.5px solid var(--border)",
                  borderRadius: "var(--radius-md)",
                  overflow: "hidden", zIndex: 50, minWidth: 140,
                  boxShadow: "var(--shadow-md)",
                }}>
                  {SKILLS.map(s => (
                    <div key={s}
                      onClick={e => { e.stopPropagation(); setSkillLevel(s); setShowSkill(false); }}
                      style={{
                        padding: "10px 16px", cursor: "pointer",
                        fontSize: 14, color: "var(--text)",
                        transition: "all 0.15s",
                      }}
                      onMouseEnter={e => e.currentTarget.style.background = "rgba(14,165,233,0.1)"}
                      onMouseLeave={e => e.currentTarget.style.background = "transparent"}
                    >{s}</div>
                  ))}
                </div>
              )}
            </div>

          </div>

          {/* GENERATE BUTTON */}
          <button
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "var(--shadow-primary)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
            style={{
              background: "linear-gradient(135deg, var(--primary), var(--secondary))",
              border: "none", color: "#fff",
              padding: "11px 28px", borderRadius: "var(--radius-md)",
              fontWeight: 700, fontSize: 15,
              display: "flex", alignItems: "center", gap: 8,
              transition: "all 0.2s",
            }}
          >
            ✦ Generate My Blueprint
          </button>
        </div>
      </div>
    </section>
  );
}