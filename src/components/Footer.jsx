import { useLang } from '../context/LangContext'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '32px 0' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
        <span style={{ fontSize: '13px', color: 'var(--text-faint)' }}>
          Mai Ngoc Phuc · {new Date().getFullYear()}
        </span>
        <span style={{ fontSize: '13px', color: 'var(--text-faint)' }}>
          {t('footer_built')}
        </span>
      </div>
    </footer>
  )
}
