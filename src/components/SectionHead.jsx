export function SectionHead({ eyebrow, title, lede }) {
  return (
    <div className="section-head" data-reveal>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      {title && <h2>{title}</h2>}
      {lede && <p className="lede">{lede}</p>}
    </div>
  )
}
