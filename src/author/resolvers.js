const fetch = require('node-fetch');

const resolvers = {
  Query: {
    author: (_, args) => {
      return fetch(`http://localhost:3001/author/${args.id}`)
        .then(res => res.json());
    },
    authors: () => {
      return fetch('http://localhost:3001/authors')
        .then(res => res.json());
    }
  },
  Author: {
    books: (author) => {
      return fetch(`http://localhost:3002/books/author/${author.id}`)
        .then(res => res.json());
    }
  }
};

module.exports = {
  resolvers,
}