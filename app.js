const express = require('express');
const compression = require('compression');

const app = express();
app.use(compression());

app.get('/', (req, res) => {
  res.send('BrosJudge Online Judge Server.');
});

app.listen(3000, (_) => {
  console.log('>> Server started on port 3000');
});
