import { skills } from '../data/portfolio'

const groups = [
  { title: 'Técnicas', items: skills.technical, variant: 'strong' },
  { title: 'Interpessoais', items: skills.soft, variant: 'soft' },
  { title: 'Idiomas', items: skills.languages, variant: 'soft' },
] as const

export default function Skills() {
  return (
    <section id="habilidades" className="section">
      <div className="container">
        <h2 className="section-title">Habilidades</h2>
        <div className="skills">
          {groups.map((group) => (
            <div key={group.title} className="skill-group">
              <h3>{group.title}</h3>
              <ul className={`chips chips-${group.variant}`}>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
