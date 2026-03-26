import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { menuItems, MenuItem } from '../data/menuData'
import FadeIn from '../components/FadeIn'

interface CartItem extends MenuItem { quantity: number }

const tagColors: Record<string, { color: string; border: string }> = {
  CLASSIC:   { color: 'rgba(168,144,96,0.8)',  border: 'rgba(168,144,96,0.3)'  },
  SIGNATURE: { color: 'rgba(201,168,76,0.8)',  border: 'rgba(201,168,76,0.3)'  },
  COLD:      { color: 'rgba(106,180,212,0.8)', border: 'rgba(106,180,212,0.3)' },
  POPULAR:   { color: 'rgba(212,132,106,0.8)', border: 'rgba(212,132,106,0.3)' },
  BRUNCH:    { color: 'rgba(154,184,122,0.8)', border: 'rgba(154,184,122,0.3)' },
  HEALTHY:   { color: 'rgba(122,191,138,0.8)', border: 'rgba(122,191,138,0.3)' },
}

export default function Order() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [orderPlaced, setOrderPlaced] = useState(false)
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = ['All', ...Array.from(new Set(menuItems.map(i => i.category)))]
  const filtered = activeCategory === 'All' ? menuItems : menuItems.filter(i => i.category === activeCategory)

  const addToCart = (item: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(c => c.id === item.id)
      if (existing) return prev.map(c => c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c)
      return [...prev, { ...item, quantity: 1 }]
    })
  }

  const removeOne = (id: number) => {
    setCart(prev => {
      const existing = prev.find(c => c.id === id)
      if (existing && existing.quantity > 1) return prev.map(c => c.id === id ? { ...c, quantity: c.quantity - 1 } : c)
      return prev.filter(c => c.id !== id)
    })
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  // ── ORDER CONFIRMED ──
  if (orderPlaced) {
    return (
      <div style={{ minHeight: '100vh', background: '#0a0a0a', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 24px', fontFamily: 'Montserrat, system-ui, sans-serif' }}>
        {/* Glow */}
        <div style={{ position: 'fixed', top: '20%', left: '50%', transform: 'translateX(-50%)', width: 600, height: 400, background: 'radial-gradient(ellipse, rgba(201,168,76,0.06) 0%, transparent 65%)', pointerEvents: 'none' }} />

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
          style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 1, delay: 0.3 }}
            style={{ fontSize: 80, marginBottom: 32, userSelect: 'none', display: 'block' }}
          >
            ☕
          </motion.div>

          <p style={{ color: '#c9a84c', fontSize: 10, letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: 16, fontWeight: 500 }}>
            Order Confirmed
          </p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(48px, 7vw, 72px)', fontWeight: 300, fontStyle: 'italic', color: '#e8e0d0', lineHeight: 0.95, marginBottom: 24 }}>
            Thank You!
          </h2>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 24 }}>
            <div style={{ width: 40, height: 1, background: 'linear-gradient(to right, transparent, #c9a84c)' }} />
            <span style={{ color: '#c9a84c', fontSize: 12 }}>✦</span>
            <div style={{ width: 40, height: 1, background: 'linear-gradient(to left, transparent, #c9a84c)' }} />
          </div>

          <p style={{ color: 'rgba(232,224,208,0.4)', fontSize: 13, letterSpacing: '0.04em', marginBottom: 8, fontWeight: 300, lineHeight: 1.9 }}>
            Your order is being prepared with care.
          </p>
          <p style={{ color: 'rgba(232,224,208,0.2)', fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 48 }}>
            Estimated time: 15 – 20 minutes
          </p>

          <motion.button
            onClick={() => { setCart([]); setOrderPlaced(false) }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            style={{
              padding: '16px 48px',
              border: '1px solid rgba(201,168,76,0.4)',
              background: 'none',
              color: '#c9a84c',
              fontSize: 10,
              letterSpacing: '0.3em',
              textTransform: 'uppercase',
              fontWeight: 600,
              cursor: 'pointer',
              fontFamily: 'Montserrat, system-ui, sans-serif',
              transition: 'all 0.3s',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLElement
              el.style.background = '#c9a84c'
              el.style.color = '#0a0a0a'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLElement
              el.style.background = 'none'
              el.style.color = '#c9a84c'
            }}
          >
            New Order
          </motion.button>
        </motion.div>
      </div>
    )
  }

  return (
    <div style={{ background: '#0a0a0a', color: '#e8e0d0', minHeight: '100vh', fontFamily: 'Montserrat, system-ui, sans-serif' }}>

      {/* ── HERO ── */}
      <section style={{ position: 'relative', paddingTop: 160, paddingBottom: 120, textAlign: 'center', overflow: 'hidden', borderBottom: '1px solid rgba(201,168,76,0.1)' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, #1a1008 0%, #0f0c06 50%, #0a0a0a 100%)', zIndex: 0 }} />
        <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', width: 700, height: 400, background: 'radial-gradient(ellipse, rgba(201,168,76,0.07) 0%, transparent 65%)', pointerEvents: 'none', zIndex: 0 }} />
        <div style={{ position: 'absolute', left: 48, top: 0, bottom: 0, width: 1, background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.18), transparent)', zIndex: 0 }} />
        <div style={{ position: 'absolute', right: 48, top: 0, bottom: 0, width: 1, background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.18), transparent)', zIndex: 0 }} />

        <FadeIn>
          <div style={{ position: 'relative', zIndex: 1, padding: '0 24px' }}>
            <p style={{ color: '#c9a84c', fontSize: 10, letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: 20, fontWeight: 500 }}>
              Online Ordering
            </p>
            <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(64px, 10vw, 120px)', fontWeight: 300, fontStyle: 'italic', color: '#e8e0d0', lineHeight: 0.95, marginBottom: 28 }}>
              Order Now
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginBottom: 24 }}>
              <div style={{ width: 60, height: 1, background: 'linear-gradient(to right, transparent, #c9a84c)' }} />
              <span style={{ color: '#c9a84c', fontSize: 12 }}>✦</span>
              <div style={{ width: 60, height: 1, background: 'linear-gradient(to left, transparent, #c9a84c)' }} />
            </div>
            <p style={{ color: 'rgba(232,224,208,0.4)', fontSize: 12, letterSpacing: '0.06em', maxWidth: 420, margin: '0 auto', lineHeight: 1.9, fontWeight: 300 }}>
              Select your items below and we'll have them ready with care.
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
                  layoutId="orderUnderline"
                  style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 2, background: '#c9a84c' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <section style={{ padding: '80px 0 120px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 48px', display: 'grid', gridTemplateColumns: '1fr 380px', gap: 48, alignItems: 'start' }}>

          {/* ── ITEMS GRID ── */}
          <div>
            {/* Section label */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 40 }}>
              <p style={{ color: 'rgba(201,168,76,0.4)', fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                {activeCategory === 'All' ? 'Full Selection' : activeCategory}
              </p>
              <div style={{ flex: 1, height: 1, background: 'rgba(201,168,76,0.1)' }} />
              <p style={{ color: 'rgba(232,224,208,0.2)', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                {filtered.length} item{filtered.length !== 1 ? 's' : ''}
              </p>
            </div>

            {/* Grid — same gap:1 divider trick as Values/Menu */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 1, background: 'rgba(201,168,76,0.08)', backgroundImage: 'url(/assets/2.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', border: '1px solid rgba(201,168,76,0.1)', position: 'relative' }}>
              <AnimatePresence mode="popLayout">
                {filtered.map((item) => {
                  const inCart = cart.find(c => c.id === item.id)
                  const tag = item.tag ? (tagColors[item.tag] ?? { color: 'rgba(201,168,76,0.7)', border: 'rgba(201,168,76,0.3)' }) : null

                  return (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      whileHover={{ backgroundColor: 'rgba(201,168,76,0.04)' }}
                      style={{ background: '#0a0a0a', padding: '36px 32px', position: 'relative', transition: 'background-color 0.4s' }}
                    >
                      {/* Top sweep line */}
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.4 }}
                        style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 1, background: 'linear-gradient(to right, #c9a84c, rgba(201,168,76,0.2), transparent)', transformOrigin: 'left' }}
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
                            marginBottom: 16,
                            borderRadius: 4,
                            overflow: 'hidden',
                            height: 150,
                            backgroundImage: `url(${item.image})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            border: '1px solid rgba(201,168,76,0.2)',
                          }} />
                        )}

                        {/* Name + Price */}
                      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 12, marginBottom: 12 }}>
                        <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 20, fontStyle: 'italic', fontWeight: 400, color: '#e8e0d0', lineHeight: 1.2, margin: 0, flex: 1 }}>
                          {item.name}
                        </h3>
                        <span style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 18, fontStyle: 'italic', color: '#c9a84c', fontWeight: 300, whiteSpace: 'nowrap', flexShrink: 0 }}>
                          ${item.price.toFixed(2)}
                        </span>
                      </div>

                      {/* Divider */}
                      <div style={{ width: 32, height: 1, background: 'rgba(201,168,76,0.3)', marginBottom: 12 }} />

                      {/* Desc */}
                      <p style={{ color: 'rgba(232,224,208,0.38)', fontSize: 11, lineHeight: 1.8, fontWeight: 300, marginBottom: 20 }}>
                        {item.desc}
                      </p>

                      {/* Tag + Add row */}
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
                        <div>
                          {tag && (
                            <span style={{ display: 'inline-block', fontSize: 9, letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 600, color: tag.color, border: `1px solid ${tag.border}`, padding: '2px 7px' }}>
                              {item.tag}
                            </span>
                          )}
                        </div>

                        {/* Qty controls */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
                          <AnimatePresence>
                            {inCart && (
                              <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                style={{ display: 'flex', alignItems: 'center', gap: 8 }}
                              >
                                <button
                                  onClick={() => removeOne(item.id)}
                                  style={{ width: 28, height: 28, border: '1px solid rgba(201,168,76,0.3)', background: 'none', color: '#c9a84c', cursor: 'pointer', fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s' }}
                                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(201,168,76,0.1)'}
                                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'none'}
                                >−</button>
                                <span style={{ color: '#c9a84c', fontSize: 13, fontWeight: 600, width: 16, textAlign: 'center', fontFamily: 'Montserrat, system-ui, sans-serif' }}>
                                  {inCart.quantity}
                                </span>
                              </motion.div>
                            )}
                          </AnimatePresence>
                          <button
                            onClick={() => addToCart(item)}
                            style={{ width: 28, height: 28, background: inCart ? '#c9a84c' : 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)', color: inCart ? '#0a0a0a' : '#c9a84c', cursor: 'pointer', fontSize: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s' }}
                            onMouseEnter={e => {
                              const el = e.currentTarget as HTMLElement
                              el.style.background = '#c9a84c'
                              el.style.color = '#0a0a0a'
                            }}
                            onMouseLeave={e => {
                              const el = e.currentTarget as HTMLElement
                              el.style.background = inCart ? '#c9a84c' : 'rgba(201,168,76,0.1)'
                              el.style.color = inCart ? '#0a0a0a' : '#c9a84c'
                            }}
                          >+</button>
                        </div>
                      </div>
                      </div>
                    </motion.div>
                  )
                })}
              </AnimatePresence>
            </div>
          </div>

          {/* ── CART PANEL ── */}
          <div style={{ position: 'sticky', top: 80 }}>
            <div style={{ border: '1px solid rgba(201,168,76,0.15)', background: '#0e0d0a' }}>

              {/* Cart header */}
              <div style={{ padding: '32px 32px 24px', borderBottom: '1px solid rgba(201,168,76,0.08)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                  <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 26, fontStyle: 'italic', fontWeight: 400, color: '#e8e0d0', margin: 0 }}>
                    Your Order
                  </h2>
                  {itemCount > 0 && (
                    <span style={{ color: '#c9a84c', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                      {itemCount} item{itemCount > 1 ? 's' : ''}
                    </span>
                  )}
                </div>
                <div style={{ width: 32, height: 1, background: 'rgba(201,168,76,0.3)', marginTop: 16 }} />
              </div>

              {/* Cart body */}
              {cart.length === 0 ? (
                <div style={{ padding: '56px 32px', textAlign: 'center' }}>
                  <div style={{ fontSize: 40, marginBottom: 16, opacity: 0.15, userSelect: 'none' }}>☕</div>
                  <p style={{ color: 'rgba(232,224,208,0.2)', fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase' }}>
                    Nothing added yet
                  </p>
                </div>
              ) : (
                <>
                  {/* Cart items */}
                  <div style={{ padding: '8px 32px', maxHeight: 280, overflowY: 'auto' }}>
                    <AnimatePresence>
                      {cart.map((item) => (
                        <motion.div
                          key={item.id}
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 0', borderBottom: '1px solid rgba(201,168,76,0.05)' }}
                        >
                          <div>
                            <p style={{ fontSize: 14, color: 'rgba(232,224,208,0.75)', fontWeight: 500, marginBottom: 4, fontFamily: 'Cormorant Garamond, Georgia, serif', fontStyle: 'italic' }}>
                              {item.name}
                            </p>
                            <p style={{ fontSize: 10, color: 'rgba(232,224,208,0.25)', letterSpacing: '0.1em' }}>
                              ×{item.quantity} · ${(item.price * item.quantity).toFixed(2)}
                            </p>
                          </div>
                          <button
                            onClick={() => removeOne(item.id)}
                            style={{ background: 'none', border: 'none', color: 'rgba(201,168,76,0.3)', fontSize: 20, cursor: 'pointer', padding: '0 0 0 16px', transition: 'color 0.2s', lineHeight: 1 }}
                            onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#c9a84c'}
                            onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(201,168,76,0.3)'}
                          >×</button>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>

                  {/* Total */}
                  <div style={{ padding: '20px 32px', borderTop: '1px solid rgba(201,168,76,0.1)', borderBottom: '1px solid rgba(201,168,76,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(232,224,208,0.35)' }}>Total</span>
                    <span style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 28, fontStyle: 'italic', color: '#c9a84c' }}>
                      ${total.toFixed(2)}
                    </span>
                  </div>

                  {/* Place order */}
                  <div style={{ padding: '24px 32px' }}>
                    <motion.button
                      onClick={() => setOrderPlaced(true)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.97 }}
                      style={{ width: '100%', padding: '16px', background: '#c9a84c', border: 'none', color: '#0a0a0a', fontSize: 10, letterSpacing: '0.4em', textTransform: 'uppercase', fontWeight: 700, cursor: 'pointer', fontFamily: 'Montserrat, system-ui, sans-serif', transition: 'background 0.3s' }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = '#debb68'}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = '#c9a84c'}
                    >
                      Place Order →
                    </motion.button>
                    <p style={{ color: 'rgba(232,224,208,0.15)', fontSize: 9, letterSpacing: '0.2em', textTransform: 'uppercase', textAlign: 'center', marginTop: 12 }}>
                      Pickup & delivery available
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* ── BOTTOM QUOTE STRIP ── */}
      <section style={{ padding: '80px 48px', background: '#111111', borderTop: '1px solid rgba(201,168,76,0.08)', textAlign: 'center' }}>
        <FadeIn>
          <p style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(22px, 3vw, 36px)', fontStyle: 'italic', fontWeight: 300, color: 'rgba(232,224,208,0.5)', maxWidth: 700, margin: '0 auto', lineHeight: 1.6 }}>
            "We prepare every order as if<br />
            <span style={{ color: '#c9a84c' }}>you were sitting right in front of us."</span>
          </p>
          <p style={{ color: 'rgba(201,168,76,0.4)', fontSize: 10, letterSpacing: '0.3em', textTransform: 'uppercase', marginTop: 24 }}>
            — Nimal Perera, Founder
          </p>
        </FadeIn>
      </section>

    </div>
  )
}