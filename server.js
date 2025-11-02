// server.js
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 3000;

// 🔐 Chaves da API Daily.co
const DAILY_API_KEY = process.env.DAILY_API_KEY;
const DAILY_API_SECRET = process.env.DAILY_API_SECRET;
const ROOM_NAME = process.env.ROOM_NAME;


// Middleware
app.use(cors());
app.use(express.json());

// Rota de teste
app.get('/healthz', (req, res) => {
  res.status(200).send('OK');
});

// Rota para gerar token de anfitrião com nome e email
app.get('/host-token', (req, res) => {
  try {
    const token = jwt.sign(
      {
        room: ROOM_NAME,
        is_owner: true,
        user_name: 'Lucas Lima',
        user_email: 'travelinglearninglanguages@gmail.com'
      },
      DAILY_API_SECRET,
      {
        issuer: DAILY_API_KEY,
        expiresIn: '2h'
      }
    );

    console.log('Token gerado:', token);
    res.json({ token });
  } catch (error) {
    console.error('Erro ao gerar token:', error);
    res.status(500).json({ error: 'Erro ao gerar token' });
  }
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
