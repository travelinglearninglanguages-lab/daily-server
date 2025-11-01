const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Rota de teste
app.get('/', (req, res) => {
  res.send('Servidor funcionando! 🚀');
});

// Exemplo de rota usando axios
app.post('/api', async (req, res) => {
  const languagesRoom = req.body["languagesroom"];
  try {
    const response = await axios.get('https://api.exemplo.com/dados');
    res.json({ message: 'Requisição feita com sucesso', data: response.data });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar dados externos' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
