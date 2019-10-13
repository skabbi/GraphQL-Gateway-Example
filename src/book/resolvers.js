const fetch = require('node-fetch');

const resolvers = {
  Book: {
    title: (book) => {
      return book.title;
    },
    review: (book) => {
      return fetch(`http://localhost:3003/review/book/${book.id}`)
        .then(res => res.json());
    },
  }
};

module.exports = {
  resolvers,
}