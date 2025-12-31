# Portfolio



- **Next.js 14** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Drizzle ORM** - ORM para PostgreSQL
- **Neon PostgreSQL** - Banco de dados
- **Shadcn/ui** - Componentes UI

## 📋 Pré-requisitos

- Node.js 18+
- Conta no [Neon](https://neon.tech) (PostgreSQL)
- npm ou yarn

## 🛠️ Instalação

1. Clone o repositório:
```bash
git clone <repository-url>
cd dreamscape-devs
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.local.example .env.local
```

Edite o arquivo `.env.local` e adicione sua connection string do Neon:
```
DATABASE_URL=postgresql://user:password@host/database?sslmode=require
```

4. Execute as migrations:
```bash
npm run db:push
```

5. Popule o banco com dados de exemplo:
```bash
npm run db:seed
```

6. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

## 📚 Comandos Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria build de produção
- `npm run start` - Inicia o servidor de produção
- `npm run db:generate` - Gera migrations do Drizzle
- `npm run db:push` - Aplica o schema no banco
- `npm run db:studio` - Abre o Drizzle Studio
- `npm run db:seed` - Popula o banco com dados de exemplo

## 📁 Estrutura do Projeto

```
dreamscape-devs/
├── app/                    # Next.js App Router
│   ├── api/               # API Routes
│   ├── home/              # Página Home
│   ├── projeto/[id]/      # Página de detalhe do projeto
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página inicial (Landing)
├── components/            # Componentes React
│   ├── pages/            # Componentes de página
│   └── ui/               # Componentes UI (Shadcn)
├── db/                    # Configuração do banco
│   ├── schema.ts         # Schema do Drizzle
│   ├── seed.ts           # Dados de seed
│   └── index.ts          # Conexão com banco
└── public/               # Arquivos estáticos
```

## 🗄️ Schema do Banco

### Tabelas

- **projects**: Projetos do portfólio
- **certificates**: Certificados
- **personal_info**: Informações pessoais

Veja `db/schema.ts` para detalhes completos.

## 📝 Notas

- O projeto usa Next.js App Router
- Todas as informações pessoais, incluindo dados dos projetos e certificados são carregadas dinamicamente do banco de dados para facilitar as atualizações fulturas.
- Os icons etsão dentro da pasta puclic/icons,  

## 📄 Licença

Sinta-se à vontade para fazer a copia do portfolio e modifica-lo com as suas informações. Considere criar uma conexão comigo pelo  [Linkedin](https://www.linkedin.com/in/sebastianaugusto/) 😊
