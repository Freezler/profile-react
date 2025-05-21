import { motion } from 'framer-motion'

interface LazyAnimatedSectionProps {
  children: React.ReactNode
  amount?: number // how much of the section must be visible to trigger (0-1)
  delay?: number // optional animation delay in seconds
}

export default function LazyAnimatedSection({ children, amount = 0.2, delay = 0 }: LazyAnimatedSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100, y: 10 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      exit={{ opacity: 0, x: -100, y: -100 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  )
}
