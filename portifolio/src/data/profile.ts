// Textos e links gerais do portfólio (hero, sobre, formação, contato, HUD).

export const profile = {
  name: 'Guilherme Israel',
  photo: '/foto.jpeg',
  photoAlt: 'Foto de Guilherme Israel',
  badge: 'ESTUDANTE DE ADS · DISPONÍVEL',
  heroLines: ['FULL', 'STACK', 'DEV'],
  heroLead: {
    pre: 'Sou o ',
    name: 'Guilherme Israel',
    mid: ', desenvolvedor full-stack. Projeto e construo aplicações completas: ',
    apis: 'APIs REST em Java/Spring e Python/FastAPI',
    mid2: ', interfaces em ',
    ui: 'React e Angular',
    post: ', bancos relacionais e infraestrutura em nuvem.',
  },
  heroSub:
    'Estudante de Análise e Desenvolvimento de Sistemas no Centro Universitário Senac Nações Unidas · AWS Academy Cloud Foundations.',
  stats: [
    { k: 'CLASSE', v: 'Full-Stack Dev' },
    { k: 'MAIN', v: 'Java · Spring · React' },
    { k: 'GUILDA', v: 'ADS · Senac Nações Unidas' },
    { k: 'BASE', v: 'São Paulo, BR' },
    { k: 'STATUS', v: 'Disponível p/ projetos' },
  ],
}

export const about = {
  highlight: 'Arquitetura em camadas, código tipado e software que roda de verdade, ',
  highlightAccent: 'do schema do banco ao último componente da interface.',
  body:
    'Modelo bancos relacionais com normalização e integridade, exponho as regras de negócio por APIs REST bem definidas e construo interfaces componentizadas em React, Angular e TypeScript. Separo responsabilidades em rotas, serviços e repositórios, versiono o banco com migrações e trato cada projeto como um sistema completo, com backend, dados e interface integrados.',
}

export const education = {
  course: 'Análise e Desenvolvimento de Sistemas',
  school: 'Centro Universitário Senac Nações Unidas · Tecnólogo',
  end: '07/2027',
}

export interface ContactLink {
  label: string
  value: string
  href: string
  color: string
  external: boolean
}

export const contacts: ContactLink[] = [
  {
    label: 'E-MAIL',
    value: 'guilhermeisrael03@gmail.com',
    href: 'mailto:guilhermeisrael03@gmail.com',
    color: 'var(--pink)',
    external: false,
  },
  {
    label: 'GITHUB',
    value: 'Guilherme3578',
    href: 'https://github.com/Guilherme3578',
    color: 'var(--cyan)',
    external: true,
  },
  {
    label: 'LINKEDIN',
    value: 'in/guilhermeisrael',
    href: 'https://www.linkedin.com/in/guilhermeisrael/',
    color: 'var(--yellow)',
    external: true,
  },
  {
    label: 'WHATSAPP',
    value: '(11) 99921-5885',
    href: 'https://wa.me/5511999215885',
    color: 'var(--green)',
    external: true,
  },
]

export const sections = [
  { id: 'sobre', label: 'SOBRE' },
  { id: 'missao', label: 'MISSÃO' },
  { id: 'conquistas', label: 'CONQUISTAS' },
  { id: 'fases', label: 'FASES' },
  { id: 'contato', label: 'CONTATO' },
] as const

export type SectionId = (typeof sections)[number]['id']

export const footer = {
  copy: '© 2026 GUILHERME ISRAEL · SÃO PAULO, BR',
  tip: 'DICA: ↑ ↑ ↓ ↓ ← → ← → B A',
  top: '↑ VOLTAR AO TOPO',
}
