import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLang } from '../context/LangContext'
import { fadeUp, staggerContainer, HoverButton } from '../lib/motion'

// Import the avatar image from assets
import avatarImg from '../assets/images/mnp.png'

const Typewriter = ({ text, waitTime = 1000 }) => {
  const [displayedText, setDisplayedText] = useState(text);
  const [isDeleting, setIsDeleting] = useState(true);

  useEffect(() => {
    setDisplayedText(text);
    setIsDeleting(false); // start by showing full, then pause and delete
  }, [text]);

  useEffect(() => {
    let timer;
    const currentLength = displayedText.length;
    
    if (isDeleting) {
      if (currentLength > 1) { // Stop deleting when 1 char left (e.g. 'F')
        timer = setTimeout(() => {
          setDisplayedText(prev => prev.slice(0, -1));
        }, 50); // fast erase
      } else {
        setIsDeleting(false);
      }
    } else {
      if (currentLength < text.length) {
        timer = setTimeout(() => {
          setDisplayedText(text.slice(0, currentLength + 1));
        }, 100); // normal type speed
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, waitTime); // wait when full
      }
    }
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, text, waitTime]);

  return (
    <>
      {displayedText}
      <motion.span
        animate={{ opacity: [1, 0, 1] }}
        transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
        style={{ color: 'var(--brand)', marginLeft: '2px' }}
      >
        |
      </motion.span>
    </>
  );
};

export default function Hero() {
  const { t } = useLang()

  return (
    <section
      id="hero"
      style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '56px' }}
    >
      <div className="hero-container hero-grid" style={{ padding: '64px 24px' }}>
        
        {/* Left Column: Text & CTA */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <motion.div variants={fadeUp} style={{ display: 'inline-flex', alignItems: 'center', gap: '7px', marginBottom: '24px' }}>
            <span style={{
              width: '7px', height: '7px', borderRadius: '50%',
              background: '#22c55e', flexShrink: 0,
              boxShadow: '0 0 0 2px rgba(34,197,94,0.25)',
            }} />
            <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
              {t('hero_status')}
            </span>
          </motion.div>

          <motion.h1 variants={fadeUp} style={{
            fontSize: 'clamp(2.5rem, 6vw, 4rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            marginBottom: '16px',
            color: 'var(--text)'
          }}>
            {t('hero_name')}
          </motion.h1>

          <motion.p variants={fadeUp} style={{ 
            fontSize: 'clamp(1.1rem, 2.5vw, 1.25rem)', 
            fontWeight: 500,
            color: 'var(--text)', 
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center'
          }}>
            <Typewriter text={t('hero_role')} waitTime={1000} />
          </motion.p>

          <motion.p variants={fadeUp} style={{ 
            fontSize: '16px', 
            color: 'var(--text)', 
            lineHeight: 1.7,
            maxWidth: '520px',
            marginBottom: '32px'
          }}>
            {t('hero_greeting')}
          </motion.p>

          <motion.div variants={fadeUp} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <HoverButton href="#projects" className="btn btn-primary">{t('hero_btn_projects')}</HoverButton>
            <HoverButton href="#contact" className="btn btn-outline">{t('hero_btn_contact')}</HoverButton>
          </motion.div>

          <motion.div variants={fadeUp} style={{ 
            marginTop: '28px', 
            display: 'flex', 
            alignItems: 'center', 
            gap: '12px', 
            flexWrap: 'wrap'
          }}>
            <span style={{ fontSize: '13px', color: 'var(--text-faint)' }}>
              {t('cv_download_text')}
            </span>
            <div style={{ display: 'flex', gap: '8px' }}>
              <a href="/cv-en.pdf" className="cv-link" target="_blank" rel="noopener noreferrer">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                {t('cv_en')}
              </a>
              <a href="/cv-vi.pdf" className="cv-link" target="_blank" rel="noopener noreferrer">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                {t('cv_vi')}
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Avatar/Photo & Floating Icons */}
        <motion.div
           initial={{ opacity: 0, filter: 'blur(10px)', scale: 0.95 }}
           animate={{ opacity: 1, filter: 'blur(0px)', scale: 1 }}
           transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
           className="hero-image-container"
           style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}
        >
          {/* Photo Container */}
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '500px', /* Allow the cutout image to be huge */
            zIndex: 10
          }}>
            {/* Cutout Photo */}
            <motion.img 
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              src={avatarImg} 
              alt="Mai Ngoc Phuc" 
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.15))'
              }} 
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = '<div style="width:100%;height:400px;display:flex;align-items:center;justify-content:center;color:var(--text-faint);text-align:center;padding:24px;border:1px dashed var(--border);border-radius:24px;">Photo Missing<br/>Check path: src/assets/images/mnp.png</div>'
              }} 
            />
            
            {/* Floating Tech Icons Stack (Right side of photo) */}
            <div className="hero-icons" style={{ 
                position: 'absolute', 
                right: '-30px', 
                top: '40%', 
                flexDirection: 'column', 
                gap: '12px', /* Cực kỳ sát nhau */
                color: 'var(--text-muted)' 
            }}>
             {/* React */}
             <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ margin: '0 auto' }}>
               <circle cx="12" cy="12" r="3"></circle>
               <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)"></ellipse>
               <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)"></ellipse>
               <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(150 12 12)"></ellipse>
             </svg>

             {/* JS Outline */}
             <div style={{ width: '28px', height: '28px', borderRadius: '6px', border: '2px solid currentColor', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 'bold', margin: '0 auto' }}>
               JS
             </div>

             {/* HTML5 Standard Outline/Solid */}
             <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" style={{ margin: '0 auto' }}>
               <path d="M2.066 1.633L3.923 22.45 11.996 25l8.077-2.55L21.934 1.633H2.066zM17.848 18.064l-5.852 1.838-5.857-1.838-.387-4.328h2.646l.206 2.305 3.392.936 3.4-1.077.34-3.8H8.16L8.03 10.9h7.82l.228-2.54H5.32L5.092 5.82h13.256l-.5 5.56H8.258l.118 1.328h9.32a.14.14 0 0 1 .14.126l-.427 4.77z"/>
             </svg>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
