export interface Cert {
  title: string
  issuer: string
  description: string
  featured?: boolean
}

export const certs: Cert[] = [
  {
    title: 'AWS Academy Graduate — Cloud Foundations',
    issuer: 'AWS',
    featured: true,
    description:
      'Capacitação aplicada em infraestrutura e serviços em nuvem (AWS). Domínio sobre a configuração de instâncias (EC2), redes (VPC) e práticas de Cloud Security voltadas para armazenamento e servidores de banco de dados.',
  },
  {
    title: 'Conceitos Básicos de Hardware',
    issuer: 'CISCO',
    description:
      'Domínio da arquitetura de hardware e infraestrutura. Capacidade técnica para identificar, montar e diagnosticar componentes (CPU, RAM, periféricos), conhecimento essencial para atuação direta em suporte técnico e manutenção corporativa.',
  },
  {
    title: 'Database Foundations',
    issuer: 'ORACLE',
    description:
      'Fundamentos de bancos de dados, incluindo conceitos de Database, sistemas de gerenciamento de banco de dados (DBMS), modelo relacional, tabelas, registros, campos, chaves primárias e estrangeiras, relacionamentos, SQL e fundamentos de gerenciamento de dados.',
  },
  {
    title: 'Database Design',
    issuer: 'ORACLE',
    description:
      'Estruturação e modelagem de bancos de dados relacionais. Criação de consultas (queries) em SQL, gestão de relacionamentos, chaves e aplicação de regras de normalização de dados para garantir integridade.',
  },
  {
    title: 'Java Foundations',
    issuer: 'ORACLE',
    description:
      'Desenvolvimento de lógicas de programação sólidas utilizando Orientação a Objetos em Java. Aplicação de estruturas de repetição, métodos e manipulação de arrays para criar algoritmos robustos e resolver problemas computacionais.',
  },
]
