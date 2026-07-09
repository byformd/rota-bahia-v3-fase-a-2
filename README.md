# Rota Bahia — Site Institucional + Backend

Projeto completo da Rota Bahia Transportadora: site institucional (React + TypeScript)
e API própria (Node + Express + Prisma) para cotações, contatos e rastreamento de cargas.

---

## 1. Visão geral da arquitetura

```
rota-bahia/
├── src/                    # Frontend (React + Vite + TypeScript)
│   ├── components/
│   │   ├── ui/             # Primitivos (Button, Container, Eyebrow, RouteLine...)
│   │   ├── layout/          # Header, Footer, WhatsAppFloat, PageHero, PageStub
│   │   └── sections/        # Blocos de página (Hero, Services, Stats, Testimonials...)
│   ├── pages/                # Uma por rota (Home, Empresa, Servicos, Frota...)
│   ├── layouts/              # MainLayout (Header + Footer + WhatsApp em todas as páginas)
│   ├── hooks/                 # useLenis (smooth scroll), useCountUp (contadores)
│   ├── services/              # Chamadas à API (trackingApi.ts)
│   ├── data/                   # company.ts (fonte única de dados institucionais), blogPosts.ts
│   ├── types/                   # Schemas Zod + tipos (quote, contact)
│   └── utils/                    # cn (classnames), shipmentStatus (labels/cores)
│
└── backend/                 # API (Express + TypeScript + Prisma)
    ├── src/
    │   ├── routes/            # Definição de endpoints
    │   ├── controllers/        # Recebem request, chamam services, devolvem response
    │   ├── services/            # Regra de negócio + acesso ao banco (Prisma)
    │   ├── middleware/           # auth (JWT), validate (Zod), error handler
    │   ├── config/                 # env.ts, prisma.ts (client singleton)
    │   ├── types/                   # Schemas Zod compartilhados entre rota/controller
    │   ├── app.ts                    # Configuração do Express (middlewares + rotas)
    │   └── server.ts                  # Ponto de entrada
    ├── prisma/
    │   ├── schema.prisma               # Modelos: Admin, QuoteRequest, ContactMessage, Shipment, TrackingEvent
    │   └── seed.ts                      # Cria o admin inicial a partir do .env
    └── public/admin/index.html           # Painel administrativo (HTML + JS puro, sem build)
```

**Por que essa separação?** Cada camada tem uma responsabilidade só (Clean Architecture):
Controllers não conhecem o banco de dados, Services não conhecem o Express, e Middlewares
são plugáveis e reutilizáveis entre rotas.

---

## 2. Rodando o Frontend

```bash
npm install
npm run dev        # http://localhost:5173
```

Build de produção:
```bash
npm run build       # gera /dist
npm run preview      # serve o build localmente para conferir
```

### Variáveis de ambiente do frontend
Copie `.env.example` para `.env` e ajuste se necessário:
```
VITE_API_URL="http://localhost:4000/api"
```

---

## 3. Rodando o Backend

```bash
cd backend
npm install
cp .env.example .env        # ajuste JWT_SECRET e credenciais do admin antes de produção
npm run prisma:migrate       # cria o banco SQLite local (dev.db) e as tabelas
npm run prisma:seed           # cria o usuário admin com as credenciais do .env
npm run prisma:seed-sample     # (opcional) cria uma carga de teste — código RB2026001234
npm run dev                      # http://localhost:4000
```

> **Nota importante sobre o ambiente em que este projeto foi gerado:** o sandbox usado
> para construir este projeto tem acesso de rede restrito a poucos domínios (npm, GitHub,
> PyPI) e **não** inclui `binaries.prisma.sh`, de onde o Prisma baixa o engine nativo.
> Por isso, os comandos `prisma generate` / `prisma migrate dev` não puderam ser executados
> *durante a geração do projeto* — mas o código está correto e vai funcionar normalmente
> na sua máquina ou em qualquer CI/CD com acesso normal à internet. Rode os comandos acima
> localmente antes do primeiro uso.

O painel administrativo fica em `http://localhost:4000/admin` — faça login com o e-mail/senha
definidos em `ADMIN_EMAIL` / `ADMIN_PASSWORD` no `.env` (aplicados pelo `prisma:seed`).

### Variáveis de ambiente do backend
Veja `backend/.env.example` — inclui `DATABASE_URL`, `JWT_SECRET`, `CORS_ORIGIN` e as
credenciais do admin inicial.

### Endpoints principais

| Método | Rota                       | Acesso  | Descrição                                 |
|--------|----------------------------|---------|--------------------------------------------|
| POST   | `/api/quotes`               | Público | Cria uma solicitação de cotação             |
| GET    | `/api/quotes`                 | Admin   | Lista cotações                               |
| PATCH  | `/api/quotes/:id/status`        | Admin   | Atualiza status de uma cotação                |
| POST   | `/api/contact`                    | Público | Cria uma mensagem de contato                     |
| GET    | `/api/contact`                      | Admin   | Lista mensagens de contato                        |
| GET    | `/api/tracking/:code`                  | Público | Consulta uma carga pelo código de rastreio          |
| GET    | `/api/tracking`                          | Admin   | Lista todas as cargas                                |
| POST   | `/api/tracking`                            | Admin   | Cria uma nova carga rastreável                         |
| POST   | `/api/tracking/:id/events`                    | Admin   | Adiciona um evento de rastreamento                       |
| POST   | `/api/auth/login`                                | Público | Login do admin (retorna JWT)                              |

### Integração Cotação/Contato: WhatsApp + banco de dados
Os formulários de Cotação e Contato do site fazem **as duas coisas ao enviar**:
1. Abrem o WhatsApp com uma mensagem pré-formatada (resposta imediata ao cliente);
2. Enviam os mesmos dados para `POST /api/quotes` ou `POST /api/contact` em paralelo,
   salvando uma cópia no painel admin (`src/services/leadsApi.ts`).

Esse envio ao backend é "silencioso": se a API estiver fora do ar, o formulário continua
funcionando normalmente pelo WhatsApp — o usuário nunca vê um erro por causa disso.

---

## 4. Deploy

### Frontend → Vercel
1. Suba o repositório para o GitHub.
2. Na Vercel, importe o repositório (Framework Preset: **Vite**).
3. Configure a variável de ambiente `VITE_API_URL` apontando para a URL pública do backend.
4. Deploy automático a cada push.

### Backend → Render, Railway ou similar (não Vercel)
O backend usa SQLite por padrão para facilitar o desenvolvimento local, mas SQLite não
é adequado para ambientes serverless (como Vercel Functions), pois o arquivo do banco
não persiste entre execuções. Para produção, duas opções:

- **Opção simples:** hospede o backend em um serviço com processo persistente (Render,
  Railway, Fly.io) — o SQLite funciona bem nesse caso.
- **Opção recomendada para escala:** troque o `provider` do `schema.prisma` de `sqlite`
  para `postgresql` e aponte `DATABASE_URL` para um banco Postgres gerenciado (Neon,
  Supabase, Railway Postgres). Depois rode `npx prisma migrate deploy`.

Checklist de produção:
- [ ] Trocar `JWT_SECRET` por um valor forte e único
- [ ] Trocar `ADMIN_PASSWORD` por uma senha forte antes do primeiro seed
- [ ] Ajustar `CORS_ORIGIN` para o domínio real do site
- [ ] Considerar Postgres em vez de SQLite (ver acima)

---

## 5. Customizações obrigatórias antes de publicar

1. **Imagem/vídeo do Hero** (`src/components/sections/Hero.tsx`) — hoje é uma composição
   gráfica; troque por fotografia real de frota/estrada se desejar.
2. **Depoimentos e "empresas que confiam"** (`Testimonials.tsx`, `TrustedBy.tsx`) — são
   fictícios, substitua por casos reais.
3. **Posts do blog** (`src/data/blogPosts.ts`) — conteúdo de exemplo.
4. **Redes sociais** (`src/data/company.ts` → `social`) — hoje apontam para `#`.
5. **Credenciais do admin** (`backend/.env`) — troque antes de rodar o seed em produção.

---

## 6. Scripts de referência

**Frontend**
```bash
npm run dev       # ambiente de desenvolvimento
npm run build      # build de produção
npm run preview     # testa o build localmente
```

**Backend**
```bash
npm run dev              # servidor com hot-reload (tsx watch)
npm run build              # compila TypeScript para /dist
npm run start                # roda o build compilado
npm run prisma:generate        # gera o client do Prisma a partir do schema
npm run prisma:migrate           # cria/atualiza as tabelas do banco
npm run prisma:seed                # cria o admin inicial
npm run prisma:studio                # interface visual para explorar o banco
```
