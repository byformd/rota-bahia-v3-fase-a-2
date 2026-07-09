import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y } from 'swiper/modules'
import { Truck, Gauge, ShieldCheck, Boxes } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface Vehicle {
  name: string
  type: string
  capacity: string
  note: string
}

const vehicles: Vehicle[] = [
  { name: 'Carreta Baú', type: 'Cargas fechadas', capacity: 'até 27 toneladas', note: 'Ideal para grandes volumes entre BA e SP' },
  { name: 'Truck 3/4', type: 'Cargas fracionadas', capacity: 'até 4 toneladas', note: 'Flexível para rotas urbanas e regionais' },
  { name: 'Bitrem', type: 'Cargas fechadas', capacity: 'até 37 toneladas', note: 'Maior capacidade da frota, uso em longas distâncias' },
  { name: 'Furgão de Mudanças', type: 'Mudanças', capacity: 'até 40m³', note: 'Compartimento adaptado para mobiliário e itens frágeis' },
]

export function FleetGallery() {
  return (
    <div className="fleet-swiper">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={20}
        slidesPerView={1.1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3 },
        }}
        className="!pb-14"
      >
        {vehicles.map((v) => (
          <SwiperSlide key={v.name}>
            <div className="flex h-full flex-col rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-surface)] shadow-[var(--shadow-card)]">
              <div className="relative flex aspect-[4/3] items-center justify-center rounded-t-[var(--radius-card)] bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-deep)]">
                <Truck size={56} strokeWidth={1} className="text-white/25" />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-[var(--color-ink-faint)]">
                  {v.type}
                </span>
                <h3 className="mt-1.5 font-display text-lg font-medium tracking-tight text-[var(--color-ink)]">
                  {v.name}
                </h3>
                <p className="mt-3 text-[0.875rem] leading-relaxed text-[var(--color-ink-soft)]">{v.note}</p>
                <div className="mt-5 flex items-center gap-2 border-t border-[var(--color-line)] pt-4 text-[0.8125rem] text-[var(--color-ink-soft)]">
                  <Gauge size={15} />
                  Capacidade {v.capacity}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="mt-2 flex flex-wrap gap-6 text-[0.875rem] text-[var(--color-ink-soft)]">
        <span className="flex items-center gap-2">
          <ShieldCheck size={16} className="text-[var(--color-track)]" /> Manutenção preventiva programada
        </span>
        <span className="flex items-center gap-2">
          <Boxes size={16} className="text-[var(--color-track)]" /> Rastreamento por telemetria 24h
        </span>
      </div>

      <style>{`
        .fleet-swiper .swiper-slide { height: auto; }
        .fleet-swiper .swiper-button-next,
        .fleet-swiper .swiper-button-prev {
          color: var(--color-primary);
          width: 2.5rem;
          height: 2.5rem;
          background: var(--color-surface);
          border: 1px solid var(--color-line);
          border-radius: 999px;
          box-shadow: var(--shadow-card);
        }
        .fleet-swiper .swiper-button-next::after,
        .fleet-swiper .swiper-button-prev::after { font-size: 0.9rem; font-weight: 700; }
        .fleet-swiper .swiper-pagination-bullet-active { background: var(--color-primary); }
      `}</style>
    </div>
  )
}
