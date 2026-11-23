import { useState } from 'react'
import { profile } from '../data/portfolio'

const nav = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#formacao', label: 'Formação' },
  { href: '#contato', label: 'Contato' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a href="#topo" className="brand" aria-label={`${profile.name}, voltar ao topo`}>
          VS
        </a>
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Fechar' : 'Menu'}
        </button>
        <nav id="menu" className={open ? 'nav is-open' : 'nav'} aria-label="Seções">
          {nav.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
