import { useLang } from '../context/LangContext'
import { ScrollReveal } from '../lib/motion'

export default function Activities() {
  const { t } = useLang()

  return (
    <section id="activities" className="section" style={{ paddingTop: '40px' }}>
      <ScrollReveal className="container">
        <span className="section-label">{t('act_label')}</span>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          {/* Act 1 */}
          <div style={{ 
            display: 'flex', gap: '16px', alignItems: 'flex-start',
            padding: '24px', borderRadius: '12px', border: '1px solid var(--border)',
            background: 'var(--bg-subtle)'
          }}>
            <div style={{ 
              width: '40px', height: '40px', borderRadius: '8px', 
              background: 'var(--btn-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', 
              color: 'var(--btn-text)', flexShrink: 0 
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></path><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path></svg>
            </div>
            <div>
              <h4 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text)', marginBottom: '6px' }}>{t('act_1_title')}</h4>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6 }}>{t('act_1_desc')}</p>
            </div>
          </div>

          {/* Act 2 */}
          <div style={{ 
            display: 'flex', gap: '16px', alignItems: 'flex-start',
            padding: '24px', borderRadius: '12px', border: '1px solid var(--border)',
            background: 'var(--bg-subtle)'
          }}>
            <div style={{ 
              width: '40px', height: '40px', borderRadius: '8px', 
              background: 'var(--btn-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', 
              color: 'var(--btn-text)', flexShrink: 0 
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
            </div>
            <div>
              <h4 style={{ fontSize: '15px', fontWeight: 600, color: 'var(--text)', marginBottom: '6px' }}>{t('act_2_title')}</h4>
              <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6 }}>{t('act_2_desc')}</p>
            </div>
          </div>

        </div>
      </ScrollReveal>
    </section>
  )
}
