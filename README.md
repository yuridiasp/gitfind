# Visualizador de Perfis do GitHub

## Visão Geral
Esta aplicação permite aos usuários pesquisar perfis do GitHub pelo nome de usuário e visualizar suas informações de perfil e repositórios. Foi construída usando React e busca dados da API do GitHub.

[Projeto do Figma](https://www.figma.com/design/IXySq1eGSvvY9nSGLbKcom/GitFind?node-id=0-1&t=qrGLoJDTco61VCZ5-0)

## Funcionalidades
- Pesquisar usuários do GitHub pelo nome de usuário.
- Exibir informações do perfil do usuário, incluindo avatar, nome, bio e nome de usuário.
- Listar todos os repositórios públicos do usuário pesquisado com nome, descrição e link para o repositório.

## Componentes
A aplicação consiste em vários componentes reutilizáveis:
1. **Header**: Exibe o cabeçalho da aplicação.
2. **GitLogo**: Exibe o logotipo do GitHub.
3. **Avatar**: Exibe o avatar do usuário.
4. **Button**: Um componente de botão reutilizável.
5. **Input**: Um componente de entrada reutilizável.
6. **ItemList**: Um componente para listar itens, usado para exibir repositórios.

## Instalação

### Pré-requisitos
- Node.js
- npm (Node Package Manager)

### Passos
1. Clone o repositório:
    ```sh
    git clone https://github.com/yuridiasp/gitfind.git
    ```

2. Navegue até o diretório do projeto:
    ```sh
    cd getfind
    ```

3. Instale as dependências:
    ```sh
    npm install
    ```

4. Inicie o servidor de desenvolvimento:
    ```sh
    npm start
    ```

5. Abra o seu navegador e navegue até endereço localhost hospedado.

## Uso
1. Insira um nome de usuário do GitHub no campo de entrada.
2. Clique no botão "Buscar" para buscar e exibir as informações do perfil e repositórios do usuário.

## Explicação do Código

### Gerenciamento de Estado
- `user`: Armazena o nome de usuário inserido pelo usuário.
- `profile`: Armazena as informações do perfil buscadas (avatar, bio, nome, nome de usuário).
- `repositories`: Armazena os repositórios buscados do usuário.

### Funções
- `handleGetUserData`: Busca os dados do perfil do usuário na API do GitHub e atualiza o estado `profile`.
- `handleGetReposData`: Busca os repositórios do usuário na API do GitHub e atualiza o estado `repositories`.

### Estrutura JSX
- A estrutura principal do app é dividida em um cabeçalho, um contêiner principal e uma área de conteúdo.
- O componente `Input` é usado para inserir o nome de usuário do GitHub.
- O componente `Button` aciona as operações de busca.
- Se os dados do perfil estiverem disponíveis, exibe o avatar do usuário, nome, bio e repositórios.

## Dependências
- React
- CSS para estilização

## Licença
Este projeto está licenciado sob a Licença MIT. 

<h2 id="author">👨‍💻 Desenvolvedor</h2>

<p>
    <a href="https://github.com/yuridiasp">
        <img
          align=left
          margin=10
          width=80
          src="https://avatars.githubusercontent.com/u/81938754?v=4"
        />
    </a>
      <p>
        <p>&nbsp&nbspYuri Dias<br>
        &nbsp&nbsp&nbsp
    </p>
</p>

<br>

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/yuridiasp/) [![Discord](https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&logo=discord&logoColor=white)](https://discord.com/channels/@yuridiasp/) [![Facebook](https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white)](https://www.facebook.com/yuri.dias.7739/) [![X](https://img.shields.io/badge/X-000?style=for-the-badge&logo=x)](https://x.com/YuriDias_P) [![Instagram](https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/yuridiasp/) [![E-mail](https://img.shields.io/badge/-Email-000?style=for-the-badge&logo=microsoft-outlook&logoColor=007BFF)](mailto:yuristardias@hotmail.com)