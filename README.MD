# Projeto: Consumo de API e Performance no ReactJS

## Sobre o Projeto
Este é um projeto desenvolvido para explorar o consumo de APIs e otimização de performance utilizando ReactJS. A aplicação foi configurada para rodar localmente, utilizando o `json-server` como servidor fake de dados. Foi desenvolvido durante o Nível 3 da Rocketseat.

## Pré-requisitos
Antes de executar o projeto, certifique-se de que você possui as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/) (versão LTS recomendada)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

## Instalação
1. Clone o repositório para a sua máquina local:
   ```bash
   git clone <url-do-repositorio>
   ```

2. Acesse o diretório do projeto:
   ```bash
   cd 03---consumo-de-api-e-perfomance-no-reactjs
   ```

3. Instale as dependências do projeto:
   ```bash
   npm install
   ```
   ou, se estiver utilizando Yarn:
   ```bash
   yarn
   ```

## Executando a Aplicação
1. Inicie o servidor JSON:
   ```bash
   npm run dev:server
   ```
   Isso iniciará o `json-server` utilizando o arquivo `server.json`, configurado para rodar na porta `3333`.

2. Em uma nova aba do terminal, inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
   ou, se estiver utilizando Yarn:
   ```bash
   yarn dev
   ```

3. Acesse a aplicação no navegador pelo endereço:
   ```
   http://localhost:5173/
   ```

## Notas Importantes
- A aplicação só funciona localmente, pois depende do `json-server` para fornecer os dados simulados. Certifique-se de que o comando `npm run dev:server` está em execução antes de acessar a aplicação.
- O arquivo `server.json` contém os dados utilizados pela aplicação e pode ser ajustado conforme necessário para testes.

