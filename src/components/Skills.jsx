import { Fragment } from 'react'
import { useLang } from '../context/LangContext'
import { ScrollReveal } from '../lib/motion'

const skillGroups = [
  { key: 'skills_frontend', skills: ['React', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS'] },
  { key: 'skills_backend',  skills: ['Node.js', 'Express.js', 'NestJS', 'REST APIs', 'JWT'] },
  { key: 'skills_tools',    skills: ['Git', 'GitHub', 'Figma', 'VS Code'] },
]

export default function Skills() {
  const { t } = useLang()

  return (
    <section id="skills" className="section">
      <ScrollReveal className="container">
        <span className="section-label" style={{ marginBottom: '40px', display: 'block' }}>{t('skills_label')}</span>

        <div className="skills-grid" style={{ 
          display: 'grid', 
          gridTemplateColumns: 'minmax(120px, auto) 1fr', 
          gap: '32px', 
          alignItems: 'start' 
        }}>
          {skillGroups.map(({ key, skills }) => (
            <Fragment key={key}>
              {/* Category Name */}
              <div className="skills-category-title" style={{ 
                fontSize: '14px', 
                color: 'var(--text-faint)', 
                fontWeight: 600, 
                paddingTop: '10px' 
              }}>
                {t(key)}
              </div>

              {/* Skills Chips */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                {skills.map(skill => (
                  <div key={skill} className="skill-chip" style={{
                    padding: '10px 18px',
                    borderRadius: '8px',
                    border: '1px solid var(--border)',
                    background: 'var(--bg)',
                    color: 'var(--text)',
                    fontSize: '14px',
                    fontWeight: 500,
                    boxShadow: '0 2px 4px rgba(0,0,0,0.02), 0 1px 0 rgba(0,0,0,0.02)',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    cursor: 'default'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)'
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'none'
                    e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.02), 0 1px 0 rgba(0,0,0,0.02)'
                  }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </Fragment>
          ))}
        </div>
      </ScrollReveal>
    </section>
  )
}
