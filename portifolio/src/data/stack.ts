export type StackCategory = 'BACK' | 'FRONT' | 'DADOS' | 'CLOUD' | 'IA' | 'DESIGN'

export interface StackItem {
  mono: string
  name: string
  cat: StackCategory
}

export const categoryColor: Record<StackCategory, string> = {
  BACK: 'var(--pink)',
  FRONT: 'var(--cyan)',
  DADOS: 'var(--yellow)',
  CLOUD: 'var(--green)',
  IA: 'var(--purple)',
  DESIGN: 'var(--orange)',
}

export const inventory: StackItem[] = [
  { mono: 'JV', name: 'Java', cat: 'BACK' },
  { mono: 'SP', name: 'Spring', cat: 'BACK' },
  { mono: 'ND', name: 'Node', cat: 'BACK' },
  { mono: 'PY', name: 'Python', cat: 'BACK' },
  { mono: 'FA', name: 'FastAPI', cat: 'BACK' },
  { mono: 'RS', name: 'REST API', cat: 'BACK' },
  { mono: 'RE', name: 'React', cat: 'FRONT' },
  { mono: 'NG', name: 'Angular', cat: 'FRONT' },
  { mono: 'TS', name: 'TypeScript', cat: 'FRONT' },
  { mono: 'JS', name: 'JavaScript', cat: 'FRONT' },
  { mono: 'HC', name: 'HTML / CSS', cat: 'FRONT' },
  { mono: 'MY', name: 'MySQL', cat: 'DADOS' },
  { mono: 'PG', name: 'PostgreSQL', cat: 'DADOS' },
  { mono: 'BI', name: 'Power BI', cat: 'DADOS' },
  { mono: 'AW', name: 'AWS', cat: 'CLOUD' },
  { mono: 'AI', name: 'LLM / Ollama', cat: 'IA' },
  { mono: 'FG', name: 'Figma', cat: 'DESIGN' },
]

export const marqueeStacks = [
  'JAVA', 'SPRING', 'REACT', 'ANGULAR', 'TYPESCRIPT', 'NODE', 'PYTHON',
  'FASTAPI', 'POSTGRESQL', 'MYSQL', 'AWS', 'LLM', 'FIGMA',
]
