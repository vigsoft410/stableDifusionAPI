const axios = require('axios');
const fs = require('fs');

async function generateImage(prompt) {
  try {
    const url = 'https://95e4a1ea4047f37961.gradio.live/sdapi/v1/txt2img';
    const payload = {
      prompt: prompt,
      width: 512,
      height: 512,
      steps: 20
    };

    console.log('Gerando imagem...')
    const response = await axios.post(url, payload);
    
    const imageBase64 = response.data.images[0];
    return imageBase64;

  } catch (error) {
    console.error('Erro ao gerar imagem:', error);
    throw error;
  }
}

module.exports = { generateImage };
