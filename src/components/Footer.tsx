import { profile } from '../data/portfolio'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          © {year} {profile.name}. Feito com React e TypeScript.
        </p>
        <ul className="footer-links">
          <li>
            <a href={profile.links.github} target="_blank" rel="noreferrer">GitHub</a>
          </li>
          <li>
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </li>
          <li>
            <a href={profile.links.instagram} target="_blank" rel="noreferrer">Instagram</a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
