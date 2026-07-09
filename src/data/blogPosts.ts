export interface BlogPost {
  slug: string
  category: 'Logística' | 'Tecnologia' | 'Rotas' | 'Institucional'
  title: string
  excerpt: string
  date: string
  readMinutes: number
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'rastreamento-tempo-real-logistica',
    category: 'Tecnologia',
    title: 'Como o rastreamento em tempo real está mudando a logística rodoviária',
    excerpt: 'Entenda como a telemetria embarcada reduz atrasos e aumenta a previsibilidade das entregas.',
    date: '2026-05-12',
    readMinutes: 6,
  },
  {
    slug: 'eixo-bahia-sao-paulo-logistica',
    category: 'Rotas',
    title: 'Por que o eixo Bahia–São Paulo é estratégico para o comércio nacional',
    excerpt: 'Um panorama sobre volume de cargas, sazonalidade e desafios logísticos nessa rota.',
    date: '2026-04-02',
    readMinutes: 5,
  },
  {
    slug: 'como-escolher-transportadora',
    category: 'Logística',
    title: '5 critérios para escolher uma transportadora para sua empresa',
    excerpt: 'Pontualidade, seguro, rastreamento e comunicação: o que avaliar antes de fechar contrato.',
    date: '2026-03-18',
    readMinutes: 4,
  },
  {
    slug: 'manutencao-preventiva-frota',
    category: 'Institucional',
    title: 'Manutenção preventiva: o segredo por trás da nossa pontualidade',
    excerpt: 'Como a rotina de manutenção da frota impacta diretamente o cumprimento de prazos.',
    date: '2026-02-09',
    readMinutes: 5,
  },
  {
    slug: 'mudancas-comerciais-planejamento',
    category: 'Logística',
    title: 'Mudança comercial sem dor de cabeça: um guia de planejamento',
    excerpt: 'Checklist prático para empresas que vão mudar de endereço sem parar a operação.',
    date: '2026-01-22',
    readMinutes: 6,
  },
  {
    slug: 'tecnologia-embarcada-caminhoes',
    category: 'Tecnologia',
    title: 'O que é telemetria veicular e por que ela importa para o seu frete',
    excerpt: 'Da localização por GPS aos alertas de manutenção: como a tecnologia embarcada protege sua carga.',
    date: '2025-12-14',
    readMinutes: 5,
  },
]
