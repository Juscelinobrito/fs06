# API REST
> API REST feita para aprender ExpressJs e Banco de Dados

## Tecnologias
- NodeJS v16
- Express v4.18.2
- MySQL

## Instalação
Para baixar a aplicação eecute o seuinte comando em seu terminal:
`git clone https://github.com/Juscelinobrito/fs06.git`

Após baixar a aplicação, entre no diretório dela, através do terminal e execute:
`npm install` ou `npm i`

## Configuração
E necessário configurar as credenciais do banco de dados.


### Estrutura do banco de dados
Acesse seu cliente de terminal do seu banco de dados.

> Copie e execute os comandos que estão no arquivo `/db.sql`

### Credenciais
Abra o arquivo que se encontra no caminho `/connection/databaseConnection.js`

E edite as seguintes linhas de acordo com suas credenciais do banco:

```js
{
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'fs06_apirest'
}
```

### Executar o projeto
Para executar o projeto, no diretório da aplicação através do terminal execute:

`nodemon index.js` ou `node index.js`

Sua API estará disponível nos endereços:
- http://localhost:8000/clientes
- http://localhost:8000/veiculos