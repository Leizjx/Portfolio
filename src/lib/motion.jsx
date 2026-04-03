import { motion, animate } from 'framer-motion'

export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: 'easeInOut' } 
  }
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
}

export function ScrollReveal({ children, style, className }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      style={style}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function HoverButton({ href, className, children, target, rel, style, onClick }) {
  if (href) {
    const isAnchor = href.startsWith('#')
    
    const handleClick = (e) => {
      if (isAnchor) {
        e.preventDefault()
        const targetEl = document.querySelector(href)
        if (targetEl) {
          const top = targetEl.getBoundingClientRect().top + window.scrollY - 60
          animate(window.scrollY, top, {
            duration: 0.6,
            ease: 'easeInOut',
            onUpdate: (value) => window.scrollTo(0, value)
          })
        }
      }
      if (onClick) onClick(e)
    }

    return (
      <motion.a
        href={href}
        className={className}
        target={target}
        rel={rel}
        style={style}
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        onClick={handleClick}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      className={className}
      style={style}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  )
}
