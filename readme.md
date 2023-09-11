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
