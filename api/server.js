const jsonServer = require('json-server');
const path = require('path');
const fs = require('fs');

module.exports = (req, res) => {
  const server = jsonServer.create();
  const router = jsonServer.router(path.join(__dirname, '../public/db.json'));
  const middlewares = jsonServer.defaults();

  server.use(middlewares);
  server.use(router);

  // Start the server
  server(req, res);
};
