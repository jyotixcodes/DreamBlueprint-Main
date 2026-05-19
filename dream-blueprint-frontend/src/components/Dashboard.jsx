const RECENT_PROGRESS = [
  { label: "Completed: HTML & CSS Fundamentals", date: "May 10", done: true },
  { label: "Completed: JavaScript Basics", date: "May 12", done: true },
  { label: "In Progress: React Basics", date: "May 15", inprogress: true },
  { label: "Upcoming: Node.js Fundamentals", date: "May 20", done: false },
];

const STATS = [
  { icon: "☑️", label: "Tasks Completed", value: "23 / 55" },
  { icon: "🔥", label: "Current Streak", value: "7 days" },
  { icon: "📅", label: "Days Remaining", value: "143 days" },
];

export default function Dashboard({ dark }) {
  return (
    <div style={{
      background: "var(--bg-card)",
      backdropFilter: "blur(20px)",
      border: "1.5px solid var(--border)",
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      boxShadow: "var(--shadow-lg)",
    }}>

      {/* HEADER */}
      <div style={{
        padding: "20px 24px",
        borderBottom: "1px solid var(--border)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        <div style={{ fontSize: 16, fontWeight: 700, color: "var(--text)" }}>
          ✦ Your Blueprint Dashboard
        </div>
        <button style={{
          background: "none", border: "none",
          color: "var(--primary)", fontSize: 13,
          fontWeight: 600, cursor: "pointer",
        }}>
          View Full Blueprint →
        </button>
      </div>

      {/* BODY */}
      <div style={{ padding: "20px 24px" }}>

        {/* CURRENT BLUEPRINT */}
        <div style={{
          fontSize: 11, color: "var(--text-sub)",
          fontWeight: 600, textTransform: "uppercase",
          letterSpacing: 1, marginBottom: 4,
        }}>
          Current Blueprint
        </div>

        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 4,
        }}>
          <div style={{
            fontWeight: 800, fontSize: 17,
            color: "var(--text)",
          }}>
            Become a Full Stack Developer
          </div>
          <div style={{
            fontWeight: 800, fontSize: 22,
            color: "var(--primary)",
          }}>
            42%
          </div>
        </div>

        <div style={{
          fontSize: 11, color: "var(--text-sub)",
          marginBottom: 8,
        }}>
          Completed
        </div>

        {/* PROGRESS BAR */}
        <div style={{
          background: dark ? "rgba(255,255,255,0.08)" : "#e2e8f0",
          borderRadius: "var(--radius-full)",
          height: 8, marginBottom: 20,
          overflow: "hidden",
        }}>
          <div style={{
            height: "100%",
            borderRadius: "var(--radius-full)",
            background: "linear-gradient(90deg, var(--primary), var(--secondary))",
            animation: "fillBar 1.5s ease forwards",
          }} />
        </div>

        {/* STATS ROWS */}
        {STATS.map(row => (
          <div key={row.label} style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 0",
            borderBottom: "1px solid var(--border)",
            fontSize: 14,
          }}>
            <span style={{ color: "var(--text-sub)" }}>
              {row.icon} {row.label}
            </span>
            <span style={{ fontWeight: 700, color: "var(--text)" }}>
              {row.value}
            </span>
          </div>
        ))}

        {/* CONTINUE BUTTON */}
        <button
          onMouseEnter={e => e.currentTarget.style.opacity = "0.9"}
          onMouseLeave={e => e.currentTarget.style.opacity = "1"}
          style={{
            width: "100%", marginTop: 18,
            background: "linear-gradient(135deg, var(--primary), var(--secondary))",
            border: "none", color: "#fff",
            padding: 13, borderRadius: "var(--radius-md)",
            fontWeight: 700, fontSize: 15,
            transition: "opacity 0.2s",
          }}
        >
          Continue Roadmap →
        </button>
      </div>

      {/* MILESTONE + RECENT PROGRESS */}
      <div style={{
        borderTop: "1px solid var(--border)",
        padding: "20px 24px",
      }}>

        {/* MILESTONE */}
        <div style={{
          fontSize: 11, color: "var(--text-sub)",
          fontWeight: 600, textTransform: "uppercase",
          letterSpacing: 1, marginBottom: 10,
        }}>
          Upcoming Milestone
        </div>
        <div style={{
          fontWeight: 700, fontSize: 14,
          color: "var(--text)", marginBottom: 4,
        }}>
          Build Your First Full Project
        </div>
        <div style={{
          fontSize: 12, color: "var(--text-sub)", marginBottom: 8,
        }}>
          Create and deploy a full stack application using your learned skills.
        </div>
        <div style={{
          display: "inline-block",
          background: "rgba(14,165,233,0.12)",
          color: "var(--primary)",
          borderRadius: "var(--radius-full)",
          padding: "3px 12px",
          fontSize: 12, fontWeight: 600,
          marginBottom: 20,
        }}>
          🚩 May 25, 2025
        </div>

        {/* RECENT PROGRESS */}
        <div style={{
          fontSize: 11, color: "var(--text-sub)",
          fontWeight: 600, textTransform: "uppercase",
          letterSpacing: 1, marginBottom: 10,
        }}>
          Recent Progress
        </div>

        {RECENT_PROGRESS.map(r => (
          <div key={r.label} style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "7px 0",
            fontSize: 12,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span style={{ fontSize: 14 }}>
                {r.done ? "✅" : r.inprogress ? "🔄" : "⏳"}
              </span>
              <span style={{
                color: r.done
                  ? "var(--text)"
                  : r.inprogress
                  ? "var(--primary)"
                  : "var(--text-sub)",
              }}>
                {r.label}
              </span>
            </div>
            <span style={{ color: "var(--text-sub)" }}>{r.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}