"use client";
import { useState, useEffect, useRef } from "react";

function useInView(ref, t = 0.12) {
  const [v, setV] = useState(false);
  useEffect(() => { if (!ref.current) return; const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold: t }); o.observe(ref.current); return () => o.disconnect(); }, [ref, t]);
  return v;
}
function Reveal({ children, d = 0, y = 40 }) {
  const r = useRef(null); const v = useInView(r);
  return <div ref={r} style={{ opacity: v ? 1 : 0, transform: v ? "translateY(0)" : `translateY(${y}px)`, transition: `all 0.9s cubic-bezier(0.16,1,0.3,1) ${d}s` }}>{children}</div>;
}

const P = {
  bg: "#FAFAF7", card: "#FFFFFF",
  orange: "#FF6B2C", orangeLight: "#FFF3ED",
  amber: "#FFB347", amberLight: "#FFF8EB",
  navy: "#1A2B4A",
  teal: "#12B886", tealLight: "#E6FCF5",
  warmGray: "#F5F1EC",
  text: "#1A1A2E", textMid: "#5A5A72", textLight: "#9A9AB0",
  shadow: "0 2px 20px rgba(26,43,74,0.06)",
  shadowLg: "0 8px 40px rgba(26,43,74,0.08)",
  shadowXl: "0 16px 60px rgba(26,43,74,0.12)",
};

const categories = [
  { icon: "🏠", name: "Home Repair", count: "847", bg: "linear-gradient(135deg, #FF6B2C, #FF8F5C)", color: "#fff" },
  { icon: "🚗", name: "Auto Basics", count: "512", bg: "linear-gradient(135deg, #1A2B4A, #2D3F5E)", color: "#fff" },
  { icon: "💻", name: "Tech Setup", count: "1.2K", bg: "linear-gradient(135deg, #12B886, #38D9A9)", color: "#fff" },
  { icon: "🍳", name: "Kitchen", count: "634", bg: "linear-gradient(135deg, #FFB347, #FFD180)", color: "#1A2B4A" },
  { icon: "📦", name: "Business", count: "389", bg: "linear-gradient(135deg, #7C4DFF, #B388FF)", color: "#fff" },
  { icon: "🧹", name: "Cleaning", count: "421", bg: "linear-gradient(135deg, #00BCD4, #4DD0E1)", color: "#fff" },
];

const tutorials = [
  { title: "Replace a Bathroom Faucet", time: "22 min", level: "Beginner", rating: "4.9", saves: "2.3K", emoji: "🔩", gradient: "linear-gradient(135deg, #FF6B2C15, #FFB34710)" },
  { title: "Install a Ring Camera", time: "15 min", level: "Easy", rating: "4.8", saves: "1.8K", emoji: "📹", gradient: "linear-gradient(135deg, #12B88615, #38D9A910)" },
  { title: "Deep Clean Any Oven", time: "35 min", level: "Simple", rating: "4.7", saves: "3.1K", emoji: "✨", gradient: "linear-gradient(135deg, #7C4DFF15, #B388FF10)" },
  { title: "Set Up Google Business", time: "18 min", level: "Beginner", rating: "4.9", saves: "4.2K", emoji: "📊", gradient: "linear-gradient(135deg, #FFB34715, #FFD18010)" },
];

const paths = [
  { title: "New Homeowner\nStarter Pack", modules: 12, hours: "6.5", gradient: "linear-gradient(135deg, #FF6B2C, #FF8F5C)", emoji: "🏡" },
  { title: "DIY Car\nBasics", modules: 8, hours: "4", gradient: "linear-gradient(135deg, #1A2B4A, #3D5A80)", emoji: "🚗" },
  { title: "Kitchen\nConfidence", modules: 10, hours: "5", gradient: "linear-gradient(135deg, #12B886, #69DB7C)", emoji: "🧑‍🍳" },
];

export default function UtubeUniversity() {
  const [tab, setTab] = useState("home");
  const [ready, setReady] = useState(false);
  const [searchFocus, setSearchFocus] = useState(false);

  useEffect(() => { setTimeout(() => setReady(true), 150); }, []);

  return (
    <div style={{ background: P.bg, color: P.text, minHeight: "100vh", fontFamily: "'DM Sans', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Playfair+Display:wght@400;600;700;800;900&display=swap" rel="stylesheet" />

      <nav style={{ position: "sticky", top: 0, zIndex: 100, padding: "14px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", backdropFilter: "blur(20px)", background: "rgba(250,250,247,0.85)", borderBottom: "1px solid rgba(26,43,74,0.06)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 36, height: 36, borderRadius: 12, background: "linear-gradient(135deg, #FF6B2C, #FFB347)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, fontWeight: 900, color: "#fff", boxShadow: "0 4px 12px rgba(255,107,44,0.3)" }}>U</div>
          <span style={{ fontSize: 14, fontWeight: 800, color: P.navy }}>UTUBE UNIVERSITY</span>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <div style={{ width: 36, height: 36, borderRadius: 12, background: P.warmGray, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🔔</div>
          <div style={{ width: 36, height: 36, borderRadius: 12, background: "linear-gradient(135deg, #FF6B2C20, #FFB34720)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800, color: P.orange }}>DD</div>
        </div>
      </nav>

      <div style={{ maxWidth: 480, margin: "0 auto", padding: "0 20px 120px" }}>

        {/* HERO BANNER */}
        <div style={{ paddingTop: 24, opacity: ready ? 1 : 0, transform: ready ? "translateY(0)" : "translateY(30px)", transition: "all 1s cubic-bezier(0.16,1,0.3,1)" }}>
          <div style={{ padding: "28px 24px", borderRadius: 28, background: "linear-gradient(135deg, #FF6B2C, #FF8F5C, #FFB347)", color: "#fff", position: "relative", overflow: "hidden", boxShadow: "0 12px 40px rgba(255,107,44,0.25)", marginBottom: 24 }}>
            <div style={{ position: "absolute", top: -30, right: -30, width: 120, height: 120, borderRadius: "50%", background: "rgba(255,255,255,0.15)" }} />
            <div style={{ position: "absolute", bottom: -20, left: -20, width: 80, height: 80, borderRadius: "50%", background: "rgba(255,255,255,0.1)" }} />
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.16em", opacity: 0.85, marginBottom: 10 }}>LEARN REAL SKILLS FOR REAL LIFE</div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px, 7.5vw, 40px)", fontWeight: 800, lineHeight: 1.1, marginBottom: 10, position: "relative" }}>Stop guessing.<br />Start doing.</h1>
            <p style={{ fontSize: 13, lineHeight: 1.5, opacity: 0.85, maxWidth: 280, marginBottom: 18 }}>Guided tutorials, AI troubleshooting & live help — one platform.</p>
            <div style={{ display: "flex", gap: 10 }}>
              <div style={{ padding: "10px 18px", borderRadius: 14, background: "#fff", color: P.orange, fontSize: 12, fontWeight: 800, cursor: "pointer", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>Start Learning</div>
              <div style={{ padding: "10px 18px", borderRadius: 14, background: "rgba(255,255,255,0.2)", backdropFilter: "blur(10px)", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>Ask AI ✨</div>
            </div>
          </div>
        </div>

        {/* SEARCH */}
        <div style={{ opacity: ready ? 1 : 0, transition: "all 0.9s ease 0.1s", marginBottom: 28 }}>
          <div style={{ position: "relative" }}>
            <input placeholder="How do I fix a leaking faucet?" onFocus={() => setSearchFocus(true)} onBlur={() => setSearchFocus(false)} style={{ width: "100%", padding: "16px 20px 16px 46px", borderRadius: 18, border: `2px solid ${searchFocus ? P.orange + "50" : "rgba(26,43,74,0.08)"}`, background: "#fff", color: P.text, fontSize: 14, outline: "none", transition: "all 0.3s", boxShadow: searchFocus ? `0 0 0 4px ${P.orange}15` : P.shadow, boxSizing: "border-box" }} />
            <span style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", fontSize: 18, opacity: 0.35 }}>🔍</span>
          </div>
          <div style={{ display: "flex", gap: 6, marginTop: 10 }}>
            {["🔥 Trending", "⚡ Quick Fix", "🆕 New"].map(t => (
              <span key={t} style={{ padding: "6px 12px", borderRadius: 20, background: P.orangeLight, color: P.orange, fontSize: 11, fontWeight: 700, cursor: "pointer" }}>{t}</span>
            ))}
          </div>
        </div>

        {/* CATEGORIES */}
        <Reveal>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 14 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: P.navy }}>Explore</h2>
            <span style={{ fontSize: 12, fontWeight: 700, color: P.orange, cursor: "pointer" }}>See All →</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10, marginBottom: 32 }}>
            {categories.map(c => (
              <div key={c.name} style={{ borderRadius: 18, background: c.bg, padding: "20px 14px", textAlign: "center", cursor: "pointer", boxShadow: P.shadow, color: c.color }}>
                <div style={{ fontSize: 28, marginBottom: 6 }}>{c.icon}</div>
                <div style={{ fontSize: 11, fontWeight: 800, marginBottom: 2 }}>{c.name}</div>
                <div style={{ fontSize: 10, opacity: 0.7 }}>{c.count}</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* TRENDING */}
        <Reveal>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 14 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: P.navy }}>Trending Now</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 32 }}>
            {tutorials.map(t => (
              <div key={t.title} style={{ borderRadius: 20, background: "#fff", border: "1px solid rgba(26,43,74,0.06)", padding: 16, display: "flex", gap: 14, alignItems: "center", boxShadow: P.shadow }}>
                <div style={{ width: 56, height: 56, borderRadius: 16, background: t.gradient, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, flexShrink: 0 }}>{t.emoji}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, marginBottom: 6, color: P.navy }}>{t.title}</div>
                  <div style={{ display: "flex", gap: 6 }}>
                    <span style={{ fontSize: 10, fontWeight: 700, padding: "3px 8px", borderRadius: 6, background: P.warmGray, color: P.textMid }}>{t.time}</span>
                    <span style={{ fontSize: 10, fontWeight: 700, padding: "3px 8px", borderRadius: 6, background: P.orangeLight, color: P.orange }}>{t.level}</span>
                    <span style={{ fontSize: 10, color: P.textLight }}>⭐ {t.rating}</span>
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 15, fontWeight: 800, color: P.navy }}>{t.saves}</div>
                  <div style={{ fontSize: 9, color: P.textLight }}>saves</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* LEARNING PATHS */}
        <Reveal>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 700, color: P.navy, marginBottom: 14 }}>Learning Paths</h2>
          <div style={{ display: "flex", gap: 12, overflowX: "auto", paddingBottom: 8, marginBottom: 32 }}>
            {paths.map(p => (
              <div key={p.title} style={{ minWidth: 200, borderRadius: 24, background: p.gradient, padding: 22, color: "#fff", flexShrink: 0, boxShadow: P.shadowLg, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: -15, right: -15, fontSize: 60, opacity: 0.15 }}>{p.emoji}</div>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", opacity: 0.8, marginBottom: 10 }}>PATH</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, lineHeight: 1.2, marginBottom: 14, whiteSpace: "pre-line" }}>{p.title}</div>
                <div style={{ display: "flex", gap: 14, marginBottom: 16 }}>
                  <div><div style={{ fontSize: 20, fontWeight: 800 }}>{p.modules}</div><div style={{ fontSize: 9, opacity: 0.7 }}>MODULES</div></div>
                  <div><div style={{ fontSize: 20, fontWeight: 800 }}>{p.hours}h</div><div style={{ fontSize: 9, opacity: 0.7 }}>TOTAL</div></div>
                </div>
                <div style={{ padding: "10px 0", borderRadius: 12, background: "rgba(255,255,255,0.25)", backdropFilter: "blur(8px)", textAlign: "center", fontSize: 11, fontWeight: 800, cursor: "pointer" }}>ENROLL FREE</div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* AI COPILOT */}
        <Reveal>
          <div style={{ borderRadius: 28, background: "linear-gradient(135deg, #1A2B4A, #2D3F5E)", padding: 28, color: "#fff", position: "relative", overflow: "hidden", boxShadow: P.shadowXl, marginBottom: 32 }}>
            <div style={{ position: "absolute", top: -20, right: -20, width: 100, height: 100, borderRadius: "50%", background: "rgba(255,179,71,0.15)" }} />
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
              <div style={{ width: 44, height: 44, borderRadius: 14, background: "linear-gradient(135deg, #FFB347, #FF6B2C)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, boxShadow: "0 4px 12px rgba(255,107,44,0.3)" }}>🤖</div>
              <div>
                <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: "#FFB347" }}>AI COPILOT</div>
                <div style={{ fontSize: 16, fontWeight: 800 }}>Stuck? AI adapts to you.</div>
              </div>
            </div>
            <p style={{ fontSize: 13, lineHeight: 1.6, opacity: 0.7, marginBottom: 18 }}>Upload a photo, ask anything, get personalized troubleshooting instantly.</p>
            <div style={{ display: "flex", gap: 8 }}>
              {["Beginner", "Budget", "Pro"].map(m => (
                <span key={m} style={{ padding: "9px 14px", borderRadius: 12, background: "rgba(255,255,255,0.1)", fontSize: 11, fontWeight: 700, cursor: "pointer" }}>{m}</span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* COMMUNITY */}
        <Reveal>
          <div style={{ borderRadius: 24, background: "#fff", border: "1px solid rgba(26,43,74,0.06)", padding: 22, boxShadow: P.shadow, marginBottom: 32 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: P.navy }}>Community</h2>
              <span style={{ padding: "5px 12px", borderRadius: 10, background: P.tealLight, color: P.teal, fontSize: 10, fontWeight: 800 }}>12.4K active</span>
            </div>
            {[
              { emoji: "🎉", text: "Patched drywall for the first time!", meta: "2h • 847 upvotes", bg: P.orangeLight },
              { emoji: "💡", text: "Hack: hair dryer removes stickers!", meta: "5h • 234 upvotes", bg: P.tealLight },
              { emoji: "📸", text: "Before/after: deep cleaned kitchen", meta: "1d • 1.2K upvotes", bg: P.amberLight },
            ].map((p, i) => (
              <div key={i} style={{ padding: "12px 0", borderBottom: i < 2 ? "1px solid rgba(26,43,74,0.06)" : "none", display: "flex", gap: 12 }}>
                <div style={{ width: 36, height: 36, borderRadius: 12, background: p.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0 }}>{p.emoji}</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: P.navy, marginBottom: 3 }}>{p.text}</div>
                  <div style={{ fontSize: 10, color: P.textLight }}>{p.meta}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* EMERGENCY */}
        <Reveal>
          <div style={{ borderRadius: 24, background: "linear-gradient(135deg, #FFF3ED, #FFF8EB)", border: "2px solid #FF6B2C20", padding: 22 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
              <span style={{ fontSize: 32 }}>⚡</span>
              <div>
                <div style={{ fontSize: 15, fontWeight: 800, color: P.orange }}>Emergency Quick Fix</div>
                <div style={{ fontSize: 11, color: P.textMid }}>Fastest safe solution — right now</div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {["Clogged Drain", "Power Out", "Flat Tire", "Broken Lock"].map(f => (
                <span key={f} style={{ padding: "9px 14px", borderRadius: 12, background: "#fff", border: "1px solid rgba(255,107,44,0.15)", fontSize: 12, fontWeight: 700, color: P.navy, cursor: "pointer", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}>{f}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* BOTTOM NAV */}
      <div style={{ position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 100, backdropFilter: "blur(24px)", background: "rgba(255,255,255,0.92)", borderTop: "1px solid rgba(26,43,74,0.06)", padding: "8px 0 env(safe-area-inset-bottom, 8px)", boxShadow: "0 -4px 20px rgba(0,0,0,0.04)" }}>
        <div style={{ maxWidth: 480, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(5, 1fr)", textAlign: "center" }}>
          {[
            { icon: "🏠", label: "Home", key: "home" },
            { icon: "🔍", label: "Search", key: "search" },
            { icon: "📚", label: "Learn", key: "learn" },
            { icon: "👥", label: "Community", key: "community" },
            { icon: "👤", label: "Profile", key: "profile" },
          ].map(t => (
            <div key={t.key} onClick={() => setTab(t.key)} style={{ cursor: "pointer", padding: "6px 0" }}>
              <div style={{ fontSize: 20, marginBottom: 1, opacity: tab === t.key ? 1 : 0.4, transform: tab === t.key ? "scale(1.15)" : "scale(1)", transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)" }}>{t.icon}</div>
              <div style={{ fontSize: 9, fontWeight: 700, color: tab === t.key ? P.orange : P.textLight }}>{t.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
