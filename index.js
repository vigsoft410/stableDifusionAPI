const express = require('express');
const { generateImage } = require('./generate');
const app = express();
app.use(express.json());

app.post('/generate-image', async (req, res) => {
  const { prompt } = req.body;

  try {
    const imageBase64 = await generateImage(prompt);
    res.json({ image: imageBase64 });
  } catch (error) {
    res.status(500).json({ error: 'Erro ao gerar imagem' });
  }
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Servidor rodando na porta 3000');
});


