import { profile } from '../data/portfolio'

/**
 * Traçado de ECG que, no último batimento, se transforma em "</>".
 * É a única animação automática do site e respeita prefers-reduced-motion.
 */
function Heartbeat() {
  return (
    <svg className="heartbeat" viewBox="0 0 900 140" role="img" aria-label="Linha de batimento cardíaco que termina no símbolo de código">
      <path
        className="heartbeat-line"
        pathLength={1}
        d="M0 80 H140 l14 -10 l12 10 H210 l10 18 l18 -84 l20 100 l14 -34 H330 l14 -10 l12 10 H420 l10 18 l18 -84 l20 100 l14 -34 H600 l14 -10 l12 10 H700"
      />
      <g className="heartbeat-code">
        <path pathLength={1} d="M748 46 L716 80 L748 114" />
        <path pathLength={1} d="M800 36 L776 124" />
        <path pathLength={1} d="M828 46 L860 80 L828 114" />
      </g>
    </svg>
  )
}

export default function Hero() {
  return (
    <section id="topo" className="hero">
      <div className="container">
        <p className="hero-kicker">
          {profile.headline} · {profile.location}
        </p>
        <h1 className="hero-title">{profile.name}</h1>
        <Heartbeat />
        <p className="hero-intro">{profile.intro}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projetos">
            Ver projetos
          </a>
          <a className="button button-ghost" href="#contato">
            Entrar em contato
          </a>
        </div>
      </div>
    </section>
  )
}
