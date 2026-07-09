const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:4000/api'

/**
 * Envia dados para a API em paralelo ao WhatsApp — "fire and forget".
 * Se o backend estiver fora do ar, o formulário continua funcionando
 * normalmente via WhatsApp (não bloqueia nem mostra erro ao usuário).
 */
async function postSilently(path: string, body: unknown) {
  try {
    await fetch(`${API_URL}${path}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    })
  } catch {
    // Backend indisponível não deve impedir o fluxo do WhatsApp.
    console.warn(`Não foi possível salvar em ${path} no backend (WhatsApp funcionou normalmente).`)
  }
}

export function submitQuoteToBackend(data: {
  nome: string
  empresa?: string
  telefone: string
  email: string
  tipoServico: string
  origem: string
  destino: string
  descricaoCarga: string
}) {
  const tipoServicoMap: Record<string, string> = {
    'cargas-fechadas': 'CARGAS_FECHADAS',
    'cargas-fracionadas': 'CARGAS_FRACIONADAS',
    'logistica-integrada': 'LOGISTICA_INTEGRADA',
    mudancas: 'MUDANCAS',
    'porta-a-porta': 'PORTA_A_PORTA',
  }
  return postSilently('/quotes', {
    ...data,
    tipoServico: tipoServicoMap[data.tipoServico] ?? data.tipoServico,
  })
}

export function submitContactToBackend(data: {
  nome: string
  email: string
  telefone: string
  assunto: string
  mensagem: string
}) {
  return postSilently('/contact', data)
}
