/**
 * FONTE ÚNICA DE IMAGENS — troque aqui quando as fotos oficiais chegarem.
 *
 * Hoje: fotografias temporárias do Pexels (licença gratuita para uso
 * comercial, sem necessidade de atribuição — https://www.pexels.com/license/).
 * Cada entrada documenta o fotógrafo/fonte para referência.
 *
 * Para trocar por fotos oficiais: substitua apenas o valor de `src` por um
 * caminho local (ex: '/images/hero.jpg', colocando o arquivo em /public/images)
 * ou pela nova URL. Nenhum componente precisa ser alterado.
 */

export const images = {
  hero: {
    src: 'https://images.pexels.com/photos/34365732/pexels-photo-34365732.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Caminhão de carga em rodovia brasileira sob céu azul',
    credit: 'Messala Ciulla / Pexels',
  },
  about: {
    src: 'https://images.pexels.com/photos/5668906/pexels-photo-5668906.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Caminhão em rodovia com neblina em Sumaré, Brasil',
    credit: 'Polizelj / Pexels',
  },
  facility: {
    src: 'https://images.pexels.com/photos/10697106/pexels-photo-10697106.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Interior de centro de distribuição com prateleiras organizadas',
    credit: 'On Shot / Pexels',
  },
  fleet: {
    src: 'https://images.pexels.com/photos/14971465/pexels-photo-14971465.jpeg?auto=compress&cs=tinysrgb&w=1200',
    alt: 'Caminhões em rodovia durante o entardecer',
    credit: 'Cyndi / Pexels',
  },
} as const

export type ImageKey = keyof typeof images
