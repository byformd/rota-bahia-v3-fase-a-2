export const shipmentStatusLabels: Record<string, string> = {
  AGUARDANDO_COLETA: 'Aguardando coleta',
  EM_TRANSITO: 'Em trânsito',
  EM_ROTA_DE_ENTREGA: 'Em rota de entrega',
  ENTREGUE: 'Entregue',
  OCORRENCIA: 'Ocorrência',
}

export const shipmentStatusColor: Record<string, string> = {
  AGUARDANDO_COLETA: 'var(--color-ink-faint)',
  EM_TRANSITO: 'var(--color-primary)',
  EM_ROTA_DE_ENTREGA: 'var(--color-signal)',
  ENTREGUE: 'var(--color-track)',
  OCORRENCIA: '#C0392B',
}
