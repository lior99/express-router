const express = require('express');
const app = express();

const routes = require('./routes/index');
require('dotenv').config();

const PORT = process.env.PORT || 8080;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
  next();
});

app.use(express.json());
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`app is listening on ${PORT}`);
});
