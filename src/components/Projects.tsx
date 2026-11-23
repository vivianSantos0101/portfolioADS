import { projects, type Project } from '../data/portfolio'

function Stack({ items }: { items: string[] }) {
  return (
    <ul className="stack" aria-label="Tecnologias">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

function ProjectEntry({ project }: { project: Project }) {
  return (
    <article className="project" id={project.slug}>
      <div className="project-media" aria-hidden="true">
        {project.image ? (
          <img src={project.image} alt="" width={120} height={120} loading="lazy" />
        ) : (
          <span className="project-monogram">{project.title.charAt(0)}</span>
        )}
      </div>

      <div className="project-body">
        <p className="project-context">
          {project.context}
          {project.role && <span className="project-role">{project.role}</span>}
        </p>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-summary">{project.summary}</p>

        {project.stages && (
          <ol className="stages" aria-label={`Etapas do ${project.title}`}>
            {project.stages.map((stage) => (
              <li key={stage.label} className="stage">
                <span className="stage-label">{stage.label}</span>
                <h4>{stage.title}</h4>
                <p>{stage.description}</p>
                {stage.repo && (
                  <a href={stage.repo} target="_blank" rel="noreferrer">
                    Código da {stage.label}
                  </a>
                )}
              </li>
            ))}
          </ol>
        )}

        <ul className="project-highlights">
          {project.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>

        <Stack items={project.stack} />

        <div className="project-links">
          {project.repo ? (
            <a href={project.repo} target="_blank" rel="noreferrer">
              Ver código
            </a>
          ) : (
            <span className="private-note">Código privado, disponível sob pedido</span>
          )}
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noreferrer">
              Abrir site
            </a>
          )}
          {project.video && (
            <a href={project.video} target="_blank" rel="noreferrer">
              Assistir demonstração
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const semesters = [...new Set(projects.map((p) => p.semester))].sort((a, b) => b - a)

  return (
    <section id="projetos" className="section section-tinted">
      <div className="container">
        <h2 className="section-title">Projetos</h2>
        <p className="section-lead">
          O que construí semestre a semestre na FATEC, do mais recente ao primeiro.
        </p>

        <div className="timeline">
          {semesters.map((semester) => {
            const group = projects.filter((p) => p.semester === semester)
            return (
              <section key={semester} className="timeline-group" aria-labelledby={`sem-${semester}`}>
                <h3 className="timeline-marker" id={`sem-${semester}`}>
                  <span className="timeline-number">{semester}º</span> semestre
                  <span className="timeline-period">{group[0].period}</span>
                </h3>
                <div className="timeline-items">
                  {group.map((project) => (
                    <ProjectEntry key={project.slug} project={project} />
                  ))}
                </div>
              </section>
            )
          })}
        </div>
      </div>
    </section>
  )
}
