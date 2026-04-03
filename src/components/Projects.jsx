import { motion } from 'framer-motion'
import { useLang } from '../context/LangContext'
import { ScrollReveal, HoverButton } from '../lib/motion'

const DOTS = ['#f87171', '#fbbf24', '#4ade80']

const projectData = [
  {
    id: 'project1',
    nameKey: 'project_name',
    descKey: 'project_desc',
    stack: ['React', 'Node.js', 'JWT', 'REST API'],
    domain: 'english-learn.vercel.app',
    liveUrl: 'https://learning-english-blue.vercel.app/',
    githubUrl: 'https://github.com/Leizjx/LearningEnglish'
  },
  {
    id: 'project2',
    nameKey: 'project2_name',
    descKey: 'project2_desc',
    stack: ['React', 'Vite', 'Framer Motion', 'i18n'],
    domain: 'portfolio.me',
    liveUrl: '#',
    githubUrl: 'https://github.com/Leizjx/Portfolio' 
  }
]

export default function Projects() {
  const { t } = useLang()

  return (
    <section id="projects" className="section">
      <ScrollReveal className="container">
        <span className="section-label">{t('projects_label')}</span>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {projectData.map((proj) => (
            <motion.div
              key={proj.id}
              className="project-card"
              whileHover={{ scale: 1.02, boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <div style={{
                display: 'flex', alignItems: 'center', gap: '6px',
                padding: '12px 16px',
                borderBottom: '1px solid var(--border)',
                background: 'var(--bg-subtle)',
              }}>
                {DOTS.map(color => (
                  <span key={proj.id + color} style={{ width: '11px', height: '11px', borderRadius: '50%', background: color, display: 'block' }} />
                ))}
                <span style={{ marginLeft: '10px', fontSize: '12px', color: 'var(--text-faint)', fontFamily: 'monospace' }}>
                  {proj.domain}
                </span>
              </div>

              <div style={{ padding: '32px' }}>
                <h3 style={{ fontSize: '17px', fontWeight: 600, letterSpacing: '-0.01em', marginBottom: '10px' }}>
                  {t(proj.nameKey)}
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.7, maxWidth: '480px', marginBottom: '20px' }}>
                  {t(proj.descKey)}
                </p>

                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '28px' }}>
                  {proj.stack.map(tech => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                  {proj.liveUrl !== '#' && (
                    <HoverButton href={proj.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ fontSize: '13px', padding: '8px 16px' }}>
                      {t('project_btn_live')}
                    </HoverButton>
                  )}
                  <HoverButton href={proj.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ fontSize: '13px', padding: '8px 16px' }}>
                    {t('project_btn_github')}
                  </HoverButton>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  )
}
