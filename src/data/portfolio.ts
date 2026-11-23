// Todo o conteúdo do site fica aqui.
// Para atualizar o portfólio, edite este arquivo e faça um commit — o deploy é automático.

import aerocode from '../assets/projects/aerocode.webp'
import botecho from '../assets/projects/botecho.webp'
import easyscrum from '../assets/projects/easyscrum.webp'
import entrenova from '../assets/projects/entrenova.webp'
import gerenciador from '../assets/projects/gerenciador-cursos.webp'
import photo from '../assets/vivian.webp'

export type Stage = {
  label: string
  title: string
  description: string
  stack: string[]
  repo?: string
}

export type Project = {
  slug: string
  title: string
  /** Período em que o projeto foi feito, usado para agrupar na linha do tempo */
  semester: number
  period: string
  context: string
  summary: string
  highlights: string[]
  role?: string
  stack: string[]
  image?: string
  repo: string
  demo?: string
  video?: string
  /** Projetos que evoluíram em etapas (ex.: AV1 → AV2 → AV3) */
  stages?: Stage[]
}

export const profile = {
  name: 'Vivian Santos',
  headline: 'Desenvolvedora full stack em formação',
  intro:
    'Fui enfermeira antes de programar. Hoje construo software do jeito que aprendi a cuidar de pessoas: entendendo o problema antes de propor a solução.',
  about: [
    'Estudo Análise e Desenvolvimento de Sistemas na FATEC São José dos Campos. Na enfermagem aprendi a trabalhar sob pressão, a me comunicar com clareza e a dar atenção aos detalhes, e levo isso para cada projeto.',
    'Gosto de construir soluções completas: da interface que a pessoa usa até a regra de negócio e o banco de dados. Tenho interesse especial em aplicações com inteligência artificial e em produtos que resolvem problemas reais.',
    'Quase todos os meus projetos da faculdade foram feitos em equipe, com Scrum, sprints e validação com clientes reais, pela metodologia de Aprendizagem por Projeto Integrado (API) da FATEC.',
  ],
  photo,
  location: 'São José dos Campos, SP',
  email: 'vivian.stoliveira@gmail.com',
  links: {
    github: 'https://github.com/vivianSantos0101',
    linkedin: 'https://www.linkedin.com/in/vivianstoliveira/',
    instagram: 'https://www.instagram.com/vivian_msants/',
  },
}

export const projects: Project[] = [
  {
    slug: 'entrenova',
    title: 'EntreNova Flix',
    semester: 3,
    period: 'ago – dez 2025',
    context: 'Projeto Integrador (API) · Equipe Sul',
    summary:
      'Sistema que aplica entrevistas estruturadas com empresas e gera, com IA, diagnósticos e trilhas de treinamento personalizadas.',
    highlights: [
      'Mini diagnóstico para visitantes e relatório completo para gestores de RH',
      'Chatbot que continua a entrevista depois do formulário',
      'Relatórios gerados com modelos de IA (Gemini e OpenAI) e enviados por e-mail',
      'Painel com gráficos para acompanhar os diagnósticos',
    ],
    stack: ['React', 'TypeScript', 'Node.js', 'Express', 'Supabase', 'Gemini', 'OpenAI', 'Chart.js'],
    image: entrenova,
    repo: 'https://github.com/Equipe-SUL/EntreNova-Flix',
  },
  {
    slug: 'aerocode',
    title: 'Aerocode',
    semester: 3,
    period: 'ago – dez 2025',
    context: 'Técnicas de Programação · AV1, AV2 e AV3',
    summary:
      'Sistema de gestão da produção de aeronaves que construí em três etapas, cada uma subindo um nível: de aplicação de terminal a sistema web completo.',
    highlights: [
      'Modelagem orientada a objetos de aeronaves, peças, etapas, testes e funcionários',
      'Autenticação com JWT e três perfis de acesso (administrador, engenheiro e operador)',
      'Testes de carga dos endpoints com geração de gráficos',
    ],
    stack: ['TypeScript', 'React', 'Node.js', 'Express', 'Prisma', 'MariaDB', 'JWT'],
    image: aerocode,
    repo: 'https://github.com/vivianSantos0101/AV3',
    stages: [
      {
        label: 'AV1',
        title: 'Linha de comando',
        description: 'CLI em TypeScript com as regras de negócio modeladas em classes e geração de relatórios.',
        stack: ['TypeScript', 'POO', 'Node.js'],
        repo: 'https://github.com/vivianSantos0101/AV1',
      },
      {
        label: 'AV2',
        title: 'Interface gráfica',
        description: 'O mesmo sistema ganhou uma interface web em React com rotas e telas por perfil.',
        stack: ['React', 'TypeScript', 'Vite'],
        repo: 'https://github.com/vivianSantos0101/AV2',
      },
      {
        label: 'AV3',
        title: 'Full stack',
        description: 'API REST com Express e Prisma, banco MariaDB, login com JWT e senhas com bcrypt.',
        stack: ['Express', 'Prisma', 'MariaDB', 'JWT', 'Zod'],
        repo: 'https://github.com/vivianSantos0101/AV3',
      },
    ],
  },
  {
    slug: 'portfolio-express',
    title: 'Portfólio em Express',
    semester: 3,
    period: 'ago – dez 2025',
    context: 'Projeto pessoal',
    summary:
      'Primeira versão do meu portfólio, renderizada no servidor, com painel administrativo para editar o conteúdo sem mexer no código.',
    highlights: [
      'Login de administrador com sessão',
      'CRUD de projetos, habilidades e idiomas em MySQL',
      'Formulário de propostas que envia e-mail com Nodemailer',
    ],
    stack: ['Node.js', 'Express', 'EJS', 'MySQL', 'Nodemailer'],
    repo: 'https://github.com/vivianSantos0101/portfolioExpress',
  },
  {
    slug: 'botecho',
    title: 'BotEcho',
    semester: 2,
    period: 'fev – jun 2025',
    context: 'Projeto Integrador (API) · Equipe Echo',
    summary:
      'IDE desktop com inteligência artificial local que analisa, explica e otimiza código Python e gera gráficos com Matplotlib.',
    highlights: [
      'Análise e otimização de código com LLM rodando localmente (Ollama)',
      'Execução do código e geração automática de documentação dentro da IDE',
      'Integração com GitHub para versionamento e versão executável',
    ],
    stack: ['Java', 'Ollama', 'LLM', 'Python'],
    image: botecho,
    repo: 'https://github.com/EquipeEcho/botEcho',
  },
  {
    slug: 'gerenciador-cursos',
    title: 'Gerenciador de Cursos',
    semester: 2,
    period: 'fev – jun 2025',
    context: 'Linguagem de Programação · 2ª avaliação',
    summary: 'Sistema desktop para uma universidade cadastrar cursos e alunos e emitir relatórios.',
    highlights: [
      'Telas em Java Swing para cursos, alunos e relatórios',
      'Persistência em MySQL com padrão DAO e fábrica de conexões',
      'Manual do usuário e script SQL documentados',
    ],
    stack: ['Java', 'Swing', 'MySQL', 'JDBC'],
    image: gerenciador,
    repo: 'https://github.com/vivianSantos0101/GerenciadorCurso',
  },
  {
    slug: 'easyscrum',
    title: 'EasyScrum',
    semester: 1,
    period: 'ago – dez 2024',
    context: 'Projeto Integrador (API) · Equipe Echo',
    role: 'Product Owner',
    summary:
      'Site educativo que ensina a metodologia Scrum de forma simples, com textos, imagens e áudios produzidos pela equipe.',
    highlights: [
      'Atuei como Product Owner: backlog, prioridades e validação das entregas',
      'Conteúdo pensado para leitores sem experiência em metodologias ágeis',
      'Apresentado na Feira de Soluções da FATEC',
    ],
    stack: ['Python', 'Flask', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    image: easyscrum,
    repo: 'https://github.com/EquipeEcho/EasyScrum',
    video: 'https://youtu.be/RhitfLJMUBE',
  },
]

export const skills = {
  technical: [
    'JavaScript',
    'TypeScript',
    'React',
    'Node.js',
    'Express',
    'Java',
    'Python',
    'MySQL',
    'Prisma',
    'Git e GitHub',
    'APIs REST',
    'LLMs',
  ],
  soft: [
    'Comunicação clara',
    'Trabalho em equipe',
    'Resolução de problemas',
    'Adaptabilidade',
    'Gestão do tempo',
    'Criatividade',
  ],
  languages: ['Português (nativo)', 'Inglês (fluente)', 'Espanhol (fluente)'],
}

export const education = [
  {
    course: 'Análise e Desenvolvimento de Sistemas',
    institution: 'FATEC São José dos Campos',
    period: '2024 – em andamento',
  },
]

export const certifications = [
  { name: 'NDG Linux', institution: 'Cisco Networking Academy' },
  { name: 'IT Essentials', institution: 'Cisco Networking Academy' },
  { name: 'Introdução à Programação Orientada a Objetos', institution: 'Fundação Bradesco' },
  { name: 'Análise de Dados no Power BI', institution: 'Fundação Bradesco' },
]
