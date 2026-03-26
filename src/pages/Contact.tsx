import { useState } from 'react'
import { motion } from 'framer-motion'
import FadeIn from '../components/FadeIn'

interface FormData { name: string; email: string; message: string }

const contactInfo = [
  { icon: '📍', label: 'Address', value: '42 Galle Road\nColombo 03, Sri Lanka' },
  { icon: '📞', label: 'Phone', value: '+94 11 234 5678' },
  { icon: '✉️', label: 'Email', value: 'hello@cafelite.lk' },
  { icon: '🕐', label: 'Hours', value: 'Mon – Fri  ·  7:00am – 8:00pm\nSat – Sun  ·  8:00am – 9:00pm' },
]

const hourRows = [
  ['Monday – Friday', '7:00 AM', '8:00 PM'],
  ['Saturday',        '8:00 AM', '9:00 PM'],
  ['Sunday',          '8:00 AM', '9:00 PM'],
]

export default function Contact() {
  const [form, setForm]         = useState<FormData>({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused]   = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true) }

  return (
    <div style={{ background: '#0a0a0a', color: '#e8e0d0', minHeight: '100vh', fontFamily: 'Montserrat, system-ui, sans-serif' }}>

      {/* ── HERO ── */}
      <section style={{ position: 'relative', paddingTop: 160, paddingBottom: 120, textAlign: 'center', overflow: 'hidden', borderBottom: '1px solid rgba(201,168,76,0.1)' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, #1a1008 0%, #0f0c06 50%, #0a0a0a 100%)', zIndex: 0 }} />
        <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', width: 600, height: 400, background: 'radial-gradient(ellipse, rgba(201,168,76,0.07) 0%, transparent 65%)', pointerEvents: 'none', zIndex: 0 }} />
        <div style={{ position: 'absolute', left: 48, top: 0, bottom: 0, width: 1, background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.15), transparent)', zIndex: 0 }} />
        <div style={{ position: 'absolute', right: 48, top: 0, bottom: 0, width: 1, background: 'linear-gradient(to bottom, transparent, rgba(201,168,76,0.15), transparent)', zIndex: 0 }} />

        <FadeIn>
          <div style={{ position: 'relative', zIndex: 1, padding: '0 24px' }}>
            <p style={{ color: '#c9a84c', fontSize: 10, letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: 20, fontWeight: 500 }}>
              Reach Out
            </p>
            <h1 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 'clamp(64px, 10vw, 120px)', fontWeight: 300, fontStyle: 'italic', color: '#e8e0d0', lineHeight: 0.95, marginBottom: 28 }}>
              Contact Us
            </h1>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
              <div style={{ width: 60, height: 1, background: 'linear-gradient(to right, transparent, #c9a84c)' }} />
              <span style={{ color: '#c9a84c', fontSize: 12 }}>✦</span>
              <div style={{ width: 60, height: 1, background: 'linear-gradient(to left, transparent, #c9a84c)' }} />
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ── MAIN CONTENT ── */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '120px 48px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: 80 }}>

          {/* ── FORM ── */}
          <FadeIn direction="right">
            <div>
              <p style={{ color: '#c9a84c', fontSize: 10, letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: 16, fontWeight: 500 }}>
                Drop Us a Line
              </p>
              <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 40, fontStyle: 'italic', fontWeight: 300, color: '#e8e0d0', marginBottom: 48, lineHeight: 1 }}>
                Send a Message
              </h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 200 }}
                  style={{ border: '1px solid rgba(201,168,76,0.2)', padding: '64px 40px', textAlign: 'center', position: 'relative' }}
                >
                  {/* Corner accents */}
                  <div style={{ position: 'absolute', top: 10, left: 10, width: 16, height: 16, borderTop: '1px solid rgba(201,168,76,0.4)', borderLeft: '1px solid rgba(201,168,76,0.4)' }} />
                  <div style={{ position: 'absolute', top: 10, right: 10, width: 16, height: 16, borderTop: '1px solid rgba(201,168,76,0.4)', borderRight: '1px solid rgba(201,168,76,0.4)' }} />
                  <div style={{ position: 'absolute', bottom: 10, left: 10, width: 16, height: 16, borderBottom: '1px solid rgba(201,168,76,0.4)', borderLeft: '1px solid rgba(201,168,76,0.4)' }} />
                  <div style={{ position: 'absolute', bottom: 10, right: 10, width: 16, height: 16, borderBottom: '1px solid rgba(201,168,76,0.4)', borderRight: '1px solid rgba(201,168,76,0.4)' }} />

                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 1, delay: 0.3 }}
                    style={{ fontSize: 40, marginBottom: 20 }}
                  >✦</motion.div>
                  <h3 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 28, fontStyle: 'italic', color: '#c9a84c', marginBottom: 12 }}>
                    Message Received
                  </h3>
                  <p style={{ color: 'rgba(232,224,208,0.35)', fontSize: 11, letterSpacing: '0.15em' }}>
                    We'll reply within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', message: '' }) }}
                    style={{ marginTop: 32, background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(201,168,76,0.45)', fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', transition: 'color 0.3s', fontFamily: 'Montserrat, system-ui, sans-serif' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#c9a84c')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'rgba(201,168,76,0.45)')}
                  >
                    Send Another →
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
                  {/* Name */}
                  {[
                    { label: 'Full Name', name: 'name', type: 'text', placeholder: 'Your name' },
                    { label: 'Email Address', name: 'email', type: 'email', placeholder: 'your@email.com' },
                  ].map((field) => (
                    <div key={field.name} style={{ position: 'relative' }}>
                      <label style={{ display: 'block', fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: focused === field.name ? '#c9a84c' : 'rgba(201,168,76,0.5)', marginBottom: 12, transition: 'color 0.3s', fontWeight: 600 }}>
                        {field.label}
                      </label>
                      <input
                        name={field.name}
                        type={field.type}
                        value={form[field.name as keyof FormData]}
                        onChange={handleChange}
                        onFocus={() => setFocused(field.name)}
                        onBlur={() => setFocused(null)}
                        required
                        placeholder={field.placeholder}
                        style={{
                          width: '100%',
                          background: 'transparent',
                          border: 'none',
                          borderBottom: `1px solid ${focused === field.name ? '#c9a84c' : 'rgba(201,168,76,0.18)'}`,
                          padding: '12px 0',
                          fontSize: 14,
                          color: '#e8e0d0',
                          outline: 'none',
                          transition: 'border-color 0.3s',
                          fontFamily: 'Montserrat, system-ui, sans-serif',
                          fontWeight: 300,
                          boxSizing: 'border-box',
                        }}
                      />
                    </div>
                  ))}

                  {/* Message */}
                  <div>
                    <label style={{ display: 'block', fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: focused === 'message' ? '#c9a84c' : 'rgba(201,168,76,0.5)', marginBottom: 12, transition: 'color 0.3s', fontWeight: 600 }}>
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                      required
                      rows={5}
                      placeholder="How can we help?"
                      style={{
                        width: '100%',
                        background: 'transparent',
                        border: 'none',
                        borderBottom: `1px solid ${focused === 'message' ? '#c9a84c' : 'rgba(201,168,76,0.18)'}`,
                        padding: '12px 0',
                        fontSize: 14,
                        color: '#e8e0d0',
                        outline: 'none',
                        resize: 'none',
                        transition: 'border-color 0.3s',
                        fontFamily: 'Montserrat, system-ui, sans-serif',
                        fontWeight: 300,
                        boxSizing: 'border-box',
                      }}
                    />
                  </div>

                  {/* Submit */}
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    style={{ alignSelf: 'flex-start', padding: '18px 48px', background: '#c9a84c', color: '#0a0a0a', fontSize: 11, letterSpacing: '0.25em', textTransform: 'uppercase', fontWeight: 700, border: 'none', cursor: 'pointer', transition: 'background 0.3s', fontFamily: 'Montserrat, system-ui, sans-serif' }}
                    onMouseEnter={e => (e.currentTarget.style.background = '#e8cc7a')}
                    onMouseLeave={e => (e.currentTarget.style.background = '#c9a84c')}
                  >
                    Send Message
                  </motion.button>
                </form>
              )}
            </div>
          </FadeIn>

          {/* ── INFO ── */}
          <FadeIn direction="left" delay={0.2}>
            <div>
              <p style={{ color: '#c9a84c', fontSize: 10, letterSpacing: '0.4em', textTransform: 'uppercase', marginBottom: 16, fontWeight: 500 }}>
                Visit Us
              </p>
              <h2 style={{ fontFamily: 'Cormorant Garamond, Georgia, serif', fontSize: 40, fontStyle: 'italic', fontWeight: 300, color: '#e8e0d0', marginBottom: 48, lineHeight: 1 }}>
                Find Us
              </h2>

              {/* Contact rows */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 36, marginBottom: 56 }}>
                {contactInfo.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}
                  >
                    <span style={{ fontSize: 20, flexShrink: 0, marginTop: 2, userSelect: 'none' }}>{item.icon}</span>
                    <div>
                      <p style={{ fontSize: 9, letterSpacing: '0.3em', textTransform: 'uppercase', color: '#c9a84c', fontWeight: 600, marginBottom: 8 }}>
                        {item.label}
                      </p>
                      <p style={{ fontSize: 13, color: 'rgba(232,224,208,0.5)', lineHeight: 1.8, fontWeight: 300, whiteSpace: 'pre-line' }}>
                        {item.value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Hours table */}
              <div style={{ border: '1px solid rgba(201,168,76,0.12)', padding: '36px 32px', position: 'relative' }}>
                {/* Corner accents */}
                <div style={{ position: 'absolute', top: 8, left: 8, width: 14, height: 14, borderTop: '1px solid rgba(201,168,76,0.35)', borderLeft: '1px solid rgba(201,168,76,0.35)' }} />
                <div style={{ position: 'absolute', top: 8, right: 8, width: 14, height: 14, borderTop: '1px solid rgba(201,168,76,0.35)', borderRight: '1px solid rgba(201,168,76,0.35)' }} />
                <div style={{ position: 'absolute', bottom: 8, left: 8, width: 14, height: 14, borderBottom: '1px solid rgba(201,168,76,0.35)', borderLeft: '1px solid rgba(201,168,76,0.35)' }} />
                <div style={{ position: 'absolute', bottom: 8, right: 8, width: 14, height: 14, borderBottom: '1px solid rgba(201,168,76,0.35)', borderRight: '1px solid rgba(201,168,76,0.35)' }} />

                <p style={{ fontSize: 9, letterSpacing: '0.35em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.5)', marginBottom: 24, fontWeight: 600 }}>
                  Opening Hours
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                  {hourRows.map(([day, open, close], i) => (
                    <div
                      key={day}
                      style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 0', borderBottom: i < hourRows.length - 1 ? '1px solid rgba(201,168,76,0.06)' : 'none' }}
                    >
                      <span style={{ fontSize: 12, color: 'rgba(232,224,208,0.35)', fontWeight: 300 }}>{day}</span>
                      <span style={{ fontSize: 12, color: 'rgba(201,168,76,0.65)', letterSpacing: '0.05em' }}>{open} — {close}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </FadeIn>

        </div>
      </div>

    </div>
  )
}