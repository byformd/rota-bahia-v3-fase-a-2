import { Hero } from '@/components/sections/Hero'
import { TrustedBy } from '@/components/sections/TrustedBy'
import { About } from '@/components/sections/About'
import { Services } from '@/components/sections/Services'
import { ProcessTimeline } from '@/components/sections/ProcessTimeline'
import { Stats } from '@/components/sections/Stats'
import { WowRouteMap } from '@/components/sections/WowRouteMap'
import { TechShowcase } from '@/components/sections/TechShowcase'
import { FleetAndFacility } from '@/components/sections/FleetAndFacility'
import { Differentials } from '@/components/sections/Differentials'
import { CTA } from '@/components/sections/CTA'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'

export default function Home() {
  useDocumentTitle(
    'Transporte de Cargas entre Bahia e São Paulo',
    'Cargas fechadas, fracionadas e mudanças com rastreamento em tempo real, frota própria e 100% de pontualidade.'
  )

  return (
    <>
      <Hero />
      <TrustedBy />
      <About />
      <Stats />
      <Services />
      <ProcessTimeline />
      <WowRouteMap />
      <TechShowcase />
      <FleetAndFacility />
      <Differentials />
      <CTA />
    </>
  )
}
