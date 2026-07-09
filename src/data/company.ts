/**
 * Fonte única de dados institucionais da Rota Bahia.
 * Trocar aqui reflete em todo o site (Header, Footer, botões de contato, Schema.org).
 */

export const company = {
  name: 'Rota Bahia',
  legalName: 'Rota Bahia Transportadora',
  tagline: 'Sua carga no destino certo, na hora certa.',
  foundingYear: 2017, // "quase 10 anos" em 2026

  whatsapp: {
    number: '5571981532882', // (71) 98153-2882, formato E.164 sem +
    display: '(71) 98153-2882',
    defaultMessage: 'Olá! Quero solicitar uma cotação de frete com a Rota Bahia.',
  },

  email: 'rotabahiatransportadora@gmail.com',

  phones: {
    matriz: '(71) 3599-5073',
    filial: '(11) 2189-0622',
  },

  addresses: {
    matriz: {
      label: 'Matriz — Simões Filho, BA',
      street: 'Rod. BA 093, Km 06/07, nº 738, G20',
      city: 'Simões Filho',
      state: 'BA',
      zip: '43700-000',
    },
    filial: {
      label: 'Filial — Guarulhos, SP',
      street: 'Rua Soldado Eurípedes de Lima, nº 36',
      city: 'Guarulhos',
      state: 'SP',
      zip: '02178-030',
    },
  },

  social: {
    instagram: 'https://www.instagram.com/rotabahiatransportes/',
    facebook: 'https://www.facebook.com/rota.bahia',
  },
} as const

export const whatsappHref = (message?: string) =>
  `https://wa.me/${company.whatsapp.number}?text=${encodeURIComponent(
    message ?? company.whatsapp.defaultMessage
  )}`

export const navLinks = [
  { label: 'Empresa', href: '/empresa' },
  { label: 'Serviços', href: '/servicos' },
  { label: 'Frota', href: '/frota' },
  { label: 'Rastreamento', href: '/rastreamento' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contato', href: '/contato' },
] as const
