# App Eventos IFSP

Este projeto utiliza [Next.js](https://nextjs.org/) e foi inicializado com [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). Além disso, utiliza componentes do [shadcn/ui](https://ui.shadcn.dev/).

## Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/seu-usuario/app-eventos-IFSP.git
    cd app-eventos-IFSP
    ```

2. Instale as dependências:
    ```bash
    npm install
    # ou
    yarn install
    # ou
    pnpm install
    ```

## Rodando o Servidor de Desenvolvimento

Inicie o servidor de desenvolvimento com o comando:

```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para visualizar o projeto.

## Configurando e Instalando o ShadCN/UI

Este projeto utiliza o [shadcn/ui](https://ui.shadcn.dev/) para componentes estilizados. Para instalar e configurar novos componentes:

1. Instale o CLI do shadcn:
    ```bash
    npx shadcn add
    ```

2. Adicione componentes ao projeto:
    ```bash
    npx shadcn add button
    npx shadcn add card
    # Substitua "button" e "card" pelos componentes que deseja adicionar
    ```

3. Certifique-se de que as dependências necessárias para os componentes foram instaladas. Consulte a [documentação oficial](https://ui.shadcn.dev/docs/installation) para mais detalhes.

## Estrutura do Projeto

Você pode começar a editar a aplicação modificando o arquivo `app/page.js`. As alterações serão refletidas automaticamente no navegador.

## Recursos Adicionais

- [Documentação do Next.js](https://nextjs.org/docs)
- [Documentação do ShadCN/UI](https://ui.shadcn.com/docs)

## Deploy

Para fazer o deploy, recomendamos o uso da [Plataforma Vercel](https://vercel.com/). Consulte a [documentação de deploy do Next.js](https://nextjs.org/docs/deployment) para mais informações.
