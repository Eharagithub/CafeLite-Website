import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const navLinks: [string, string][] = [
  ['/', 'Home'],
  ['/menu', 'Menu'],
  ['/about', 'About'],
  ['/contact', 'Contact'],
  ['/order', 'Order Now'],
]

const hours: [string, string][] = [
  ['Mon – Fri', '7:00am – 8:00pm'],
  ['Saturday', '8:00am – 9:00pm'],
  ['Sunday', '8:00am – 9:00pm'],
]

export default function Footer() {
  return (
    <footer style={{ background: '#0a0a0a', borderTop: '1px solid rgba(201,168,76,0.12)', color: '#e8e0d0', fontFamily: 'Montserrat, system-ui, sans-serif' }}>

      {/* ── TOP GRID ── */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '96px 48px 80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 64 }}>

          {/* Brand */}
          <div>
            <Link to="/" style={{ textDecoration: 'none', display: 'inline-flex', flexDirection: 'column', gap: 4, marginBottom: 24 }}>
              <span style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 32, fontStyle: 'italic', fontWeight: 400, color: '#c9a84c', lineHeight: 1 }}>
                Cafe Lite
              </span>
              <span style={{ fontSize: 9, letterSpacing: '0.4em', color: 'rgba(232,224,208,0.25)', textTransform: 'uppercase' }}>
                Colombo, Sri Lanka
              </span>
            </Link>
            <p style={{ color: 'rgba(232,224,208,0.3)', fontSize: 12, lineHeight: 1.9, fontWeight: 300, maxWidth: 260 }}>
              Specialty coffee, seasonal food, and a warm space for slow mornings and inspired afternoons.
            </p>

            {/* Social row */}
            <div style={{ display: 'flex', gap: 16, marginTop: 28 }}>
              {['Instagram', 'Facebook', 'TikTok'].map((s) => (
                <span
                  key={s}
                  style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.35)', cursor: 'pointer', transition: 'color 0.3s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#c9a84c')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(201,168,76,0.35)')}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p style={{ fontSize: 9, letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.5)', marginBottom: 28, fontWeight: 600 }}>
              Navigate
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {navLinks.map(([path, label]) => (
                <motion.div key={path} whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 350 }}>
                  <Link
                    to={path}
                    style={{ fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(232,224,208,0.3)', textDecoration: 'none', transition: 'color 0.3s', display: 'inline-block' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#c9a84c')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(232,224,208,0.3)')}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Hours */}
          <div>
            <p style={{ fontSize: 9, letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.5)', marginBottom: 28, fontWeight: 600 }}>
              Opening Hours
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {hours.map(([day, time]) => (
                <div key={day} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 12, borderBottom: '1px solid rgba(201,168,76,0.06)' }}>
                  <span style={{ fontSize: 11, color: 'rgba(232,224,208,0.3)', fontWeight: 400 }}>{day}</span>
                  <span style={{ fontSize: 11, color: 'rgba(201,168,76,0.6)', letterSpacing: '0.05em' }}>{time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontSize: 9, letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.5)', marginBottom: 28, fontWeight: 600 }}>
              Contact Us
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                ['📍', '42 Galle Road, Colombo 03\nSri Lanka'],
                ['📞', '+94 11 234 5678'],
                ['✉️', 'hello@cafelite.lk'],
              ].map(([icon, value]) => (
                <div key={value} style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
                  <span style={{ fontSize: 14, marginTop: 1, flexShrink: 0 }}>{icon}</span>
                  <span style={{ fontSize: 11, color: 'rgba(232,224,208,0.3)', lineHeight: 1.7, whiteSpace: 'pre-line' }}>{value}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

    

      {/* ── BOTTOM BAR ── */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 48px 40px', display: 'flex', flexWrap: 'wrap' }}>
        <p style={{ fontSize: 10, letterSpacing: '0.15em', color: 'rgba(232,224,208,0.15)',alignItems: 'center', fontWeight: 300 }}>
          © 2026 Cafe Lite. All rights reserved by JNU Solutions.
        </p>
      </div>

    </footer>
  )
}