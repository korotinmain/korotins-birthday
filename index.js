const express = require('express');
const app = new express();
const path = require('path');
const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname + '/www')));

let handler = (req, res) => res.sendFile(path.join(__dirname + '/www/index.html'));

app.get('0', handler);

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});
