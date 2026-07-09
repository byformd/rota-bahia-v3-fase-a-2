const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:4000/api'

export interface TrackingEvent {
  id: string
  status: string
  location: string
  description: string
  occurredAt: string
}

export interface Shipment {
  id: string
  trackingCode: string
  origem: string
  destino: string
  status: string
  clienteNome: string
  createdAt: string
  events: TrackingEvent[]
}

export class TrackingNotFoundError extends Error {}

export async function fetchShipment(code: string): Promise<Shipment> {
  const res = await fetch(`${API_URL}/tracking/${encodeURIComponent(code)}`)

  if (res.status === 404) {
    throw new TrackingNotFoundError('Código de rastreio não encontrado.')
  }
  if (!res.ok) {
    throw new Error('Não foi possível consultar o rastreamento agora. Tente novamente em instantes.')
  }
  return res.json()
}
