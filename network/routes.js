const solutionQueens = require('../components/queen/network');

const routes = function (server) {
    server.use('/solutionQueens', solutionQueens);
}

module.exports = routes;