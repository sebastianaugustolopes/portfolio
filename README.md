# Portfólio - Sebastian Augusto

Este repositório contém o código-fonte do meu portfólio pessoal. Ele foi baseado em um projeto open-source, com modificações feitas para refletir meu perfil como desenvolvedor.

> Este repositório não tem finalidade de divulgação do código. Está sendo usado apenas para versionamento e deploy via Vercel.

---

## Acesse o portfólio

Após o deploy, o site está disponível em:

**URL:** https://portfolio-ssebastianaugusttos-projects.vercel.app/

---

## Tecnologias utilizadas

- ReactJS
- Tailwind CSS
- Supabase (para dados dinâmicos)
- Framer Motion
- AOS (Animate on Scroll)
- Lucide Icons
- Material UI
- SweetAlert2

---

## Requisitos

- Node.js (versão 14.x ou superior)
- npm ou yarn

---

## Instalação

Clone o projeto e instale as dependências:

```bash
git clone https://github.com/sebastianaugustolopes/portfolio.git
cd portfolio
npm install
```

Se necessário:

```bash
npm install --legacy-peer-deps
```

---

## Ambiente de desenvolvimento

Para iniciar o servidor local:

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173` ou similar.

---

## Build para produção

Para gerar os arquivos de produção:

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`.

---

## Configuração (.env)

Se estiver usando Supabase para carregar dados dinâmicos, crie um arquivo `.env` com as variáveis:

```env
VITE_SUPABASE_URL=sua-url-supabase
VITE_SUPABASE_ANON_KEY=sua-chave-anon
```

O arquivo `.env` deve estar listado no `.gitignore`.

---

## Observações

- Este projeto foi adaptado de outro desenvolvedor.
- O código e os dados foram personalizados para uso pessoal.
- Não é recomendado reutilizar diretamente sem ajustes.
