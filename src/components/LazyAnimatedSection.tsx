import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface LazyAnimatedSectionProps {
  children: React.ReactNode
}

export default function LazyAnimatedSection({ children }: LazyAnimatedSectionProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{ width: '100%' }}
    >
      {children}
    </motion.div>
  )
}
