<a name="readme-top"></a>
<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
<!-- PROJECT LOGO -->
<div align="center">
    <img src="https://github.com/jvalvarenga/sendtype/blob/dev/public/logo-white.png" alt="Logo" width="180" height="30">
<br />
<br />
</div>

<!-- PROJECT -->
  <h3 align="center">Sendtype o melhor app de anotações</h3>

  <p align="center">
    Anotações e gerenciamento de projetos sem interrupções. Sendtype apresenta colaboração em tempo real, edição de texto avançado e organização intuitiva de notas e tarefas, garantindo uma experiência produtiva para o usuário.
    <br />
    <br />
    <a href="https://sendtype.vercel.app/">Ver Demo</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Conteúdo</summary>
  <ol>
    <li>
      <a href="#about-the-project">Sobre o Projeto</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Começando</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## Sobre o Projeto

<img src="https://github.com/jvalvarenga/sendtype/blob/dev/public/preview-home.png" alt="Sendtype Home" />

Sendtype é uma plataforma versátil que centraliza todas as suas necessidades de organização, escrita e planejamento em um único espaço. Capture e organize seus pensamentos, gerencie projetos complexos ou até mesmo administre uma empresa inteira, tudo de acordo com suas preferências e necessidades específicas. 

Com Notion, você tem a liberdade e a flexibilidade para estruturar suas atividades do jeito que melhor funciona para você, garantindo eficiência e produtividade máximas.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## Tecnologias usadas

A decisão de usar essa stack para este projeto foi baseada em vários fatores importantes que se alinham com as necessidades de um aplicativo web semelhante ao Notion.

* Next.js é uma estrutura React poderosa que permite renderização do lado do servidor (SSR) e geração de site estático (SSG), fornecendo otimizações de desempenho e SEO aprimorado. Seus recursos de roteamento e API integrados simplificam o desenvolvimento, tornando-o uma escolha ideal para criar um aplicativo da web dinâmico e responsivo.

* TypeScript aprimora JavaScript adicionando tipos estáticos, o que melhora a qualidade do código, a manutenibilidade e a produtividade do desenvolvedor. Com TypeScript, podemos detectar erros antecipadamente, entender melhor o código por meio de definições de tipo e aproveitar o suporte robusto do IDE.

* Tailwind CSS é uma estrutura CSS de utilidade que permite o desenvolvimento de IU rápido e consistente. Ele promove estilos reutilizáveis, reduz a necessidade de CSS personalizado e garante um design responsivo. As classes de utilidade do Tailwind facilitam a aplicação de estilos diretamente na marcação, acelerando o processo de desenvolvimento.

* Convex Oferece um serveless backend que escala automaticamente, reduzindo a necessidade de gerenciamento manual de infraestrutura. Fornece sincronização de dados em tempo real, garantindo que os usuários tenham as informações mais atualizadas. Simplifica o desenvolvimento de backend com uma API intuitiva e banco de dados gerenciado, permitindo que os desenvolvedores se concentrem na construção de melhorias.

* Clerk fornece uma solução de autenticação e gerenciamento de usuário simples e segura. Ele se integra perfeitamente com Next.js, lidando com inscrições, logins e sessões de usuário com facilidade.

* Shadcn/UI oferece um conjunto de componentes reutilizáveis, acessíveis e personalizáveis. Ajuda a construir interfaces consistentes e visualmente atraentes rapidamente, garantindo uma ótima experiência do usuário.

* Zod é uma biblioteca de declaração e validação de esquema TypeScript-first. Ajuda a definir e validar estruturas de dados, garantindo a integridade dos dados recebidos. A validação segura de tipo do Zod reduz erros de tempo de execução e melhora a confiabilidade do aplicativo.

* Zustand é uma biblioteca leve de gerenciamento de estado para aplicativos React. Ela oferece uma API simples, boilerplate mínimo e excelente desempenho. Zustand é ideal para gerenciar o estado global de forma previsível e eficiente.

* React Hook Form simplifica o manuseio, a validação e o envio de formulários. Ao utilizar hooks, ela minimiza novas renderizações e melhora o desempenho da aplicação, tornando o gerenciamento de formulários fácil.

* O Socket.io permite comunicação bidirecional em tempo real entre clientes e servidores. É perfeito para criar recursos como colaboração em tempo real e atualizações em tempo real, garantindo uma experiência de usuário dinâmica e interativa.

* Edgestore fornece uma melhor experiência do desenvolvedor facilitando o uploads arquivos. Ele garante que os dados sejam armazenados e acessados ​​de forma eficiente, aprimorando o desempenho e a escalabilidade do aplicativo.
<br />
 <div align="center">
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-Typescript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
    <img src="https://img.shields.io/badge/-Clerk-black?style=for-the-badge&logoColor=white&logo=clerk&color=6C47FF" alt="clerk" />
    <img src="https://img.shields.io/badge/-Shadcn_UI-black?style=for-the-badge&logoColor=white&logo=shadcnui&color=000000" alt="shadcnui" />
    <img src="https://img.shields.io/badge/-Zod-black?style=for-the-badge&logoColor=white&logo=zod&color=3E67B1" alt="zod" />
   <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" />
    <img src="https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101" alt="Socket.io" />
   <img src="https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white" alt="React Hooks" />
  </div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Começando

Siga esses passos para rodar o app localmente com facilidade.

### Pré-requisitos

É essencial que você tenha o node.js instalado no seu sistema para poder instalar a aplicação.
* yarn
  ```sh
  npm install yarn@latest -g
  ```

### Instalando

1. Obtenha as chaves APIs gratuitas em [https://www.convex.dev](https://www.convex.dev) · [https://www.clerk.com](https://www.clerk.com) · [https://www.edgestore.dev](https://www.edgestore.dev) 
2. Clone o repositório
   ```sh
   git clone https://github.com/jvalvarenga/sendtype.git
   ```
3. Navegue até o arquivo
   ```sh
   cd sendtype
   ```
   
5. Instale pacotes com o Yarn
   ```sh
   yarn install
   ```
6. Coloque suas APIs no arquivo `.env.local`
   ```js
   CONVEX_DEPLOYMENT=
   NEXT_PUBLIC_CONVEX_URL=
   CONVEX_ISSUER_URL=
   
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
   CLERK_SECRET_KEY=
   
   EDGE_STORE_ACCESS_KEY=
   EDGE_STORE_SECRET_KEY=
   ```
6. Inicie o servidor do Next.js
   ```sh
   yarn dev
   ```
7. Inicie o servidor do Convex
   ```sh
   npx convex dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Uso

- Registro e login
  - Crie uma nova conta ou faça login com uma existente.
- Criar notas e páginas
  - Use o editor de markdown para criar e formatar notas. Organize-as usando páginas aninhadas.
- Colabore em tempo real
  - Compartilhe suas notas com outras pessoas e colabore em tempo real.
- Faça o upload de arquivos
  - Compartilhe arquivos, adicione emojis e banners para suas notas.
- Pesquisar
  - Use a barra de pesquisa para encontrar notas e páginas rapidamente.  

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Estrutura dos arquivos

<!-- FILE STRUCTURE -->
Sendtype

    ├── frontend/               # Aplicação Next.js
    │   │   ├── app/            # Rota das páginas, layout e APIs
    │   │   ├── components/     # Componentes do projeto
    │   │   ├── convex/         # Configuração dos esquemas do convex
    │   │   ├── hooks/          # Contém ganchos usados ​​em todo o projeto
    │   │   ├── lib/            # Arquivos específicos que são usados ​​globalmente em toda a aplicação
    │   ├── public/             # Ativos públicos como imagens e favicons
    ├── next.config.js          # Configuração do Next.js
    └── README.md               # Documentação do projeto


<!-- ACKNOWLEDGMENTS -->
## Reconhecimentos

* Notion fonte de inspiração [Notion](https://notion.so)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
