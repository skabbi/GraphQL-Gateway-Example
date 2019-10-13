const express = require('express')
const app = express()

const reviews = [{
    bookId: 1,
    message: "Pretty good",
    rating: 4.4
}, {
    bookId: 2,
    message: "Pretty bad",
    rating: 4
}, {
    bookId: 3,
    message: "Average",
    rating: 3.3
}, {
    bookId: 4,
    message: "Best book ever",
    rating: 4
}, {
    bookId: 5,
    message: "I want my money back",
    rating: 3.7
}];

app.get('/review/book/:id', function (req, res) {
    res.send(reviews.find(r => r.bookId === parseInt(req.params.id)));
})

app.get('/reviews', function (req, res) {
    res.send(reviews);
})

app.listen(3003, function () {
    console.log('Author server started up on port 3003');
});