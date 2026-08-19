const http = require('http');
http.createServer((req, res) => res.end('checkout-service OK\n'))
  .listen(process.env.PORT || 8080);