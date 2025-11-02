# 🗣️ Daily Server

Servidor Node.js para gerar tokens JWT e permitir acesso como anfitrião à sala "LanguagesRoom" na plataforma [Daily.co](https://www.daily.co). Este projeto faz parte do sistema **Traveling Learning Languages**, criado por Lucas Lima.

---

## 🚀 Funcionalidades

- Geração de token JWT com permissões de anfitrião (`is_owner: true`)
- Inclusão de nome de usuário e email no token
- Integração com Wix para redirecionamento automático para a sala
- Rota `/host-token` que retorna o token para uso no frontend

---

## 🛠️ Tecnologias utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
- [CORS](https://github.com/expressjs/cors)

---

## 📦 Instalação

```bash
git clone https://github.com/seu-usuario/daily-server.git
cd daily-server
npm install
npm start
