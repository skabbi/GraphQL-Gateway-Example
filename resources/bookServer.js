const express = require('express')
const app = express()

const books = [{
    id: 1,
    authorId: 1,
    title: 'Harry Potter and the Chamber of Secrets',
}, {
    id: 2,
    authorId: 1,
    title: 'Fantastic Beasts and Where to Find Them',
}, {
    id: 3,
    authorId: 1,
    title: 'The Casual Vacancy',
}, {
    id: 4,
    authorId: 2,
    title: 'Jurasic Park',
}, {
    id: 5,
    authorId: 2,
    title: 'The 13th Warrior',
}];

app.get('/books/author/:id', function (req, res) {
    res.send(books.filter(b => b.authorId == parseInt(req.params.id)));
})

app.get('/books', function (req, res) {
    res.send(books);
})

app.listen(3002, function () {
    console.log('Author server started up on port 3002');
});