const express = require('express')
const app = express()

const authors = [{
  id: 1,
  name: 'J.K. Rowling',
}, {
  id: 2,
  name: 'Michael Crichton',
}];

app.get('/author/:id', function (req, res) {
  res.send(authors.find(a => a.id === parseInt(req.params.id)));
})

app.get('/authors', function (req, res) {
  res.send(authors);
})

app.listen(3001, function () {
  console.log('Author server started up on port 3001');
});