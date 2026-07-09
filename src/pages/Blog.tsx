import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock } from 'lucide-react'
import { PageHero } from '@/components/layout/PageHero'
import { Container } from '@/components/ui/Container'
import { blogPosts, type BlogPost } from '@/data/blogPosts'
import { cn } from '@/utils/cn'
import { useDocumentTitle } from '@/hooks/useDocumentTitle'

const categories: Array<BlogPost['category'] | 'Todos'> = ['Todos', 'Logística', 'Tecnologia', 'Rotas', 'Institucional']

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric' })
}

export default function Blog() {
  useDocumentTitle(
    'Blog',
    'Artigos sobre logística, rotas e tecnologia para quem decide como e com quem transportar suas cargas.'
  )

  const [filter, setFilter] = useState<(typeof categories)[number]>('Todos')
  const posts = filter === 'Todos' ? blogPosts : blogPosts.filter((p) => p.category === filter)

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Conteúdo sobre logística, rotas e tecnologia"
        description="Artigos práticos para quem decide como e com quem transportar suas cargas."
      />

      <section className="py-[var(--spacing-section)]">
        <Container>
          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={cn(
                  'rounded-full border px-4 py-2 text-[0.8125rem] font-medium transition-colors',
                  filter === cat
                    ? 'border-[var(--color-primary)] bg-[var(--color-primary)] text-white'
                    : 'border-[var(--color-line-strong)] text-[var(--color-ink-soft)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]'
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group flex flex-col overflow-hidden rounded-[var(--radius-card)] border border-[var(--color-line)] bg-[var(--color-surface)] shadow-[var(--shadow-card)] transition-shadow duration-300 hover:shadow-[var(--shadow-elevated)]"
              >
                <div className="aspect-[16/10] bg-gradient-to-br from-[var(--color-primary)]/90 to-[var(--color-primary-deep)]" />
                <div className="flex flex-1 flex-col p-6">
                  <span className="font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-[var(--color-signal)]">
                    {post.category}
                  </span>
                  <h2 className="mt-2 font-display text-[1.05rem] font-medium leading-snug tracking-tight text-[var(--color-ink)] transition-colors group-hover:text-[var(--color-primary)]">
                    {post.title}
                  </h2>
                  <p className="mt-2.5 flex-1 text-[0.875rem] leading-relaxed text-[var(--color-ink-soft)]">
                    {post.excerpt}
                  </p>
                  <div className="mt-5 flex items-center gap-4 border-t border-[var(--color-line)] pt-4 text-[0.75rem] text-[var(--color-ink-faint)]">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={13} /> {formatDate(post.date)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock size={13} /> {post.readMinutes} min
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
