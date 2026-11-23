import { certifications, education } from '../data/portfolio'

export default function Education() {
  return (
    <section id="formacao" className="section section-tinted">
      <div className="container education">
        <div>
          <h2 className="section-title">Formação</h2>
          <ul className="plain-list">
            {education.map((item) => (
              <li key={item.course}>
                <strong>{item.course}</strong>
                <span>{item.institution}</span>
                <span className="muted">{item.period}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="section-title">Certificações</h2>
          <ul className="plain-list">
            {certifications.map((item) => (
              <li key={item.name}>
                <strong>{item.name}</strong>
                <span>{item.institution}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
