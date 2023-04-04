<div align='center'>
  <img width="180px" alt="mysql logo" src="https://user-images.githubusercontent.com/100851855/229682043-40aa84db-1a37-4b47-90c1-b2e293034ad5.png" />

  <h1>Trybers And Dragons</h1>
  <p>
    Uma simples aplicação na qual é aplicado os princípios da arquitetura SOLID e os princípios de POO em uma estrutura de jogos de interpretação de papéis, mais conhecidos como jogos RPG (Role Playing Game).
  </p>
</div>

<br /><hr /><br />

## 🖥️ Tecnologias
Este projeto foi desenvolvido usando as seguintes tecnologias:

-  **TypeScript** para tipagem de código;
-  **Docker** para conteinerização de toda a aplicação;
-  **ESLint** para padronização de código;
-  **Git** para versionamento de código;
-  **Visual Studio Code** para edição de código.

## ℹ️ Como usar
Para testar este projeto, precisará das seguintes ferramentas instaladas:

- Git
- Docker
- Docker Compose

<br/>

```bash
# Clone o repositório
git clone git@github.com:isaacost/Trybers-and-Dragons.git

# Entre no diretório
cd trybers-and-dragons

# Inicie o Docker Compose
docker-compose up -d

# Entre no container
docker exec -it trybers_and_dragons bash

# Instale as dependências
npm install

# Inicie o servidor
npm run dev
