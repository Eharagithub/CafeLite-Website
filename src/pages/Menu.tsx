import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { menuItems, categories, MenuItem } from '../data/menuData'
import FadeIn from '../components/FadeIn'

const tagColors: Record<string, { color: string; border: string }> = {
  CLASSIC:   { color: 'rgba(168,144,96,0.8)',  border: 'rgba(168,144,96,0.3)'  },
  SIGNATURE: { color: 'rgba(201,168,76,0.8)',  border: 'rgba(201,168,76,0.3)'  },
  COLD:      { color: 'rgba(106,180,212,0.8)', border: 'rgba(106,180,212,0.3)' },
  POPULAR:   { color: 'rgba(212,132,106,0.8)', border: 'rgba(212,132,106,0.3)' },
  BRUNCH:    { color: 'rgba(154,184,122,0.8)', border: 'rgba(154,184,122,0.3)' },
  HEALTHY:   { color: 'rgba(122,191,138,0.8)', border: 'rgba(122,191,138,0.3)' },
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState<string>('All')

  const filtered = activeCategory === 'All'
    ? menuItems
    : menuItems.filter((item) => item.category === activeCategory)

  return (
    <div style={{ background: '#0a0a0a', color: '#e8e0d0', minHeight: '100vh', fontFamily: 'Montserrat, system-ui, sans-serif' }}>

      {/* ── HERO ── */}
      <section style={{ position: 'relative', paddingTop: 160, paddingBottom: 120, textAlign: 'center', overflow: 'hidden', borderBottom: '1px solid rgba(201,168,76,0.1)' }}>
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
              Curated Daily
            </p>
            <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(64px, 10vw, 120px)', fontWeight: 300, fontStyle: 'italic', color: '#e8e0d0', lineHeight: 0.95, marginBottom: 28 }}>
              Our Menu
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 24 }}>
              <div style={{ width: 60, height: 1, background: 'linear-gradient(to right, transparent, #c9a84c)' }} />
              <span style={{ color: '#c9a84c', fontSize: 12 }}>✦</span>
              <div style={{ width: 60, height: 1, background: 'linear-gradient(to left, transparent, #c9a84c)' }} />
            </div>
            <p style={{ color: 'rgba(232,224,208,0.4)', fontSize: 12, letterSpacing: '0.06em', maxWidth: 420, margin: '0 auto', lineHeight: 1.9, fontWeight: 300 }}>
              Seasonal ingredients, specialty roasts, and recipes crafted with intention.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* ── FILTER BAR ── */}
      <div style={{ position: 'sticky', top: 0, zIndex: 30, borderBottom: '1px solid rgba(201,168,76,0.1)', background: 'rgba(14,13,10,0.96)', backdropFilter: 'blur(12px)' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 48px', display: 'flex', gap: 0, overflowX: 'auto' }}>
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileTap={{ scale: 0.95 }}
              style={{
                position: 'relative',
                fontSize: 10,
                letterSpacing: '0.25em',
                textTransform: 'uppercase',
                fontWeight: 600,
                whiteSpace: 'nowrap',
                padding: '20px 24px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: activeCategory === cat ? '#c9a84c' : 'rgba(232,224,208,0.35)',
                transition: 'color 0.3s',
                fontFamily: 'Montserrat, system-ui, sans-serif',
              }}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div
                  layoutId="menuUnderline"
                  style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 2, background: '#c9a84c' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {/* ── MENU GRID ── */}
      <section style={{ padding: '120px 0', background: '#0a0a0a' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 48px' }}>

          {/* Section header — mirrors About's section headers */}
          <FadeIn>
            <div style={{ textAlign: 'center', marginBottom: 80 }}>
              <p style={{ color: '#c9a84c', fontSize: 10, letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: 16, fontWeight: 500 }}>
                {activeCategory === 'All' ? 'Full Selection' : activeCategory}
              </p>
              <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(40px, 5vw, 64px)', fontWeight: 300, fontStyle: 'italic', color: '#e8e0d0', marginBottom: 24 }}>
                {activeCategory === 'All' ? 'Everything We Offer' : activeCategory}
              </h2>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
                <div style={{ width: 40, height: 1, background: 'rgba(201,168,76,0.3)' }} />
                <span style={{ color: 'rgba(201,168,76,0.4)', fontSize: 10 }}>✦</span>
                <div style={{ width: 40, height: 1, background: 'rgba(201,168,76,0.3)' }} />
              </div>
            </div>
          </FadeIn>

          {/* Grid — same gap:1 + border trick as Values section in About */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 1, background: 'rgba(201,168,76,0.08)', backgroundImage: 'url(/assets/coffee1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', border: '1px solid rgba(201,168,76,0.1)', position: 'relative' }}>
            <AnimatePresence mode="popLayout">
              {filtered.map((item: MenuItem, index: number) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, delay: index * 0.04 }}
                  whileHover={{ backgroundColor: 'rgba(201,168,76,0.05)' }}
                  style={{
                    background: '#0a0a0a',
                    padding: '48px 40px',
                    position: 'relative',
                    transition: 'background-color 0.4s',
                    cursor: 'default',
                  }}
                  className="group"
                >
                  {/* Top sweep line on hover */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4 }}
                    style={{
                      position: 'absolute', top: 0, left: 0, right: 0, height: 1,
                      background: 'linear-gradient(to right, #c9a84c, rgba(201,168,76,0.2), transparent)',
                      transformOrigin: 'left',
                    }}
                  />

                  {/* Dark overlay for text readability */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'rgba(10,10,10,0.75)',
                    zIndex: 0,
                  }} />

                  {/* Content wrapper */}
                  <div style={{ position: 'relative', zIndex: 1 }}>
                    {/* Item Image */}
                    {item.image && (
                      <div style={{
                        marginBottom: 20,
                        borderRadius: 4,
                        overflow: 'hidden',
                        height: 180,
                        backgroundImage: `url(${item.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        border: '1px solid rgba(201,168,76,0.2)',
                      }} />
                    )}

                    {/* Name + Price */}
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 16, marginBottom: 16 }}>
                    <h3 style={{
                      fontFamily: 'Cormorant Garamond, Georgia, serif',
                      fontSize: 22,
                      fontStyle: 'italic',
                      fontWeight: 400,
                      color: '#e8e0d0',
                      lineHeight: 1.2,
                      margin: 0,
                      flex: 1,
                    }}>
                      {item.name}
                    </h3>
                    <span style={{
                      fontFamily: 'Cormorant Garamond, Georgia, serif',
                      fontSize: 20,
                      fontStyle: 'italic',
                      color: '#c9a84c',
                      fontWeight: 300,
                      whiteSpace: 'nowrap',
                      flexShrink: 0,
                    }}>
                      ${item.price.toFixed(2)}
                    </span>
                  </div>

                  {/* Divider — mirrors team card divider */}
                  <div style={{ width: 32, height: 1, background: 'rgba(201,168,76,0.3)', marginBottom: 16 }} />

                  {/* Description */}
                  <p style={{
                    color: 'rgba(232,224,208,0.38)',
                    fontSize: 12,
                    lineHeight: 1.9,
                    fontWeight: 300,
                    marginBottom: item.tag ? 20 : 0,
                    minHeight: '3.6em',
                  }}>
                    {item.desc}
                  </p>

                  {/* Tag */}
                  {item.tag && (() => {
                    const t = tagColors[item.tag] ?? { color: 'rgba(201,168,76,0.7)', border: 'rgba(201,168,76,0.3)' }
                    return (
                      <span style={{
                        display: 'inline-block',
                        fontSize: 9,
                        letterSpacing: '0.25em',
                        textTransform: 'uppercase',
                        fontWeight: 600,
                        color: t.color,
                        border: `1px solid ${t.border}`,
                        padding: '3px 8px',
                      }}>
                        {item.tag}
                      </span>
                    )
                  })()}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Empty state */}
          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '80px 0', color: 'rgba(232,224,208,0.2)', fontSize: 11, letterSpacing: '0.3em', textTransform: 'uppercase' }}>
              No items in this category
            </div>
          )}
        </div>
      </section>

      {/* ── BOTTOM QUOTE STRIP — mirrors About's quote strip ── */}
      <section style={{ padding: '80px 48px', background: '#111111', borderTop: '1px solid rgba(201,168,76,0.08)', textAlign: 'center' }}>
        <FadeIn>
          <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(22px, 3vw, 36px)', fontStyle: 'italic', fontWeight: 300, color: 'rgba(232,224,208,0.5)', maxWidth: 700, margin: '0 auto', lineHeight: 1.6 }}>
            "Every item on this menu is here for a reason.<br />
            <span style={{ color: '#c9a84c' }}>We don't serve anything we wouldn't be proud of."</span>
          </p>
          <p style={{ color: 'rgba(201,168,76,0.4)', fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', marginTop: 24 }}>
            — Amara Silva, Head Chef
          </p>

          <div style={{ marginTop: 48 }}>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} style={{ display: 'inline-block' }}>
              <Link
                to="/order"
                style={{
                  display: 'inline-block',
                  padding: '16px 56px',
                  background: '#c9a84c',
                  color: '#0a0a0a',
                  fontSize: 10,
                  letterSpacing: '0.4em',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  textDecoration: 'none',
                  fontFamily: 'Montserrat, system-ui, sans-serif',
                  transition: 'background 0.3s',
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = '#debb68'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = '#c9a84c'}
              >
                Order Online →
              </Link>
            </motion.div>
          </div>
        </FadeIn>
      </section>

    </div>
  )
}