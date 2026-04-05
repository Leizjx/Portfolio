import { useLang } from '../context/LangContext'
import { ScrollReveal } from '../lib/motion'

export default function Goals() {
  const { t } = useLang()

  const goals = [
    {
      key: 'short',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
      accentVar: '--accent',
      accentBgColor: 'rgba(99,102,241,0.08)',
      accentBorderColor: 'rgba(99,102,241,0.2)',
      titleKey: 'goals_short_title',
      descKey: 'goals_short_desc',
    },
    {
      key: 'long',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
      ),
      accentVar: '--accent',
      accentBgColor: 'rgba(168,85,247,0.08)',
      accentBorderColor: 'rgba(168,85,247,0.2)',
      titleKey: 'goals_long_title',
      descKey: 'goals_long_desc',
    },
  ]

  return (
    <section id="goals" className="section" style={{ paddingTop: '40px' }}>
      <ScrollReveal className="container">
        <span className="section-label" style={{ marginBottom: '32px', display: 'block' }}>
          {t('goals_label')}
        </span>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {goals.map(({ key, icon, accentBgColor, accentBorderColor, titleKey, descKey }) => (
            <div
              key={key}
              style={{
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-start',
                padding: '28px 28px',
                borderRadius: '14px',
                border: `1px solid var(--border)`,
                background: 'var(--bg-subtle)',
                transition: 'transform 0.2s, box-shadow 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.06)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'none'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Icon Badge */}
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '12px',
                  background: accentBgColor,
                  border: `1.5px solid ${accentBorderColor}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: key === 'short' ? '#6366f1' : '#a855f7',
                  flexShrink: 0,
                  marginTop: '2px',
                }}
              >
                {icon}
              </div>

              {/* Content */}
              <div style={{ flex: 1 }}>
                <h4
                  style={{
                    fontSize: '15px',
                    fontWeight: 700,
                    color: key === 'short' ? '#6366f1' : '#a855f7',
                    marginBottom: '10px',
                    letterSpacing: '0.01em',
                  }}
                >
                  {t(titleKey)}
                </h4>
                <p
                  style={{
                    fontSize: '14.5px',
                    color: 'var(--text-muted)',
                    lineHeight: 1.75,
                  }}
                >
                  {t(descKey)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  )
}
