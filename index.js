#!/usr/bin/env node

'use strict';

import express from 'express';

const app = express();
app.use(express.json());


app.get('/info', (req, resp) => {

    const result = {
    "componente": "cliente",
    "descrição": "utiliza o servidor com os serviços X, Y e Z",
    "versao": "0.1"}
    resp.send(result);
  
});

const server = app.listen(3001  , '0.0.0.0', () => {
  console.log("Aplicação Iniciada com Sucesso!")
})