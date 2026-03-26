import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Home', path: '/' },
  { label: 'Menu', path: '/menu' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location])

  const isActive = (path: string) => location.pathname === path

  return (
    <>
      {/* ── MAIN NAV ── */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 50,
          transition: 'all 0.4s ease',
          background: scrolled ? 'rgba(10,10,10,0.96)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(201,168,76,0.18)' : '1px solid transparent',
          padding: scrolled ? '14px 0' : '24px 0',
        }}
      >
        <div style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>

          {/* ── LOGO ── */}
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', lineHeight: 1, gap: 2 }}>
            <span style={{
              fontFamily: 'Cormorant Garamond, Georgia, serif',
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: '0.25em',
              color: '#c9a84c',
              textTransform: 'uppercase',
            }}>
              Cafe
            </span>
            <span style={{
              fontFamily: 'Montserrat, system-ui, sans-serif',
              fontSize: 9,
              letterSpacing: '0.45em',
              color: 'rgba(232,224,208,0.5)',
              textTransform: 'uppercase',
            }}>
              Lite
            </span>
          </Link>

          {/* ── DESKTOP LINKS ── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 40 }} className="desktop-nav">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                style={{
                  position: 'relative',
                  fontSize: 10,
                  letterSpacing: '0.22em',
                  textTransform: 'uppercase',
                  fontWeight: 500,
                  color: isActive(link.path) ? '#c9a84c' : 'rgba(232,224,208,0.75)',
                  textDecoration: 'none',
                  paddingBottom: 4,
                  transition: 'color 0.3s',
                  fontFamily: 'Montserrat, system-ui, sans-serif',
                }}
                onMouseEnter={e => {
                  if (!isActive(link.path)) e.currentTarget.style.color = '#e8e0d0'
                }}
                onMouseLeave={e => {
                  if (!isActive(link.path)) e.currentTarget.style.color = 'rgba(232,224,208,0.75)'
                }}
              >
                {link.label}
                {/* Active underline */}
                <span style={{
                  position: 'absolute',
                  bottom: 0, left: 0,
                  height: 1,
                  width: isActive(link.path) ? '100%' : '0%',
                  background: '#c9a84c',
                  transition: 'width 0.3s ease',
                }} />
              </Link>
            ))}
          </div>

          {/* ── ORDER BUTTON ── */}
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} className="desktop-nav">
            <Link
              to="/order"
              style={{
                fontSize: 10,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                fontWeight: 600,
                padding: '12px 28px',
                border: '1px solid #c9a84c',
                color: '#c9a84c',
                textDecoration: 'none',
                transition: 'all 0.3s',
                fontFamily: 'Montserrat, system-ui, sans-serif',
                display: 'inline-block',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = '#c9a84c'
                e.currentTarget.style.color = '#0a0a0a'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'transparent'
                e.currentTarget.style.color = '#c9a84c'
              }}
            >
              Order Now
            </Link>
          </motion.div>

          {/* ── HAMBURGER (mobile) ── */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              gap: 6,
              padding: 8,
            }}
            className="mobile-hamburger"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              style={{ display: 'block', width: 24, height: 1, background: '#c9a84c' }}
            />
            <motion.span
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
              style={{ display: 'block', width: 24, height: 1, background: '#c9a84c' }}
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              style={{ display: 'block', width: 24, height: 1, background: '#c9a84c' }}
            />
          </button>
        </div>
      </motion.nav>

      {/* ── MOBILE FULLSCREEN MENU ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 40,
              background: '#0a0a0a',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 32,
            }}
          >
            {[...links, { label: 'Order Now', path: '/order' }].map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  to={link.path}
                  style={{
                    fontFamily: 'Cormorant Garamond, Georgia, serif',
                    fontSize: 42,
                    fontStyle: 'italic',
                    fontWeight: 300,
                    color: isActive(link.path) ? '#c9a84c' : '#e8e0d0',
                    textDecoration: 'none',
                    transition: 'color 0.3s',
                    display: 'block',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#c9a84c'}
                  onMouseLeave={e => e.currentTarget.style.color = isActive(link.path) ? '#c9a84c' : '#e8e0d0'}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}

            {/* Ornament */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.65 }}
              style={{ display: 'flex', alignItems: 'center', gap: 16, marginTop: 16 }}
            >
              <div style={{ width: 40, height: 1, background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.4))' }} />
              <span style={{ color: 'rgba(201,168,76,0.4)', fontSize: 12 }}>✦</span>
              <div style={{ width: 40, height: 1, background: 'linear-gradient(to left, transparent, rgba(201,168,76,0.4))' }} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── RESPONSIVE STYLES ── */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
        }
        @media (min-width: 769px) {
          .mobile-hamburger { display: none !important; }
        }
      `}</style>
    </>
  )
}