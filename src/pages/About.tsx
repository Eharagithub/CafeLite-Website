import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import FadeIn from '../components/FadeIn'

const team = [
  { name: 'Nimal Perera', role: 'Founder & Head Barista', emoji: '👨‍🍳', bio: 'A coffee obsessive who has trained in Melbourne, Tokyo, and Bogotá.' },
  { name: 'Amara Silva', role: 'Head Chef', emoji: '👩‍🍳', bio: 'Driven by seasonal ingredients and the belief that food is memory.' },
  { name: 'Kasun Dias', role: 'Roast Master', emoji: '🫘', bio: 'Travels to origin farms annually. Roasts every batch by hand.' },
]

const values = [
  { icon: '✦', title: 'Ethical Sourcing', desc: 'We pay above fair-trade prices and visit farm partners personally every year.' },
  { icon: '✦', title: 'Sustainability', desc: 'Compostable packaging, zero single-use plastics, and a solar-powered kitchen.' },
  { icon: '✦', title: 'Community', desc: 'Monthly events, free workshops, and local artist showcases open to all.' },
]

const stats = [
  ['2018', 'Founded'],
  ['3', 'Locations'],
  ['4.9★', 'Rating'],
  ['200+', 'Roasts'],
]

export default function About() {
  const storyRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: storyRef, offset: ['start end', 'end start'] })
  const floatY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%'])

  return (
    <div style={{ background: '#0a0a0a', color: '#e8e0d0', minHeight: '100vh', fontFamily: 'Montserrat, system-ui, sans-serif', position: 'relative', zIndex: 1 }}>

      {/* ── HERO ── */}
      <section style={{ position: 'relative', paddingTop: 160, paddingBottom: 120, textAlign: 'center', overflow: 'hidden', borderBottom: '1px solid rgba(201,168,76,0.1)', zIndex: 10 }}>
        {/* Background gradient */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, #1a1008 0%, #0f0c06 50%, #0a0a0a 100%)', zIndex: 0 }} />

        {/* Glow */}
        <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', width: 700, height: 400, background: 'radial-gradient(ellipse, rgba(201,168,76,0.07) 0%, transparent 65%)', pointerEvents: 'none', zIndex: 0 }} />

        {/* Side lines */}
        <div style={{ position: 'absolute', left: 48, top: 0, bottom: 0, width: 1, background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.18), transparent)', zIndex: 0 }} />
        <div style={{ position: 'absolute', right: 48, top: 0, bottom: 0, width: 1, background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.18), transparent)', zIndex: 0 }} />

        <FadeIn>
          <div style={{ position: 'relative', zIndex: 1, padding: '0 24px' }}>
            <p style={{ color: '#c9a84c', fontSize: 10, letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: 20, fontWeight: 500 }}>
              Who We Are
            </p>
            <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(64px, 10vw, 120px)', fontWeight: 300, fontStyle: 'italic', color: '#e8e0d0', lineHeight: 0.95, marginBottom: 28 }}>
              Our Story
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 24 }}>
              <div style={{ width: 60, height: 1, background: 'linear-gradient(to right, transparent, #c9a84c)' }} />
              <span style={{ color: '#c9a84c', fontSize: 12 }}>✦</span>
              <div style={{ width: 60, height: 1, background: 'linear-gradient(to left, transparent, #c9a84c)' }} />
            </div>
            <p style={{ color: 'rgba(232,224,208,0.4)', fontSize: 12, letterSpacing: '0.06em', maxWidth: 420, margin: '0 auto', lineHeight: 1.9, fontWeight: 300 }}>
              A sanctuary built on great coffee, honest food, and genuine hospitality.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* ── FLOATING IMAGES ── */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
        {/* Floating Image 1 - Top Left */}
        <motion.div
        //   animate={{ y: [0, -30, 0], rotate: [0, 2, 0] }}
        //   transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'fixed',
            top: '15%',
            right: '-8%',
            width: 1000,
            height: 500,
            borderRadius: 12,
            backgroundImage: 'url(/assets/20.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.2,
            boxShadow: '0 8px 32px rgba(201,168,76,0.15)',
            border: '1px solid rgba(201,168,76,0.2)',
          }}
        />
      </div>

      {/* ── STORY SECTION ── */}
      <section ref={storyRef} style={{ padding: '120px 48px', maxWidth: 1280, margin: '0 auto', overflow: 'hidden', position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 80, alignItems: 'center' }}>

          {/* Text side */}
          <FadeIn direction="right">
            <div>
              <p style={{ color: '#c9a84c', fontSize: 10, letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: 20, fontWeight: 500 }}>
                The Beginning
              </p>
              <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(36px, 4vw, 52px)', fontWeight: 300, fontStyle: 'italic', color: '#e8e0d0', lineHeight: 1.15, marginBottom: 32 }}>
                Born from a Love<br />of Great Coffee
              </h2>
              <p style={{ color: 'rgba(232,224,208,0.5)', fontSize: 13, lineHeight: 1.9, fontWeight: 300, marginBottom: 20 }}>
                In 2018, we opened our first counter in Colombo with one espresso machine, two bar stools, and a lot of ambition. We believed specialty coffee didn't have to be intimidating — it could be warm, welcoming, and approachable.
              </p>
              <p style={{ color: 'rgba(232,224,208,0.5)', fontSize: 13, lineHeight: 1.9, fontWeight: 300, marginBottom: 48 }}>
                Today, Cafe Lite is a home for creatives, remote workers, students, and families — anyone who believes a good day starts with a great cup.
              </p>

              {/* Stats */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, borderTop: '1px solid rgba(201,168,76,0.1)', paddingTop: 40 }}>
                {stats.map(([num, label]) => (
                  <div key={label}>
                    <div style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 32, fontStyle: 'italic', color: '#c9a84c', lineHeight: 1 }}>{num}</div>
                    <div style={{ fontSize: 9, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(232,224,208,0.25)', marginTop: 8 }}>{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          {/* Visual side */}
          <FadeIn direction="left" delay={0.2}>
            <motion.div style={{ y: floatY }}>
              <div style={{ border: '1px solid rgba(201,168,76,0.2)', padding: '64px 48px', textAlign: 'center', position: 'relative' }}>
                {/* Corner brackets */}
                {[
                  { top: 10, left: 10, borderTop: '1px solid rgba(201,168,76,0.4)', borderLeft: '1px solid rgba(201,168,76,0.4)' },
                  { top: 10, right: 10, borderTop: '1px solid rgba(201,168,76,0.4)', borderRight: '1px solid rgba(201,168,76,0.4)' },
                  { bottom: 10, left: 10, borderBottom: '1px solid rgba(201,168,76,0.4)', borderLeft: '1px solid rgba(201,168,76,0.4)' },
                  { bottom: 10, right: 10, borderBottom: '1px solid rgba(201,168,76,0.4)', borderRight: '1px solid rgba(201,168,76,0.4)' },
                ].map((s, idx) => (
                  <div key={idx} style={{ position: 'absolute', width: 20, height: 20, ...s }} />
                ))}

                <motion.div
                  animate={{ rotate: [0, 4, -4, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                  style={{ fontSize: 96, marginBottom: 24, userSelect: 'none', display: 'block' }}
                >
                  ☕
                </motion.div>
                <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 22, fontStyle: 'italic', color: 'rgba(201,168,76,0.75)', lineHeight: 1.4 }}>
                  "Coffee as a<br />daily ritual"
                </p>
              </div>
            </motion.div>
          </FadeIn>

        </div>
      </section>

      {/* ── VALUES ── */}
      <section style={{ padding: '120px 0', background: '#111111', borderTop: '1px solid rgba(201,168,76,0.08)', borderBottom: '1px solid rgba(201,168,76,0.08)', position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 48px' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: 80 }}>
              <p style={{ color: '#c9a84c', fontSize: 10, letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: 16, fontWeight: 500 }}>
                Our Philosophy
              </p>
              <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 300, fontStyle: 'italic', color: '#e8e0d0' }}>
                What We Stand For
              </h2>
            </div>
          </FadeIn>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 1, background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.1)' }}>
            {values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.15}>
                <motion.div
                  whileHover={{ backgroundColor: 'rgba(201,168,76,0.05)' }}
                  transition={{ duration: 0.4 }}
                  style={{ background: '#111111', padding: '64px 48px', textAlign: 'center' }}
                >
                  <motion.div
                    whileHover={{ scale: 1.3, rotate: 90 }}
                    transition={{ duration: 0.4 }}
                    style={{ color: '#c9a84c', fontSize: 18, marginBottom: 24, display: 'inline-block' }}
                  >
                    {v.icon}
                  </motion.div>
                  <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 24, fontStyle: 'italic', fontWeight: 400, color: '#e8e0d0', marginBottom: 16 }}>
                    {v.title}
                  </h3>
                  <p style={{ color: 'rgba(232,224,208,0.38)', fontSize: 12, lineHeight: 1.9, letterSpacing: '0.02em' }}>
                    {v.desc}
                  </p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section style={{ padding: '120px 0', background: '#0a0a0a', position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 48px' }}>
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: 80 }}>
              <p style={{ color: '#c9a84c', fontSize: 10, letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: 16, fontWeight: 500 }}>
                The People
              </p>
              <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 300, fontStyle: 'italic', color: '#e8e0d0' }}>
                Meet the Team
              </h2>
            </div>
          </FadeIn>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {team.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.15} direction="up">
                <motion.div
                  whileHover={{ borderColor: 'rgba(201,168,76,0.4)' }}
                  transition={{ duration: 0.4 }}
                  style={{ border: '1px solid rgba(201,168,76,0.1)', padding: '56px 40px', textAlign: 'center', position: 'relative' }}
                  onMouseEnter={e => {
                    const corners = e.currentTarget.querySelectorAll('.corner')
                    corners.forEach((c: Element) => (c as HTMLElement).style.borderColor = 'rgba(201,168,76,0.4)')
                  }}
                  onMouseLeave={e => {
                    const corners = e.currentTarget.querySelectorAll('.corner')
                    corners.forEach((c: Element) => (c as HTMLElement).style.borderColor = 'transparent')
                  }}
                >
                  {/* Corner accents */}
                  <div className="corner" style={{ position: 'absolute', top: 10, left: 10, width: 16, height: 16, borderTop: '1px solid transparent', borderLeft: '1px solid transparent', transition: 'border-color 0.4s' }} />
                  <div className="corner" style={{ position: 'absolute', top: 10, right: 10, width: 16, height: 16, borderTop: '1px solid transparent', borderRight: '1px solid transparent', transition: 'border-color 0.4s' }} />
                  <div className="corner" style={{ position: 'absolute', bottom: 10, left: 10, width: 16, height: 16, borderBottom: '1px solid transparent', borderLeft: '1px solid transparent', transition: 'border-color 0.4s' }} />
                  <div className="corner" style={{ position: 'absolute', bottom: 10, right: 10, width: 16, height: 16, borderBottom: '1px solid transparent', borderRight: '1px solid transparent', transition: 'border-color 0.4s' }} />

                  <motion.div
                    whileHover={{ scale: 1.12 }}
                    transition={{ type: 'spring', stiffness: 280 }}
                    style={{ fontSize: 56, marginBottom: 24, userSelect: 'none', display: 'inline-block' }}
                  >
                    {member.emoji}
                  </motion.div>
                  <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 24, fontStyle: 'italic', fontWeight: 400, color: '#e8e0d0', marginBottom: 8 }}>
                    {member.name}
                  </h3>
                  <p style={{ color: '#c9a84c', fontSize: 9, letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 20 }}>
                    {member.role}
                  </p>
                  <div style={{ width: 32, height: 1, background: 'rgba(201,168,76,0.3)', margin: '0 auto 20px' }} />
                  <p style={{ color: 'rgba(232,224,208,0.3)', fontSize: 12, lineHeight: 1.8, fontWeight: 300 }}>
                    {member.bio}
                  </p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── BOTTOM QUOTE STRIP ── */}
      <section style={{ padding: '80px 48px', background: '#111111', borderTop: '1px solid rgba(201,168,76,0.08)', textAlign: 'center', position: 'relative', zIndex: 10 }}>
        <FadeIn>
          <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(22px, 3vw, 36px)', fontStyle: 'italic', fontWeight: 300, color: 'rgba(232,224,208,0.5)', maxWidth: 700, margin: '0 auto', lineHeight: 1.6 }}>
            "We didn't open Cafe Lite to sell coffee.<br />
            <span style={{ color: '#c9a84c' }}>We opened it to give people a reason to pause."</span>
          </p>
          <p style={{ color: 'rgba(201,168,76,0.4)', fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', marginTop: 24 }}>
            — Nimal Perera, Founder
          </p>
        </FadeIn>
      </section>

    </div>
  )
}