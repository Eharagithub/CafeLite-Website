import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  delay?: number       // optional delay in seconds
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  className?: string
}

export default function FadeIn({ children, delay = 0, direction = 'up', className = '' }: FadeInProps) {
  const directionMap = {
    up:    { y: 40, x: 0 },
    down:  { y: -40, x: 0 },
    left:  { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none:  { x: 0, y: 0 },
  }

  const { x, y } = directionMap[direction]

  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* 
💡 What's happening?

initial — starting state (invisible, offset)
whileInView — animates when element scrolls into view
viewport={{ once: true }} — only animates once, not every scroll
transition — controls speed, delay, and easing curve
delay? — the ? means it's optional with a default of 0
*/