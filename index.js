const express = require('express');

const app = express();

app.get('/', (req,res) =>
  res.send("Docker learning has begun")
);

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`app listening on ${port}`))