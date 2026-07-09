import { PageHero } from '@/components/layout/PageHero'
import { MissionValues } from '@/components/sections/MissionValues'
import { Timeline } from '@/components/sections/Timeline'
import { Stats } from '@/components/sections/Stats'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'

export default function Empresa() {
  useDocumentTitle(
    'A Empresa',
    'Conheça a história, missão, visão e valores da Rota Bahia — quase 10 anos conectando Bahia e Guarulhos.'
  )

  return (
    <>
      <PageHero
        eyebrow="A empresa"
        title="Quase 10 anos ligando Bahia e Guarulhos"
        description="Toda empresa promete pontualidade. A diferença é que a gente cumpre — desde 2017, na mesma rota, com o mesmo compromisso."
      />
      <MissionValues />
      <Timeline />
      <Stats />
    </>
  )
}
