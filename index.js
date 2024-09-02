const express = require('express');
const app = express();

const API_KEY = 'a1b2c3d4';

// middleware
const autenticacao = (req, res, next) => {
  const apiKey = req.query.api_key;
  
  if (apiKey && apiKey === API_KEY) {
    return next();
  }
  
  return res.status(401).json({
    mensagem: 'acesso nao autorizado',
    cod_status: 401,
  });
};

app.get('/', autenticacao, (req, res) => {
  res.status(200).json({
    mensagem: 'acesso autorizado',
    cod_status: 200,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
