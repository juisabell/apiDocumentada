// IMPORTAR O PACOTE EXPRESS
const express = require('express');

// INSTANCIAR O EXPRESS NA VARIAVÉL APP
const app = express();

// Recuperar o pacote dotenv
const dotenv = require("dotenv").config();

// Importando variavél do arquivo .env
const PORT = process.env.PORT;

//testando o servidor
app.listen(PORT,() => console.log(`Running at port ${PORT}!`))
