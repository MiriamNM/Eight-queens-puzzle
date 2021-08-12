const express = require('express');
const queen = require('../components/queen/network');

const routes = function (server) {
    server.use('/queen', queen);
}

module.exports = routes;