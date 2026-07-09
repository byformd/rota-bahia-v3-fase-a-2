import { Truck, Workflow, Home as HomeIcon, PackageCheck } from 'lucide-react'
import { PageHero } from '@/components/layout/PageHero'
import { ServiceDetail } from '@/components/sections/ServiceDetail'
import { CTA } from '@/components/sections/CTA'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'

export default function Servicos() {
  useDocumentTitle(
    'Serviços',
    'Cargas fechadas, fracionadas, logística integrada, mudanças e porta a porta — conheça todos os serviços da Rota Bahia.'
  )

  return (
    <>
      <PageHero
        eyebrow="Serviços"
        title="Um serviço para cada tipo de carga"
        description="Da carga fechada à mudança residencial: mesmo planejamento, mesmo rastreamento, mesmo compromisso com o prazo."
      />

      <ServiceDetail
        icon={Truck}
        title="Cargas Fechadas e Fracionadas"
        description="Frete dedicado para grandes volumes, com o veículo exclusivo para sua carga, ou espaço compartilhado para volumes menores — sem abrir mão do mesmo rigor operacional."
        points={[
          'Veículo dedicado para cargas de grande volume',
          'Frete fracionado com rastreamento individual por lote',
          'Cotação por eixo, peso ou m³',
        ]}
      />
      <ServiceDetail
        icon={Workflow}
        title="Logística Integrada"
        description="Planejamento de rotas, armazenagem temporária e distribuição pensados como uma cadeia única — do pátio de origem até a entrega final."
        points={[
          'Planejamento de rota otimizado por prazo e custo',
          'Armazenagem temporária em pátio próprio',
          'Acompanhamento consolidado de múltiplas entregas',
        ]}
        reversed
      />
      <ServiceDetail
        icon={HomeIcon}
        title="Mudanças Comerciais e Residenciais"
        description="Transporte de mudanças com embalagem especializada, seguro incluso e equipe treinada para lidar com móveis, equipamentos e itens sensíveis."
        points={[
          'Embalagem especializada para móveis e eletrônicos',
          'Seguro incluso durante todo o transporte',
          'Equipe treinada para desmontagem e remontagem',
        ]}
      />
      <ServiceDetail
        icon={PackageCheck}
        title="Porta a Porta"
        description="Coleta no endereço de origem e entrega direta no destino final, com rastreamento contínuo do início ao fim — sem etapas intermediárias."
        points={[
          'Coleta agendada no endereço de origem',
          'Rastreamento contínuo em tempo real',
          'Confirmação de entrega com assinatura digital',
        ]}
        reversed
      />

      <CTA />
    </>
  )
}
