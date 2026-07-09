import { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainLayout } from '@/layouts/MainLayout'

const Home = lazy(() => import('@/pages/Home'))
const Empresa = lazy(() => import('@/pages/Empresa'))
const Servicos = lazy(() => import('@/pages/Servicos'))
const Frota = lazy(() => import('@/pages/Frota'))
const Rastreamento = lazy(() => import('@/pages/Rastreamento'))
const Cotacao = lazy(() => import('@/pages/Cotacao'))
const Contato = lazy(() => import('@/pages/Contato'))
const Blog = lazy(() => import('@/pages/Blog'))
const NotFound = lazy(() => import('@/pages/NotFound'))

function RouteFallback() {
  return <div className="min-h-[60vh]" aria-hidden="true" />
}

export default function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/empresa" element={<Empresa />} />
            <Route path="/servicos" element={<Servicos />} />
            <Route path="/frota" element={<Frota />} />
            <Route path="/rastreamento" element={<Rastreamento />} />
            <Route path="/cotacao" element={<Cotacao />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </BrowserRouter>
  )
}
