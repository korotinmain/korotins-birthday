const express = require('express');
const app = new express();
const path = require('path');

app.use(express.static(path.join(__dirname + '/www')));

let handler = (req, res) => res.sendFile(path.join(__dirname + '/www/index.html'));

app.get('0', handler);

app.listen(process.env.PORT | 8080, () => {
  console.log(`App listening`);
});
