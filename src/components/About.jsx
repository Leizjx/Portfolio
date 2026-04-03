import { useLang } from '../context/LangContext'
import { ScrollReveal } from '../lib/motion'

export default function About() {
  const { t } = useLang()

  return (
    <section id="about" className="section">
      <ScrollReveal className="container">
        <span className="section-label">{t('about_label')}</span>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <p style={{ fontSize: '16px', lineHeight: 1.8, maxWidth: '580px', color: 'var(--text)' }}>
            {t('about_text')}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '8px' }}>
            {/* Education Block */}
            <div id="education" className="about-block" style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', maxWidth: '580px', scrollMarginTop: '80px' }}>
              <div className="about-icon" style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'var(--bg-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text)', flexShrink: 0 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
              </div>
              <div>
                <h4 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text)', marginBottom: '4px' }}>{t('about_edu_label')}</h4>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6 }}>{t('about_edu_text')}</p>
              </div>
            </div>

            {/* Languages Block */}
            <div className="about-block" style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', maxWidth: '580px' }}>
              <div className="about-icon" style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'var(--bg-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text)', flexShrink: 0 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
              </div>
              <div>
                <h4 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text)', marginBottom: '4px' }}>{t('about_lang_label')}</h4>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6 }}>{t('about_lang_text')}</p>
              </div>
            </div>
          </div>

        </div>
      </ScrollReveal>
    </section>
  )
}
