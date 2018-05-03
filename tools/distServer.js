const express = require('express')
const compression = require('compression')

const PORT = 1234
const HOST = 'localhost'
const app = express()

app.use(compression())
app.use(express.static('./dist'))

app.listen(PORT,HOST, function () {
  console.info(`Started on http://${HOST}:${PORT}`);
});