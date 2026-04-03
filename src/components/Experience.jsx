import { useLang } from '../context/LangContext'
import { ScrollReveal } from '../lib/motion'

export default function Experience() {
  const { t } = useLang()

  const highlights = [
    t('exp_point_1'),
    t('exp_point_2'),
    t('exp_point_3'),
  ]

  return (
    <section id="experience" className="section">
      <ScrollReveal className="container">
        <span className="section-label">{t('exp_label')}</span>

        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
          <div>
            <p style={{ fontWeight: 600, fontSize: '15px' }}>{t('exp_company')}</p>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginTop: '2px' }}>{t('exp_role')}</p>
          </div>
          <span style={{ fontSize: '13px', color: 'var(--text-faint)' }}>2025</span>
        </div>

        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {highlights.map(text => (
            <li key={text} style={{ display: 'flex', gap: '12px', fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.65 }}>
              <span style={{ color: 'var(--text-faint)', flexShrink: 0, marginTop: '2px' }}>–</span>
              {text}
            </li>
          ))}
        </ul>
      </ScrollReveal>
    </section>
  )
}
