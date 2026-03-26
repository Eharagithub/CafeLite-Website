import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import FadeIn from '../components/FadeIn'

// Style constants
const COLORS = { gold: '#c9a84c', goldLight: '#e8cc7a', dark: '#080806', darkAlt: '#0d0b07', gold1: 'rgba(201,168,76,0.1)', text: '#e8e0d0', textMuted: 'rgba(232,224,208,0.35)', textLight: 'rgba(232,224,208,0.45)' }
const FONTS = { display: 'Cormorant Garamond, Georgia, serif', body: 'Montserrat, system-ui, sans-serif' }
const btnBase = { display: 'inline-block', fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', textDecoration: 'none', transition: 'all 0.3s' }
const h2Style = { fontFamily: FONTS.display, fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 300, fontStyle: 'italic', color: COLORS.text, marginBottom: 24 }

const features = [
  { icon: '✦', title: 'Single Origin Beans', desc: 'Sourced directly from farms in Ethiopia, Colombia, and Sri Lanka.' },
  { icon: '✦', title: 'House Roasted', desc: 'Small-batch roasting every week for peak freshness and flavour.' },
  { icon: '✦', title: 'Seasonal Kitchen', desc: 'Food made fresh daily using local, organic ingredients.' },
  { icon: '✦', title: 'Craft First', desc: 'Every cup is made with intention, skill, and care.' },
]

const testimonials = [
  { name: 'Sarah M.', role: 'Graphic Designer', quote: "The flat white here is extraordinary. I've stopped going anywhere else." },
  { name: 'Daniel K.', role: 'Freelancer', quote: 'The atmosphere alone is worth the visit. The coffee is just a bonus.' },
  { name: 'Priya L.', role: 'Architect', quote: 'A rare place that takes both coffee and ambiance seriously.' },
]

const offerings = [
  { icon: '☕', title: 'Coffee & Espresso', desc: 'Single origin, expertly pulled shots. From clean and bright to rich and chocolatey.', count: '12 items' },
  { icon: '🍵', title: 'Specialty Drinks', desc: 'Matcha, chai, cold brew, and seasonal house creations unlike anything else.', count: '8 items' },
  { icon: '🥐', title: 'Kitchen & Bakery', desc: 'House-baked pastries, seasonal brunch plates, and light lunch fare.', count: '14 items' },
]

export default function Home() {
  const heroRef = useRef(null), showcaseRef = useRef(null), ctaRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const { scrollYProgress: showcaseProgress } = useScroll({ target: showcaseRef, offset: ['start end', 'end start'] })
  const { scrollYProgress: ctaProgress } = useScroll({ target: ctaRef, offset: ['start end', 'end start'] })
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '28%'])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const showcaseX = useTransform(showcaseProgress, [0, 1], ['4%', '-4%'])
  const ctaY = useTransform(ctaProgress, [0, 1], ['0%', '15%'])
  const ctaImageOpacity = useTransform(ctaProgress, [0, 0.6], [0, 1])

  return (
    <div style={{ background: COLORS.dark, color: COLORS.text, fontFamily: FONTS.body, overflowX: 'hidden' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Montserrat:wght@300;400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        @keyframes grainShift { 0%,100% { transform: translate(0,0) } 10% { transform: translate(-2%,-3%) } 30% { transform: translate(3%, 2%) } 50% { transform: translate(-1%, 4%) } 70% { transform: translate(4%,-2%) } 90% { transform: translate(-3%, 1%) } }
        @keyframes shimmer { 0% { background-position: -200% center } 100% { background-position: 200% center } }
        .grain-overlay::after { content: ''; position: absolute; inset: -50%; width: 200%; height: 200%; opacity: 0.04; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E"); background-size: 200px 200px; animation: grainShift 0.4s steps(1) infinite; pointer-events: none; z-index: 2; }
        .gold-shimmer { background: linear-gradient(90deg, #c9a84c 0%, #f0d980 40%, #c9a84c 60%, #a87c30 100%); background-size: 200% auto; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; animation: shimmer 4s linear infinite; }
        .img-hover-zoom { overflow: hidden; position: relative; } .img-hover-zoom img { transition: transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94); width: 100%; height: 100%; object-fit: cover; display: block; } .img-hover-zoom:hover img { transform: scale(1.07); }
        .sec-divider { display: flex; align-items: center; justify-content: center; gap: 16px; } .sec-divider div { width: 60px; height: 1px; background: linear-gradient(to right, transparent, #c9a84c); } .sec-divider span { color: #c9a84c; font-size: 12px; }
      `}</style>

      {/* ══════════════════════════════════════════════════════════ */}
      {/* ── HERO SECTION ── */}
      {/* ══════════════════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="grain-overlay"
        style={{ position: 'relative', height: '100vh', minHeight: 720, display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', backgroundImage: 'url(/assets/9.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}
      >
        {/* Static background divider instead of motion */}
        <div
          style={{
            position: 'absolute', inset: '-10%',
            backgroundImage: 'url(/assets/9.jpg)',
            backgroundSize: 'cover', backgroundPosition: 'left', opacity: 0.131,
          }}
        />

        {/* Multi-layer overlay for luxury depth */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'linear-gradient(160deg, rgba(5,4,2,0.82) 0%, rgba(18,12,4,0.78) 35%, rgba(12,8,2,0.80) 65%, rgba(5,4,2,0.88) 100%)',
        }} />

        {/* Warm vignette */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'radial-gradient(ellipse 75% 70% at 50% 45%, transparent 30%, rgba(4,3,1,0.75) 100%)',
        }} />

        {/* Animated gold orbs */}
        <motion.div
          animate={{ scale: [1, 1.18, 1], x: [0, 30, 0], y: [0, -15, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,76,0.12) 0%, transparent 65%)', top: '-5%', left: '10%', zIndex: 1, pointerEvents: 'none' }}
        />
        <motion.div
          animate={{ scale: [1, 1.25, 1], x: [0, -25, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
          style={{ position: 'absolute', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,76,0.09) 0%, transparent 65%)', bottom: '0%', right: '8%', zIndex: 1, pointerEvents: 'none' }}
        />

        {/* Hero content */}
        <motion.div style={{ opacity: heroOpacity, position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 24px', maxWidth: 820, margin: '0 auto', marginTop: 60 }}>
          <motion.p
            initial={{ opacity: 0, letterSpacing: '0.6em' }}
            animate={{ opacity: 1, letterSpacing: '0.35em' }}
            transition={{ duration: 1.4, ease: 'easeOut' }}
            style={{ color: '#c9a84c', fontSize: 11, textTransform: 'uppercase', marginBottom: 32, fontWeight: 500, letterSpacing: '0.35em' }}
          >
            Est. 2018 · Colombo, Sri Lanka
          </motion.p>

          <div style={{ overflow: 'hidden', marginBottom: 16 }}>
            <motion.h1
              initial={{ y: '105%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(72px, 13vw, 148px)', fontWeight: 300, fontStyle: 'italic', lineHeight: 0.9, color: '#F5F1E8', margin: 0 }}
            >
              Cafe Lite
            </motion.h1>
          </div>

          <div style={{ overflow: 'hidden', marginBottom: 28 }}>
            <motion.p
              initial={{ y: '105%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
              className="gold-shimmer"
              style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(18px, 2.5vw, 26px)', fontStyle: 'italic', letterSpacing: '0.15em' }}
            >
              Brewed to Perfection
            </motion.p>
          </div>

          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.65 }}
            style={{ width: 80, height: 1, background: 'linear-gradient(90deg, transparent, #c9a84c, transparent)', margin: '0 auto 28px' }}
          />

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            style={{ color: 'rgba(232,224,208,0.5)', fontSize: 13, letterSpacing: '0.08em', maxWidth: 440, margin: '0 auto 44px', lineHeight: 1.95, fontWeight: 300 }}
          >
            A sanctuary for slow mornings and inspired afternoons.<br />
            Specialty coffee and seasonal food, crafted with intention.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link to="/menu"
                style={{ display: 'inline-block', padding: '16px 40px', background: '#c9a84c', color: '#080806', fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 700, textDecoration: 'none', transition: 'background 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.background = '#e8cc7a'}
                onMouseLeave={e => e.currentTarget.style.background = '#c9a84c'}
              >
                Explore Menu
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link to="/about"
                style={{ display: 'inline-block', padding: '16px 40px', border: '1px solid rgba(201,168,76,0.5)', color: '#c9a84c', fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600, textDecoration: 'none', transition: 'all 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(201,168,76,0.1)'; e.currentTarget.style.borderColor = '#c9a84c' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(201,168,76,0.5)' }}
              >
                Our Story
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* ══════════════════════════════════════════════════════════ */}
      {/* ── MARQUEE ── */}
      {/* ══════════════════════════════════════════════════════════ */}
      <div style={{ borderTop: '1px solid rgba(201,168,76,0.12)', borderBottom: '1px solid rgba(201,168,76,0.12)', padding: '14px 0', overflow: 'hidden', background: '#0d0b07' }}>
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          style={{ display: 'flex', whiteSpace: 'nowrap' }}
        >
          {Array(10).fill(null).map((_, i) => (
            <span key={i} style={{ color: 'rgba(201,168,76,0.35)', fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', padding: '0 24px' }}>
              ✦ &nbsp; Single Origin Coffee &nbsp; · &nbsp; Seasonal Kitchen &nbsp; · &nbsp; Craft Espresso &nbsp; · &nbsp; Colombo, Sri Lanka &nbsp; · &nbsp; Est. 2018 &nbsp;
            </span>
          ))}
        </motion.div>
      </div>

      {/* ══════════════════════════════════════════════════════════ */}
      {/* ── VISUAL SHOWCASE — SPLIT LAYOUT (new section) ── */}
      {/* ══════════════════════════════════════════════════════════ */}
      <section ref={showcaseRef} style={{ background: '#0a0804', padding: '0', overflow: 'hidden' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: 680 }}>

          {/* Left — image panel */}
          <FadeIn direction="left">
            <div className="img-hover-zoom" style={{ position: 'relative', height: '100%', minHeight: 580 }}>
              <img src="/assets/4.jpg" alt="Signature dish" style={{ position: 'absolute', inset: 0 }} />
              {/* Overlay */}
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(5,4,2,0.15) 0%, rgba(5,4,2,0.55) 100%)' }} />
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                style={{
                  position: 'absolute', bottom: 40, left: 40,
                  background: 'rgba(8,6,3,0.85)', backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(201,168,76,0.3)',
                  padding: '20px 28px',
                }}
              >
                <p style={{ color: '#c9a84c', fontSize: 9, letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: 8 }}>Chef's Selection</p>
                <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontStyle: 'italic', fontSize: 22, color: '#e8e0d0' }}>Daily Specials</p>
              </motion.div>
            </div>
          </FadeIn>

          {/* Right — editorial text */}
          <FadeIn direction="right">
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '80px 72px', background: '#0a0804', position: 'relative' }}>

              {/* Background pattern */}
              <div style={{
                position: 'absolute', inset: 0, opacity: 0.03,
                backgroundImage: 'repeating-linear-gradient(0deg, #c9a84c 0px, #c9a84c 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #c9a84c 0px, #c9a84c 1px, transparent 1px, transparent 60px)',
              }} />

              <div style={{ position: 'relative', zIndex: 1 }}>
                <p style={{ color: '#c9a84c', fontSize: 10, letterSpacing: '0.45em', textTransform: 'uppercase', marginBottom: 24 }}>The Experience</p>

                <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(38px, 4.5vw, 62px)', fontWeight: 300, fontStyle: 'italic', color: '#e8e0d0', lineHeight: 1.1, marginBottom: 32 }}>
                  Food That Tells<br />
                  <span className="gold-shimmer">a Story</span>
                </h2>

                <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 36 }}>
                  <div style={{ width: 48, height: 1, background: 'rgba(201,168,76,0.5)' }} />
                  <span style={{ color: '#c9a84c', fontSize: 11 }}>✦</span>
                </div>

                <p style={{ color: 'rgba(232,224,208,0.45)', fontSize: 13, lineHeight: 2, marginBottom: 20, fontWeight: 300, maxWidth: 400 }}>
                  Our kitchen draws from Sri Lanka's rich culinary heritage, blending local spices and seasonal produce into plates that are as beautiful as they are nourishing.
                </p>
                <p style={{ color: 'rgba(232,224,208,0.35)', fontSize: 13, lineHeight: 2, marginBottom: 48, fontWeight: 300, maxWidth: 400 }}>
                  From slow-braised coconut curries to delicate modern bites — every dish begins with intention and ends with memory.
                </p>

                {/* Stats row */}
                <div style={{ display: 'flex', gap: 48, marginBottom: 52 }}>
                  {[['14+', 'Kitchen Items'], ['Daily', 'Fresh Baked'], ['Local', 'Ingredients']].map(([n, l]) => (
                    <div key={l}>
                      <div style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 28, fontStyle: 'italic', color: '#c9a84c', lineHeight: 1 }}>{n}</div>
                      <div style={{ color: 'rgba(232,224,208,0.25)', fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', marginTop: 8 }}>{l}</div>
                    </div>
                  ))}
                </div>

                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} style={{ display: 'inline-block' }}>
                  <Link to="/menu"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 12, padding: '14px 36px', border: '1px solid rgba(201,168,76,0.4)', color: '#c9a84c', fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600, textDecoration: 'none', transition: 'all 0.3s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = '#c9a84c'; e.currentTarget.style.color = '#080806' }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#c9a84c' }}
                  >
                    View Kitchen Menu <span>→</span>
                  </Link>
                </motion.div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════ */}
      {/* ── FEATURES ── */}
      {/* ══════════════════════════════════════════════════════════ */}
      <section style={{ padding: '120px 0', background: '#080806' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: 80 }}>
              <p style={{ color: '#c9a84c', fontSize: 10, letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: 16 }}>The Cafe Lite Promise</p>
              <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 300, fontStyle: 'italic', color: '#e8e0d0', marginBottom: 24 }}>
                Why We're Different
              </h2>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
                <div style={{ width: 60, height: 1, background: 'linear-gradient(to right, transparent, #c9a84c)' }} />
                <span style={{ color: '#c9a84c', fontSize: 12 }}>✦</span>
                <div style={{ width: 60, height: 1, background: 'linear-gradient(to left, transparent, #c9a84c)' }} />
              </div>
            </div>
          </FadeIn>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 1, background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.1)' }}>
            {features.map((f, i) => (
              <FadeIn key={f.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ backgroundColor: 'rgba(201,168,76,0.06)' }}
                  transition={{ duration: 0.4 }}
                  style={{ background: '#080806', padding: '52px 40px', textAlign: 'center' }}
                >
                  <motion.div
                    whileHover={{ rotate: 180, scale: 1.3 }}
                    transition={{ duration: 0.5 }}
                    style={{ color: '#c9a84c', fontSize: 20, marginBottom: 24, display: 'inline-block' }}
                  >
                    {f.icon}
                  </motion.div>
                  <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 20, fontStyle: 'italic', color: '#e8e0d0', marginBottom: 12, fontWeight: 400 }}>
                    {f.title}
                  </h3>
                  <p style={{ color: 'rgba(232,224,208,0.35)', fontSize: 12, lineHeight: 1.9, letterSpacing: '0.02em' }}>{f.desc}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════ */}
      {/* ── ATMOSPHERIC COFFEE BANNER (new section) ── */}
      {/* ══════════════════════════════════════════════════════════ */}
      <section style={{ position: 'relative', height: 520, overflow: 'hidden' }}>
        {/* Parallax image */}
        <motion.div
          style={{
            x: showcaseX,
            position: 'absolute', inset: '-8%',
            backgroundImage: 'url(/assets/15.jpg)',
            backgroundSize: 'cover', backgroundPosition: 'center 30%',
          }}
        />
        {/* Rich overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(5,4,2,0.92) 0%, rgba(18,12,4,0.75) 50%, rgba(5,4,2,0.92) 100%)' }} />

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', textAlign: 'center', padding: '0 48px' }}>
          <FadeIn>
            <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(28px, 4.5vw, 56px)', fontWeight: 300, fontStyle: 'italic', color: '#e8e0d0', lineHeight: 1.45, maxWidth: 860, margin: '0 auto 32px' }}>
              "A cup of coffee is more than a drink —
              <br />
              <span className="gold-shimmer">it's a ritual, a pause, a story.</span>"
            </p>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 20, marginBottom: 40 }}>
              <div style={{ width: 80, height: 1, background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.5))' }} />
              <span style={{ color: '#c9a84c', fontSize: 10, letterSpacing: '0.4em', textTransform: 'uppercase' }}>Since 2018</span>
              <div style={{ width: 80, height: 1, background: 'linear-gradient(to left, transparent, rgba(201,168,76,0.5))' }} />
            </div>

            {/* Three pillars */}
            <div style={{ display: 'flex', gap: 56, justifyContent: 'center', flexWrap: 'wrap' }}>
              {['Ethically Sourced', 'Hand Crafted', 'Served Fresh'].map((label, i) => (
                <div key={label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 1, height: 28, background: 'rgba(201,168,76,0.4)' }} />
                  <span style={{ color: 'rgba(201,168,76,0.65)', fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase' }}>{label}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════ */}
      {/* ── OFFERINGS ── */}
      {/* ══════════════════════════════════════════════════════════ */}
      <section style={{ padding: '120px 0', background: '#080806' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: 80 }}>
              <p style={{ color: '#c9a84c', fontSize: 10, letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: 16 }}>Curated Daily</p>
              <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 300, fontStyle: 'italic', color: '#e8e0d0', marginBottom: 24 }}>
                Our Offerings
              </h2>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
                <div style={{ width: 60, height: 1, background: 'linear-gradient(to right, transparent, #c9a84c)' }} />
                <span style={{ color: '#c9a84c', fontSize: 12 }}>✦</span>
                <div style={{ width: 60, height: 1, background: 'linear-gradient(to left, transparent, #c9a84c)' }} />
              </div>
            </div>
          </FadeIn>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 1, background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.1)', marginBottom: 56 }}>
            {offerings.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.15}>
                <motion.div
                  whileHover={{ backgroundColor: 'rgba(201,168,76,0.05)' }}
                  transition={{ duration: 0.4 }}
                  style={{ background: '#080806', padding: '56px 48px', position: 'relative', overflow: 'hidden', cursor: 'default' }}
                >
                  <div style={{ fontSize: 40, marginBottom: 28 }}>{item.icon}</div>
                  <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 26, fontStyle: 'italic', color: '#e8e0d0', marginBottom: 16, fontWeight: 400 }}>
                    {item.title}
                  </h3>
                  <p style={{ color: 'rgba(232,224,208,0.35)', fontSize: 12, lineHeight: 1.9, marginBottom: 24 }}>{item.desc}</p>
                  <span style={{ color: '#c9a84c', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase' }}>{item.count}</span>
                </motion.div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div style={{ textAlign: 'center' }}>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} style={{ display: 'inline-block' }}>
                <Link to="/menu"
                  style={{ display: 'inline-block', padding: '16px 48px', border: '1px solid rgba(201,168,76,0.4)', color: '#c9a84c', fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600, textDecoration: 'none', transition: 'all 0.3s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#c9a84c'; e.currentTarget.style.color = '#080806' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#c9a84c' }}
                >
                  View Full Menu
                </Link>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════ */}
      {/* ── STATS ── */}
      {/* ══════════════════════════════════════════════════════════ */}
      <section style={{ padding: '80px 48px', background: '#0d0b07', borderTop: '1px solid rgba(201,168,76,0.1)', borderBottom: '1px solid rgba(201,168,76,0.1)' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 48, textAlign: 'center' }}>
          {[['6+', 'Years of Craft'], ['200+', 'Roasts Tasted'], ['3', 'Locations'], ['4.9★', 'Guest Rating']].map(([num, label], i) => (
            <FadeIn key={label} delay={i * 0.1}>
              <div>
                <div style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 48, fontStyle: 'italic', color: '#c9a84c', lineHeight: 1 }}>{num}</div>
                <div style={{ color: 'rgba(232,224,208,0.25)', fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', marginTop: 12 }}>{label}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════ */}
      {/* ── TESTIMONIALS ── */}
      {/* ══════════════════════════════════════════════════════════ */}
      <section style={{ padding: '120px 0', background: '#080806' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 48px' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: 80 }}>
              <p style={{ color: '#c9a84c', fontSize: 10, letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: 16 }}>Guest Voices</p>
              <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 300, fontStyle: 'italic', color: '#e8e0d0' }}>
                What They Say
              </h2>
            </div>
          </FadeIn>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {testimonials.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.15} direction="up">
                <motion.div
                  whileHover={{ borderColor: 'rgba(201,168,76,0.35)' }}
                  transition={{ duration: 0.4 }}
                  style={{ border: '1px solid rgba(201,168,76,0.1)', padding: '48px 40px', position: 'relative' }}
                >
                  <div style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 80, color: 'rgba(201,168,76,0.12)', position: 'absolute', top: 16, right: 28, lineHeight: 1 }}>"</div>
                  <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 18, fontStyle: 'italic', color: 'rgba(232,224,208,0.65)', lineHeight: 1.7, marginBottom: 32 }}>
                    {t.quote}
                  </p>
                  <div style={{ width: 32, height: 1, background: 'rgba(201,168,76,0.4)', marginBottom: 16 }} />
                  <p style={{ color: '#c9a84c', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase' }}>{t.name}</p>
                  <p style={{ color: 'rgba(232,224,208,0.22)', fontSize: 11, letterSpacing: '0.1em', marginTop: 4 }}>{t.role}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════ */}
      {/* ── CTA — with scroll parallax hero image ── */}
      {/* ══════════════════════════════════════════════════════════ */}
      <section ref={ctaRef} style={{ padding: '140px 48px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        {/* BG image with parallax and fade-in */}
        <motion.div style={{ position: 'absolute', inset: 0, backgroundImage: 'url(/assets/9.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'brightness(0.18)', zIndex: 0, y: ctaY, opacity: ctaImageOpacity }} />

        {/* Gold radial */}
        <motion.div
          animate={{ scale: [1, 1.12, 1] }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(201,168,76,0.1) 0%, transparent 70%)', pointerEvents: 'none', zIndex: 1 }}
        />

        {/* Horizontal ornament lines */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)', zIndex: 1 }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)', zIndex: 1 }} />

        <FadeIn>
          <div style={{ position: 'relative', zIndex: 2 }}>
            <p style={{ color: '#c9a84c', fontSize: 10, letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: 24 }}>Begin Your Experience</p>
            <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(48px, 8vw, 96px)', fontWeight: 300, fontStyle: 'italic', color: '#e8e0d0', marginBottom: 32 }}>
              Ready to Order?
            </h2>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 48 }}>
              <div style={{ width: 60, height: 1, background: 'linear-gradient(to right, transparent, #c9a84c)' }} />
              <span style={{ color: '#c9a84c', fontSize: 12 }}>✦</span>
              <div style={{ width: 60, height: 1, background: 'linear-gradient(to left, transparent, #c9a84c)' }} />
            </div>
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }} style={{ display: 'inline-block' }}>
              <Link to="/order"
                style={{ display: 'inline-block', padding: '20px 56px', background: '#c9a84c', color: '#080806', fontSize: 12, letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 700, textDecoration: 'none', transition: 'background 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.background = '#e8cc7a'}
                onMouseLeave={e => e.currentTarget.style.background = '#c9a84c'}
              >
                Order Now →
              </Link>
            </motion.div>
          </div>
        </FadeIn>
      </section>

    </div>
  )
}