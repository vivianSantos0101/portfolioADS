# Vivian Santos · Portfólio

Portfólio pessoal em **React + TypeScript** com todos os meus trabalhos da faculdade de Análise e Desenvolvimento de Sistemas na **FATEC São José dos Campos**.

🔗 **Site no ar:** [LINK-DO-DEPLOY](LINK-DO-DEPLOY)

[![React](https://img.shields.io/badge/React-19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
[![EmailJS](https://img.shields.io/badge/EmailJS-FF6C37?style=for-the-badge&logo=maildotru&logoColor=white)](https://www.emailjs.com/)

---

## 📌 Sumário

- [Sobre mim](#-sobre-mim)
- [Projetos](#-projetos)
- [Funcionalidades do site](#-funcionalidades-do-site)
- [Tecnologias](#-tecnologias)
- [Como rodar localmente](#-como-rodar-localmente)
- [Como atualizar o conteúdo](#-como-atualizar-o-conteúdo)
- [Formulário de contato (EmailJS)](#-formulário-de-contato-emailjs)
- [Deploy](#-deploy)
- [Estrutura de pastas](#-estrutura-de-pastas)
- [Da versão Express para a versão React](#-da-versão-express-para-a-versão-react)
- [Contato](#-contato)

---

## 👩‍💻 Sobre mim

Fui enfermeira antes de programar. Hoje estudo **Análise e Desenvolvimento de Sistemas na FATEC São José dos Campos** e levo para o desenvolvimento a mesma atenção aos detalhes, comunicação clara e calma sob pressão que a enfermagem me ensinou.

Gosto de construir soluções completas, da interface até a regra de negócio e o banco de dados, e tenho interesse especial em aplicações com **inteligência artificial**. Quase todos os meus projetos foram feitos em equipe, com **Scrum** e validação com clientes reais, pela metodologia de Aprendizagem por Projeto Integrado (API) da FATEC.

🌎 Inglês e espanhol fluentes.

---

## 🚀 Projetos

### 3º semestre (ago – dez 2025)

#### EntreNova Flix · Projeto Integrador (API) · Equipe Sul
Sistema que aplica entrevistas estruturadas com empresas e gera, com IA, diagnósticos e trilhas de treinamento personalizadas.
- Mini diagnóstico para visitantes e relatório completo para gestores de RH
- Chatbot que continua a entrevista depois do formulário
- Relatórios gerados com Gemini e OpenAI e enviados por e-mail

`React` `TypeScript` `Node.js` `Express` `Supabase` `Gemini` `OpenAI` `Chart.js` · [Repositório](https://github.com/Equipe-SUL/EntreNova-Flix)

#### Aerocode · Técnicas de Programação (AV1 → AV2 → AV3)
Sistema de gestão da produção de aeronaves que construí em três etapas, cada uma subindo um nível:

| Etapa | O que mudou | Tecnologias | Código |
|---|---|---|---|
| **AV1** | Aplicação de linha de comando com as regras de negócio modeladas em classes | `TypeScript` `POO` | [AV1](https://github.com/vivianSantos0101/AV1) |
| **AV2** | Interface web com rotas e telas por perfil | `React` `TypeScript` `Vite` | [AV2](https://github.com/vivianSantos0101/AV2) |
| **AV3** | API REST, banco de dados, login com JWT e três perfis de acesso | `Express` `Prisma` `MariaDB` `JWT` `Zod` | [AV3](https://github.com/vivianSantos0101/AV3) |

#### Portfólio em Express · Projeto pessoal
Primeira versão deste portfólio, renderizada no servidor, com painel de administrador para editar projetos, habilidades e idiomas em MySQL e formulário que envia e-mail.

`Node.js` `Express` `EJS` `MySQL` `Nodemailer` · [Repositório](https://github.com/vivianSantos0101/portfolioExpress)

### 2º semestre (fev – jun 2025)

#### BotEcho · Projeto Integrador (API) · Equipe Echo
IDE desktop com IA local que analisa, explica e otimiza código Python, executa o código, gera documentação e integra com o GitHub.

`Java` `Ollama` `LLM` `Python` · [Repositório](https://github.com/EquipeEcho/botEcho)

#### Gerenciador de Cursos · Linguagem de Programação
Sistema desktop para uma universidade cadastrar cursos e alunos e emitir relatórios, com persistência em MySQL usando o padrão DAO.

`Java` `Swing` `MySQL` `JDBC` · [Repositório](https://github.com/vivianSantos0101/GerenciadorCurso)

### 1º semestre (ago – dez 2024)

#### EasyScrum · Projeto Integrador (API) · Equipe Echo · **Product Owner**
Site educativo que ensina a metodologia Scrum de forma simples, com textos, imagens e áudios produzidos pela equipe. Apresentado na Feira de Soluções da FATEC.

`Python` `Flask` `HTML` `CSS` `JavaScript` `Bootstrap` · [Repositório](https://github.com/EquipeEcho/EasyScrum) · [Vídeo](https://youtu.be/RhitfLJMUBE)

---

## ✨ Funcionalidades do site

- **Linha do tempo de projetos por semestre**, do mais recente ao primeiro
- **Evolução do Aerocode** mostrada etapa por etapa (AV1 → AV2 → AV3)
- **Formulário de contato** com validação e envio de e-mail pelo EmailJS, sem precisar de servidor
- Proteção simples contra spam (campo invisível *honeypot*)
- **Responsivo**, com menu próprio para celular
- **Acessível**: navegação por teclado, foco visível, link "Pular para o conteúdo", mensagens de erro ligadas aos campos e animação desligada para quem prefere movimento reduzido
- Todo o conteúdo em **um único arquivo tipado** (`src/data/portfolio.ts`)

---

## 🛠️ Tecnologias

| Área | Tecnologia |
|---|---|
| Interface | React 19, TypeScript |
| Build | Vite |
| Estilo | CSS puro com variáveis (sem framework) |
| E-mail | EmailJS |
| Qualidade | Oxlint, checagem de tipos com `tsc` |
| Deploy | Vercel (gratuito) |

---

## 💻 Como rodar localmente

Pré-requisito: [Node.js](https://nodejs.org/) 20 ou mais recente.

```bash
git clone https://github.com/vivianSantos0101/portfolio.git
cd portfolio
npm install
npm run dev
```

Abra `http://localhost:5173`.

| Comando | O que faz |
|---|---|
| `npm run dev` | Servidor de desenvolvimento com recarga automática |
| `npm run build` | Checa os tipos e gera a versão de produção em `dist/` |
| `npm run preview` | Abre localmente a versão de produção |
| `npm run lint` | Procura problemas no código |

---

## ✏️ Como atualizar o conteúdo

Todo o texto do site fica em [`src/data/portfolio.ts`](src/data/portfolio.ts). Para adicionar um projeto, copie um item da lista `projects` e altere os campos:

```ts
{
  slug: 'meu-projeto',
  title: 'Meu Projeto',
  semester: 4,                       // agrupa na linha do tempo
  period: 'fev – jun 2026',
  context: 'Projeto Integrador (API) · Equipe X',
  role: 'Scrum Master',              // opcional
  summary: 'Uma frase dizendo o que o projeto faz.',
  highlights: ['Destaque 1', 'Destaque 2'],
  stack: ['React', 'Node.js'],
  image: minhaLogo,                  // opcional: importe de src/assets/projects
  repo: 'https://github.com/...',
  demo: 'https://...',               // opcional
  video: 'https://youtu.be/...',     // opcional
}
```

Faça o commit e o deploy acontece sozinho.

---

## 📨 Formulário de contato (EmailJS)

O formulário envia e-mail direto do navegador pelo [EmailJS](https://www.emailjs.com/), que tem plano gratuito de 200 e-mails por mês.

1. Crie uma conta no EmailJS e conecte seu Gmail em **Email Services**. Anote o **Service ID**.
2. Em **Email Templates**, crie um template usando estas variáveis:
   ```
   Assunto: Nova mensagem do portfólio: {{motivo}}

   Nome: {{nome}}
   E-mail: {{email}}
   Empresa: {{empresa}}
   Urgência: {{urgencia}}

   {{mensagem}}
   ```
   Em **Reply To**, coloque `{{email}}` para responder direto para a pessoa. Anote o **Template ID**.
3. Em **Account → General**, copie a **Public Key**.
4. Copie `.env.example` para `.env` e preencha as três variáveis. No deploy, cadastre as mesmas variáveis nas configurações do projeto.

Sem essas variáveis o site funciona normalmente e o formulário mostra o e-mail para contato direto.

---

## 🌐 Deploy

O site é hospedado gratuitamente na **[Vercel](https://vercel.com/)**:

1. Entre na Vercel com sua conta do GitHub.
2. Clique em **Add New → Project** e importe este repositório. A Vercel detecta o Vite sozinha.
3. Em **Environment Variables**, adicione as três variáveis do EmailJS.
4. Clique em **Deploy**. A cada `git push` na branch `main`, o site é atualizado automaticamente.

---

## 📁 Estrutura de pastas

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/            # foto e logos dos projetos (WebP)
│   ├── components/        # uma seção do site por componente
│   │   ├── Header.tsx
│   │   ├── Hero.tsx       # nome + animação do ECG que vira </>
│   │   ├── About.tsx
│   │   ├── Projects.tsx   # linha do tempo por semestre
│   │   ├── Skills.tsx
│   │   ├── Education.tsx
│   │   ├── Contact.tsx    # formulário + validação + EmailJS
│   │   └── Footer.tsx
│   ├── data/
│   │   └── portfolio.ts   # TODO o conteúdo do site
│   ├── App.tsx
│   ├── index.css          # design tokens e estilos
│   └── main.tsx
├── .env.example
└── index.html
```

---

## 🔄 Da versão Express para a versão React

Este projeto substitui o meu [portfólio em Express](https://github.com/vivianSantos0101/portfolioExpress). O que mudou:

| Antes (Express + EJS + MySQL) | Agora (React + TypeScript) |
|---|---|
| Páginas renderizadas no servidor | Página única renderizada no navegador |
| Conteúdo no MySQL, editado por painel admin | Conteúdo em um arquivo tipado, editado por commit |
| E-mail com Nodemailer no servidor | E-mail com EmailJS direto do navegador |
| Precisava de servidor e banco para rodar | Site estático, com hospedagem gratuita |

A lógica de validação do formulário foi mantida: campos obrigatórios, formato de e-mail e o campo extra que aparece quando o assunto é "Outro".

---

## 📫 Contato

- 📧 [vivian.stoliveira@gmail.com](mailto:vivian.stoliveira@gmail.com)
- 💼 [LinkedIn](https://www.linkedin.com/in/vivianstoliveira/)
- 💻 [GitHub](https://github.com/vivianSantos0101)
