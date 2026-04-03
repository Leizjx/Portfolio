import { useLang } from '../context/LangContext'
import { ScrollReveal } from '../lib/motion'

const contactLinks = [
  { key: 'contact_number', href: 'tel:+8433671851', display: '0335671851', external: false },
  { key: 'contact_email', href: 'mailto:ngocphuctizi@gmail.com', display: 'ngocphuctizi@gmail.com', external: false },
  { key: 'contact_github', href: 'https://github.com/Leizjx', display: 'github.com/phucDev', external: true },
  { key: 'contact_linkedin', href: 'https://www.linkedin.com/in/ngocphucdev/', display: 'linkedin.com/in/NgocPhucDev', external: true },
  { key: 'contact_facebook', href: 'https://www.facebook.com/ngoc.phuc.152806/', display: 'facebook.com/NgocPhuc', external: true },
]

export default function Contact() {
  const { t } = useLang()

  return (
    <section id="contact" className="section">
      <ScrollReveal className="container">
        <span className="section-label">{t('contact_label')}</span>
        <p style={{ fontSize: '15px', color: 'var(--text-muted)', maxWidth: '400px', lineHeight: 1.7, marginBottom: '32px' }}>
          {t('contact_intro')}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {contactLinks.map(({ key, href, display, external }) => (
            <div key={key} style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
              <span style={{ fontSize: '13px', color: 'var(--text-faint)', fontWeight: 500, minWidth: '60px' }}>
                {t(key)}
              </span>
              <a
                href={href}
                className="contact-link"
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
              >
                {display}
              </a>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  )
}
