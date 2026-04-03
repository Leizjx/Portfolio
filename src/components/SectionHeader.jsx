/** Reusable section header — left-aligned */
export default function SectionHeader({ eyebrow, title, subtitle }) {
  return (
    <div style={{ marginBottom: '48px' }}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className="section-title font-display">{title}</h2>
      {subtitle && <p className="section-sub">{subtitle}</p>}
    </div>
  )
}
