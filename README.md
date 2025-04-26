# 🐱‍💻 FuriaChatBot

**FuriaChatBot** é um projeto desenvolvido com **React**, **TypeScript** e **Vite**, que simula um chatbot interativo com funcionalidades de **personalização de tema e cores**. Ele conta com componentes reutilizáveis, integração com **SCSS** para estilização e suporte a **validações de entrada** do usuário.

---

## 📋 Índice

- [🎥 Demonstração](#-demonstração)
- [✨ Funcionalidades](#-funcionalidades)
- [🛠️ Tecnologias Utilizadas](#️-tecnologias-utilizadas)
- [🚀 Instalação](#-instalação)
- [📜 Scripts Disponíveis](#-scripts-disponíveis)
- [📂 Estrutura do Projeto](#-estrutura-do-projeto)
- [🤝 Contribuição](#-contribuição)
- [🪪 Licença](#-licença)

---

## 🎥 Demonstração

O **FuriaChatBot** permite que os usuários interajam com um chatbot que realiza um **cadastro inicial** e responde a perguntas sobre o time **FURIA**.  
Além disso, é possível **personalizar o tema e as cores** do chatbot em tempo real.

🔗 Acesse o projeto em produção:  
👉 [furia-chat-bot-wheat.vercel.app](https://furia-chat-bot-wheat.vercel.app)

---

## ✨ Funcionalidades

- 📝 **Cadastro do Usuário:** Solicita informações como nome, e-mail e número de telefone.
- 🤖 **Respostas Automáticas:** O bot responde perguntas sobre o time FURIA (jogadores, jogos e curiosidades).
- 🌗 **Personalização de Tema:** Alternância entre temas claro e escuro.
- 🎨 **Customização de Cores:** Escolha de cores para mensagens e elementos do bot.
- ✅ **Validação de Entradas:** E-mail e telefone são validados com mensagens de erro amigáveis.

---

## 🛠️ Tecnologias Utilizadas

- **[React](https://reactjs.org/):** Biblioteca para construção de interfaces de usuário.
- **[TypeScript](https://www.typescriptlang.org/):** Superset do JavaScript com tipagem estática.
- **[Vite](https://vitejs.dev/):** Ferramenta de build rápida para desenvolvimento front-end.
- **[SCSS](https://sass-lang.com/):** Pré-processador CSS para estilização avançada.
- **[Lucide React](https://lucide.dev/):** Ícones SVG modernos e leves.
- **[ESLint](https://eslint.org/):** Ferramenta para manter a qualidade do código.

---

## 🚀 Instalação

### ⚙️ Pré-requisitos

- Node.js e npm instalados em sua máquina.

### 📦 Passos

```bash
# Clone o repositório
git clone https://github.com/Lucassml-boop/FuriaChatBot.git

# Acesse a pasta do projeto
cd FuriaChatBot

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```
Abra o navegador e acesse: http://localhost:5173

## 📜 Scripts Disponíveis

Abaixo estão os comandos principais que você pode utilizar durante o desenvolvimento:

```bash
npm run dev
# Inicia o servidor de desenvolvimento com recarregamento automático.

npm run build
# Compila o projeto para produção na pasta /dist.

npm run preview
# Visualiza localmente o projeto já compilado em modo produção.

npm run lint
# Executa o ESLint para verificar e padronizar o código-fonte.
