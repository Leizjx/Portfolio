import { useState, useEffect } from 'react'
import { useLang } from '../context/LangContext'
import { useTheme } from '../context/ThemeContext'
import { animate } from 'framer-motion'

// Import the logo image
import logoImg from '../assets/images/logo.png'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const { lang, setLang, t } = useLang()
  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
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

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      height: '56px',
      background: scrolled ? (theme === 'dark' ? 'rgba(10,10,10,0.85)' : 'rgba(255,255,255,0.9)') : 'transparent',
      borderBottom: `1px solid ${scrolled ? 'var(--border)' : 'transparent'}`,
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
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
          marginRight: 'auto', // Tự đẩy các phần tử khác ra xa sang phải
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

        {/* Right side navigation menu */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <nav style={{ display: 'flex', gap: '4px' }}>
            <a href="#about" className="nav-link" onClick={(e) => handleNavClick(e, '#about')}>{t('nav_about')}</a>
            <a href="#education" className="nav-link" onClick={(e) => handleNavClick(e, '#education')}>{t('nav_education')}</a>
            <a href="#projects" className="nav-link" onClick={(e) => handleNavClick(e, '#projects')}>{t('nav_projects')}</a>
            <a href="#experience" className="nav-link" onClick={(e) => handleNavClick(e, '#experience')}>{t('nav_experience')}</a>
            <a href="#contact" className="nav-link" onClick={(e) => handleNavClick(e, '#contact')}>{t('nav_contact')}</a>
          </nav>

          <div style={{ display: 'flex', alignItems: 'center', marginLeft: '12px', gap: '8px' }}>
            {/* Language toggle */}
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
                    transition: 'background 0.15s, color 0.15s',
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
                width: '28px', height: '28px',
                borderRadius: '6px', border: '1px solid var(--border)',
                background: 'var(--bg-subtle)', color: 'var(--text)',
                cursor: 'pointer', transition: 'background 0.15s'
              }}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
