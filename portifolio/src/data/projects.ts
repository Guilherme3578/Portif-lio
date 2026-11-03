export interface ProjectStep {
  t: string
  d: string
}

export interface Project {
  slug: string
  num: string
  title: string
  tagline: string
  stackline: string
  stacks: string[]
  role: string
  year: string
  kind: string
  github: string
  description: [string, string]
  highlights: string[]
  steps: [ProjectStep, ProjectStep, ProjectStep, ProjectStep]
}

export const projects: Project[] = [
  {
    slug: 'chatbot-barbearia',
    num: '01',
    title: 'Chatbot Barbearia',
    tagline: 'Chatbot de agendamento com API REST em Spring e painel administrativo em Angular.',
    stackline: 'Java · Spring · Angular',
    stacks: ['Java', 'Spring', 'Angular', 'REST API', 'MySQL'],
    role: 'Full-stack',
    year: '2026',
    kind: 'Projeto pessoal',
    github: 'https://github.com/Guilherme3578/Projeto-Barbearia-',
    description: [
      'Sistema que automatiza o atendimento de barbearias: o cliente conversa com o bot, consulta a disponibilidade em tempo real e confirma o horário sem intervenção humana.',
      'O backend em Java com Spring expõe uma API REST responsável por clientes, serviços e agenda, com persistência em MySQL. O front em Angular consome essa API em duas frentes: a interface de conversa e o painel em que o barbeiro gerencia os agendamentos.',
    ],
    highlights: [
      'API REST em Spring com persistência em MySQL',
      'Consulta de disponibilidade em tempo real',
      'Painel administrativo em Angular',
    ],
    steps: [
      { t: 'Entrada', d: 'O cliente inicia a conversa e seleciona o serviço desejado.' },
      { t: 'Disponibilidade', d: 'O bot consulta o endpoint de agenda e retorna os horários livres.' },
      { t: 'Persistência', d: 'O agendamento é validado na API e gravado no MySQL.' },
      { t: 'Gestão', d: 'O painel Angular lista e atualiza os agendamentos do dia.' },
    ],
  },
  {
    slug: 'vortex',
    num: '02',
    title: 'Vortex',
    tagline: 'Aplicação full-stack tipada de ponta a ponta: API em Node + TypeScript e SPA em React.',
    stackline: 'Node · TypeScript · React',
    stacks: ['Node', 'TypeScript', 'React', 'REST API'],
    role: 'Full-stack',
    year: '2026',
    kind: 'Projeto pessoal',
    github: 'https://github.com/Guilherme3578/Vortex',
    description: [
      'Vortex é uma aplicação web completa com TypeScript nas duas pontas. A tipagem vale do servidor à interface, o que reduz erros de integração entre as camadas e facilita a evolução do código.',
      'No backend, o servidor Node expõe rotas REST com a lógica de negócio isolada em serviços. No front, uma SPA em React organizada em componentes consome a API e gerencia o estado da aplicação.',
    ],
    highlights: [
      'TypeScript no backend e no frontend',
      'API REST com regras isoladas em serviços',
      'SPA em React componentizada',
    ],
    steps: [
      { t: 'Interface', d: 'Componentes React consomem a API e reagem ao estado.' },
      { t: 'API', d: 'Servidor Node expõe rotas REST tipadas em TypeScript.' },
      { t: 'Regras', d: 'A lógica de negócio fica isolada em serviços tipados.' },
      { t: 'Dados', d: 'Respostas validadas e tipadas do servidor até a tela.' },
    ],
  },
  {
    slug: 'estoque-pdv',
    num: '03',
    title: 'Estoque PDV',
    tagline: 'Controle de estoque integrado a ponto de venda, com baixa automática a cada venda.',
    stackline: 'Java · Spring · Angular',
    stacks: ['Java', 'Spring', 'Angular', 'MySQL'],
    role: 'Full-stack',
    year: '2026',
    kind: 'Projeto pessoal',
    github: 'https://github.com/Guilherme3578/Estoque_PDV',
    description: [
      'Sistema de gestão que integra estoque e ponto de venda (PDV): cada venda registrada no caixa dá baixa automática no inventário, mantendo as quantidades consistentes sem lançamento manual.',
      'O backend em Java com Spring e o banco MySQL concentram as regras de entrada, saída e venda. O front em Angular foi pensado para operação rápida no balcão e para relatórios de movimentação voltados ao gestor.',
    ],
    highlights: [
      'Baixa automática de estoque a cada venda',
      'Regras de negócio centralizadas no backend Spring',
      'Relatórios de entrada, saída e movimentação',
    ],
    steps: [
      { t: 'Cadastro', d: 'Produtos, preços e quantidades cadastrados no sistema.' },
      { t: 'Venda', d: 'O PDV registra a venda de forma rápida no balcão.' },
      { t: 'Baixa', d: 'O estoque é atualizado automaticamente a cada venda.' },
      { t: 'Relatórios', d: 'O gestor acompanha entradas, saídas e movimentação.' },
    ],
  },
  {
    slug: 'landing-essenza',
    num: '04',
    title: 'Landing Page Essenza',
    tagline: 'Landing page institucional, do protótipo no Figma ao código, com foco em conversão.',
    stackline: 'HTML · CSS · JS',
    stacks: ['HTML', 'CSS', 'JavaScript', 'Figma'],
    role: 'Design e front-end',
    year: '2026',
    kind: 'Projeto pessoal',
    github: 'https://github.com/Guilherme3578/Essenza',
    description: [
      'Landing page da Essenza desenvolvida do zero: identidade e layout prototipados no Figma e traduzidos em HTML, CSS e JavaScript, sem frameworks.',
      'HTML semântico, CSS responsivo e JavaScript enxuto para manter o carregamento leve, com atenção à hierarquia tipográfica, ao ritmo visual e às chamadas para ação.',
    ],
    highlights: [
      'Do Figma ao código, sem frameworks',
      'Layout responsivo',
      'HTML semântico e carregamento leve',
    ],
    steps: [
      { t: 'Protótipo', d: 'Layout e identidade definidos no Figma.' },
      { t: 'Estrutura', d: 'HTML semântico organizado por seções.' },
      { t: 'Estilo', d: 'CSS responsivo com foco em tipografia e ritmo.' },
      { t: 'Interação', d: 'JavaScript para os comportamentos da página.' },
    ],
  },
  {
    slug: 'financas-pessoais',
    num: '05',
    title: 'Finanças Pessoais',
    tagline: 'Sistema financeiro com FastAPI, PostgreSQL e React: recorrências, orçamentos, previsão e Power BI.',
    stackline: 'Python · FastAPI · React',
    stacks: ['Python', 'FastAPI', 'SQLAlchemy', 'Alembic', 'PostgreSQL', 'React', 'Vite', 'Power BI'],
    role: 'Full-stack',
    year: '2026',
    kind: 'Projeto pessoal',
    github: 'https://github.com/Guilherme3578/financas_pessoais',
    description: [
      'Aplicação local para organizar receitas, despesas, recorrências e orçamentos mensais. Gera lançamentos recorrentes, controla limites por categoria, mostra a agenda de pendências e faz previsão mensal a partir dos lançamentos cadastrados.',
      'Backend em Python com FastAPI, SQLAlchemy e migrações com Alembic sobre PostgreSQL, organizado em rotas, schemas, models, repositories e services. O front em React com Vite consome a API, e os dados podem ser exportados em CSV/Excel ou consultados no Power BI Desktop.',
    ],
    highlights: [
      'Camadas: rotas, schemas, models, repositories e services',
      'Migrações versionadas com Alembic',
      'Exportação CSV/Excel e integração com Power BI',
      'Scripts de backup, restauração e verificação',
    ],
    steps: [
      { t: 'Lançamentos', d: 'Receitas e despesas cadastradas por categoria, competência e status.' },
      { t: 'Planejamento', d: 'Recorrências geram lançamentos e orçamentos limitam cada categoria.' },
      { t: 'Análise', d: 'Dashboard com evolução mensal, gastos por categoria e previsão.' },
      { t: 'Dados', d: 'Exportação em CSV/Excel, Power BI e backup do PostgreSQL.' },
    ],
  },
  {
    slug: 'agente-llm',
    num: '06',
    title: 'Agente LLM',
    tagline: 'Agente de IA com function calling: o LLM decide quando executar ferramentas Python.',
    stackline: 'Python · Ollama · SQLite',
    stacks: ['Python', 'Ollama', 'SQLite'],
    role: 'Backend / IA',
    year: '2026',
    kind: 'Projeto pessoal',
    github: 'https://github.com/Guilherme3578/agente-llm',
    description: [
      'Agente de IA em Python que, com base na pergunta do usuário, decide se precisa chamar uma ferramenta (uma função Python) para responder, em vez de apenas gerar texto. Roda localmente com Ollama, sem custo de API.',
      'A arquitetura é em camadas, inspirada em arquitetura hexagonal: domain com as ferramentas, application com o AgentService e o ToolRegistry, infrastructure com o cliente do LLM e persistence com o histórico em SQLite.',
    ],
    highlights: [
      'Function calling com LLM local via Ollama',
      'Arquitetura hexagonal em 4 camadas',
      'Tools: calculadora e consulta de CEP (ViaCEP)',
      'Histórico de interações em SQLite',
    ],
    steps: [
      { t: 'Pergunta', d: 'O usuário faz uma pergunta em linguagem natural.' },
      { t: 'Decisão', d: 'O LLM avalia se precisa usar alguma ferramenta disponível.' },
      { t: 'Execução', d: 'O agente executa a função Python e devolve o resultado ao LLM.' },
      { t: 'Histórico', d: 'A resposta final é gerada e a interação fica salva no SQLite.' },
    ],
  },
]

/** Cores rotativas dos stages (rosa, ciano, amarelo, verde). */
export const stageColors = ['var(--pink)', 'var(--cyan)', 'var(--yellow)', 'var(--green)'] as const

export function stageColor(index: number): string {
  return stageColors[index % stageColors.length]
}
