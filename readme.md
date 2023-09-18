# Documentação Da API
* Escolher um local do computador para criar o projeto 
* Abrir o Git Bash Here nesta pasta

Com o GitBash aberto executar o comando para criar a raiz do projeto (criar pasta --> nomea-lá):
```
mkdir NOME_PROJETO
```
Acessar a pasta :
```
cd NOME_PROJETO
```
Comando para abrir o VScode
```
code .
```
Criar o arquivo gerenciador de pacotes node
```
npm init -y
```
Criar arquivo .gitignore na raiz do projeto, pelo Vscode abrindo um novo arquivo
```
touch .gitignore } criar direto pelo gitbash
```
Criar arquivo .env NO PROPRIO VSCODE --> SERVE PARA RESERVAR VARIAVEIS DO PROJETO
```
touch .env } Criar direto pelo gitbash 
```
npm init -y

## Instalar os pacotes do projeto
Instalar pacotes para o projeto 
```
npm i express nodemon dotenv
```
* Express: Será o servidor da API
* Nodemon: Atualizar os arquivos alterados ser parar o servidor
* Dotenv: Gerenciador de variavéis do ambiente

Criar pasta src
```
mkdir src
```
Criar arquivo DENTRO da pasta src  --> server.js
```
touch src/server.js
```
Adicionar arquivos e pastas no gitignore
```
node_modules
.env
```
Adicionar uma porta no arquivo .Env (OBS: QUALQUER NÚMERO A PARTIR DE 1000 )
```
PORT = 3004
```
Configuranção básica da API com express no server.js
```
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

```
Alterar package.json > excluir teste do script > adicionar comando para rodar o servidor
```
 "start":"nodemon src/server.js"
```
Rodar o servidor no gitbash
```
npm start
```

## Enviar para git hub

Verificar se tem arquivo git 
```
ls -a
```
Verificar se os arquivos ficam vermelhos 
```
git status
```
Se sim, adicionar os pacotes 
```
git add .
```
verificar se os arquivos anteriores ficam verdes
```
git status
```
Salvar os arquivos
```
git commit -m "quinta-Api"
```
* Abrir github
* copiar url do repositorio

trocar branch do arquivo
```
git branch -M main
```
```
git remote  addd origin (colar url do repositorio)
```
```
git push -u origin main
```
ver para qual api foi enviada
```
git config -l
```