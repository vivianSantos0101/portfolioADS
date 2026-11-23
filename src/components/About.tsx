import { profile } from '../data/portfolio'

export default function About() {
  return (
    <section id="sobre" className="section">
      <div className="container about">
        <figure className="about-photo">
          <img src={profile.photo} alt={`Foto de ${profile.name}`} width={320} height={440} loading="lazy" />
        </figure>
        <div className="about-text">
          <h2 className="section-title">Da enfermagem ao código</h2>
          {profile.about.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
