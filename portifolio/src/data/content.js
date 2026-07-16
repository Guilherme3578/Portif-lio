export const profile = {
  name: 'Guilherme Israel',
  kicker: 'ESTUDANTE DE ADS · DISPONÍVEL PARA PROJETOS',
  email: 'guilhermeisrael03@gmail.com',
  github: 'https://github.com/Guilherme3578',
  linkedin: 'https://linkedin.com/in/guilhermeisrael/',
  whatsapp: 'https://wa.me/5511999215885',
  cv: '/cv-guilherme-israel.pdf',
  photoReady: true,
  photoSrc: '/profile.jpg',
}

export const stacks = [
  'Java',
  'Spring',
  'JavaScript',
  'TypeScript',
  'React',
  'Angular',
  'Node',
  'Python',
  'MySQL',
  'REST API',
  'Figma',
  'HTML',
  'CSS',
]

export const about = {
  statement:
    'Aprendo construindo — cada projeto novo é uma chance de transformar teoria em código que funciona de verdade.',
  paragraph:
    'Sou estudante de Análise e Desenvolvimento de Sistemas e uso cada matéria como ponto de partida para um projeto pessoal. Gosto de entender o problema de ponta a ponta: modelar o backend, desenhar a API e construir a interface que o usuário vai usar de fato.',
}

export const education = {
  status: 'EM CURSO',
  course: 'Análise e Desenvolvimento de Sistemas',
  institution: 'Centro Universitário Senac Nações Unidas · Tecnólogo',
  finish: 'Conclusão 07/2027',
}

// Mídias ainda não enviadas ficam com src: null e aparecem como placeholder.
// Para publicar uma mídia real, coloque o arquivo em /public/projects/<slug>/
// e preencha o src correspondente (ex.: '/projects/chatbot-barbearia/video.mp4').
export const projects = [
  {
    slug: 'chatbot-barbearia',
    number: '01',
    title: 'Chatbot Barbearia',
    tagline: 'Atendimento e agendamento automatizados',
    stack: ['Java', 'Spring', 'Angular'],
    year: '2026',
    category: 'Projeto pessoal',
    github: 'https://github.com/Guilherme3578/Projeto-Barbearia-',
    thumb: '/projects/chatbot-barbearia/print-1.png',
    about: [
      'O Chatbot Barbearia é um sistema de atendimento automatizado para barbearias, feito para reduzir o tempo gasto marcando horários por mensagem. O cliente conversa com o bot, escolhe o serviço e o profissional, e recebe as opções de horário disponíveis em tempo real.',
      'O backend em Java com Spring Boot expõe a API de agendamentos, profissionais, serviços e horários disponíveis, enquanto o front em Angular concentra a interface de chat e o fluxo de conversa guiado.',
    ],
    highlights: [
      'Fluxo de conversa guiado, sem precisar digitar comandos',
      'Geração automática de horários disponíveis por profissional',
      'API REST em Spring Boot para agendamentos, clientes e serviços',
    ],
    media: {
      video: { src: '/projects/chatbot-barbearia/video.mp4' },
      prints: [
        { src: '/projects/chatbot-barbearia/print-1.png' },
        { src: '/projects/chatbot-barbearia/print-2.png' },
        { src: '/projects/chatbot-barbearia/print-3.png' },
      ],
    },
  },
  {
    slug: 'vortex',
    number: '02',
    title: 'Vortex',
    tagline: 'Aplicação web completa',
    stack: ['Node', 'TypeScript', 'React'],
    year: '2026',
    category: 'Projeto pessoal',
    github: 'https://github.com/Guilherme3578/Vortex',
    thumb: '/projects/vortex/print-1.png',
    about: [
      'Vortex é uma aplicação web completa construída para explorar uma stack moderna de ponta a ponta, do banco de dados até a interface.',
      'O backend em Node.js e TypeScript cuida da lógica de negócio e da persistência dos dados, e o frontend em React consome essa API para entregar uma experiência rápida e reativa.',
    ],
    highlights: [
      'Stack unificada em TypeScript no back e no front',
      'API própria consumida por uma interface em React',
      'Projeto usado para aprofundar boas práticas de arquitetura full-stack',
    ],
    media: {
      video: { src: '/projects/vortex/video.mp4' },
      prints: [
        { src: '/projects/vortex/print-1.png' },
        { src: '/projects/vortex/print-2.png' },
        { src: '/projects/vortex/print-3.png' },
      ],
    },
  },
  {
    slug: 'estoque-pdv',
    number: '03',
    title: 'Estoque PDV',
    tagline: 'Gestão de estoque e ponto de venda',
    stack: ['Java', 'Spring', 'Angular'],
    year: '2026',
    category: 'Projeto pessoal',
    github: 'https://github.com/Guilherme3578/Estoque_PDV',
    thumb: '/projects/estoque-pdv/print-1.png',
    about: [
      'Estoque PDV é um sistema de gestão de estoque e ponto de venda pensado para pequenos negócios, cobrindo desde o cadastro de produtos até o registro de vendas.',
      'O backend em Java com Spring Boot organiza produtos, estoque e vendas, enquanto o frontend em Angular oferece as telas de operação do dia a dia do PDV.',
    ],
    highlights: [
      'Controle de estoque integrado ao fluxo de vendas',
      'Cadastro e gestão de produtos',
      'Backend em Spring Boot com API REST dedicada ao PDV',
    ],
    media: {
      video: { src: '/projects/estoque-pdv/video.mp4' },
      prints: [
        { src: '/projects/estoque-pdv/print-1.png' },
        { src: '/projects/estoque-pdv/print-2.png' },
        { src: '/projects/estoque-pdv/print-3.png' },
      ],
    },
  },
  {
    slug: 'landing-essenza',
    number: '04',
    title: 'Landing Page Essenza',
    tagline: 'Página institucional / landing',
    stack: ['HTML', 'CSS', 'JS'],
    year: '2026',
    category: 'Projeto pessoal',
    github: 'https://github.com/Guilherme3578/Essenza',
    thumb: '/projects/landing-essenza/print-1.png',
    about: [
      'Landing Page Essenza é uma página institucional criada para apresentar uma marca de forma direta, com foco em performance e em uma primeira impressão limpa.',
      'Construída com HTML, CSS e JavaScript puros, sem frameworks, para manter o carregamento leve e o código simples de manter.',
    ],
    highlights: [
      'HTML, CSS e JS puros, sem dependências de frameworks',
      'Foco em performance e primeira impressão',
      'Layout responsivo pensado para conversão',
    ],
    media: {
      video: { src: '/projects/landing-essenza/video.mp4' },
      prints: [
        { src: '/projects/landing-essenza/print-1.png' },
        { src: '/projects/landing-essenza/print-2.png' },
        { src: '/projects/landing-essenza/print-3.png' },
      ],
    },
  },
]
