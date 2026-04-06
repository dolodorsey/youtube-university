'use client'
import { useState, useEffect, useRef } from 'react'

const CATEGORIES = [
  { name: 'Fix It', icon: '🔧', color: '#FF9F0A', tag: 'fix', desc: 'Home repairs, plumbing, electrical, car maintenance' },
  { name: 'Build It', icon: '🪚', color: '#30D158', tag: 'build', desc: 'Furniture, shelves, decks, sheds, custom projects' },
  { name: 'Cook It', icon: '🍳', color: '#FF3B30', tag: 'cook', desc: 'Meals, meal prep, baking, grilling, global cuisine' },
  { name: 'Style It', icon: '✂️', color: '#BF5AF2', tag: 'style', desc: 'Hair, fashion, grooming, home decor, interior design' },
  { name: 'Tech It', icon: '💻', color: '#0A84FF', tag: 'tech', desc: 'Coding, apps, gadgets, smart home, AI tools' },
  { name: 'Clean It', icon: '🧹', color: '#64D2FF', tag: 'clean', desc: 'Deep cleaning, organization, detailing, laundry hacks' },
  { name: 'Grow It', icon: '🌱', color: '#30D158', tag: 'grow', desc: 'Gardening, landscaping, indoor plants, hydroponics' },
  { name: 'Move It', icon: '💪', color: '#FF375F', tag: 'move', desc: 'Workouts, stretching, sports skills, mobility' },
  { name: 'Drive It', icon: '🚗', color: '#FF9F0A', tag: 'drive', desc: 'Car repair, detailing, modifications, maintenance' },
  { name: 'Fund It', icon: '💰', color: '#FFD60A', tag: 'fund', desc: 'Budgeting, investing, side hustles, tax tips' },
  { name: 'Create It', icon: '🎨', color: '#BF5AF2', tag: 'create', desc: 'Art, music, photography, video editing, design' },
  { name: 'Hack It', icon: '⚡', color: '#FFD60A', tag: 'hack', desc: 'Life hacks, productivity, organization, shortcuts' },
]

const FEATURED = [
  { title: 'How to Fix a Running Toilet in 10 Minutes', cat: 'Fix It', views: '2.3M', duration: '10:24', color: '#FF9F0A', difficulty: 'Beginner' },
  { title: 'Build a Floating Shelf With No Visible Brackets', cat: 'Build It', views: '1.8M', duration: '15:30', color: '#30D158', difficulty: 'Intermediate' },
  { title: 'The Perfect Steak — Restaurant Quality at Home', cat: 'Cook It', views: '4.1M', duration: '12:15', color: '#FF3B30', difficulty: 'Beginner' },
  { title: 'Fade Your Own Hair Like a Barber', cat: 'Style It', views: '3.7M', duration: '18:42', color: '#BF5AF2', difficulty: 'Intermediate' },
  { title: 'Set Up a Smart Home From Scratch for $200', cat: 'Tech It', views: '1.2M', duration: '22:10', color: '#0A84FF', difficulty: 'Beginner' },
  { title: 'Deep Clean Your Entire Car Interior', cat: 'Drive It', views: '5.6M', duration: '25:00', color: '#FF9F0A', difficulty: 'Beginner' },
  { title: 'Start a Container Garden on Your Balcony', cat: 'Grow It', views: '890K', duration: '14:35', color: '#30D158', difficulty: 'Beginner' },
  { title: '20-Minute Full Body Workout — No Equipment', cat: 'Move It', views: '8.2M', duration: '20:00', color: '#FF375F', difficulty: 'Beginner' },
]

const TRENDING = [
  { title: 'Patch Drywall Like a Pro', cat: 'Fix It', views: '1.1M', duration: '8:15' },
  { title: 'Meal Prep Sunday — 5 Meals in 1 Hour', cat: 'Cook It', views: '3.4M', duration: '16:20' },
  { title: 'Build a Fire Pit in Your Backyard', cat: 'Build It', views: '2.1M', duration: '19:45' },
  { title: 'Change Your Own Oil — Complete Guide', cat: 'Drive It', views: '4.8M', duration: '11:30' },
  { title: 'Learn Python in 30 Minutes', cat: 'Tech It', views: '6.2M', duration: '30:00' },
  { title: 'Style a Room on a $100 Budget', cat: 'Style It', views: '1.5M', duration: '13:40' },
]

function useReveal() {
  const ref = useRef(null)
  const [vis, setVis] = useState(false)
  useEffect(() => {
    if (!ref.current) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true) }, { threshold: 0.1 })
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])
  return [ref, vis]
}

function VideoCard({ title, cat, views, duration, color, difficulty, i = 0 }) {
  return (
    <div style={{
      background: 'var(--bg2)', borderRadius: 12, overflow: 'hidden', cursor: 'pointer',
      transition: 'transform 0.3s var(--ease), box-shadow 0.3s',
      animation: `fadeUp 0.6s var(--ease) ${i * 0.08}s both`,
    }}
    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = `0 12px 40px ${color}15` }}
    onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '' }}
    >
      <div style={{
        position: 'relative', paddingTop: '56.25%', background: `linear-gradient(135deg, ${color}20, ${color}08)`,
        borderBottom: `2px solid ${color}30`,
      }}>
        <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{
            width: 56, height: 56, borderRadius: '50%', background: 'rgba(0,0,0,0.6)',
            backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            border: '2px solid rgba(255,255,255,0.15)', transition: 'all 0.3s',
          }}>
            <div style={{ width: 0, height: 0, borderLeft: '16px solid white', borderTop: '10px solid transparent', borderBottom: '10px solid transparent', marginLeft: 4 }} />
          </div>
        </div>
        <div style={{
          position: 'absolute', bottom: 8, right: 8, background: 'rgba(0,0,0,0.8)',
          padding: '3px 8px', borderRadius: 4, fontSize: 12, fontFamily: 'var(--font-mono)',
          fontWeight: 500, color: 'white',
        }}>{duration}</div>
        {difficulty && <div style={{
          position: 'absolute', top: 8, left: 8, background: `${color}20`,
          padding: '3px 10px', borderRadius: 20, fontSize: 10, fontFamily: 'var(--font-mono)',
          fontWeight: 500, color: color, border: `1px solid ${color}30`, textTransform: 'uppercase',
          letterSpacing: '0.05em',
        }}>{difficulty}</div>}
      </div>
      <div style={{ padding: '14px 16px 18px' }}>
        <h3 style={{ fontSize: 14, fontWeight: 600, lineHeight: 1.4, marginBottom: 8, fontFamily: 'var(--font-display)', color: 'var(--text)' }}>{title}</h3>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span style={{ fontSize: 11, color: color, fontFamily: 'var(--font-mono)', fontWeight: 500 }}>{cat}</span>
          <span style={{ fontSize: 11, color: 'var(--text3)', fontFamily: 'var(--font-mono)' }}>{views} views</span>
        </div>
      </div>
    </div>
  )
}

function Section({ children, id }) {
  const [ref, vis] = useReveal()
  return (
    <section ref={ref} id={id} style={{
      opacity: vis ? 1 : 0, transform: vis ? 'translateY(0)' : 'translateY(30px)',
      transition: 'opacity 0.8s var(--ease), transform 0.8s var(--ease)',
    }}>{children}</section>
  )
}

export default function Home() {
  const [search, setSearch] = useState('')
  const [activeCat, setActiveCat] = useState(null)
  const [loaded, setLoaded] = useState(false)

  useEffect(() => { setTimeout(() => setLoaded(true), 100) }, [])

  const filtered = activeCat
    ? FEATURED.filter(v => v.cat === activeCat)
    : FEATURED

  return (
    <main style={{ minHeight: '100vh' }}>
      <div className="grain" />

      {/* NAV */}
      <nav style={{
        position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 1000,
        padding: '12px clamp(16px, 4vw, 60px)', display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', background: 'rgba(10,10,11,0.85)',
        backdropFilter: 'blur(16px)', borderBottom: '1px solid var(--border)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8, background: 'var(--red)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{ width: 0, height: 0, borderLeft: '10px solid white', borderTop: '6px solid transparent', borderBottom: '6px solid transparent', marginLeft: 2 }} />
          </div>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 16, fontWeight: 700, letterSpacing: '-0.02em' }}>
            YouTube<span style={{ color: 'var(--text2)', fontWeight: 400 }}> University</span>
          </span>
        </div>
        <div style={{
          flex: 1, maxWidth: 480, margin: '0 24px',
          position: 'relative',
        }}>
          <input
            type="text" value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Search tutorials..."
            style={{
              width: '100%', padding: '10px 16px 10px 40px', background: 'var(--bg3)',
              border: '1px solid var(--border)', borderRadius: 24, color: 'var(--text)',
              fontSize: 13, fontFamily: 'var(--font-body)', outline: 'none',
              transition: 'border-color 0.2s',
            }}
            onFocus={e => e.target.style.borderColor = 'var(--red)'}
            onBlur={e => e.target.style.borderColor = 'var(--border)'}
          />
          <span style={{ position: 'absolute', left: 14, top: '50%', transform: 'translateY(-50%)', fontSize: 16, opacity: 0.4 }}>🔍</span>
        </div>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <span style={{ fontSize: 11, color: 'var(--text3)', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>100% Free</span>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center',
        justifyContent: 'center', textAlign: 'center', padding: '120px clamp(16px, 4vw, 60px) 60px',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: `radial-gradient(ellipse 80% 50% at 50% 0%, ${`var(--red)`}08 0%, transparent 60%)`,
        }} />
        <div style={{
          position: 'absolute', top: '20%', left: '10%', width: 300, height: 300,
          borderRadius: '50%', background: 'var(--red)', opacity: 0.02, filter: 'blur(80px)',
        }} />
        <div style={{
          position: 'absolute', top: '30%', right: '15%', width: 200, height: 200,
          borderRadius: '50%', background: 'var(--blue)', opacity: 0.02, filter: 'blur(60px)',
        }} />

        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: 'var(--red-glow)', border: '1px solid rgba(255,59,48,0.2)',
          borderRadius: 24, padding: '6px 16px', marginBottom: 32,
          animation: loaded ? 'fadeUp 0.6s var(--ease) both' : 'none',
        }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--red)', animation: 'pulse 2s infinite' }} />
          <span style={{ fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--accent2)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Free Forever · No Sign Up</span>
        </div>

        <h1 style={{
          fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 8vw, 90px)',
          fontWeight: 700, lineHeight: 1, letterSpacing: '-0.03em', marginBottom: 24,
          animation: loaded ? 'fadeUp 0.6s var(--ease) 0.1s both' : 'none',
        }}>
          Learn how to do<br />
          <span style={{ color: 'var(--red)' }}>anything.</span>
        </h1>

        <p style={{
          fontSize: 'clamp(14px, 1.5vw, 18px)', color: 'var(--text2)', maxWidth: 500,
          lineHeight: 1.7, marginBottom: 40,
          animation: loaded ? 'fadeUp 0.6s var(--ease) 0.2s both' : 'none',
        }}>
          Free tutorials on fixing, building, cooking, styling, and everything in between. No subscriptions. No paywalls. Just learn.
        </p>

        <div style={{
          display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center',
          animation: loaded ? 'fadeUp 0.6s var(--ease) 0.3s both' : 'none',
        }}>
          <a href="#tutorials" style={{
            padding: '14px 32px', background: 'var(--red)', color: 'white',
            fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 600,
            borderRadius: 8, textDecoration: 'none', letterSpacing: '-0.01em',
            transition: 'all 0.3s', border: 'none', cursor: 'pointer',
          }}>Start Learning</a>
          <a href="#categories" style={{
            padding: '14px 32px', background: 'transparent', color: 'var(--text)',
            fontFamily: 'var(--font-display)', fontSize: 14, fontWeight: 500,
            borderRadius: 8, textDecoration: 'none', border: '1px solid var(--border)',
            transition: 'all 0.3s', cursor: 'pointer',
          }}>Browse Categories</a>
        </div>

        {/* Stats bar */}
        <div style={{
          display: 'flex', gap: 'clamp(24px, 5vw, 64px)', marginTop: 60,
          animation: loaded ? 'fadeUp 0.6s var(--ease) 0.4s both' : 'none',
        }}>
          {[
            { num: '12', label: 'Categories' },
            { num: '500+', label: 'Tutorials' },
            { num: '100%', label: 'Free' },
            { num: '0', label: 'Paywalls' },
          ].map((s, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 'clamp(24px, 4vw, 40px)', fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--text)' }}>{s.num}</div>
              <div style={{ fontSize: 10, fontFamily: 'var(--font-mono)', color: 'var(--text3)', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: 4 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MARQUEE */}
      <div style={{
        padding: '14px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)',
        overflow: 'hidden',
      }}>
        <div style={{ display: 'flex', width: 'max-content', animation: 'marquee 30s linear infinite' }}>
          {[...Array(4)].map((_, j) => (
            <span key={j} style={{
              fontSize: 11, fontFamily: 'var(--font-mono)', color: 'var(--text3)',
              letterSpacing: '0.2em', textTransform: 'uppercase', whiteSpace: 'nowrap',
              padding: '0 clamp(16px, 3vw, 40px)',
            }}>
              FIX IT ◆ BUILD IT ◆ COOK IT ◆ STYLE IT ◆ TECH IT ◆ CLEAN IT ◆ GROW IT ◆ MOVE IT ◆ DRIVE IT ◆ FUND IT ◆ CREATE IT ◆ HACK IT ◆{' '}
            </span>
          ))}
        </div>
      </div>

      {/* CATEGORIES */}
      <Section id="categories">
        <div style={{ padding: 'clamp(60px, 8vw, 100px) clamp(16px, 4vw, 60px)', maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ marginBottom: 40 }}>
            <span style={{ fontSize: 10, fontFamily: 'var(--font-mono)', color: 'var(--red)', letterSpacing: '0.3em', textTransform: 'uppercase' }}>Browse</span>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 700, letterSpacing: '-0.02em', marginTop: 8 }}>
              Pick your <span style={{ color: 'var(--red)' }}>lane.</span>
            </h2>
          </div>
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
            gap: 8,
          }}>
            {CATEGORIES.map((c, i) => (
              <div
                key={c.tag}
                onClick={() => setActiveCat(activeCat === c.name ? null : c.name)}
                style={{
                  background: activeCat === c.name ? `${c.color}15` : 'var(--bg2)',
                  border: `1px solid ${activeCat === c.name ? `${c.color}40` : 'var(--border)'}`,
                  borderRadius: 12, padding: '20px 16px', cursor: 'pointer',
                  transition: 'all 0.3s var(--ease)',
                  animation: `fadeUp 0.5s var(--ease) ${i * 0.04}s both`,
                }}
                onMouseEnter={e => { if (activeCat !== c.name) e.currentTarget.style.borderColor = `${c.color}30` }}
                onMouseLeave={e => { if (activeCat !== c.name) e.currentTarget.style.borderColor = 'var(--border)' }}
              >
                <div style={{ fontSize: 28, marginBottom: 8 }}>{c.icon}</div>
                <div style={{ fontSize: 14, fontWeight: 600, fontFamily: 'var(--font-display)', marginBottom: 4 }}>{c.name}</div>
                <div style={{ fontSize: 11, color: 'var(--text3)', lineHeight: 1.4 }}>{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FEATURED TUTORIALS */}
      <Section id="tutorials">
        <div style={{ padding: '0 clamp(16px, 4vw, 60px) clamp(60px, 8vw, 100px)', maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 32 }}>
            <div>
              <span style={{ fontSize: 10, fontFamily: 'var(--font-mono)', color: 'var(--red)', letterSpacing: '0.3em', textTransform: 'uppercase' }}>
                {activeCat ? activeCat : 'Featured'}
              </span>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 700, letterSpacing: '-0.02em', marginTop: 8 }}>
                {activeCat ? <>{activeCat} <span style={{ color: 'var(--text2)' }}>tutorials</span></> : <>Most <span style={{ color: 'var(--red)' }}>watched.</span></>}
              </h2>
            </div>
            {activeCat && (
              <button onClick={() => setActiveCat(null)} style={{
                background: 'var(--bg3)', border: '1px solid var(--border)', borderRadius: 8,
                padding: '8px 16px', color: 'var(--text2)', fontSize: 12,
                fontFamily: 'var(--font-mono)', cursor: 'pointer', transition: 'all 0.2s',
              }}>Clear filter</button>
            )}
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
            gap: 16,
          }}>
            {(filtered.length > 0 ? filtered : FEATURED).map((v, i) => (
              <VideoCard key={v.title} {...v} i={i} />
            ))}
          </div>
        </div>
      </Section>

      {/* TRENDING */}
      <Section id="trending">
        <div style={{
          padding: 'clamp(60px, 8vw, 100px) clamp(16px, 4vw, 60px)',
          maxWidth: 1200, margin: '0 auto',
          background: 'var(--bg2)', borderRadius: 24, margin: '0 clamp(16px, 4vw, 60px)',
          border: '1px solid var(--border)',
        }}>
          <div style={{ marginBottom: 32 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--red)', animation: 'pulse 1.5s infinite' }} />
              <span style={{ fontSize: 10, fontFamily: 'var(--font-mono)', color: 'var(--red)', letterSpacing: '0.3em', textTransform: 'uppercase' }}>Trending Now</span>
            </div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 700, letterSpacing: '-0.02em' }}>
              What everyone&apos;s <span style={{ color: 'var(--red)' }}>learning.</span>
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {TRENDING.map((v, i) => (
              <div key={v.title} style={{
                display: 'flex', alignItems: 'center', gap: 16, padding: '16px 20px',
                background: 'var(--bg3)', borderRadius: 10, cursor: 'pointer',
                transition: 'all 0.2s var(--ease)',
                animation: `slideIn 0.5s var(--ease) ${i * 0.06}s both`,
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--surface)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--bg3)'}
              >
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: 14, fontWeight: 700,
                  color: i < 3 ? 'var(--red)' : 'var(--text3)', minWidth: 24,
                }}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div style={{
                  width: 48, height: 48, borderRadius: 8, flexShrink: 0,
                  background: `linear-gradient(135deg, var(--bg), var(--surface))`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <div style={{ width: 0, height: 0, borderLeft: '10px solid var(--text2)', borderTop: '6px solid transparent', borderBottom: '6px solid transparent', marginLeft: 2 }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 500, fontFamily: 'var(--font-display)' }}>{v.title}</div>
                  <div style={{ fontSize: 11, color: 'var(--text3)', fontFamily: 'var(--font-mono)', marginTop: 2 }}>{v.cat} · {v.views} views · {v.duration}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section>
        <div style={{ padding: 'clamp(80px, 10vw, 120px) clamp(16px, 4vw, 60px)', maxWidth: 1000, margin: '0 auto', textAlign: 'center' }}>
          <span style={{ fontSize: 10, fontFamily: 'var(--font-mono)', color: 'var(--red)', letterSpacing: '0.3em', textTransform: 'uppercase' }}>How It Works</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px, 5vw, 48px)', fontWeight: 700, letterSpacing: '-0.02em', marginTop: 8, marginBottom: 48 }}>
            No sign up. No paywall.<br />Just <span style={{ color: 'var(--red)' }}>press play.</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 24 }}>
            {[
              { step: '01', title: 'Pick a category', desc: 'Choose from 12 real-world skill areas', color: 'var(--red)' },
              { step: '02', title: 'Watch the tutorial', desc: 'Clear, step-by-step instructions from people who do it', color: 'var(--blue)' },
              { step: '03', title: 'Do the thing', desc: 'Pause, rewind, and follow along at your own pace', color: 'var(--green)' },
            ].map((s, i) => (
              <div key={i} style={{
                padding: 32, background: 'var(--bg2)', borderRadius: 16,
                border: '1px solid var(--border)', textAlign: 'left',
              }}>
                <div style={{
                  fontSize: 32, fontFamily: 'var(--font-display)', fontWeight: 700,
                  color: s.color, opacity: 0.5, marginBottom: 16,
                }}>{s.step}</div>
                <h3 style={{ fontSize: 18, fontFamily: 'var(--font-display)', fontWeight: 600, marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: 13, color: 'var(--text2)', lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div style={{
          padding: 'clamp(80px, 10vw, 120px) clamp(16px, 4vw, 60px)', textAlign: 'center',
          position: 'relative',
        }}>
          <div style={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
            width: 400, height: 400, borderRadius: '50%', background: 'var(--red)',
            opacity: 0.03, filter: 'blur(80px)',
          }} />
          <h2 style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(32px, 6vw, 72px)',
            fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: 20,
          }}>
            Stop scrolling.<br />Start <span style={{ color: 'var(--red)' }}>learning.</span>
          </h2>
          <p style={{ fontSize: 'clamp(14px, 1.3vw, 17px)', color: 'var(--text2)', maxWidth: 400, margin: '0 auto 32px', lineHeight: 1.7 }}>
            500+ free tutorials across 12 categories. No account needed. No credit card. Just hit play.
          </p>
          <a href="#tutorials" style={{
            display: 'inline-block', padding: '16px 40px', background: 'var(--red)', color: 'white',
            fontFamily: 'var(--font-display)', fontSize: 15, fontWeight: 600,
            borderRadius: 8, textDecoration: 'none', transition: 'all 0.3s',
          }}>Browse All Tutorials</a>
        </div>
      </Section>

      {/* FOOTER */}
      <footer style={{
        padding: '32px clamp(16px, 4vw, 60px)', borderTop: '1px solid var(--border)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{
            width: 24, height: 24, borderRadius: 6, background: 'var(--red)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{ width: 0, height: 0, borderLeft: '7px solid white', borderTop: '4px solid transparent', borderBottom: '4px solid transparent', marginLeft: 1 }} />
          </div>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 600 }}>YouTube University</span>
        </div>
        <span style={{ fontSize: 10, fontFamily: 'var(--font-mono)', color: 'var(--text3)', letterSpacing: '0.1em' }}>
          © 2026 The Kollective Hospitality Group — 100% Free, Forever
        </span>
      </footer>
    </main>
  )
}
