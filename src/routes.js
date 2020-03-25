const express = require('express');

const routes = express.Router();


routes.get('/users/', (request, response) => {
    const querys = request.query;

    console.log(querys);

    return response.json( {
        evento: 'Semana OmniStack 11.0',
        aluno: 'Lucas Santana Brito'
    });
});

module.exports = routes;