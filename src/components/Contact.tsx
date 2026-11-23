import { useState, type ChangeEvent, type FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import { profile } from '../data/portfolio'

type FormData = {
  nome: string
  email: string
  empresa: string
  motivo: '' | 'oportunidade' | 'projeto' | 'outro'
  outroMotivo: string
  urgencia: '' | 'baixa' | 'media' | 'alta'
  mensagem: string
  /** Campo invisível: se vier preenchido, é robô */
  site: string
}

type Status = 'idle' | 'sending' | 'sent' | 'error'

const empty: FormData = {
  nome: '',
  email: '',
  empresa: '',
  motivo: '',
  outroMotivo: '',
  urgencia: '',
  mensagem: '',
  site: '',
}

const motivoLabel: Record<Exclude<FormData['motivo'], ''>, string> = {
  oportunidade: 'Oportunidade de estágio ou emprego',
  projeto: 'Proposta de projeto',
  outro: 'Outro assunto',
}

const urgenciaLabel: Record<Exclude<FormData['urgencia'], ''>, string> = {
  baixa: 'Sem pressa',
  media: 'Nas próximas semanas',
  alta: 'Urgente',
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Mesma lógica de validação do portfólio em Express, agora no navegador
function validate(data: FormData) {
  const errors: Partial<Record<keyof FormData, string>> = {}
  if (!data.nome.trim()) errors.nome = 'Informe seu nome.'
  if (!data.email.trim()) errors.email = 'Informe um e-mail para eu responder.'
  else if (!emailRegex.test(data.email)) errors.email = 'Esse e-mail não parece válido. Confira se tem @ e domínio.'
  if (!data.motivo) errors.motivo = 'Escolha o assunto.'
  if (data.motivo === 'outro' && !data.outroMotivo.trim()) errors.outroMotivo = 'Conte em poucas palavras qual é o assunto.'
  if (!data.urgencia) errors.urgencia = 'Escolha a urgência.'
  if (data.mensagem.trim().length < 10) errors.mensagem = 'Escreva uma mensagem com pelo menos 10 caracteres.'
  return errors
}

const config = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined,
}
const isConfigured = Boolean(config.serviceId && config.templateId && config.publicKey)

export default function Contact() {
  const [data, setData] = useState<FormData>(empty)
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})
  const [status, setStatus] = useState<Status>('idle')

  function update(e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = e.target
    setData((d) => ({ ...d, [name]: value }))
    if (errors[name as keyof FormData]) setErrors((err) => ({ ...err, [name]: undefined }))
  }

  async function submit(e: FormEvent) {
    e.preventDefault()
    if (data.site) return // robô

    const found = validate(data)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      const first = Object.keys(found)[0]
      document.getElementById(`f-${first}`)?.focus()
      return
    }

    if (!isConfigured) {
      setStatus('error')
      return
    }

    setStatus('sending')
    try {
      await emailjs.send(
        config.serviceId!,
        config.templateId!,
        {
          nome: data.nome,
          email: data.email,
          empresa: data.empresa || 'Não informada',
          motivo: data.motivo === 'outro' ? `Outro: ${data.outroMotivo}` : motivoLabel[data.motivo as 'projeto'],
          urgencia: urgenciaLabel[data.urgencia as 'baixa'],
          mensagem: data.mensagem,
        },
        { publicKey: config.publicKey! },
      )
      setStatus('sent')
      setData(empty)
    } catch (err) {
      console.error('Falha ao enviar pelo EmailJS:', err)
      setStatus('error')
    }
  }

  const fieldError = (name: keyof FormData) =>
    errors[name] ? (
      <p className="field-error" id={`e-${name}`}>
        {errors[name]}
      </p>
    ) : null

  const a11y = (name: keyof FormData) => ({
    id: `f-${name}`,
    name,
    'aria-invalid': Boolean(errors[name]),
    'aria-describedby': errors[name] ? `e-${name}` : undefined,
  })

  return (
    <section id="contato" className="section">
      <div className="container contact">
        <div className="contact-intro">
          <h2 className="section-title">Vamos conversar</h2>
          <p>
            Estou buscando estágio e oportunidades como desenvolvedora. Também topo conversar sobre projetos e
            trocar ideias sobre tecnologia.
          </p>
          <p>
            Prefere e-mail direto? Escreva para <a href={`mailto:${profile.email}`}>{profile.email}</a> ou me chame no{' '}
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            .
          </p>
        </div>

        {status === 'sent' ? (
          <div className="form-done" role="status">
            <h3>Mensagem enviada</h3>
            <p>Obrigada pelo contato! Respondo no e-mail que você informou, normalmente em até dois dias úteis.</p>
            <button className="button button-ghost" onClick={() => setStatus('idle')}>
              Enviar outra mensagem
            </button>
          </div>
        ) : (
          <form className="form" onSubmit={submit} noValidate>
            <div className="form-row">
              <div className="field">
                <label htmlFor="f-nome">Nome</label>
                <input {...a11y('nome')} value={data.nome} onChange={update} autoComplete="name" />
                {fieldError('nome')}
              </div>
              <div className="field">
                <label htmlFor="f-email">E-mail</label>
                <input {...a11y('email')} type="email" value={data.email} onChange={update} autoComplete="email" />
                {fieldError('email')}
              </div>
            </div>

            <div className="field">
              <label htmlFor="f-empresa">
                Empresa <span className="optional">(opcional)</span>
              </label>
              <input {...a11y('empresa')} value={data.empresa} onChange={update} autoComplete="organization" />
            </div>

            <div className="form-row">
              <div className="field">
                <label htmlFor="f-motivo">Assunto</label>
                <select {...a11y('motivo')} value={data.motivo} onChange={update}>
                  <option value="">Escolha uma opção</option>
                  {Object.entries(motivoLabel).map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
                {fieldError('motivo')}
              </div>
              <div className="field">
                <label htmlFor="f-urgencia">Urgência</label>
                <select {...a11y('urgencia')} value={data.urgencia} onChange={update}>
                  <option value="">Escolha uma opção</option>
                  {Object.entries(urgenciaLabel).map(([value, label]) => (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  ))}
                </select>
                {fieldError('urgencia')}
              </div>
            </div>

            {data.motivo === 'outro' && (
              <div className="field">
                <label htmlFor="f-outroMotivo">Qual assunto?</label>
                <input {...a11y('outroMotivo')} value={data.outroMotivo} onChange={update} />
                {fieldError('outroMotivo')}
              </div>
            )}

            <div className="field">
              <label htmlFor="f-mensagem">Mensagem</label>
              <textarea {...a11y('mensagem')} rows={5} value={data.mensagem} onChange={update} />
              {fieldError('mensagem')}
            </div>

            <div className="honeypot" aria-hidden="true">
              <label htmlFor="f-site">Não preencha este campo</label>
              <input id="f-site" name="site" tabIndex={-1} autoComplete="off" value={data.site} onChange={update} />
            </div>

            {status === 'error' && (
              <p className="form-alert" role="alert">
                {isConfigured
                  ? 'A mensagem não foi enviada por uma falha no serviço de e-mail. Tente de novo em alguns minutos ou escreva direto para '
                  : 'O envio pelo formulário ainda não está ativo. Escreva direto para '}
                <a href={`mailto:${profile.email}`}>{profile.email}</a>.
              </p>
            )}

            <button className="button button-primary" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Enviando…' : 'Enviar mensagem'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}
