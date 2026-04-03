import { useState, useEffect } from 'react'
import { useLang } from '../context/LangContext'
import { useTheme } from '../context/ThemeContext'
import { animate } from 'framer-motion'

// Import the logo image
import logoImg from '../assets/images/logo.png'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { lang, setLang, t } = useLang()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    setIsMenuOpen(false) // Close mobile menu if open
    const targetEl = document.querySelector(targetId)
    if (targetEl) {
      const top = targetEl.getBoundingClientRect().top + window.scrollY - 60
      animate(window.scrollY, top, {
        duration: 0.6,
        ease: 'easeInOut',
        onUpdate: (value) => window.scrollTo(0, value)
      })
    }
  }

  const navLinks = [
    { href: '#about', label: 'nav_about' },
    { href: '#education', label: 'nav_education' },
    { href: '#projects', label: 'nav_projects' },
    { href: '#experience', label: 'nav_experience' },
    { href: '#contact', label: 'nav_contact' },
  ]

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      height: '56px',
      background: scrolled || isMenuOpen ? (theme === 'dark' ? 'rgba(10,10,10,0.95)' : 'rgba(255,255,255,0.95)') : 'transparent',
      borderBottom: `1px solid ${scrolled || isMenuOpen ? 'var(--border)' : 'transparent'}`,
      backdropFilter: scrolled || isMenuOpen ? 'blur(12px)' : 'none',
      transition: 'background 0.3s, border-color 0.3s',
    }}>
      <div className="container" style={{ maxWidth: '1040px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo */}
        <a href="/" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          width: '120px',
          height: '40px', 
          marginRight: 'auto',
          textDecoration: 'none',
          overflow: 'hidden'
        }}>
          <img src={logoImg} alt="Logo" style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            height: '90px',
            width: 'auto',
            maxWidth: 'none',
            display: 'block',
            filter: theme === 'dark' ? 'brightness(0) invert(1)' : 'brightness(0)'
          }} onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.innerText = 'Lezi.dev';
            e.target.parentElement.style.fontWeight = '600';
            e.target.parentElement.style.fontSize = '15px';
            e.target.parentElement.style.color = 'var(--text)';
          }} />
        </a>

        {/* Desktop Navigation Menu */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <nav className="nav-menu-desktop" style={{ display: 'flex', gap: '4px' }}>
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="nav-link" onClick={(e) => handleNavClick(e, link.href)}>{t(link.label)}</a>
            ))}
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {/* Language toggle - visible on desktop, hidden on tiny mobile if needed, but we keep it small */}
            <div style={{ display: 'flex', borderRadius: '6px', border: '1px solid var(--border)', overflow: 'hidden' }}>
              {['en', 'vi'].map(code => (
                <button
                  key={code}
                  onClick={() => setLang(code)}
                  style={{
                    padding: '4px 10px',
                    fontSize: '12px',
                    fontWeight: lang === code ? 600 : 400,
                    color: lang === code ? 'var(--text)' : 'var(--text-faint)',
                    background: lang === code ? 'var(--bg-subtle)' : 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'inherit',
                  }}
                >
                  {code.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                width: '32px', height: '32px',
                borderRadius: '6px', border: '1px solid var(--border)',
                background: 'var(--bg-subtle)', color: 'var(--text)',
                cursor: 'pointer'
              }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
              ) : (
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
              )}
            </button>

            {/* Hamburger Button for Mobile */}
            <button 
              className="hamburger-btn" 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              ) : (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="mobile-menu">
          {navLinks.map(link => (
            <a 
              key={link.href} 
              href={link.href} 
              className="nav-link" 
              style={{ fontSize: '16px', padding: '12px' }}
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {t(link.label)}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
